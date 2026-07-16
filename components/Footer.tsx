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
              <li><Link href="/contact" className="hover:text-black transition font-light">Service Client</Link></li>
              <li><Link href="/contact" className="hover:text-black transition font-light">Contactez-nous</Link></li>
              <li><Link href="/faq" className="hover:text-black transition font-light">FAQ</Link></li>
              <li><Link href="/livraison" className="hover:text-black transition font-light">Livraison & Délais</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-xs tracking-widest uppercase font-light mb-6 text-black">Services</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li><Link href="/livraison" className="hover:text-black transition font-light">Livraison Gratuite</Link></li>
              <li><Link href="/retours" className="hover:text-black transition font-light">Retours Gratuits</Link></li>
              <li><Link href="/faq" className="hover:text-black transition font-light">Garantie 2 Ans</Link></li>
              <li><Link href="/contact" className="hover:text-black transition font-light">Nous Contacter</Link></li>
            </ul>
          </div>

          {/* À PROPOS */}
          <div>
            <h3 className="text-xs tracking-widest uppercase font-light mb-6 text-black">À Propos</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li><Link href="/a-propos" className="hover:text-black transition font-light">Notre Histoire</Link></li>
              <li><Link href="/a-propos" className="hover:text-black transition font-light">Nos Valeurs</Link></li>
              <li><Link href="/a-propos" className="hover:text-black transition font-light">Durabilité</Link></li>
              <li><Link href="/contact" className="hover:text-black transition font-light">Carrières</Link></li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-xs tracking-widest uppercase font-light mb-6 text-black">Newsletter</h3>
            <p className="text-sm text-gray-700 mb-4 font-light">Recevez nos nouveautés exclusives et offres spéciales.</p>
            <input
              type="email"
              placeholder="Votre email"
              className="w-full text-sm border-b border-black bg-transparent py-2 placeholder-gray-400 focus:outline-none font-light"
            />
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-100 py-8 mb-8">
          <p className="text-xs uppercase tracking-widest font-light text-gray-600 mb-4 text-center">Paiements Sécurisés</p>
          <div className="flex flex-wrap justify-center gap-6 text-center">
            {['💳 Visa', '💳 Mastercard', '🍎 Apple Pay', '🔵 Google Pay', '💰 PayPal', '📱 Klarna'].map((method) => (
              <div key={method} className="text-xs text-gray-600 font-light">
                {method}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-100 pt-12 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
          <div className="flex gap-6 flex-wrap justify-center md:justify-start">
            <Link href="#" className="hover:text-black transition font-light">Plan du Site</Link>
            <Link href="#" className="hover:text-black transition font-light">Mentions Légales</Link>
            <Link href="#" className="hover:text-black transition font-light">Cookies</Link>
            <Link href="#" className="hover:text-black transition font-light">Politique de Confidentialité</Link>
          </div>
          <p className="font-light">&copy; 2026 in & Co. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
