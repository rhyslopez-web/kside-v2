// Auto-generate this from Supabase CLI once the schema is set up:
// npx supabase gen types typescript --project-id <your-project-id> > src/types/database.ts

export type Database = {
  public: {
    Tables: {
      services: {
        Row: {
          id: number;
          category: string;
          title: string;
          description: string | null;
          price: string | null;
          duration: string | null;
          price_varies: boolean;
          image_url: string | null;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['services']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['services']['Insert']>;
      };
    };
  };
};

// Convenience type
export type Service = Database['public']['Tables']['services']['Row'];
