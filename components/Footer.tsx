import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          {/* AIDE */}
          <div>
            <h3 className="text-xs tracking-widest uppercase font-light mb-6 text-black">Aide</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li><Link href="#" className="hover:text-black transition font-light">Service Client</Link></li>
              <li><Link href="#" className="hover:text-black transition font-light">Contactez-nous</Link></li>
              <li><Link href="#" className="hover:text-black transition font-light">FAQ</Link></li>
              <li><Link href="#" className="hover:text-black transition font-light">Trouver un magasin</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-xs tracking-widest uppercase font-light mb-6 text-black">Services</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li><Link href="#" className="hover:text-black transition font-light">Livraison & Retours</Link></li>
              <li><Link href="#" className="hover:text-black transition font-light">Personnalisation</Link></li>
              <li><Link href="#" className="hover:text-black transition font-light">Réparations</Link></li>
              <li><Link href="#" className="hover:text-black transition font-light">Garantie</Link></li>
            </ul>
          </div>

          {/* À PROPOS */}
          <div>
            <h3 className="text-xs tracking-widest uppercase font-light mb-6 text-black">À Propos</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li><Link href="#" className="hover:text-black transition font-light">Histoire de la Maison</Link></li>
              <li><Link href="#" className="hover:text-black transition font-light">Arts & Culture</Link></li>
              <li><Link href="#" className="hover:text-black transition font-light">Durabilité</Link></li>
              <li><Link href="#" className="hover:text-black transition font-light">Carrières</Link></li>
            </ul>
          </div>

          {/* SUIVEZ-NOUS */}
          <div>
            <h3 className="text-xs tracking-widest uppercase font-light mb-6 text-black">Suivez-Nous</h3>
            <p className="text-sm text-gray-700 mb-4 font-light">Inscrivez-vous à notre newsletter pour les nouveautés exclusives.</p>
            <input
              type="email"
              placeholder="Votre email"
              className="w-full text-sm border-b border-black bg-transparent py-2 placeholder-gray-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="border-t border-gray-100 pt-12 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
          <div className="flex gap-6">
            <Link href="#" className="hover:text-black transition">Plan du Site</Link>
            <Link href="#" className="hover:text-black transition">Mentions Légales</Link>
            <Link href="#" className="hover:text-black transition">Cookies</Link>
            <Link href="#" className="hover:text-black transition">Politique de Confidentialité</Link>
          </div>
          <p>&copy; 2026 in & Co. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
