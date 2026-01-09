import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ConditionsGenerales() {
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
            Conditions Générales de Vente
          </h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">1. Objet</h2>
              <p className="text-muted-foreground leading-relaxed">
                Les présentes Conditions Générales de Vente (CGV) régissent les relations 
                contractuelles entre Emma Party et ses clients dans le cadre de la prestation 
                de services d'organisation et de décoration de mariages et événements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">2. Services proposés</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Emma Party propose les services suivants :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Organisation complète de mariages et événements</li>
                <li>Décoration florale et art de table</li>
                <li>Coordination du jour J</li>
                <li>Scénographie et mise en scène</li>
                <li>Sélection et coordination de prestataires</li>
                <li>Location de matériel (photobooths, animations, etc.)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">3. Devis et commande</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tout devis établi par Emma Party est valable 30 jours à compter de sa date d'émission. 
                La commande est considérée comme ferme et définitive après signature du devis et 
                versement de l'acompte.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Le devis détaille les prestations proposées, leur prix unitaire et le montant total TTC.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">4. Prix et modalités de paiement</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Les prix sont indiqués en euros, toutes taxes comprises (TTC). Les modalités de 
                paiement sont les suivantes :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>30% d'acompte à la signature du devis</li>
                <li>40% à 3 mois de l'événement</li>
                <li>30% solde à 1 mois de l'événement</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Les paiements peuvent être effectués par virement bancaire, chèque ou espèces 
                (dans la limite légale).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">5. Annulation et modification</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Annulation par le client :</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Plus de 6 mois avant l'événement : remboursement de 70% des sommes versées</li>
                <li>Entre 3 et 6 mois : remboursement de 50%</li>
                <li>Entre 1 et 3 mois : remboursement de 30%</li>
                <li>Moins d'1 mois : aucun remboursement</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Toute modification substantielle demandée moins de 2 mois avant l'événement 
                pourra faire l'objet d'un supplément tarifaire.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">6. Responsabilité</h2>
              <p className="text-muted-foreground leading-relaxed">
                Emma Party s'engage à mettre en œuvre tous les moyens nécessaires pour assurer 
                la bonne exécution des prestations. Sa responsabilité ne pourra être engagée 
                en cas de force majeure ou de fait imprévisible et insurmontable d'un tiers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">7. Droit à l'image</h2>
              <p className="text-muted-foreground leading-relaxed">
                Le client autorise Emma Party à utiliser les photographies de l'événement à 
                des fins de communication et de promotion, sauf opposition écrite de sa part.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">8. Litiges</h2>
              <p className="text-muted-foreground leading-relaxed">
                En cas de litige, une solution amiable sera recherchée avant toute action 
                judiciaire. À défaut, les tribunaux français seront seuls compétents.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">9. Droit applicable</h2>
              <p className="text-muted-foreground leading-relaxed">
                Les présentes CGV sont soumises au droit français.
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
