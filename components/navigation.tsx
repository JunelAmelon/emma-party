'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'À Propos', href: '#about' },
    { name: 'Prestations', href: '#services' },
    { name: 'Notre Histoire', href: '#story' },
    { name: 'Process', href: '#process' },
    { name: 'Galerie', href: '#gallery' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
      style={{ 
        zIndex: isMobileMenuOpen ? 10000 : 50,
        backgroundColor: isScrolled || isMobileMenuOpen ? '#ffffff' : 'transparent'
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="relative h-12 w-12">
              <Image
                src={isScrolled || isMobileMenuOpen ? '/emma-party-black_.png' : '/emma-party-white.png'}
                alt="Emma Party"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className={`font-dancing text-3xl transition-colors ${
                isScrolled || isMobileMenuOpen ? 'text-foreground' : 'text-white'
              }`}>
              Emma Party
            </span>
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`font-medium transition-colors hover:text-primary ${
                  isScrolled || isMobileMenuOpen ? 'text-foreground' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(e as any, '#quote');
              }}
              className={`${
                isScrolled || isMobileMenuOpen
                  ? 'bg-primary text-white hover:bg-primary/90'
                  : 'bg-white/20 text-white backdrop-blur-sm hover:bg-white/30'
              }`}
            >
              Demander un devis
            </Button>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled || isMobileMenuOpen ? 'text-primary' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled || isMobileMenuOpen ? 'text-primary' : 'text-white'}`} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <>
            <div
              className="lg:hidden fixed inset-0 bg-black/60 animate-in fade-in duration-500"
              style={{ zIndex: 9998 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div 
              className="lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl animate-in slide-in-from-right duration-500" 
              style={{ zIndex: 9999 }}
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10">
                      <Image
                        src="/emma-party-black_.png"
                        alt="Emma Party"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="font-dancing text-2xl text-[#2d2520]">
                      Emma Party
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="h-6 w-6 text-[#2d2520]" />
                  </button>
                </div>

                <nav className="space-y-2 flex-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="block px-4 py-3 font-medium rounded-lg transition-colors hover:bg-gray-100 text-[#2d2520]"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>

                <div className="mt-auto pt-6 border-t border-gray-200">
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(e as any, '#quote');
                    }}
                    className="w-full bg-primary text-white hover:bg-primary/90"
                  >
                    Demander un devis
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
