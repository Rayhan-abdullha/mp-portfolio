"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Search, MapPin, Phone, 
  ArrowRight, Shield, Heart, GraduationCap, 
  Droplets, Zap, ChevronRight 
} from 'lucide-react';
import Link from 'next/link';

const offices = [
  { id: 'police-station', category: 'নিরাপত্তা', title: 'থানা / পুলিশ স্টেশন', address: 'উপজেলা সদর', phone: '017XXXXXXXX', icon: <Shield /> },
  { id: 'hospital', category: 'স্বাস্থ্য', title: 'উপজেলা স্বাস্থ্য কমপ্লেক্স', address: 'হাসপাতাল রোড', phone: '018XXXXXXXX', icon: <Heart /> },
  { id: 'land-office', category: 'প্রশাসন', title: 'উপজেলা ভূমি অফিস', address: 'কালেক্টরেট চত্বর', phone: '019XXXXXXXX', icon: <Building2 /> },
  { id: 'education-office', category: 'শিক্ষা', title: 'উপজেলা শিক্ষা অফিস', address: 'একাডেমিক ভবন', phone: '015XXXXXXXX', icon: <GraduationCap /> },
];

export default function GovtOffices() {
  const [filter, setFilter] = useState("সব");
  const categories = ["সব", "প্রশাসন", "নিরাপত্তা", "স্বাস্থ্য", "শিক্ষা"];

  return (
    <div className="min-h-screen bg-[#011612] pt-32 pb-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto md:mt-10">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter mb-6">সরকারি <span className="text-[#D4AF37]">দপ্তরসমূহ</span></h1>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
              <input type="text" placeholder="দপ্তরের নাম দিয়ে খুঁজুন..." className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white focus:outline-none focus:border-[#D4AF37]" />
            </div>
            <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10 overflow-x-auto no-scrollbar">
              {categories.map(cat => (
                <button key={cat} onClick={() => setFilter(cat)} className={`px-6 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${filter === cat ? 'bg-[#D4AF37] text-emerald-950' : 'text-white/40 hover:text-white'}`}>{cat}</button>
              ))}
            </div>
          </div>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offices.filter(o => filter === "সব" || o.category === filter).map((office) => (
            <Link href={`/govt-offices/${office.id}`} key={office.id}>
              <motion.div whileHover={{ y: -5 }} className="bg-emerald-950/30 p-8 rounded-[2.5rem] border border-white/5 hover:border-[#D4AF37]/30 transition-all group">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#D4AF37] mb-6 group-hover:bg-[#D4AF37] group-hover:text-emerald-950 transition-all">{office.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{office.title}</h3>
                <div className="space-y-2 mb-6">
                  <p className="text-xs text-white/40 flex items-center gap-2"><MapPin size={12}/> {office.address}</p>
                  <p className="text-xs text-white/40 flex items-center gap-2"><Phone size={12}/> {office.phone}</p>
                </div>
                <div className="flex items-center text-[#D4AF37] text-[10px] font-black uppercase tracking-widest gap-2">
                  বিস্তারিত দেখুন <ArrowRight size={14} />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}