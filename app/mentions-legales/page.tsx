import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="font-dancing text-5xl lg:text-6xl mb-8 text-foreground">
            Mentions Légales
          </h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">1. Informations légales</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Raison sociale :</strong> Emma Party<br />
                <strong>Forme juridique :</strong> Entreprise individuelle<br />
                <strong>Siège social :</strong> [Adresse à compléter]<br />
                <strong>SIRET :</strong> [Numéro SIRET à compléter]<br />
                <strong>Email :</strong> contact@emma-party.com<br />
                <strong>Téléphone :</strong> [Numéro à compléter]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">2. Directeur de publication</h2>
              <p className="text-muted-foreground leading-relaxed">
                Le directeur de la publication du site est Emma [Nom de famille à compléter], 
                en qualité de gérante de Emma Party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">3. Hébergement</h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Hébergeur :</strong> Netlify, Inc.<br />
                <strong>Adresse :</strong> 44 Montgomery Street, Suite 300, San Francisco, CA 94104, USA<br />
                <strong>Site web :</strong> <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.netlify.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">4. Propriété intellectuelle</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, etc.) 
                est la propriété exclusive de Emma Party, sauf mention contraire.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Toute reproduction, représentation, modification, publication, adaptation de tout 
                ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est 
                interdite, sauf autorisation écrite préalable de Emma Party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">5. Responsabilité</h2>
              <p className="text-muted-foreground leading-relaxed">
                Emma Party s'efforce d'assurer l'exactitude et la mise à jour des informations 
                diffusées sur ce site. Toutefois, Emma Party ne peut garantir l'exactitude, 
                la précision ou l'exhaustivité des informations mises à disposition sur ce site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">6. Liens hypertextes</h2>
              <p className="text-muted-foreground leading-relaxed">
                Le site peut contenir des liens hypertextes vers d'autres sites. Emma Party 
                n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à 
                leur contenu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">7. Droit applicable</h2>
              <p className="text-muted-foreground leading-relaxed">
                Les présentes mentions légales sont régies par le droit français. Tout litige 
                relatif à l'utilisation du site sera soumis à la compétence exclusive des 
                tribunaux français.
              </p>
            </section>

            <section className="mt-12 pt-8 border-t">
              <p className="text-sm text-muted-foreground">
                Dernière mise à jour : Janvier 2026
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
