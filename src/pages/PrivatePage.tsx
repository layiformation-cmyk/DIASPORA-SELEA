import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivatePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-center">
      <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand transition-colors mb-12">
        <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
      </Link>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-20 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 blur-[120px] -mr-48 -mt-48" />
        
        <div className="relative z-10 space-y-12">
          <div className="w-24 h-24 bg-brand/20 rounded-3xl flex items-center justify-center text-brand mx-auto">
            <ShieldCheck className="w-12 h-12" />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-display font-extrabold">Espace Membre Privé</h1>
            <p className="text-xl text-gray-400">Pôle Vannes – Assurance Vie Aphan</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-3xl p-8 flex flex-col items-center gap-4">
              <CheckCircle className="w-10 h-10 text-emerald-500" />
              <div>
                <p className="text-sm font-bold text-emerald-500 uppercase tracking-widest">Votre Statut</p>
                <p className="text-3xl font-display font-bold text-white mt-1">À JOUR</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center gap-4 grayscale opacity-50">
              <AlertCircle className="w-10 h-10 text-gray-400" />
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Dernier Paiement</p>
                <p className="text-3xl font-display font-bold text-white mt-1">01/05/2026</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-gray-500 text-sm leading-relaxed max-w-lg mx-auto">
              Vos garanties sont actives. En cas de sinistre, contactez votre conseiller pôle Bretagne via la ligne prioritaire 24h/24. 
            </p>
          </div>
          
          <button className="btn-primary px-12">Consulter mon dossier complet</button>
        </div>
      </motion.div>
    </div>
  );
}
