'use client';

import { Button } from '@/components/ui/button';
import { Heart, Award, Users, Sparkles } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { icon: Heart, value: '20+', label: 'Mariages organisés' },
  { icon: Award, value: '5+', label: 'Années d\'expérience' },
  { icon: Users, value: '20+', label: 'Couples heureux' },
  { icon: Sparkles, value: '100%', label: 'Satisfaction' },
];

export function About() {
  const scrollToQuote = () => {
    const element = document.querySelector('#quote');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 opacity-10">
        <Image src="/flower.svg" alt="" fill className="object-contain" />
      </div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 opacity-10">
        <Image src="/flower.svg" alt="" fill className="object-contain" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative h-[600px]">
              <Image
                src="https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Wedding planner at work"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div>
            <p className="font-pacifico text-secondary text-2xl mb-4">À Propos de Nous</p>
            <h2 className="font-dancing text-5xl lg:text-6xl mb-6 text-foreground">
              Créateurs de moments inoubliables
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Depuis plus de 5 ans, Emma Party transforme les rêves de mariage en réalité. Notre passion pour l'excellence et notre attention aux moindres détails font de chaque célébration un moment unique et magique.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Spécialisés dans l'organisation complète de mariages de luxe, nous offrons une expertise incomparable en décoration florale, scénographie et coordination d'événements. Chaque mariage est une œuvre d'art personnalisée qui reflète votre histoire d'amour.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center flex-shrink-0">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              onClick={scrollToQuote}
              className="bg-primary hover:bg-primary/90 text-white px-8"
            >
              Parlons de votre projet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
