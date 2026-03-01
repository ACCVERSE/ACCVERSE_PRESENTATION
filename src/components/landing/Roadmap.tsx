'use client';

import { PawPrint, CheckCircle, Circle, Clock, Rocket } from 'lucide-react';

const roadmapItems = [
  {
    phase: 'Phase 1',
    title: 'Authentification',
    description: 'Création de compte, connexion sécurisée, récupération de mot de passe.',
    status: 'completed',
    icon: CheckCircle,
  },
  {
    phase: 'Phase 2',
    title: 'Profils Animaux',
    description: 'Création et gestion des profils animaux avec photos et informations de base.',
    status: 'in-progress',
    icon: Clock,
  },
  {
    phase: 'Phase 3',
    title: 'Suivi Santé & Documents',
    description: 'Carnet de santé, vaccinations, traitements, et stockage de documents.',
    status: 'upcoming',
    icon: Circle,
  },
  {
    phase: 'Phase 4',
    title: 'Réseau Social',
    description: 'Abonnements, likes, commentaires, fil d\'actualités et messagerie.',
    status: 'upcoming',
    icon: Circle,
  },
  {
    phase: 'Phase 5',
    title: 'Application Mobile',
    description: 'Applications iOS et Android natives avec notifications push.',
    status: 'upcoming',
    icon: Rocket,
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full mb-4">
            <Rocket className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-amber-700">Feuille de route</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Notre <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Roadmap</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Accverse évolue régulièrement. Voici les fonctionnalités prévues 
            et celles déjà disponibles.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-orange-400 to-gray-200" />

            <div className="space-y-8">
              {roadmapItems.map((item, index) => (
                <div key={index} className="relative pl-20">
                  {/* Status indicator */}
                  <div 
                    className={`absolute left-5 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      item.status === 'completed' 
                        ? 'bg-green-500 border-green-500' 
                        : item.status === 'in-progress' 
                          ? 'bg-amber-500 border-amber-500' 
                          : 'bg-white border-gray-300'
                    }`}
                  >
                    {item.status === 'completed' && <CheckCircle className="w-4 h-4 text-white" />}
                    {item.status === 'in-progress' && <Clock className="w-4 h-4 text-white animate-spin" style={{ animationDuration: '3s' }} />}
                    {item.status === 'upcoming' && <Circle className="w-3 h-3 text-gray-400" />}
                  </div>

                  {/* Content Card */}
                  <div className={`bg-white rounded-2xl p-6 shadow-lg border transition-all hover:shadow-xl ${
                    item.status === 'in-progress' 
                      ? 'border-amber-200 bg-gradient-to-r from-amber-50/50 to-transparent' 
                      : 'border-gray-100'
                  }`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs font-bold uppercase tracking-wider ${
                        item.status === 'completed' 
                          ? 'text-green-600' 
                          : item.status === 'in-progress' 
                            ? 'text-amber-600' 
                            : 'text-gray-400'
                      }`}>
                        {item.phase}
                      </span>
                      {item.status === 'in-progress' && (
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                          En cours
                        </span>
                      )}
                      {item.status === 'completed' && (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                          Terminé
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Vous voulez participer au développement d'Accverse ?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full font-medium hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg shadow-amber-200/50"
            >
              <PawPrint className="w-4 h-4" />
              Devenir beta-testeur
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-full font-medium border border-gray-200 hover:border-amber-200 hover:bg-amber-50 transition-all"
            >
              Partenariat / Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
