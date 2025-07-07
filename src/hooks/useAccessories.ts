import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export type AccessoryCategory = 'racao' | 'brinquedos' | 'coleiras' | 'camas' | 'higiene' | 'outro';

export interface Accessory {
  id: string;
  name: string;
  category: AccessoryCategory;
  price: number;
  description?: string;
  image_url?: string;
  brand?: string;
  stock_quantity: number;
  available: boolean;
  created_at: string;
}

export const useAccessories = () => {
  return useQuery({
    queryKey: ["accessories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("accessories")
        .select("*")
        .eq("available", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as Accessory[];
    },
  });
};

export const useAccessoriesByCategory = (category?: AccessoryCategory | "all") => {
  return useQuery({
    queryKey: ["accessories", "category", category],
    queryFn: async () => {
      let query = supabase
        .from("accessories")
        .select("*")
        .eq("available", true);

      if (category && category !== "all") {
        query = query.eq("category", category as AccessoryCategory);
      }

      const { data, error } = await query.order("created_at", { ascending: false });

      if (error) throw error;
      return data as Accessory[];
    },
  });
};