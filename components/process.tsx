import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '1',
    title: 'Appel découverte',
    description: '15 minutes pour comprendre vos envies, votre budget et votre vision du mariage parfait.',
    color: 'bg-secondary',
  },
  {
    number: '2',
    title: 'Proposition & moodboard',
    description: 'Création d\'un univers visuel personnalisé avec devis détaillé et planification.',
    color: 'bg-muted',
  },
  {
    number: '3',
    title: 'Coordination & exécution',
    description: 'Gestion complète jusqu\'au Jour J avec présence sur place pour un déroulement parfait.',
    color: 'bg-primary/20',
  },
];

export function Process() {
  return (
    <section id="process" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-pacifico text-secondary text-2xl mb-4">Notre Processus</p>
          <h2 className="font-dancing text-5xl lg:text-6xl mb-4">Comment Ça Se Passe</h2>
          <p className="text-xl text-muted-foreground">
            Vous gardez la main, je gère la méthode.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-8 h-full border-2 hover:border-primary/30 transition-colors duration-300">
                <div
                  className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-6 text-2xl font-bold`}
                >
                  {step.number}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-8 w-8 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
