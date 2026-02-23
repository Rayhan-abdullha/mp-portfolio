"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, MapPin, Phone, ShieldCheck, 
  X, Search, Landmark, Users, 
  Award, Briefcase, GraduationCap
} from 'lucide-react';

// --- জনপ্রতিনিধিদের ডামি ডাটা ---
const representatives = [
  { 
    id: 1, 
    name: "মোঃ রফিকুল ইসলাম", 
    role: "চেয়ারম্যান", 
    category: "উপজেলা পরিষদ", 
    area: "উপজেলা সদর", 
    image: "https://i.ibb.co.com/20G8sGC4/606836128-1420488253120091-7498631054917273773-n.jpg",
    phone: "017XXXXXXXX",
    education: "বিএ (অনার্স)",
    vision: "উপজেলাকে একটি আধুনিক ও ডিজিটাল মডেল হিসেবে গড়ে তোলা।"
  },
  { 
    id: 2, 
    name: "নাসির উদ্দিন", 
    role: "কাউন্সিলর", 
    category: "পৌরসভা (১-৯ নং ওয়ার্ড)", 
    area: "৫ নং ওয়ার্ড", 
    image: "https://i.ibb.co.com/20G8sGC4/606836128-1420488253120091-7498631054917273773-n.jpg",
    phone: "018XXXXXXXX",
    education: "এমএ",
    vision: "পরিচ্ছন্ন ও মাদকমুক্ত ওয়ার্ড গঠন।"
  },
  { 
    id: 3, 
    name: "আব্দুল কুদ্দুস", 
    role: "ইউনিয়ন মেম্বার", 
    category: "ইউনিয়ন পরিষদ", 
    area: "৩ নং ওয়ার্ড, ১নং ইউনিয়ন", 
    image: "https://i.ibb.co.com/20G8sGC4/606836128-1420488253120091-7498631054917273773-n.jpg",
    phone: "019XXXXXXXX",
    education: "এইচএসসি",
    vision: "কৃষক ও শ্রমজীবী মানুষের পাশে থাকা।"
  }
];

export default function RepresentativesPage() {
  const [activeTab, setActiveTab] = useState("সব");
  const [selectedRep, setSelectedRep] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["সব", "উপজেলা পরিষদ", "পৌরসভা (১-৯ নং ওয়ার্ড)", "ইউনিয়ন পরিষদ"];

  const filteredReps = representatives.filter(rep => {
    const matchesTab = activeTab === "সব" || rep.category === activeTab;
    const matchesSearch = rep.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          rep.area.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#011612] text-slate-200 pt-32 pb-20 px-4 md:px-12">
      
      {/* Header & Search */}
      <section className="max-w-7xl mx-auto mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 md:mt-10">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter">জনপ্রতিনিধি <span className="text-[#D4AF37]">ডিরেক্টরি</span></h1>
            <p className="text-emerald-400/60 font-bold uppercase tracking-widest text-xs">আপনার এলাকার সেবকদের তথ্য জানুন</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto">
            <div className="relative group flex-1 md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-[#D4AF37] transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="নাম বা এলাকা দিয়ে খুঁজুন..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-all"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex bg-white/5 p-1.5 rounded-[2rem] border border-white/10 mt-10 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-8 py-3 rounded-[1.5rem] text-[10px] md:text-xs font-black transition-all whitespace-nowrap ${activeTab === cat ? 'bg-[#D4AF37] text-emerald-950 shadow-xl' : 'text-white/40 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Representatives Grid */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode='popLayout'>
          {filteredReps.map((rep) => (
            <motion.div
              key={rep.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedRep(rep)}
              className="bg-emerald-950/30 rounded-[3rem] border border-white/5 overflow-hidden cursor-pointer group hover:bg-emerald-900/40 transition-all shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={rep.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={rep.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#011612] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-8">
                  <span className="px-3 py-1 bg-[#D4AF37] text-emerald-950 text-[10px] font-black rounded-full uppercase mb-2 inline-block shadow-lg">
                    {rep.role}
                  </span>
                  <h3 className="text-2xl font-black text-white italic tracking-tighter">{rep.name}</h3>
                </div>
              </div>
              <div className="p-8 pt-2 space-y-4">
                <div className="flex items-center gap-3 text-white/40 text-xs">
                  <MapPin size={14} className="text-[#D4AF37]" />
                  <span className="font-bold">{rep.area}</span>
                </div>
                <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                   <p className="text-[10px] font-black uppercase text-emerald-400 tracking-tighter">{rep.category}</p>
                   <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-emerald-950 transition-all">
                      <ArrowUpRight size={18} />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      {/* --- Detail Modal --- */}
      <AnimatePresence>
        {selectedRep && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setSelectedRep(null)} 
              className="absolute inset-0 bg-black/95 backdrop-blur-2xl" 
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 30 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="relative bg-[#022C22] w-full max-w-2xl rounded-[3.5rem] border border-white/10 shadow-2xl overflow-hidden"
            >
              <button onClick={() => setSelectedRep(null)} className="absolute top-8 right-8 z-10 p-3 bg-white/5 rounded-full text-white/40 hover:text-white transition-colors">
                <X size={20} />
              </button>

              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-1/2 h-80 md:h-auto">
                   <img src={selectedRep.image} className="w-full h-full object-cover" alt={selectedRep.name} />
                </div>
                
                <div className="p-10 md:w-1/2 space-y-6">
                  <div>
                    <span className="text-[#D4AF37] font-black text-[10px] uppercase tracking-[0.2em] mb-2 block">{selectedRep.category}</span>
                    <h2 className="text-3xl font-black text-white italic tracking-tighter leading-none">{selectedRep.name}</h2>
                    <p className="text-emerald-400 font-bold mt-1">{selectedRep.role}</p>
                  </div>

                  <div className="space-y-4 pt-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-white/5 rounded-lg text-[#D4AF37]"><MapPin size={16}/></div>
                      <div><p className="text-[10px] text-white/30 uppercase font-bold">এলাকা</p><p className="text-sm text-white">{selectedRep.area}</p></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-white/5 rounded-lg text-[#D4AF37]"><GraduationCap size={16}/></div>
                      <div><p className="text-[10px] text-white/30 uppercase font-bold">শিক্ষাগত যোগ্যতা</p><p className="text-sm text-white">{selectedRep.education}</p></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-white/5 rounded-lg text-[#D4AF37]"><Phone size={16}/></div>
                      <div><p className="text-[10px] text-white/30 uppercase font-bold">যোগাযোগ</p><p className="text-sm text-white">{selectedRep.phone}</p></div>
                    </div>
                  </div>

                  <div className="p-6 bg-white/5 rounded-[2rem] border border-white/5 mt-4">
                    <p className="text-[10px] text-[#D4AF37] font-black uppercase mb-2 italic">ভিশন</p>
                    <p className="text-xs text-white/60 leading-relaxed italic">"{selectedRep.vision}"</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

const ArrowUpRight = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
);