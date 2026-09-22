import type { Metadata } from 'next'
import Marquee from '@/components/Marquee'
import SiteHeader from '@/components/SiteHeader'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Conditions générales d’utilisation',
  description: 'Conditions générales d’utilisation du site TEMPERED.',
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="display text-2xl mb-4">{title}</h2>
      <div className="space-y-4 text-sm leading-relaxed text-muted">{children}</div>
    </div>
  )
}

function List({ items, ordered = false }: { items: string[]; ordered?: boolean }) {
  const Tag = ordered ? 'ol' : 'ul'
  return (
    <Tag className={`space-y-2 pl-5 ${ordered ? 'list-decimal' : 'list-disc'}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </Tag>
  )
}

export default function TermsPage() {
  return (
    <>
      <Marquee />
      <SiteHeader />

      <main className="px-5 lg:px-8 py-12">
        <h1 className="display text-[10vw] sm:text-[6vw] lg:text-[64px] leading-[1.05] mb-4 max-w-4xl">
          CONDITIONS GÉNÉRALES D&apos;UTILISATION
        </h1>
        <p className="ui-label text-dim mb-12">Dernière mise à jour : 22 septembre 2026</p>

        <section className="space-y-12 max-w-3xl">
          <div className="space-y-4 text-sm leading-relaxed text-muted">
            <p>Bienvenue sur le site de TEMPERED.</p>
            <p>
              En naviguant sur notre site, en créant un compte ou en passant une commande, vous
              reconnaissez avoir pris connaissance des présentes Conditions générales et acceptez de
              vous y conformer. Ces dispositions encadrent l&apos;accès au site, son utilisation
              ainsi que les achats effectués auprès de TEMPERED.
            </p>
            <p>
              Si vous n&apos;acceptez pas l&apos;une de ces conditions, nous vous invitons à ne pas
              utiliser notre site ou nos Services.
            </p>
          </div>

          <Section title="1. À PROPOS DE TEMPERED">
            <p>
              Le présent site est exploité par TEMPERED. Lorsque les termes « nous », « notre »,
              « nos » ou « TEMPERED » sont employés dans ces conditions, ils désignent
              l&apos;exploitant du site.
            </p>
            <p>
              TEMPERED met à disposition une boutique en ligne permettant aux utilisateurs de
              consulter des produits, d&apos;effectuer des achats et d&apos;accéder aux différents
              services proposés sur le site.
            </p>
            <p>
              L&apos;utilisation du site implique l&apos;acceptation des présentes Conditions
              générales ainsi que des politiques complémentaires auxquelles elles peuvent faire
              référence.
            </p>
          </Section>

          <Section title="2. UTILISATION DU SITE">
            <p>
              L&apos;accès au site est réservé aux personnes autorisées à utiliser un service de
              commerce en ligne conformément aux lois applicables dans leur lieu de résidence.
            </p>
            <p>
              En utilisant notre site, vous vous engagez à respecter les lois et réglementations en
              vigueur et à ne pas utiliser nos Services à des fins illégales, frauduleuses ou non
              autorisées.
            </p>
            <p>Il est notamment interdit de :</p>
            <List
              items={[
                'perturber ou tenter de perturber le fonctionnement du site ;',
                'transmettre des virus, logiciels malveillants ou codes nuisibles ;',
                'porter atteinte aux droits de TEMPERED ou de tiers ;',
                'utiliser le site à des fins contraires à la loi ;',
                'tenter d’accéder à des données ou fonctionnalités qui ne vous sont pas destinées.',
              ]}
            />
            <p>
              Toute utilisation contraire aux présentes conditions peut entraîner la suspension ou la
              suppression de l&apos;accès aux Services.
            </p>
          </Section>

          <Section title="3. ACCEPTATION ET ÉVOLUTION DES CONDITIONS">
            <p>
              Les présentes conditions s&apos;appliquent à toute personne utilisant le site,
              notamment aux visiteurs, clients, fournisseurs, partenaires et contributeurs.
            </p>
            <p>
              TEMPERED peut faire évoluer ces conditions lorsque cela est nécessaire, notamment en
              cas de modification de nos Services, de notre fonctionnement ou de nos obligations.
            </p>
            <p>La version actualisée des conditions sera publiée directement sur cette page.</p>
            <p>
              Il appartient à chaque utilisateur de consulter régulièrement cette page afin de
              prendre connaissance des éventuelles modifications. La poursuite de l&apos;utilisation
              du site après leur publication constitue une acceptation des nouvelles dispositions.
            </p>
          </Section>

          <Section title="4. CONTENU ET INFORMATIONS DU SITE">
            <p>
              Nous nous efforçons de maintenir des informations aussi précises et actuelles que
              possible. Toutefois, certaines informations présentes sur le site peuvent
              exceptionnellement contenir des erreurs, des omissions ou ne plus être entièrement à
              jour.
            </p>
            <p>
              Les informations disponibles sont fournies à titre général et ne doivent pas être
              considérées comme une garantie absolue concernant un produit, un prix, une
              disponibilité ou un service.
            </p>
            <p>
              Certaines données peuvent également présenter un caractère historique. TEMPERED peut
              modifier, corriger ou supprimer du contenu à tout moment, sans obligation de mettre
              systématiquement à jour toutes les informations publiées.
            </p>
          </Section>

          <Section title="5. PRODUITS ET DISPONIBILITÉ">
            <p>
              Les produits présentés sur notre boutique peuvent être disponibles en quantité limitée
              et certains peuvent être proposés exclusivement en ligne.
            </p>
            <p>
              Nous faisons notre possible pour représenter fidèlement les produits, leurs
              caractéristiques et leurs couleurs. Néanmoins, le rendu d&apos;une couleur peut varier
              selon le matériel ou l&apos;écran utilisé.
            </p>
            <p>TEMPERED se réserve le droit de :</p>
            <List
              items={[
                'modifier les caractéristiques ou descriptions d’un produit ;',
                'ajuster les prix ;',
                'limiter les quantités disponibles ;',
                'restreindre certaines ventes selon les personnes ou zones géographiques ;',
                'interrompre la commercialisation d’un produit.',
              ]}
            />
            <p>La disponibilité d&apos;un produit peut donc évoluer sans préavis.</p>
            <p>
              Les retours et échanges éventuels sont soumis aux conditions prévues dans notre{' '}
              <a href="/retours" className="text-foreground underline hover:opacity-60">
                Politique de remboursement
              </a>
              .
            </p>
          </Section>

          <Section title="6. TARIFS ET MODIFICATIONS DU SERVICE">
            <p>
              Les prix affichés sur notre boutique peuvent être modifiés à tout moment et sans
              notification préalable.
            </p>
            <p>
              TEMPERED peut également décider de modifier, suspendre temporairement ou interrompre
              tout ou partie de ses Services.
            </p>
            <p>
              Ces changements peuvent notamment concerner les fonctionnalités du site, les produits
              proposés ou les conditions commerciales.
            </p>
            <p>
              Dans la mesure permise par la législation applicable, TEMPERED ne pourra être tenue
              responsable des conséquences résultant d&apos;une modification, suspension ou
              interruption du Service.
            </p>
          </Section>

          <Section title="7. COMMANDES ET PAIEMENTS">
            <p>
              TEMPERED se réserve le droit de refuser, limiter ou annuler une commande dans certaines
              circonstances.
            </p>
            <p>Des restrictions peuvent notamment être appliquées concernant :</p>
            <List
              items={[
                'le nombre de produits commandés ;',
                'une personne ou un foyer ;',
                'un compte client ;',
                'une adresse de facturation ;',
                'une adresse de livraison ;',
                'un moyen de paiement.',
              ]}
            />
            <p>
              Nous pouvons également limiter ou refuser une commande lorsqu&apos;elle semble avoir
              été effectuée dans le but de revendre ou de distribuer nos produits.
            </p>
            <p>
              En cas de modification ou d&apos;annulation d&apos;une commande, nous utiliserons,
              lorsque cela est possible, les coordonnées fournies lors de la commande afin de vous en
              informer.
            </p>
          </Section>

          <Section title="8. EXACTITUDE DES INFORMATIONS FOURNIES PAR LE CLIENT">
            <p>
              Lors d&apos;une commande, vous vous engagez à communiquer des informations exactes,
              complètes et à jour.
            </p>
            <p>Cela concerne notamment :</p>
            <List
              items={[
                'votre identité ;',
                'votre adresse e-mail ;',
                'votre adresse de livraison ;',
                'vos informations de facturation ;',
                'les informations nécessaires au traitement du paiement.',
              ]}
            />
            <p>
              Vous êtes responsable de la mise à jour de ces informations lorsque cela est nécessaire
              au bon traitement de votre commande.
            </p>
            <p>
              Toute erreur dans les informations communiquées peut notamment entraîner des
              difficultés de livraison ou de traitement de la commande.
            </p>
            <p>
              Pour connaître les règles applicables aux retours et remboursements, veuillez consulter
              notre{' '}
              <a href="/retours" className="text-foreground underline hover:opacity-60">
                Politique de remboursement
              </a>
              .
            </p>
          </Section>

          <Section title="9. SERVICES ET OUTILS FOURNIS PAR DES TIERS">
            <p>
              Certaines fonctionnalités disponibles sur notre site peuvent être proposées ou opérées
              par des prestataires externes.
            </p>
            <p>
              TEMPERED ne contrôle pas nécessairement ces outils et ne peut garantir leur
              fonctionnement permanent ou leur disponibilité.
            </p>
            <p>
              Lorsque vous utilisez un service fourni par un tiers, vous reconnaissez que celui-ci
              peut être soumis à ses propres conditions d&apos;utilisation et politiques.
            </p>
            <p>
              TEMPERED ne saurait être tenue responsable de l&apos;utilisation de ces services tiers
              dans la mesure permise par la loi.
            </p>
            <p>
              De nouveaux outils ou services peuvent également être ajoutés au site. Leur utilisation
              sera alors soumise aux présentes conditions, sauf indication contraire.
            </p>
          </Section>

          <Section title="10. SITES ET SERVICES EXTERNES">
            <p>
              Notre site peut contenir des liens permettant d&apos;accéder à des plateformes
              exploitées par des tiers.
            </p>
            <p>
              Ces sites externes ne sont pas nécessairement affiliés à TEMPERED et nous ne contrôlons
              pas leur contenu, leurs politiques ou leurs pratiques.
            </p>
            <p>
              Nous ne pouvons donc pas garantir l&apos;exactitude des informations qui y sont
              publiées ni être responsables des produits ou services proposés par ces plateformes.
            </p>
            <p>
              Avant d&apos;effectuer une transaction auprès d&apos;un tiers, nous vous recommandons
              de prendre connaissance de ses propres conditions et politiques.
            </p>
            <p>
              Toute question ou réclamation concernant un service ou produit fourni par un tiers doit
              être adressée directement à celui-ci.
            </p>
          </Section>

          <Section title="11. CONTRIBUTIONS DES UTILISATEURS">
            <p>
              Si vous choisissez de transmettre à TEMPERED des idées, suggestions, propositions,
              créations, commentaires ou autres contenus, vous acceptez que ceux-ci puissent être
              utilisés, reproduits, modifiés, publiés, distribués ou traduits sur différents
              supports.
            </p>
            <p>TEMPERED n&apos;est pas tenue :</p>
            <List
              items={[
                'de garantir la confidentialité de ces contributions ;',
                'de vous verser une rémunération en contrepartie ;',
                'de répondre à chacune des contributions reçues.',
              ]}
            />
            <p>
              Nous pouvons également retirer ou modifier tout contenu que nous considérons comme
              illégal, offensant, menaçant, diffamatoire, obscène ou contraire aux présentes
              conditions ou aux droits d&apos;un tiers.
            </p>
            <p>
              Vous restez responsable des contenus que vous transmettez et devez notamment vous
              assurer qu&apos;ils ne portent pas atteinte aux droits d&apos;autrui.
            </p>
            <p>
              Il est interdit de transmettre du contenu contenant des virus, logiciels malveillants
              ou autres éléments susceptibles de compromettre le fonctionnement du site.
            </p>
          </Section>

          <Section title="12. PROTECTION DES DONNÉES">
            <p>
              Les informations personnelles communiquées lors de l&apos;utilisation de notre boutique
              sont traitées conformément à notre Politique de confidentialité.
            </p>
            <p>
              En utilisant notre site, vous reconnaissez avoir pris connaissance des politiques
              applicables au traitement de vos informations personnelles.
            </p>
          </Section>

          <Section title="13. ERREURS, MODIFICATIONS ET CORRECTIONS">
            <p>Des erreurs peuvent exceptionnellement apparaître sur le site, notamment concernant :</p>
            <List
              items={[
                'les prix ;',
                'les descriptions ;',
                'les promotions ;',
                'les offres ;',
                'les frais de livraison ;',
                'les délais ;',
                'la disponibilité des produits.',
              ]}
            />
            <p>
              TEMPERED peut corriger ces informations à tout moment et, lorsque cela est nécessaire,
              modifier ou annuler une commande concernée par une erreur.
            </p>
            <p>
              Nous ne sommes pas obligés de mettre continuellement à jour l&apos;ensemble des
              informations publiées sur le site, sauf lorsque la législation applicable l&apos;exige.
            </p>
          </Section>
        </section>
      </main>

      <Footer />
    </>
  )
}
