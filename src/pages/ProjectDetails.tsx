import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ShieldCheck, User, Search, TrendingUp, List } from 'lucide-react';
import { Link } from 'react-router-dom';

const PROJECT_STATS = [
  { no: 1, cell: 'PARIS', pop: '99/131', amount: '9 900,00 €', transferred: '9 000,00 €', pending: '900,00 €', obs: '74 %' },
  { no: 2, cell: 'MARSEILLE', pop: '92/99', amount: '9 200,00 €', transferred: '6 700,00 €', pending: '2 500,00 €', obs: '92 %' },
  { no: 3, cell: 'LYON', pop: '67/85', amount: '6 700,00 €', transferred: '6 700,00 €', pending: '0,00 €', obs: '80 %' },
  { no: 4, cell: 'VANNES', pop: '53/86', amount: '5 700,00 €', transferred: '5 400,00 €', pending: '300,00 €', obs: '61 %' },
  { no: 5, cell: 'SAINT-NAZAIRE', pop: '34/41', amount: '3 400,00 €', transferred: '3 300,00 €', pending: '100,00 €', obs: '77 %' },
  { no: 6, cell: 'LA RÉUNION', pop: '18/22', amount: '3 600,00 €', transferred: '3 600,00 €', pending: '0,00 €', obs: '78 %' },
  { no: 7, cell: 'MAYOTTE', pop: '20', amount: '2 000,00 €', transferred: '1 500,00 €', pending: '500,00 €', obs: '' },
];

const TOTALS = { pop: '383/464', amount: '40 500,00 €', transferred: '36 200,00 €', pending: '4 300,00 €', obs: '81 %' };

const CITIES = [
  { id: 'paris', name: 'Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop' },
  { id: 'lyon', name: 'Lyon', image: 'https://images.unsplash.com/photo-1528660493888-ab6f4761e036?q=80&w=2070&auto=format&fit=crop' },
  { id: 'marseille', name: 'Marseille', image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop' },
  { id: 'vannes', name: 'Vannes', image: 'https://images.unsplash.com/photo-1572455044327-7348c1be7267?q=80&w=2070&auto=format&fit=crop' },
  { id: 'saint-nazaire', name: 'Saint-Nazaire', image: 'https://image.noelshack.com/fichiers/2026/19/6/1778278080-snag-0067944-30.jpg' },
  { id: 'reunion', name: 'La Réunion', image: 'https://image.noelshack.com/fichiers/2026/19/3/1778020749-photos-la-reunion-cascade-aigrettes.jpg' },
  { id: 'mayotte', name: 'Mayotte', image: 'https://image.noelshack.com/fichiers/2026/19/6/1778278104-mayotte-mamoudzou-1800x1000-d259bf1d.jpg' }
];

export default function ProjectDetails() {
  const [activeTab, setActiveTab] = useState<'progression' | 'list'>('progression');

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 pt-24 md:pt-32">
      <div className="mb-12">
        <Link to="/" className="text-gray-400 hover:text-white flex items-center gap-2 mb-6 transition-colors group w-fit">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Retour à l'accueil
        </Link>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center text-brand shrink-0">
            <TrendingUp className="w-7 h-7" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight uppercase leading-tight">
            Détails du <span className="text-brand">Projet</span>
          </h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex p-1 bg-white/5 border border-white/10 rounded-2xl mb-12 max-w-md">
        <button
          onClick={() => setActiveTab('progression')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${
            activeTab === 'progression' ? 'bg-brand text-black shadow-lg' : 'text-gray-400 hover:text-white'
          }`}
        >
          <TrendingUp className="w-4 h-4" /> Progression
        </button>
        <button
          onClick={() => setActiveTab('list')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${
            activeTab === 'list' ? 'bg-brand text-black shadow-lg' : 'text-gray-400 hover:text-white'
          }`}
        >
          <List className="w-4 h-4" /> Liste des cotisations
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'progression' ? (
          <motion.div
            key="progression"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="overflow-x-auto"
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-4 md:p-8 overflow-hidden backdrop-blur-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-4 text-xs font-black text-white/30 uppercase tracking-[0.2em]">N°</th>
                    <th className="p-4 text-xs font-black text-white/30 uppercase tracking-[0.2em]">Cellules</th>
                    <th className="p-4 text-xs font-black text-white/30 uppercase tracking-[0.2em] text-center">Population estimée</th>
                    <th className="p-4 text-xs font-black text-white/30 uppercase tracking-[0.2em] text-right">Montant</th>
                    <th className="p-4 text-xs font-black text-white/30 uppercase tracking-[0.2em] text-right">Virement effectué</th>
                    <th className="p-4 text-xs font-black text-white/30 uppercase tracking-[0.2em] text-right">Virement en attente</th>
                    <th className="p-4 text-xs font-black text-white/30 uppercase tracking-[0.2em] text-center">Observations</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {PROJECT_STATS.map((row) => (
                    <tr key={row.no} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="p-4 text-gray-500 font-mono text-xs">{row.no}</td>
                      <td className="p-4 font-display font-bold text-lg tracking-tight group-hover:text-brand transition-colors">{row.cell}</td>
                      <td className="p-4 text-center font-medium italic text-gray-400">{row.pop}</td>
                      <td className="p-4 text-right font-display font-black text-white">{row.amount}</td>
                      <td className="p-4 text-right font-display font-black text-green-400">{row.transferred}</td>
                      <td className="p-4 text-right font-display font-black text-orange-400">{row.pending}</td>
                      <td className="p-4 text-center">
                        <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-black text-brand">
                          {row.obs}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-brand/10 border-t-2 border-brand text-xs sm:text-base">
                    <td colSpan={2} className="p-4 md:p-6 font-display font-black text-xl md:text-2xl text-brand uppercase tracking-tighter">Totaux</td>
                    <td className="p-4 md:p-6 text-center font-display font-black text-lg md:text-xl italic text-white">{TOTALS.pop}</td>
                    <td className="p-4 md:p-6 text-right font-display font-black text-base md:text-lg text-white whitespace-nowrap">{TOTALS.amount}</td>
                    <td className="p-4 md:p-6 text-right font-display font-black text-xl md:text-2xl text-green-400 whitespace-nowrap">{TOTALS.transferred}</td>
                    <td className="p-4 md:p-6 text-right font-display font-black text-xl md:text-2xl text-orange-400 whitespace-nowrap">{TOTALS.pending}</td>
                    <td className="p-4 md:p-6 text-center">
                      <span className="inline-block px-4 py-1 md:px-6 md:py-2 bg-brand text-black rounded-full font-black text-base md:text-lg">
                        {TOTALS.obs}
                      </span>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-8 text-center">
              <h2 className="text-xl md:text-2xl font-display font-black text-brand mb-2">
                Liste officielle des membres cotisants au projet de Séléa.
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {CITIES.map((city) => (
                <Link 
                  key={city.id}
                  to={`/hafani/${city.id}?view=project`}
                  className="group relative h-64 rounded-3xl overflow-hidden border transition-all active:scale-95 border-white/10 hover:border-brand/50"
                >
                  <img 
                    src={city.image} 
                    alt={city.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-80" />
                  <div className="relative z-10 h-full flex flex-col items-center justify-center gap-4">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-black transition-colors">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-display font-black tracking-tight">{city.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
