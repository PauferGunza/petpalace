import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export type DogBreed = 'pastor_alemao' | 'golden_retriever' | 'labrador' | 'bulldog' | 'poodle' | 'rottweiler' | 'doberman' | 'husky' | 'beagle' | 'boxer' | 'outro';
export type DogSize = 'pequeno' | 'medio' | 'grande';
export type DogGender = 'macho' | 'femea';

export interface Dog {
  id: string;
  name: string;
  breed: DogBreed;
  size: DogSize;
  gender: DogGender;
  age_months: number;
  price: number;
  description?: string;
  image_url?: string;
  vaccinated: boolean;
  pedigree: boolean;
  available: boolean;
  created_at: string;
}

export const useDogs = () => {
  return useQuery({
    queryKey: ["dogs"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("dogs")
        .select("*")
        .eq("available", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as Dog[];
    },
  });
};

export const useDogsByBreed = (breed?: DogBreed | "all") => {
  return useQuery({
    queryKey: ["dogs", "breed", breed],
    queryFn: async () => {
      let query = supabase
        .from("dogs")
        .select("*")
        .eq("available", true);

      if (breed && breed !== "all") {
        query = query.eq("breed", breed as DogBreed);
      }

      const { data, error } = await query.order("created_at", { ascending: false });

      if (error) throw error;
      return data as Dog[];
    },
  });
};

export const useCreateDog = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (dog: Omit<Dog, "id" | "created_at">) => {
      const { data, error } = await supabase
        .from("dogs")
        .insert(dog)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dogs"] });
      toast({
        title: "Cão adicionado com sucesso!",
        description: "O cão foi adicionado ao catálogo.",
      });
    },
    onError: (error) => {
      toast({
        title: "Erro ao adicionar cão",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};