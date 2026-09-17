import Marquee from '@/components/Marquee'
import SiteHeader from '@/components/SiteHeader'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guide des Tailles',
  description: 'Guide complet des tailles TEMPORED pour trouver votre fit idéal.',
}

export default function SizesPage() {
  return (
    <>
      <Marquee />
      <SiteHeader />

      <main className="px-5 lg:px-8 py-12">
        <h1 className="display text-[13vw] sm:text-[7vw] lg:text-[80px] mb-12">GUIDE DES TAILLES</h1>

        <div className="space-y-12 max-w-3xl">
          {/* Tableau tailles */}
          <section>
            <h2 className="display text-2xl mb-6">HOODIE OVERSIZE</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-line">
                    <th className="text-left py-3 px-3 ui-label">Taille</th>
                    <th className="text-left py-3 px-3 ui-label">Poitrine</th>
                    <th className="text-left py-3 px-3 ui-label">Longueur</th>
                    <th className="text-left py-3 px-3 ui-label">Manches</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: 'XS', chest: '110cm', length: '68cm', sleeves: '82cm' },
                    { size: 'S', chest: '120cm', length: '70cm', sleeves: '84cm' },
                    { size: 'M', chest: '130cm', length: '72cm', sleeves: '86cm' },
                    { size: 'L', chest: '140cm', length: '74cm', sleeves: '88cm' },
                    { size: 'XL', chest: '150cm', length: '76cm', sleeves: '90cm' },
                    { size: 'XXL', chest: '160cm', length: '78cm', sleeves: '92cm' },
                  ].map((row) => (
                    <tr key={row.size} className="border-b border-line">
                      <td className="py-3 px-3 font-bold">{row.size}</td>
                      <td className="py-3 px-3">{row.chest}</td>
                      <td className="py-3 px-3">{row.length}</td>
                      <td className="py-3 px-3">{row.sleeves}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Conseils */}
          <section>
            <h2 className="display text-2xl mb-4">COMMENT MESURER</h2>
            <div className="space-y-4 text-sm">
              <p><strong>Poitrine:</strong> Mesurez autour de la partie la plus large de la poitrine, bras détendus.</p>
              <p><strong>Longueur:</strong> Du haut de l'épaule jusqu'à l'ourlet, dos droit.</p>
              <p><strong>Manches:</strong> Du centre du dos à travers l'épaule jusqu'au poignet.</p>
            </div>
          </section>

          {/* Fit */}
          <section>
            <h2 className="display text-2xl mb-4">NOTRE FIT</h2>
            <p className="text-sm leading-relaxed">
              TEMPORED utilise des coupes amples et décontractées. Nos vêtements sont conçus pour s'adapter à votre silhouette naturelle sans serrer, permettant le port en superposition. Si vous hésitez entre deux tailles, choisissez la plus grande pour un meilleur drape.
            </p>
          </section>

          {/* FAQ tailles */}
          <section>
            <h2 className="display text-2xl mb-4">QUESTIONS FRÉQUENTES</h2>
            <div className="space-y-6">
              <div>
                <p className="font-bold mb-2">Vos pièces rétrécissent-elles au lavage?</p>
                <p className="text-sm text-muted">Non, nos tissus 100% coton bio sont pré-rétrécis. Un léger rétrécissement de 1-2% peut survenir après plusieurs lavages.</p>
              </div>
              <div>
                <p className="font-bold mb-2">Quelle taille dois-je choisir?</p>
                <p className="text-sm text-muted">Consultez notre guide ci-dessus et comparez avec un vêtement qui vous va bien. Si vous êtes entre deux tailles, choisissez la plus grande pour l'effet oversize.</p>
              </div>
              <div>
                <p className="font-bold mb-2">Les tissus sont-ils épais?</p>
                <p className="text-sm text-muted">Oui. Nos hoodies sont en French terry 450-500 GSM — poids lourd pour maximum de durabilité et confort.</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
