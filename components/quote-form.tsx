'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function QuoteForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    date: '',
    city: '',
    guests: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="quote" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-pacifico text-secondary text-2xl mb-4">Contactez-Nous</p>
            <h2 className="font-dancing text-5xl lg:text-6xl mb-4">
              Demandez Votre Devis
            </h2>
            <p className="text-xl text-muted-foreground">
              Réponse sous 24-48h
            </p>
          </div>

          <div className="bg-muted/30 rounded-3xl p-8 lg:p-12 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-base">
                    Prénom
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Votre prénom"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="bg-white h-12"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-base">
                    Nom
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Votre nom"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="bg-white h-12"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-base">
                    Date de l'événement
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="bg-white h-12"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city" className="text-base">
                    Ville / Lieu
                  </Label>
                  <Input
                    id="city"
                    placeholder="Ville de l'événement"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    className="bg-white h-12"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-base">
                    Nombre d'invités
                  </Label>
                  <Select
                    value={formData.guests}
                    onValueChange={(value) =>
                      setFormData({ ...formData, guests: value })
                    }
                  >
                    <SelectTrigger className="bg-white h-12">
                      <SelectValue placeholder="Sélectionner" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-50">Moins de 50</SelectItem>
                      <SelectItem value="50-100">50 - 100</SelectItem>
                      <SelectItem value="100-150">100 - 150</SelectItem>
                      <SelectItem value="150-200">150 - 200</SelectItem>
                      <SelectItem value="200+">Plus de 200</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-base">
                    Budget
                  </Label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) =>
                      setFormData({ ...formData, budget: value })
                    }
                  >
                    <SelectTrigger className="bg-white h-12">
                      <SelectValue placeholder="Sélectionner" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5000">Moins de 5 000€</SelectItem>
                      <SelectItem value="10000">5 000€ - 10 000€</SelectItem>
                      <SelectItem value="20000">10 000€ - 20 000€</SelectItem>
                      <SelectItem value="30000">20 000€ - 30 000€</SelectItem>
                      <SelectItem value="30000+">Plus de 30 000€</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-base">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Parlez-nous de votre projet, vos envies, votre style..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-white min-h-32"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg"
              >
                Envoyer ma demande
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                En soumettant ce formulaire, vous acceptez d'être contacté par Emma Party concernant votre demande.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
