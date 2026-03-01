'use client';

import { Button } from '@/components/ui/button';
import { PawPrint, Heart, Shield, Globe, Sparkles } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-medium text-amber-700">Notre mission</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Pourquoi <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Accverse</span> ?
            </h2>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Nous croyons que chaque animal mérite une présence numérique. 
              Que vous ayez un chien, un chat, un furet ou une tortue, 
              Accverse vous offre un espace dédié pour célébrer leur vie et 
              prendre soin d'eux au quotidien.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Par passion, pour les passionnés</h3>
                  <p className="text-gray-600 text-sm">
                    Créé par des amoureux des animaux, pour tous ceux qui considèrent 
                    leurs compagnons comme des membres de la famille.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Sécurité et confidentialité</h3>
                  <p className="text-gray-600 text-sm">
                    Vos données sont protégées. Les informations sensibles (santé, documents) 
                    sont sécurisées par un code PIN et un chiffrement avancé.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Un projet mondial</h3>
                  <p className="text-gray-600 text-sm">
                    Accverse est conçu pour fonctionner partout dans le monde, 
                    avec un support pour plus de 50 espèces animales.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full px-8">
                <PawPrint className="w-5 h-5 mr-2" />
                Rejoindre l'aventure
              </Button>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            {/* Main Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 relative z-10">
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center mb-4">
                  <span className="text-4xl">🐕</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Max le Golden</h3>
                <p className="text-gray-500 text-sm">3 ans • Golden Retriever</p>
              </div>

              <div className="space-y-4">
                <div className="bg-amber-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Santé</span>
                    <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">À jour</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xs bg-white px-2 py-1 rounded text-gray-600">✓ Vaccins</span>
                    <span className="text-xs bg-white px-2 py-1 rounded text-gray-600">✓ Puce</span>
                    <span className="text-xs bg-white px-2 py-1 rounded text-gray-600">✓ Stérilisé</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="text-2xl font-bold text-amber-500">42</div>
                    <div className="text-xs text-gray-500">Photos</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="text-2xl font-bold text-orange-500">8</div>
                    <div className="text-xs text-gray-500">Documents</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="text-2xl font-bold text-red-500">156</div>
                    <div className="text-xs text-gray-500">J'aime</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200 rounded-full opacity-50 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-200 rounded-full opacity-50 blur-xl" />
            <div className="absolute top-1/2 -right-8 text-4xl opacity-30">🐾</div>
            <div className="absolute bottom-1/4 -left-8 text-3xl opacity-30">🐾</div>
          </div>
        </div>

        {/* Species Banner */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 mb-6">Plus de 50 espèces supportées</p>
          <div className="flex flex-wrap justify-center gap-4 text-4xl">
            <span className="hover:scale-125 transition-transform cursor-pointer" title="Chien">🐕</span>
            <span className="hover:scale-125 transition-transform cursor-pointer" title="Chat">🐈</span>
            <span className="hover:scale-125 transition-transform cursor-pointer" title="Lapin">🐇</span>
            <span className="hover:scale-125 transition-transform cursor-pointer" title="Oiseau">🦜</span>
            <span className="hover:scale-125 transition-transform cursor-pointer" title="Poisson">🐠</span>
            <span className="hover:scale-125 transition-transform cursor-pointer" title="Tortue">🐢</span>
            <span className="hover:scale-125 transition-transform cursor-pointer" title="Serpent">🐍</span>
            <span className="hover:scale-125 transition-transform cursor-pointer" title="Furet">🦝</span>
            <span className="hover:scale-125 transition-transform cursor-pointer" title="Cheval">🐴</span>
            <span className="hover:scale-125 transition-transform cursor-pointer" title="Cochon d'Inde">🐹</span>
            <span className="hover:scale-125 transition-transform cursor-pointer" title="Hérisson">🦔</span>
            <span className="hover:scale-125 transition-transform cursor-pointer" title="Autre">🐾</span>
          </div>
        </div>
      </div>
    </section>
  );
}
