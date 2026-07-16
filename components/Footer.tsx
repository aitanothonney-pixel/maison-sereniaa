import Link from "next/link";
import { Heart, Mail, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold">in</span>
              </div>
              <span className="text-xl font-bold">in & Co</span>
            </div>
            <p className="text-gray-400 text-sm">Vêtements de qualité pour tous les styles.</p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold mb-4">Boutique</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/shop" className="hover:text-white transition">Tous les produits</Link></li>
              <li><Link href="#" className="hover:text-white transition">Homme</Link></li>
              <li><Link href="#" className="hover:text-white transition">Femme</Link></li>
              <li><Link href="#" className="hover:text-white transition">Enfants</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-white transition">À propos</Link></li>
              <li><Link href="#" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="#" className="hover:text-white transition">Livraison</Link></li>
              <li><Link href="#" className="hover:text-white transition">Retours</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Suivez-nous</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Share2 size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Heart size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; 2026 in & Co. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
