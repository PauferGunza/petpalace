-- Create enum types
CREATE TYPE public.dog_breed AS ENUM (
  'pastor_alemao', 'golden_retriever', 'labrador', 'bulldog', 'poodle', 
  'rottweiler', 'doberman', 'husky', 'beagle', 'boxer', 'outro'
);

CREATE TYPE public.dog_size AS ENUM ('pequeno', 'medio', 'grande');
CREATE TYPE public.dog_gender AS ENUM ('macho', 'femea');
CREATE TYPE public.appointment_status AS ENUM ('agendado', 'confirmado', 'concluido', 'cancelado');
CREATE TYPE public.accessory_category AS ENUM ('racao', 'brinquedos', 'coleiras', 'camas', 'higiene', 'outro');

-- Create profiles table for users
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE,
  full_name TEXT,
  phone TEXT,
  address TEXT,
  city TEXT DEFAULT 'Moçâmedes',
  province TEXT DEFAULT 'Namibe',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create dogs table
CREATE TABLE public.dogs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  breed dog_breed NOT NULL,
  size dog_size NOT NULL,
  gender dog_gender NOT NULL,
  age_months INTEGER NOT NULL CHECK (age_months > 0),
  price DECIMAL(10,2) NOT NULL CHECK (price > 0),
  description TEXT,
  image_url TEXT,
  vaccinated BOOLEAN DEFAULT true,
  pedigree BOOLEAN DEFAULT false,
  available BOOLEAN DEFAULT true,
  seller_id UUID REFERENCES public.profiles(user_id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create accessories table
CREATE TABLE public.accessories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category accessory_category NOT NULL,
  price DECIMAL(10,2) NOT NULL CHECK (price > 0),
  description TEXT,
  image_url TEXT,
  brand TEXT,
  stock_quantity INTEGER DEFAULT 0 CHECK (stock_quantity >= 0),
  available BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create veterinarians table
CREATE TABLE public.veterinarians (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(user_id),
  clinic_name TEXT NOT NULL,
  license_number TEXT UNIQUE NOT NULL,
  specialties TEXT[],
  available_hours JSONB, -- Store working hours as JSON
  consultation_price DECIMAL(10,2) NOT NULL CHECK (consultation_price > 0),
  phone TEXT,
  address TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create vet appointments table
CREATE TABLE public.vet_appointments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id UUID REFERENCES public.profiles(user_id) NOT NULL,
  veterinarian_id UUID REFERENCES public.veterinarians(id) NOT NULL,
  appointment_date TIMESTAMP WITH TIME ZONE NOT NULL,
  status appointment_status DEFAULT 'agendado',
  service_type TEXT NOT NULL,
  notes TEXT,
  total_price DECIMAL(10,2),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  CHECK (appointment_date > now())
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.dogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.accessories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.veterinarians ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vet_appointments ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles
CREATE POLICY "Users can view their own profile" 
ON public.profiles FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" 
ON public.profiles FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile" 
ON public.profiles FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create policies for dogs
CREATE POLICY "Dogs are viewable by everyone" 
ON public.dogs FOR SELECT USING (available = true);

CREATE POLICY "Users can manage their own dogs" 
ON public.dogs FOR ALL USING (auth.uid() = seller_id);

-- Create policies for accessories
CREATE POLICY "Accessories are viewable by everyone" 
ON public.accessories FOR SELECT USING (available = true);

-- Create policies for veterinarians
CREATE POLICY "Veterinarians are viewable by everyone" 
ON public.veterinarians FOR SELECT USING (true);

CREATE POLICY "Veterinarians can manage their own profile" 
ON public.veterinarians FOR ALL USING (auth.uid() = user_id);

-- Create policies for appointments
CREATE POLICY "Users can view their own appointments" 
ON public.vet_appointments FOR SELECT 
USING (auth.uid() = client_id);

CREATE POLICY "Veterinarians can view their appointments" 
ON public.vet_appointments FOR SELECT 
USING (auth.uid() IN (SELECT user_id FROM public.veterinarians WHERE id = veterinarian_id));

CREATE POLICY "Users can create appointments" 
ON public.vet_appointments FOR INSERT 
WITH CHECK (auth.uid() = client_id);

CREATE POLICY "Users can update their appointments" 
ON public.vet_appointments FOR UPDATE 
USING (auth.uid() = client_id OR auth.uid() IN (SELECT user_id FROM public.veterinarians WHERE id = veterinarian_id));

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_dogs_updated_at
  BEFORE UPDATE ON public.dogs
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_accessories_updated_at
  BEFORE UPDATE ON public.accessories
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_veterinarians_updated_at
  BEFORE UPDATE ON public.veterinarians
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_vet_appointments_updated_at
  BEFORE UPDATE ON public.vet_appointments
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample data for testing
INSERT INTO public.dogs (name, breed, size, gender, age_months, price, description, vaccinated, pedigree, available) VALUES
('Max', 'pastor_alemao', 'grande', 'macho', 8, 200000.00, 'Pastor Alemão de alta qualidade, treinado e socializado', true, true, true),
('Luna', 'golden_retriever', 'grande', 'femea', 6, 180000.00, 'Golden Retriever carinhosa, perfeita para famílias', true, true, true),
('Rex', 'rottweiler', 'grande', 'macho', 12, 250000.00, 'Rottweiler forte e protetor, ideal para guarda', true, false, true),
('Bella', 'labrador', 'medio', 'femea', 4, 150000.00, 'Labrador dócil e brincalhona, ótima com crianças', true, true, true);

INSERT INTO public.accessories (name, category, price, description, brand, stock_quantity, available) VALUES
('Ração Premium Royal Canin 15kg', 'racao', 25000.00, 'Ração premium para cães adultos de grande porte', 'Royal Canin', 50, true),
('Coleira de Couro Premium', 'coleiras', 8000.00, 'Coleira de couro genuíno, resistente e elegante', 'PetStyle', 30, true),
('Bola de Borracha Interativa', 'brinquedos', 3500.00, 'Bola resistente para brincadeiras e exercícios', 'DogFun', 100, true),
('Cama Ortopédica Grande', 'camas', 45000.00, 'Cama ortopédica para cães grandes, máximo conforto', 'ComfortPet', 15, true),
('Shampoo Hipoalergênico', 'higiene', 12000.00, 'Shampoo especial para peles sensíveis', 'PetClean', 25, true);

INSERT INTO public.veterinarians (clinic_name, license_number, specialties, consultation_price, phone, address) VALUES
('Clínica Veterinária Namibe Pet Care', 'VET001NAM', ARRAY['Clínica Geral', 'Cirurgia', 'Vacinação'], 8000.00, '+244 923 456 789', 'Rua Principal, Centro, Moçâmedes'),
('Hospital Veterinário Angola Pets', 'VET002NAM', ARRAY['Emergências', 'Ortopedia', 'Cardiologia'], 12000.00, '+244 923 456 790', 'Avenida da Independência, Moçâmedes');