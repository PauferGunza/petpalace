import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export interface Veterinarian {
  id: string;
  clinic_name: string;
  license_number: string;
  specialties: string[];
  consultation_price: number;
  phone?: string;
  address?: string;
  created_at: string;
}

export interface Appointment {
  id: string;
  client_id: string;
  veterinarian_id: string;
  appointment_date: string;
  status: string;
  service_type: string;
  notes?: string;
  total_price?: number;
  created_at: string;
}

export const useVeterinarians = () => {
  return useQuery({
    queryKey: ["veterinarians"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("veterinarians")
        .select("*")
        .order("clinic_name");

      if (error) throw error;
      return data as Veterinarian[];
    },
  });
};

export const useCreateAppointment = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (appointment: {
      veterinarian_id: string;
      appointment_date: string;
      service_type: string;
      notes?: string;
    }) => {
      const { data, error } = await supabase
        .from("vet_appointments")
        .insert([
          {
            ...appointment,
            client_id: (await supabase.auth.getUser()).data.user?.id,
          },
        ])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appointments"] });
      toast({
        title: "Consulta agendada com sucesso!",
        description: "Sua consulta veterinária foi agendada.",
      });
    },
    onError: (error) => {
      toast({
        title: "Erro ao agendar consulta",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};

export const useUserAppointments = () => {
  return useQuery({
    queryKey: ["appointments", "user"],
    queryFn: async () => {
      const { data: user } = await supabase.auth.getUser();
      if (!user.user) throw new Error("Usuário não autenticado");

      const { data, error } = await supabase
        .from("vet_appointments")
        .select(`
          *,
          veterinarians (
            clinic_name,
            phone,
            address
          )
        `)
        .eq("client_id", user.user.id)
        .order("appointment_date", { ascending: true });

      if (error) throw error;
      return data;
    },
  });
};