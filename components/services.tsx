import { Card } from '@/components/ui/card';
import { Sparkles, Flower2, CalendarCheck, Camera, Cake, Palette } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    icon: Sparkles,
    title: 'Organisation fluide',
    description: 'Gestion complète de votre événement, de A à Z, sans stress.',
    backDescription: 'De la conception à la réalisation, nous orchestrons chaque détail de votre mariage pour que vous puissiez profiter pleinement de votre journée sans aucune préoccupation logistique.',
    color: 'text-pink-400',
  },
  {
    icon: Flower2,
    title: 'Décoration & art floral',
    description: 'Créations florales uniques et scénographie personnalisée.',
    backDescription: 'Des compositions florales sur mesure et une mise en scène raffinée qui reflètent votre personnalité et transforment vos espaces en véritables œuvres d\'art vivantes.',
    color: 'text-rose-400',
  },
  {
    icon: CalendarCheck,
    title: 'Coordination Jour J',
    description: 'Présence sur place pour orchestrer chaque moment parfaitement.',
    backDescription: 'Notre équipe veille à la parfaite synchronisation de tous les prestataires et au bon déroulement de votre timeline, pour une journée fluide et harmonieuse du début à la fin.',
    color: 'text-amber-700',
  },
];

const offerings = [
  {
    image: '/dress.jpg',
    title: 'Wedding Dress',
    subtitle: 'Conseil & stylisme',
    description: 'Accompagnement personnalisé pour trouver la robe de vos rêves et créer un look qui vous ressemble, du voile aux accessoires.',
  },
  {
    image: 'https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Event Planning',
    subtitle: 'Organisation sur mesure',
    description: 'Conception et coordination complète de votre mariage, de la recherche du lieu parfait à la gestion de tous les prestataires.',
  },
  {
    image: 'https://cdn0.mariages.net/vendor/2211/3_2/640/jpg/soeur-mignonne-ajustant-la-cravate-du-frere-avec-des-gens-en-arriere-plan-pendant-le-mariage_3_402211-176453224746716.webp',
    title: 'Photography',
    subtitle: 'Capturer vos moments',
    description: 'Sélection de photographes talentueux pour immortaliser chaque instant précieux et émotion de votre journée unique.',
  },
  {
    image: '/gateaux.jpg',
    title: 'Cake Design',
    subtitle: 'Créations gourmandes',
    description: 'Pièces montées spectaculaires et desserts raffinés, alliant esthétique et saveurs pour émerveiller vos invités.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <div key={index} className="group perspective-1000">
              <div className="relative preserve-3d transition-transform duration-700 group-hover:rotate-y-180" style={{ transformStyle: 'preserve-3d' }}>
                <Card className="p-8 text-center border-muted backface-hidden" style={{ backfaceVisibility: 'hidden' }}>
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                      <service.icon className={`h-8 w-8 ${service.color}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Card>
                <Card className="absolute inset-0 p-8 text-center border-muted bg-gradient-to-br from-primary/10 to-secondary/10 backface-hidden rotate-y-180 flex items-center justify-center" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                  <p className="text-foreground leading-relaxed">
                    {service.backDescription}
                  </p>
                </Card>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <p className="font-pacifico text-secondary text-2xl mb-4">Nos Services</p>
          <h2 className="font-dancing text-5xl lg:text-6xl mb-4 text-foreground">Ce Que Nous Offrons</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((offering, index) => (
            <div key={index} className="group perspective-1000">
              <div className="relative preserve-3d transition-transform duration-700 group-hover:rotate-y-180" style={{ transformStyle: 'preserve-3d' }}>
                <div className="relative overflow-hidden rounded-lg shadow-lg backface-hidden" style={{ backfaceVisibility: 'hidden' }}>
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={offering.image}
                      alt={offering.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-1">{offering.title}</h3>
                    <p className="text-sm text-white/90">{offering.subtitle}</p>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-lg shadow-lg bg-white p-6 flex flex-col items-center justify-center text-center backface-hidden rotate-y-180" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                  <h3 className="text-xl font-semibold mb-4 text-primary">{offering.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {offering.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
