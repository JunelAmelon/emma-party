import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-[#2d2520] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative h-12 w-12">
                <Image
                  src="/emma-party-white.png"
                  alt="Emma Party"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-dancing text-white text-3xl">
                Emma Party
              </span>
            </div>
            <p className="text-white/80 mb-6">
              Créons ensemble le mariage de vos rêves avec élégance et raffinement.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">
                  Prestations
                </a>
              </li>
              <li>
                <a href="#story" className="text-white/70 hover:text-white transition-colors">
                  Notre Histoire
                </a>
              </li>
              <li>
                <a href="#process" className="text-white/70 hover:text-white transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/70 hover:text-white transition-colors">
                  Galerie
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-3 text-white/70">
              <li>Organisation complète</li>
              <li>Décoration florale</li>
              <li>Coordination Jour J</li>
              <li>Scénographie</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-secondary mt-0.5" />
                <span className="text-white/70">contact@emmaparty.fr</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-secondary mt-0.5" />
                <span className="text-white/70">+33 6 12 34 56 78</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                <span className="text-white/70">Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>© 2024 Emma Party. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
