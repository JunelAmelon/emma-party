'use client';

import { useState } from 'react';
import Image from 'next/image';

const timeline = [
  {
    date: 'Les Origines',
    title: 'Un héritage familial',
    description: 'Elle s\'appelle Emma, et si elle est wedding planner aujourd\'hui, ce n\'est pas un hasard. Elle a grandi dans une famille où l\'événementiel faisait partie du quotidien. Les mariages, les fêtes, les grandes célébrations… elle a toujours vu ses proches transformer des moments simples en souvenirs inoubliables. Très jeune, elle a compris qu\'un détail peut tout changer, qu\'une ambiance peut raconter une histoire et que la magie naît souvent de choses discrètes mais faites avec le cœur.',
    image: 'https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    date: 'La Formation',
    title: 'L\'art de créer',
    description: 'Cet héritage, elle l\'a reçu comme un trésor. Et naturellement elle en a fait son métier. Après une formation dans les arts appliqués, elle a développé son regard artistique, les couleurs, les textures, la mise en scène, l\'art floral… tout ce qui donne vie à un décor l\'a toujours passionnée. Aujourd\'hui encore, elle aime imaginer des univers qui vous ressemblent modernes, élégants, romantiques ou complètement personnalisés.',
    image: '/moderne.jpg',
  },
  {
    date: 'Nos Services',
    title: 'Un accompagnement complet',
    description: 'Emma propose de nombreuses prestations pour accompagner votre mariage : décoration et art de table, créations florales et ambiances, location de photobooths et animations, animations pour enfants, coordination d\'équipes et scénographie, sélection de prestataires comme la location de voitures ou la décoration thématique.',
    image: 'https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    date: 'Aujourd\'hui',
    title: 'Votre histoire commence ici',
    description: 'Ce qui la distingue ? C\'est sa façon d\'être à vos côtés. Elle est à l\'écoute, bienveillante, douce mais organisée et elle prend le temps de comprendre qui vous êtes vraiment. Votre histoire, vos envies, vos rêves… tout cela lui permet de créer un mariage qui vous ressemble, un moment fluide, harmonieux et rempli d\'émotions. Avec elle, votre mariage devient une parenthèse unique pensée avec passion, vécue intensément, et racontée comme une belle histoire.',
    image: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export function Story() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <section id="story" className="py-20 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="font-pacifico text-secondary text-2xl mb-4">Notre Histoire</p>
          <h2 className="font-dancing text-5xl lg:text-6xl mb-4">Comment Tout A Commencé</h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative lg:border-r-2 border-dashed border-muted p-6 sm:p-8 lg:p-16 flex flex-col justify-between bg-gradient-to-br from-white to-muted/10 min-h-[400px] lg:min-h-[600px]">
                <div className="absolute top-0 left-0 right-0 h-16 opacity-20 hidden lg:block">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-4 h-4 rounded-full bg-primary"
                      style={{
                        top: '50%',
                        left: `${i * 10 + 5}%`,
                        transform: 'translateY(-50%)',
                      }}
                    />
                  ))}
                </div>

                <div>
                  <div className="relative inline-block mb-6 lg:mb-8">
                    <div className="absolute -top-4 -left-4 w-16 h-16 lg:w-24 lg:h-24 opacity-20 hidden sm:block">
                      <svg viewBox="0 0 100 100" className="w-full h-full text-secondary">
                        <path d="M20,50 Q30,20 50,50 T80,50" stroke="currentColor" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                    <div className="relative bg-white px-4 py-2 lg:px-6 lg:py-3 rounded-full shadow-lg border-2 border-secondary transform rotate-2">
                      <p className="text-primary font-semibold italic text-sm lg:text-base">{timeline[currentPage].date}</p>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 leading-tight">
                    {timeline[currentPage].title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base lg:text-lg mb-6 lg:mb-8 break-words">
                    {timeline[currentPage].description}
                  </p>

                  <div className="mt-4 lg:mt-8 hidden sm:block">
                    <svg className="w-16 h-10 lg:w-20 lg:h-12 text-secondary/30" viewBox="0 0 100 50">
                      <path
                        d="M10,25 Q20,15 30,25 M40,25 Q50,15 60,25 M70,25 Q80,15 90,25"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="relative p-6 sm:p-8 lg:p-16 bg-gradient-to-bl from-white to-muted/10 min-h-[300px] lg:min-h-[600px]">
                <div className="absolute top-0 left-0 right-0 h-16 opacity-20 hidden lg:block">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-4 h-4 rounded-full bg-primary"
                      style={{
                        top: '50%',
                        left: `${i * 10 + 5}%`,
                        transform: 'translateY(-50%)',
                      }}
                    />
                  ))}
                </div>

                <div className="relative h-full min-h-[250px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={timeline[currentPage].image}
                    alt={timeline[currentPage].title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="relative bottom-0 py-6 lg:absolute lg:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20 justify-center">
              {timeline.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentPage === index
                      ? 'bg-primary w-8'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Précédent
            </button>
            <button
              onClick={() => setCurrentPage(Math.min(timeline.length - 1, currentPage + 1))}
              disabled={currentPage === timeline.length - 1}
              className="px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Suivant →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
