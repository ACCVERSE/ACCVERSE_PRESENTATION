'use client';

import { PawPrint, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <PawPrint className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Accverse</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-sm">
              Le réseau social dédié à vos animaux de compagnie. 
              Créez, partagez et suivez la vie de vos compagnons.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Fait avec <Heart className="w-4 h-4 text-red-500" /> pour les animaux
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-amber-400 transition-colors">Fonctionnalités</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-amber-400 transition-colors">À propos</a></li>
              <li><a href="#roadmap" className="text-gray-400 hover:text-amber-400 transition-colors">Roadmap</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Mentions légales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">CGU</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Accverse. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <span>🇫🇷 Projet français</span>
            <span>•</span>
            <span>🌍 Vision mondiale</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
