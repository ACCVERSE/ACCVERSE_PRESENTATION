'use client';

import { Card, CardContent } from '@/components/ui/card';
import { 
  PawPrint, 
  Heart, 
  Camera, 
  FileText, 
  Calendar, 
  Shield, 
  Globe, 
  Users,
  Bell,
  Smartphone
} from 'lucide-react';

const features = [
  {
    icon: PawPrint,
    title: 'Profils Animaux',
    description: 'Créez des profils complets pour tous vos animaux de compagnie, de votre chien à votre poisson rouge.',
    color: 'from-amber-400 to-orange-500',
    bgColor: 'bg-amber-50',
  },
  {
    icon: Heart,
    title: 'Suivi Santé',
    description: 'Suivez les vaccinations, traitements, visites vétérinaires et gardez un historique médical complet.',
    color: 'from-red-400 to-pink-500',
    bgColor: 'bg-red-50',
  },
  {
    icon: Camera,
    title: 'Galerie Photos',
    description: 'Partagez les moments précieux de vos compagnons avec une galerie photos et vidéos illimitée.',
    color: 'from-purple-400 to-violet-500',
    bgColor: 'bg-purple-50',
  },
  {
    icon: FileText,
    title: 'Documents',
    description: 'Stockez et organisez tous les documents importants : certificats, ordonnances, pedigrees...',
    color: 'from-blue-400 to-cyan-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Calendar,
    title: 'Rappels',
    description: 'Ne manquez plus jamais un rendez-vous vétérinaire, une vaccination ou un traitement.',
    color: 'from-green-400 to-emerald-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: Shield,
    title: 'Sécurité',
    description: 'Vos données sensibles sont protégées par un code PIN et un chiffrement de pointe.',
    color: 'from-slate-400 to-gray-600',
    bgColor: 'bg-slate-50',
  },
  {
    icon: Globe,
    title: 'Communauté Mondiale',
    description: 'Connectez-vous avec des propriétaires du monde entier et partagez vos expériences.',
    color: 'from-teal-400 to-cyan-500',
    bgColor: 'bg-teal-50',
  },
  {
    icon: Users,
    title: 'Famille & Amis',
    description: 'Invitez les membres de votre famille à suivre et contribuer au profil de vos animaux.',
    color: 'from-orange-400 to-red-500',
    bgColor: 'bg-orange-50',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full mb-4">
            <PawPrint className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-amber-700">Fonctionnalités</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Tout pour vos compagnons,{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              au même endroit
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Accverse réunit tout ce dont vous avez besoin pour prendre soin de vos animaux 
            et partager leur vie avec votre communauté.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${feature.bgColor}`}
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-10 text-6xl">🐾</div>
            <div className="absolute bottom-4 right-10 text-4xl">🐾</div>
            <div className="absolute top-1/2 right-1/4 text-5xl">🐾</div>
          </div>
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Smartphone className="w-8 h-8" />
              <Bell className="w-8 h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Application mobile bientôt disponible
            </h3>
            <p className="text-white/80 max-w-xl mx-auto mb-6">
              iOS et Android - Soyez notifié des rappels importants et accédez à vos profils partout.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg flex items-center gap-2">
                <span className="text-2xl">📱</span>
                <span className="font-medium">iOS</span>
              </div>
              <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg flex items-center gap-2">
                <span className="text-2xl">🤖</span>
                <span className="font-medium">Android</span>
              </div>
              <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg flex items-center gap-2">
                <span className="text-2xl">💻</span>
                <span className="font-medium">Web</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
