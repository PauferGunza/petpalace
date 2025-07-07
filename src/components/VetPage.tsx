import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Stethoscope, Calendar, MapPin, Phone, Clock } from "lucide-react";
import { useVeterinarians, useCreateAppointment } from "@/hooks/useVeterinarians";
import { useToast } from "@/hooks/use-toast";

const VetPage = () => {
  const { data: veterinarians, isLoading } = useVeterinarians();
  const createAppointment = useCreateAppointment();
  const { toast } = useToast();
  
  const [selectedVet, setSelectedVet] = useState<string>("");
  const [appointmentDate, setAppointmentDate] = useState<string>("");
  const [serviceType, setServiceType] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  const handleScheduleAppointment = async () => {
    if (!selectedVet || !appointmentDate || !serviceType) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    try {
      await createAppointment.mutateAsync({
        veterinarian_id: selectedVet,
        appointment_date: appointmentDate,
        service_type: serviceType,
        notes: notes || undefined,
      });
      
      // Reset form
      setSelectedVet("");
      setAppointmentDate("");
      setServiceType("");
      setNotes("");
    } catch (error) {
      console.error("Error scheduling appointment:", error);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-AO', {
      style: 'currency',
      currency: 'AOA',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getMinDateTime = () => {
    const now = new Date();
    now.setHours(now.getHours() + 1); // At least 1 hour from now
    return now.toISOString().slice(0, 16);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-muted-foreground">Carregando clínicas veterinárias...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Cuidados Veterinários no Namibe
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Agende uma consulta com os melhores veterinários da província do Namibe. 
            Cuidados especializados para o seu melhor amigo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Veterinarians List */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Clínicas Disponíveis
            </h2>
            
            <div className="space-y-6">
              {veterinarians?.map((vet) => (
                <Card key={vet.id} className="glass-strong hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Stethoscope className="w-5 h-5 text-primary" />
                      {vet.clinic_name}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {vet.address}
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="w-4 h-4" />
                        {vet.phone}
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {vet.specialties?.map((specialty, index) => (
                          <Badge key={index} variant="secondary" className="bg-primary/20 text-primary">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-lg font-semibold text-primary">
                          Consulta: {formatPrice(vet.consultation_price)}
                        </span>
                        <Button 
                          variant="outline"
                          onClick={() => setSelectedVet(vet.id)}
                          className={selectedVet === vet.id ? "bg-primary text-primary-foreground" : ""}
                        >
                          {selectedVet === vet.id ? "Selecionado" : "Selecionar"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Appointment Form */}
          <div>
            <Card className="glass-strong">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Agendar Consulta
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="vet-select">Veterinário *</Label>
                  <Select value={selectedVet} onValueChange={setSelectedVet}>
                    <SelectTrigger className="glass">
                      <SelectValue placeholder="Selecione um veterinário" />
                    </SelectTrigger>
                    <SelectContent className="glass-strong">
                      {veterinarians?.map((vet) => (
                        <SelectItem key={vet.id} value={vet.id}>
                          {vet.clinic_name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="service-type">Tipo de Serviço *</Label>
                  <Select value={serviceType} onValueChange={setServiceType}>
                    <SelectTrigger className="glass">
                      <SelectValue placeholder="Selecione o tipo de serviço" />
                    </SelectTrigger>
                    <SelectContent className="glass-strong">
                      <SelectItem value="consulta_geral">Consulta Geral</SelectItem>
                      <SelectItem value="vacinacao">Vacinação</SelectItem>
                      <SelectItem value="cirurgia">Cirurgia</SelectItem>
                      <SelectItem value="emergencia">Emergência</SelectItem>
                      <SelectItem value="check_up">Check-up</SelectItem>
                      <SelectItem value="castracao">Castração</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="appointment-date">Data e Hora *</Label>
                  <Input
                    id="appointment-date"
                    type="datetime-local"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    min={getMinDateTime()}
                    className="glass"
                  />
                </div>

                <div>
                  <Label htmlFor="notes">Observações</Label>
                  <Textarea
                    id="notes"
                    placeholder="Descreva os sintomas ou motivo da consulta..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="glass resize-none"
                    rows={4}
                  />
                </div>

                <Button 
                  onClick={handleScheduleAppointment}
                  disabled={createAppointment.isPending}
                  className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold py-3 hover-lift"
                >
                  {createAppointment.isPending ? (
                    <>
                      <div className="animate-spin w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full mr-2" />
                      Agendando...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4 mr-2" />
                      Agendar Consulta
                    </>
                  )}
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 inline mr-1" />
                  Horários de funcionamento: Segunda-Sexta 8:00-17:00, Sábado 8:00-14:00
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VetPage;