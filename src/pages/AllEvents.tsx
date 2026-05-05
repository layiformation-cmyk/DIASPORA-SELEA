import { motion } from 'motion/react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { EVENTS } from '../constants';

export default function AllEvents() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <span className="text-sm font-bold text-brand uppercase tracking-widest">Calendrier Officiel</span>
        <h1 className="text-6xl font-display font-extrabold mt-4">Événements</h1>
        <p className="text-gray-400 mt-6 max-w-2xl text-lg">
          Découvrez les moments forts de notre association.
        </p>
      </motion.div>

      <div className="grid gap-8">
        {EVENTS.map((event, i) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:bg-brand/5 hover:border-brand/30 transition-all"
          >
            <div className="flex gap-8 items-center">
              <div className="w-24 h-24 bg-brand rounded-2xl flex flex-col items-center justify-center text-black">
                <span className="text-xs font-bold uppercase tracking-widest">{event.date.split(' ')[1]}</span>
                <span className="text-3xl font-display font-extrabold">{event.date.split(' ')[0]}</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-display font-bold group-hover:text-brand transition-colors">{event.title}</h2>
                <div className="flex items-center gap-4 text-gray-500 text-sm">
                   <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {event.date}</div>
                   <div className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {event.location}</div>
                </div>
                <p className="text-gray-400 max-w-xl">{event.description}</p>
              </div>
            </div>
            <a 
               href="https://image.noelshack.com/fichiers/2026/19/2/1778015123-photo-2026-05-05-23-05-14.jpg"
               target="_blank"
               rel="noopener noreferrer"
               className="btn-outline group-hover:bg-brand group-hover:text-black transition-all"
            >
               S'inscrire
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
