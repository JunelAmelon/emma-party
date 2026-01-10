'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const allImages = [
  '/heroimg.jpg',
  'https://images.pexels.com/photos/1779490/pexels-photo-1779490.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=1920',
];

const avatarImages = [
  'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=150',
  'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=150',
  'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=150',
];

export function Hero() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const handleImageClick = (clickedIndex: number) => {
    setCurrentBgIndex(clickedIndex);
  };

  const getThumbnailImages = () => {
    return allImages.filter((_, index) => index !== currentBgIndex);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
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
    <section className="relative h-screen min-h-[700px] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={allImages[currentBgIndex]}
          alt="Décoration de mariage"
          fill
          className="object-cover transition-opacity duration-700"
          priority
          key={currentBgIndex}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-dancing text-7xl lg:text-8xl xl:text-9xl text-white mb-4 leading-tight">
            Emma Party
          </h1>
          <p className="font-pacifico text-4xl lg:text-5xl text-white/95 mb-8">
            L'art de célébrer
          </p>
          <p className="text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl">
            Organisation de mariages, anniversaires et événements d'exception — Créatrice d'émotions et d'instants magiques
          </p>

          <div className="flex items-center space-x-4 mb-12">
            <div className="flex -space-x-3">
              {avatarImages.map((img, i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-2 border-white overflow-hidden"
                >
                  <Image
                    src={img}
                    alt={`Couple ${i + 1}`}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
            <div className="text-white/90">
              <p className="text-sm font-medium">3 couples</p>
              <p className="text-xs">consultent ce prestataire en ce moment</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('#quote')}
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6"
            >
              Demander un devis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#gallery')}
              className="bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white/30 text-lg px-8 py-6"
            >
              Voir la galerie
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 hidden lg:block">
        <div className="grid grid-cols-2 gap-4">
          {allImages.map((img, index) => {
            if (index === currentBgIndex) return null;
            return (
              <button
                key={index}
                onClick={() => handleImageClick(index)}
                className="w-32 h-32 rounded-lg overflow-hidden border-4 border-white shadow-2xl transition-all duration-300 hover:scale-105 hover:border-primary"
              >
                <Image
                  src={img}
                  alt={`Image ${index + 1}`}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 lg:hidden flex gap-3 z-20">
        {allImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleImageClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentBgIndex === index
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
