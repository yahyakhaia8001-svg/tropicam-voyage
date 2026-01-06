import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
            <h1 className="font-heading text-4xl font-bold text-tropicam-navy mb-4">Contactez votre Agence de Voyage</h1>
            <p className="text-gray-500">Nos conseillers experts basés à Casablanca répondent à vos demandes de voyage en moins de 30 minutes.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Info Cards */}
            <div className="space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-full text-tropicam-navy">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-tropicam-navy">Téléphone & WhatsApp</h3>
                        <p className="text-gray-500 text-sm mb-2">Réponse rapide garantie</p>
                        <p className="font-bold text-tropicam-orange text-xl">{PHONE_NUMBER}</p>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                    <div className="bg-orange-50 p-3 rounded-full text-tropicam-orange">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-tropicam-navy">Notre Agence Physique</h3>
                        <p className="text-gray-500 text-sm mb-2">Centre Ville Casablanca - Parking disponible</p>
                        <p className="font-medium text-gray-700">123 Boulevard Mohammed V,<br/>20000 Casablanca, Maroc</p>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                    <div className="bg-gray-100 p-3 rounded-full text-gray-600">
                        <Clock size={24} />
                    </div>
                    <div className="w-full">
                        <h3 className="font-bold text-lg text-tropicam-navy mb-3">Horaires d'Ouverture</h3>
                        <div className="grid grid-cols-[auto_auto] gap-x-8 gap-y-2 text-sm text-gray-600 w-full max-w-sm">
                            <span className="font-medium">Lundi - Vendredi :</span>
                            <span className="text-right font-bold text-tropicam-navy">09:00 - 19:00</span>
                            
                            <span className="font-medium">Samedi :</span>
                            <span className="text-right font-bold text-tropicam-navy">09:00 - 13:00</span>
                            
                            <span className="font-medium">Support Tel 7j/7 :</span>
                            <span className="text-right text-tropicam-orange font-bold">09:00 - 20:00</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl overflow-hidden min-h-[400px] relative shadow-inner">
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-500 font-bold flex flex-col items-center">
                        <MapPin size={48} className="mb-2 text-gray-400" />
                        Carte Google Maps Integration
                    </p>
                </div>
                {/* In real app: <iframe src="..." /> */}
            </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;