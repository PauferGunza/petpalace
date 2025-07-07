export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      accessories: {
        Row: {
          available: boolean | null
          brand: string | null
          category: Database["public"]["Enums"]["accessory_category"]
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          name: string
          price: number
          stock_quantity: number | null
          updated_at: string
        }
        Insert: {
          available?: boolean | null
          brand?: string | null
          category: Database["public"]["Enums"]["accessory_category"]
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name: string
          price: number
          stock_quantity?: number | null
          updated_at?: string
        }
        Update: {
          available?: boolean | null
          brand?: string | null
          category?: Database["public"]["Enums"]["accessory_category"]
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name?: string
          price?: number
          stock_quantity?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      dogs: {
        Row: {
          age_months: number
          available: boolean | null
          breed: Database["public"]["Enums"]["dog_breed"]
          created_at: string
          description: string | null
          gender: Database["public"]["Enums"]["dog_gender"]
          id: string
          image_url: string | null
          name: string
          pedigree: boolean | null
          price: number
          seller_id: string | null
          size: Database["public"]["Enums"]["dog_size"]
          updated_at: string
          vaccinated: boolean | null
        }
        Insert: {
          age_months: number
          available?: boolean | null
          breed: Database["public"]["Enums"]["dog_breed"]
          created_at?: string
          description?: string | null
          gender: Database["public"]["Enums"]["dog_gender"]
          id?: string
          image_url?: string | null
          name: string
          pedigree?: boolean | null
          price: number
          seller_id?: string | null
          size: Database["public"]["Enums"]["dog_size"]
          updated_at?: string
          vaccinated?: boolean | null
        }
        Update: {
          age_months?: number
          available?: boolean | null
          breed?: Database["public"]["Enums"]["dog_breed"]
          created_at?: string
          description?: string | null
          gender?: Database["public"]["Enums"]["dog_gender"]
          id?: string
          image_url?: string | null
          name?: string
          pedigree?: boolean | null
          price?: number
          seller_id?: string | null
          size?: Database["public"]["Enums"]["dog_size"]
          updated_at?: string
          vaccinated?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "dogs_seller_id_fkey"
            columns: ["seller_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      profiles: {
        Row: {
          address: string | null
          city: string | null
          created_at: string
          full_name: string | null
          id: string
          phone: string | null
          province: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          address?: string | null
          city?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          phone?: string | null
          province?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          address?: string | null
          city?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          phone?: string | null
          province?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      vet_appointments: {
        Row: {
          appointment_date: string
          client_id: string
          created_at: string
          id: string
          notes: string | null
          service_type: string
          status: Database["public"]["Enums"]["appointment_status"] | null
          total_price: number | null
          updated_at: string
          veterinarian_id: string
        }
        Insert: {
          appointment_date: string
          client_id: string
          created_at?: string
          id?: string
          notes?: string | null
          service_type: string
          status?: Database["public"]["Enums"]["appointment_status"] | null
          total_price?: number | null
          updated_at?: string
          veterinarian_id: string
        }
        Update: {
          appointment_date?: string
          client_id?: string
          created_at?: string
          id?: string
          notes?: string | null
          service_type?: string
          status?: Database["public"]["Enums"]["appointment_status"] | null
          total_price?: number | null
          updated_at?: string
          veterinarian_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vet_appointments_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "vet_appointments_veterinarian_id_fkey"
            columns: ["veterinarian_id"]
            isOneToOne: false
            referencedRelation: "veterinarians"
            referencedColumns: ["id"]
          },
        ]
      }
      veterinarians: {
        Row: {
          address: string | null
          available_hours: Json | null
          clinic_name: string
          consultation_price: number
          created_at: string
          id: string
          license_number: string
          phone: string | null
          specialties: string[] | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          address?: string | null
          available_hours?: Json | null
          clinic_name: string
          consultation_price: number
          created_at?: string
          id?: string
          license_number: string
          phone?: string | null
          specialties?: string[] | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          address?: string | null
          available_hours?: Json | null
          clinic_name?: string
          consultation_price?: number
          created_at?: string
          id?: string
          license_number?: string
          phone?: string | null
          specialties?: string[] | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "veterinarians_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      accessory_category:
        | "racao"
        | "brinquedos"
        | "coleiras"
        | "camas"
        | "higiene"
        | "outro"
      appointment_status: "agendado" | "confirmado" | "concluido" | "cancelado"
      dog_breed:
        | "pastor_alemao"
        | "golden_retriever"
        | "labrador"
        | "bulldog"
        | "poodle"
        | "rottweiler"
        | "doberman"
        | "husky"
        | "beagle"
        | "boxer"
        | "outro"
      dog_gender: "macho" | "femea"
      dog_size: "pequeno" | "medio" | "grande"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      accessory_category: [
        "racao",
        "brinquedos",
        "coleiras",
        "camas",
        "higiene",
        "outro",
      ],
      appointment_status: ["agendado", "confirmado", "concluido", "cancelado"],
      dog_breed: [
        "pastor_alemao",
        "golden_retriever",
        "labrador",
        "bulldog",
        "poodle",
        "rottweiler",
        "doberman",
        "husky",
        "beagle",
        "boxer",
        "outro",
      ],
      dog_gender: ["macho", "femea"],
      dog_size: ["pequeno", "medio", "grande"],
    },
  },
} as const
