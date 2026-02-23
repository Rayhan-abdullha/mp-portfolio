"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, MapPin, Calendar, BadgeDollarSign, 
  ArrowUpRight, HardHat, Landmark, Rotate3D, 
  Maximize2, Tag, Clock, Layers
} from 'lucide-react';

// --- প্রজেক্ট ডেটা ---
const projects = [
  { 
    id: 1, 
    category: "অবকাঠামো", 
    icon: <Rotate3D />, 
    title: "পৌরসভা সংযোগ সড়ক", 
    status: "৮৫%", 
    color: "bg-blue-500", 
    desc: "১৫ কি.মি. পাকা রাস্তা সংস্কার কাজ শেষ পর্যায়ে।",
    fullDesc: "প্রধান ৫টি সংযোগ সড়ককে আধুনিক পিচ ঢালাই দিয়ে সংস্কার করা হচ্ছে যা প্রতিদিন ৫০ হাজার মানুষের যাতায়াত সহজ করবে। উন্নত ড্রেনেজ সিস্টেমের মাধ্যমে জলাবদ্ধতা নিরসন করা হয়েছে।",
    budget: "১৫ কোটি", 
    deadline: "জুন ২০২৬", 
    location: "সদর এলাকা" 
  },
  { 
    id: 2, 
    category: "সংস্কৃতি", 
    icon: <Landmark />, 
    title: "আধুনিক অডিটোরিয়াম", 
    status: "৪০%", 
    color: "bg-[#D4AF37]", 
    desc: "উপজেলা পর্যায়ে ৫০০ আসনের মাল্টিপারপাস ভবন।",
    fullDesc: "সাংস্কৃতিক চর্চার প্রসারে একটি আন্তর্জাতিক মানের শীতাতপ নিয়ন্ত্রিত ভবন নির্মাণ করা হচ্ছে। এতে অত্যাধুনিক সাউন্ড সিস্টেম এবং গ্রিন রুম থাকবে।",
    budget: "১২ কোটি", 
    deadline: "ডিসেম্বর ২০২৬", 
    location: "উপজেলা কমপ্লেক্স" 
  },
  { 
    id: 3, 
    category: "শিক্ষা", 
    icon: <HardHat />, 
    title: "স্মার্ট স্কুল মডেলিং", 
    status: "৯৫%", 
    color: "bg-emerald-500", 
    desc: "১০টি স্কুলে ডিজিটাল ল্যাব ও স্মার্ট ক্লাসরুম স্থাপন।",
    fullDesc: "স্মার্ট বাংলাদেশ গড়তে প্রাথমিক পর্যায়ে ১০টি স্কুলে অত্যাধুনিক কম্পিউটার ল্যাব এবং মাল্টিমিডিয়া প্রজেক্টর সরবরাহ করা হয়েছে।",
    budget: "৫ কোটি", 
    deadline: "মার্চ ২০২৬", 
    location: "বিভিন্ন ইউনিয়ন" 
  }
];

// --- গ্যালারি ডেটা ---
const galleryItems = [
  { id: 101, src: "https://i.ibb.co.com/20G8sGC4/606836128-1420488253120091-7498631054917273773-n.jpg", title: "জনসভা পরিদর্শন", location: "পূর্ব পাড়া", date: "১০ জানুয়ারি, ২০২৬" },
  { id: 102, src: "https://i.ibb.co.com/20G8sGC4/606836128-1420488253120091-7498631054917273773-n.jpg", title: "উন্নয়ন কাজের সূচনা", location: "নতুন বাজার", date: "১৫ ফেব্রুয়ারি, ২০২৬" },
  { id: 103, src: "https://i.ibb.co.com/20G8sGC4/606836128-1420488253120091-7498631054917273773-n.jpg", title: "স্মার্ট ল্যাব উদ্বোধন", location: "স্কুল রোড", date: "২২ ফেব্রুয়ারি, ২০২৬" }
];

export default function DevelopmentAndGallery() {
  const [activeCategory, setActiveCategory] = useState("সব");
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const categories = ["সব", "অবকাঠামো", "শিক্ষা", "সংস্কৃতি"];
  const filteredProjects = activeCategory === "সব" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#011612] text-slate-200 pt-32 pb-20 px-4 md:px-12">
      
      {/* --- Section 1: উন্নয়ন প্রকল্প --- */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12 md:mt-10">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter">উন্নয়ন <span className="text-[#D4AF37]">প্রকল্প</span></h1>
            <p className="text-emerald-400/60 font-bold uppercase tracking-widest text-[10px] md:text-xs">এলাকার পরিবর্তনের রিয়েল-টাইম চিত্র</p>
          </div>
          
          {/* Category Filter */}
          <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-xl text-[10px] md:text-xs font-black transition-all whitespace-nowrap ${activeCategory === cat ? 'bg-[#D4AF37] text-emerald-950 shadow-lg' : 'text-white/40 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedItem(p)}
                className="bg-emerald-950/30 p-8 rounded-[3rem] border border-white/5 backdrop-blur-xl cursor-pointer group hover:bg-emerald-900/40 transition-all shadow-2xl"
              >
                <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-[#D4AF37] mb-6 border border-emerald-500/20 group-hover:bg-[#D4AF37] group-hover:text-emerald-950 transition-all">
                  {p.icon}
                </div>
                <div className="flex items-center gap-2 mb-3">
                    <Tag size={12} className="text-[#D4AF37]" />
                    <span className="text-[10px] font-bold uppercase text-white/30 tracking-widest">{p.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 italic leading-tight">{p.title}</h3>
                
                <div className="space-y-2 mt-8">
                  <div className="flex justify-between text-[10px] font-black uppercase text-[#D4AF37]">
                    <span>অগ্রগতি</span>
                    <span>{p.status}</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: p.status }} transition={{duration: 1}} className={`h-full ${p.color}`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* --- Section 2: গ্যালারি --- */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter mb-12 text-center md:text-left">মিডিয়া <span className="text-[#D4AF37]">গ্যালারি</span></h2>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((img) => (
            <motion.div
              key={img.id}
              whileHover={{ scale: 0.98 }}
              onClick={() => setSelectedItem(img)}
              className="relative rounded-[2.5rem] overflow-hidden border border-white/5 cursor-zoom-in group shadow-2xl"
            >
              <img src={img.src} className="w-full opacity-60 group-hover:opacity-100 transition-all duration-700 object-cover" alt="Gallery" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all p-8 flex flex-col justify-end">
                <Maximize2 size={20} className="text-[#D4AF37] mb-2" />
                <h4 className="text-lg font-bold text-white italic">{img.title}</h4>
                <p className="text-[10px] text-white/50 uppercase tracking-widest">{img.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Universal Details Modal --- */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setSelectedItem(null)} 
              className="absolute inset-0 bg-black/95 backdrop-blur-2xl" 
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 30 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="relative bg-[#022C22] w-full max-w-2xl rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden"
            >
              <button onClick={() => setSelectedItem(null)} className="absolute top-6 right-6 z-10 p-2 bg-white/5 rounded-full text-white/40 hover:text-white transition-colors">
                <X size={20} />
              </button>

              <div className="h-48 md:h-64 bg-emerald-900/20 relative">
                 <img src={selectedItem.src || "https://i.ibb.co.com/20G8sGC4/606836128-1420488253120091-7498631054917273773-n.jpg"} className="w-full h-full object-cover opacity-60" alt="Preview"/>
                 <div className="absolute inset-0 bg-gradient-to-t from-[#022C22] to-transparent" />
              </div>

              <div className="p-8 md:p-12 -mt-12 relative">
                <div className="flex items-center gap-2 mb-4">
                  {selectedItem.category && <span className="px-3 py-1 bg-[#D4AF37] text-emerald-950 text-[10px] font-black rounded-full uppercase">{selectedItem.category}</span>}
                  <span className="px-3 py-1 bg-white/5 text-white/40 text-[10px] font-black rounded-full uppercase tracking-widest">{selectedItem.id > 100 ? "গ্যালারি" : "প্রজেক্ট আপডেট"}</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter mb-6 leading-tight">{selectedItem.title}</h2>
                <p className="text-white/60 leading-relaxed mb-8 text-sm md:text-base">
                  {selectedItem.fullDesc || "উন্নয়নের ধারাবাহিকতায় এই পদক্ষেপটি এলাকার সাধারণ মানুষের জীবনযাত্রার মান উন্নত করতে বিশেষ ভূমিকা রাখছে। আমরা স্মার্ট নির্বাচনী এলাকা গড়তে প্রতিশ্রুতিবদ্ধ।"}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <p className="text-[9px] text-[#D4AF37] font-black uppercase tracking-widest mb-1 flex items-center gap-1"><MapPin size={10}/> অবস্থান</p>
                    <p className="text-white font-bold text-sm">{selectedItem.location}</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <p className="text-[9px] text-[#D4AF37] font-black uppercase tracking-widest mb-1 flex items-center gap-1">
                      {selectedItem.budget ? <BadgeDollarSign size={10}/> : <Calendar size={10}/>} {selectedItem.budget ? "বাজেট" : "তারিখ"}
                    </p>
                    <p className="text-white font-bold text-sm">{selectedItem.budget || selectedItem.date}</p>
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