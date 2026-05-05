import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search as SearchIcon, Calendar, ArrowRight, User, ShieldCheck, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { EVENTS, MEMBERS } from '../constants';

const SECTION_ANIMATION = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

export default function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authStep, setAuthStep] = useState(1);
  const [code, setCode] = useState('');
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const [showPresentation, setShowPresentation] = useState(false);

  const nextEvent = EVENTS[0];

  const CITIES = [
    { id: 'paris', name: 'Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop' },
    { id: 'lyon', name: 'Lyon', image: 'https://images.unsplash.com/photo-1528660493888-ab6f4761e036?q=80&w=2070&auto=format&fit=crop' },
    { id: 'marseille', name: 'Marseille', image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop' },
    { id: 'vannes', name: 'Vannes', image: 'https://images.unsplash.com/photo-1572455044327-7348c1be7267?q=80&w=2070&auto=format&fit=crop' },
    { id: 'reunion', name: 'La Réunion', image: 'https://image.noelshack.com/fichiers/2026/19/3/1778020749-photos-la-reunion-cascade-aigrettes.jpg' }
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearch(val);
    if (val.length > 1) {
      setSearchResults(MEMBERS.filter(m => m.toLowerCase().includes(val.toLowerCase())));
    } else {
      setSearchResults([]);
    }
  };

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (authStep === 1) {
      if (code === "NeAlie") {
        setAuthStep(2);
        setCode('');
      } else {
        alert("Code incorrect");
      }
    } else {
      if (code === "0612") {
        navigate('/private');
      } else {
        alert("Code incorrect");
      }
    }
  };

  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
      <section className="relative px-6 pt-20 md:pt-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand/5 blur-[120px] rounded-full" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img 
              src="https://image.noelshack.com/fichiers/2026/19/2/1778014451-chatgpt-image-5-mai-2026-22-53-57.jpg" 
              alt="Logo Association" 
              className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 object-contain rounded-full mix-blend-multiply drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              animate={{ 
                rotateY: [0, 10, 0, -10, 0],
                rotateX: [0, 5, 0, -5, 0],
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.05, rotateY: 20 }}
              referrerPolicy="no-referrer"
            />
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-brand border border-brand/20 bg-brand/5 rounded-full uppercase">
              Association
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-8xl font-serif font-medium tracking-tight mb-8 leading-[1.1]">
              <span className="block text-white mb-2 italic">Bienvenue sur le site de</span>
              <span className="text-magnificent font-black uppercase font-display block scale-[0.85] sm:scale-100 md:scale-[1.2] origin-center mt-2 md:mt-4">l'association</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Unité et solidarité de la diaspora de <span className="text-white font-bold group">Selea</span> de l'étranger.
              <span className="block mt-4 text-sm md:text-base text-gray-400 uppercase tracking-[0.2em] font-medium mb-4">Culture • Intégration • Solidarité</span>
              <button 
                onClick={() => setShowPresentation(!showPresentation)}
                className="text-brand hover:text-white text-sm font-bold uppercase tracking-widest transition-colors inline-flex items-center gap-2 group"
              >
                {showPresentation ? 'Voir moins' : 'En savoir plus'}
                <ArrowRight className={`w-4 h-4 transition-transform ${showPresentation ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
              </button>
            </p>

            <AnimatePresence>
              {showPresentation && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden mb-12"
                >
                  <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 text-left max-w-3xl mx-auto backdrop-blur-xl relative">
                    <div className="absolute top-0 left-12 w-24 h-1 bg-brand/50 rounded-full" />
                    <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-brand">Présentation de l’association</h2>
                    <div className="space-y-6 text-gray-400 leading-relaxed text-sm md:text-base font-light">
                      <p>
                        L’association <span className="text-white font-bold">Unité et Solidarité de la diaspora de Selea de l’étranger</span> a pour vocation de rassembler les membres de la diaspora originaires de Selea autour de valeurs communes de solidarité, d’entraide et de partage.
                      </p>
                      <p>
                        Elle œuvre activement pour favoriser une meilleure intégration de ses membres dans leurs pays d’accueil, en créant des espaces d’échange, de soutien et d’accompagnement. L’association constitue ainsi un véritable lien entre les générations et les parcours, tout en renforçant le sentiment d’appartenance à une communauté.
                      </p>
                      <p>
                        Par ailleurs, elle s’engage à promouvoir les richesses culturelles comoriennes à travers l’organisation d’activités festives, culturelles et sociales. Ces événements permettent de valoriser les traditions, de transmettre le patrimoine aux jeunes générations et de faire rayonner la culture comorienne à l’étranger.
                      </p>
                      <p>
                        <span className="text-white font-bold italic">Selea</span>, ville située dans la région de Bambao en Comores, est au cœur de cette dynamique. L’association s’attache à préserver les liens avec cette localité d’origine, tout en contribuant au développement et à la cohésion de sa diaspora à travers le monde.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://wa.me/33646689634" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline w-full sm:w-auto text-lg px-10 uppercase inline-flex items-center justify-center"
              >
                NOUS REJOINDRE
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <motion.section 
        id="events"
        className="max-w-7xl mx-auto px-6"
        {...SECTION_ANIMATION}
      >
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-sm font-bold text-brand uppercase tracking-widest mb-2">Points Forts</h2>
            <h3 className="text-4xl font-display font-bold">Événements à Venir</h3>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-[100px] -mr-32 -mt-32 group-hover:bg-brand/20 transition-colors" />
          
          <div className="flex flex-col gap-12 relative z-10">
            <div className="aspect-video w-full bg-white/5 rounded-2xl border border-white/10 overflow-hidden group-hover:border-brand/30 transition-colors">
              <img 
                src="https://image.noelshack.com/fichiers/2026/19/2/1778015123-photo-2026-05-05-23-05-14.jpg" 
                alt="Event" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-brand">
                <Calendar className="w-6 h-6" />
                <span className="text-xl font-semibold">{nextEvent.date}</span>
              </div>
              <h4 className="text-3xl md:text-5xl font-display font-bold leading-tight">{nextEvent.title}</h4>
              <p className="text-gray-400 text-lg leading-relaxed">
                {nextEvent.description}
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Lieu:</span>
                  <span className="text-2xl font-display font-black text-brand underline decoration-brand/30">LYON</span>
                </div>
                <div className="pt-2">
                  <a 
                    href="https://image.noelshack.com/fichiers/2026/19/2/1778015123-photo-2026-05-05-23-05-14.jpg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary inline-block text-center w-full sm:w-auto"
                  >
                    S'inscrire
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>


      {/* HAFANI Section */}
      <motion.section 
        id="aphan"
        className="max-w-7xl mx-auto px-6 text-center"
        {...SECTION_ANIMATION}
      >
        <div className="mb-16">
          <h2 className="text-sm font-bold text-brand uppercase tracking-widest mb-2">Protection & Futur</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold uppercase">HAFANI - ASSURANCE décès</h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Notre programme d'assurance décès exclusif, structuré en pôles régionaux pour une proximité maximale.
          </p>
          <div className="mt-8">
            <a 
              href="https://wa.me/33646689634" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              S'inscrire
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {CITIES.map((city) => (
            <Link 
              key={city.id}
              to={`/hafani/${city.id}`}
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

      {/* Remove individual member section, logic moved to new CityContributions page */}
      </motion.section>

      {/* Auth Modal (Specific to Vannes) */}
      <AnimatePresence>
        {isAuthModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { setIsAuthModalOpen(false); setAuthStep(1); setCode(''); }}
              className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="w-full max-w-md bg-navy-light border border-white/10 rounded-3xl p-10 relative z-10 overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-brand" />
              <button onClick={() => { setIsAuthModalOpen(false); setAuthStep(1); setCode(''); }} className="absolute top-6 right-6 text-gray-500 hover:text-white"><X /></button>
              
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center text-brand mx-auto mb-6">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-3xl font-display font-bold">Sécurité Vérifiée</h4>
                  <p className="text-gray-400 mt-2">Pôle Vannes - Étape {authStep} sur 2</p>
                </div>
                
                <form onSubmit={handleAuth} className="space-y-6">
                  <div className="space-y-2 text-left">
                    <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">{authStep === 1 ? "Premier Code d'accès" : "Second Code de validation"}</label>
                    <input 
                      autoFocus
                      type="password"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      placeholder={authStep === 1 ? "Entrez NeAlie" : "Entrez 0612"}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-xl focus:outline-none focus:border-brand transition-colors text-center font-mono tracking-widest"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full py-4 text-lg">Confirmer</button>
                </form>
                
                <p className="text-xs text-gray-500 italic">Cet accès est strictement réservé aux résidents du pôle Bretagne.</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
