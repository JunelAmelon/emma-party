import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PolitiqueConfidentialite() {
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
            Politique de Confidentialité
          </h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Emma Party s'engage à protéger la vie privée de ses clients et visiteurs. 
                Cette politique de confidentialité explique comment nous collectons, utilisons 
                et protégeons vos données personnelles conformément au Règlement Général sur 
                la Protection des Données (RGPD).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">2. Données collectées</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nous collectons les données suivantes :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Données d'identification :</strong> nom, prénom, adresse email, numéro de téléphone</li>
                <li><strong>Données relatives à l'événement :</strong> date, lieu, nombre d'invités, budget</li>
                <li><strong>Données de navigation :</strong> adresse IP, cookies, pages visitées</li>
                <li><strong>Données de communication :</strong> échanges par email, messages via formulaire de contact</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">3. Finalités du traitement</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vos données sont collectées pour les finalités suivantes :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Traitement de vos demandes de devis et réservations</li>
                <li>Gestion de la relation client</li>
                <li>Organisation et coordination de votre événement</li>
                <li>Envoi de communications marketing (avec votre consentement)</li>
                <li>Amélioration de nos services</li>
                <li>Respect de nos obligations légales et comptables</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">4. Base légale du traitement</h2>
              <p className="text-muted-foreground leading-relaxed">
                Le traitement de vos données repose sur :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>L'exécution du contrat de prestation de services</li>
                <li>Votre consentement pour les communications marketing</li>
                <li>Notre intérêt légitime pour l'amélioration de nos services</li>
                <li>Le respect de nos obligations légales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">5. Destinataires des données</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vos données peuvent être transmises à :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>Nos prestataires techniques (hébergement, emailing)</li>
                <li>Les prestataires sélectionnés pour votre événement (avec votre accord)</li>
                <li>Les autorités légales si requis par la loi</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">6. Durée de conservation</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vos données sont conservées :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>Pendant la durée de la relation contractuelle</li>
                <li>3 ans après le dernier contact pour les prospects</li>
                <li>10 ans pour les données comptables (obligation légale)</li>
                <li>Jusqu'à retrait du consentement pour les données marketing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">7. Vos droits</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
                <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
                <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                <li><strong>Droit de retirer votre consentement :</strong> à tout moment</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Pour exercer vos droits, contactez-nous à : contact@emma-party.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">8. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Notre site utilise des cookies pour améliorer votre expérience de navigation. 
                Vous pouvez paramétrer votre navigateur pour refuser les cookies, mais certaines 
                fonctionnalités du site pourraient être limitées.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">9. Sécurité</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées 
                pour protéger vos données contre tout accès non autorisé, perte ou destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">10. Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous nous réservons le droit de modifier cette politique de confidentialité. 
                Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">11. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pour toute question concernant cette politique de confidentialité ou l'exercice 
                de vos droits, contactez-nous :
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong>Email :</strong> contact@emma-party.com<br />
                <strong>Adresse :</strong> [Adresse à compléter]
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Vous avez également le droit d'introduire une réclamation auprès de la CNIL 
                (Commission Nationale de l'Informatique et des Libertés).
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
