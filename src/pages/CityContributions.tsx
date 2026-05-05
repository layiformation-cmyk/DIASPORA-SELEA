import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, ShieldAlert, User, ArrowLeft, X, Check, Minus } from 'lucide-react';
import { useState } from 'react';
import { CONTRIBUTORS_DATA, Contributor } from '../data/contributors';

export default function CityContributions() {
  const { cityId } = useParams();
  const city = CONTRIBUTORS_DATA.find(c => c.id === cityId);
  const [selectedContributor, setSelectedContributor] = useState<Contributor | null>(null);

  if (!city) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <h1 className="text-3xl font-display font-bold">Ville non trouvée</h1>
        <Link to="/" className="text-brand hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <Link to="/" className="text-gray-400 hover:text-white flex items-center gap-2 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
        </Link>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center text-brand">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight uppercase">
            Pôle <span className="text-brand">{city.name}</span>
          </h1>
        </div>
        <p className="text-xl text-gray-400 max-w-2xl">
          Liste officielle des membres cotisants au programme Hafani de Selea Selea.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {city.contributors.map((contributor) => (
          <motion.button
            key={contributor.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedContributor(contributor)}
            className="flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-brand/50 transition-all group text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-brand/10 rounded-full flex items-center justify-center group-hover:bg-brand group-hover:text-black transition-colors">
                <User className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-0.5">N° {contributor.id}</p>
                <h3 className="text-lg font-bold text-white group-hover:text-brand transition-colors line-clamp-1">{contributor.name}</h3>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-xs font-bold text-brand">{contributor.amount}</span>
              <div className={`w-2 h-2 rounded-full mt-2 ${contributor.contributions['2025'] === 'X' || contributor.contributions['2025'] === 'XX' ? 'bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]' : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]'}`} title={contributor.contributions['2025'] === 'X' || contributor.contributions['2025'] === 'XX' ? 'À jour' : 'Pas à jour'} />
            </div>
          </motion.button>
        ))}
      </div>

      {/* Contributor Detail Modal */}
      <AnimatePresence>
        {selectedContributor && (
          <div className="fixed inset-0 z-[100] flex items-start md:items-center justify-center overflow-y-auto px-4 py-8 md:px-6 md:py-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedContributor(null)}
              className="fixed inset-0 bg-navy/95 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="w-full max-w-lg bg-navy-light border border-white/10 rounded-[2rem] p-6 md:p-10 relative z-10 shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-brand" />
              
              <button 
                onClick={() => setSelectedContributor(null)} 
                className="absolute top-6 right-6 p-2 bg-brand text-black rounded-full hover:bg-white transition-all active:scale-90 shadow-lg z-20"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="space-y-6 md:space-y-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 bg-brand/10 rounded-2xl flex items-center justify-center text-brand">
                    <User className="w-10 h-10" />
                  </div>
                  <div className="px-2">
                    <p className="text-[10px] font-bold text-brand uppercase tracking-[0.2em] mb-1">MEMBRE CERTIFIÉ</p>
                    <h2 className="text-2xl md:text-4xl font-display font-black tracking-tight uppercase leading-tight">
                      {selectedContributor.name}
                    </h2>
                    <p className="text-gray-500 mt-2 text-sm">
                      Pôle <span className="text-white font-bold">{city.name}</span> • Matricule #{selectedContributor.id}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
                    <p className="text-[9px] text-gray-500 uppercase font-black tracking-widest mb-1">Cotisation</p>
                    <p className="text-xl md:text-2xl font-display font-bold text-brand">{selectedContributor.amount}</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
                    <p className="text-[9px] text-gray-500 uppercase font-black tracking-widest mb-1">État global</p>
                    {selectedContributor.contributions['2025'] === 'X' || selectedContributor.contributions['2025'] === 'XX' ? (
                      <p className="text-sm md:text-base font-bold text-green-400 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" /> À JOUR
                      </p>
                    ) : (
                      <p className="text-sm md:text-base font-bold text-red-500 flex items-center gap-2">
                        <ShieldAlert className="w-4 h-4 md:w-5 md:h-5" /> PAS À JOUR
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    <div className="w-1 h-1 bg-brand rounded-full" />
                    Récapitulatif (2024 - 2027)
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
                    {Object.entries(selectedContributor.contributions).map(([year, status]) => (
                      <div 
                        key={year}
                        className={`p-3 md:p-4 rounded-xl border flex flex-col items-center gap-1.5 transition-all ${
                          status === 'X' || status === 'XX' 
                            ? 'bg-brand/10 border-brand/30' 
                            : status === 'NE' 
                            ? 'bg-orange-500/10 border-orange-500/30'
                            : 'bg-white/5 border-white/10 opacity-40'
                        }`}
                      >
                        <span className="text-[10px] font-black opacity-60 tracking-wider">{year}</span>
                        {status === 'X' || status === 'XX' ? (
                          <div className="flex flex-col items-center gap-0.5">
                            <Check className="w-4 h-4 text-brand" />
                            <span className="text-[8px] font-black text-brand uppercase">{status === 'XX' ? 'Option F.' : 'Validé'}</span>
                          </div>
                        ) : status === 'NE' ? (
                          <div className="flex flex-col items-center gap-0.5">
                            <span className="text-[10px] font-black text-orange-400">NE</span>
                            <span className="text-[8px] font-black text-orange-400 uppercase">En attente</span>
                          </div>
                        ) : (
                          <Minus className="w-4 h-4 text-gray-700 mt-1" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                   <div className="bg-brand/5 border border-brand/20 p-4 rounded-2xl flex items-center gap-4">
                    <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <p className="text-xs text-white/90 leading-snug">
                        Ce récapitulatif atteste de votre participation active à la <span className="text-brand font-bold text-[10px] uppercase">DIASPORA DE SELEA BAMBAO</span>.
                      </p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedContributor(null)}
                  className="w-full py-4 text-sm font-bold text-gray-400 hover:text-white transition-colors border-t border-white/5 mt-4"
                >
                  Fermer la fenêtre
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
