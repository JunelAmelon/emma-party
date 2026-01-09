import { Button } from '@/components/ui/button';
import Image from 'next/image';

const galleryItems = [
  {
    image: '/elegance.jpg',
    label: 'Élégance florale',
  },
  {
    image: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Romantique',
  },
  {
    image: 'https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Fleurs de rêve',
  },
  {
    image: '/moderne.jpg',
    label: 'Moderne',
  },
  {
    image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Romantique',
  },
  {
    image: '/fleur.jpg',
    label: 'Élégance florale',
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-pacifico text-secondary text-2xl mb-4">Notre Galerie</p>
          <h2 className="font-dancing text-5xl lg:text-6xl mb-4">Nos Plus Belles Créations</h2>
          <p className="text-xl text-muted-foreground">
            Découvrez quelques-unes de nos réalisations
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-4 left-4">
                <span className="inline-block bg-white/90 backdrop-blur-sm text-primary px-4 py-2 rounded-full text-sm font-medium">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
            Voir plus de photos
          </Button>
        </div>
      </div>
    </section>
  );
}
