"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, Clock, CheckCircle2, 
  AlertCircle, ChevronRight, MessageSquare, 
  MapPin, Calendar, ArrowUpRight 
} from 'lucide-react';

// Sample Data
const complaints = [
  {
    id: "REQ-2026-001",
    title: "রাস্তার বেহাল দশা",
    location: "ওয়ার্ড নং ৫, পশ্চিম পাড়া",
    date: "২৪ ফেব্রুয়ারি, ২০২৬",
    status: "Pending",
    priority: "High",
    category: "Infrastucture"
  },
  {
    id: "REQ-2026-002",
    title: "স্ট্রিট লাইট অকেজো",
    location: "মেইন রোড, বাজার এলাকা",
    date: "২২ ফেব্রুয়ারি, ২০২৬",
    status: "Processing",
    priority: "Medium",
    category: "Utility"
  },
  {
    id: "REQ-2026-003",
    title: "পানির পাম্প মেরামত",
    location: "ইউনিয়ন কমপ্লেক্স সংলগ্ন",
    date: "২০ ফেব্রুয়ারি, ২০২৬",
    status: "Resolved",
    priority: "Low",
    category: "Utility"
  }
];

const statusColors = {
  Pending: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  Processing: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  Resolved: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
};

export default function ComplaintListPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-[#011612] pt-32 pb-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 mt-10">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-black text-white italic tracking-tighter"
            >
              অভিযোগ <span className="text-[#D4AF37]">ট্র্যাকার</span>
            </motion.h1>
            <p className="text-emerald-400/60 font-bold uppercase tracking-widest text-xs mt-2">
              জনগণের সমস্যা ও সমাধানের রিয়েল-টাইম আপডেট
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex gap-3">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
              <input 
                type="text" 
                placeholder="আইডি বা সমস্যা দিয়ে খুঁজুন..."
                className="bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-6 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-all w-full md:w-64"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="p-3 bg-white/5 border border-white/10 rounded-2xl text-white/60 hover:text-[#D4AF37] transition-all">
              <Filter size={20} />
            </button>
          </div>
        </div>

        {/* Complaints Table/List */}
        <div className="space-y-4">
          <AnimatePresence>
            {complaints.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.01, backgroundColor: "rgba(255,255,255,0.05)" }}
                className="group bg-emerald-950/20 border border-white/5 p-6 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl transition-all"
              >
                <div className="flex items-start gap-6 w-full">
                  {/* Status Icon */}
                  <div className={`hidden md:flex w-14 h-14 rounded-2xl items-center justify-center border ${statusColors[item.status as keyof typeof statusColors]}`}>
                    {item.status === 'Pending' && <Clock size={24} />}
                    {item.status === 'Processing' && <AlertCircle size={24} />}
                    {item.status === 'Resolved' && <CheckCircle2 size={24} />}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[10px] font-black text-[#D4AF37] uppercase tracking-widest">{item.id}</span>
                      <span className={`text-[9px] px-2 py-0.5 rounded-full border ${statusColors[item.status as keyof typeof statusColors]}`}>
                        {item.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 italic">{item.title}</h3>
                    <div className="flex flex-wrap gap-4 text-white/40 text-xs">
                      <span className="flex items-center gap-1"><MapPin size={14} /> {item.location}</span>
                      <span className="flex items-center gap-1"><Calendar size={14} /> {item.date}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full md:w-auto gap-6 border-t md:border-t-0 border-white/5 pt-4 md:pt-0">
                   <div className="text-left md:text-right">
                      <p className="text-[10px] uppercase text-white/30 font-bold mb-1">Priority</p>
                      <p className={`font-bold text-sm ${item.priority === 'High' ? 'text-red-400' : 'text-emerald-400'}`}>
                        {item.priority}
                      </p>
                   </div>
                   <button className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white group-hover:bg-[#D4AF37] group-hover:text-emerald-950 transition-all">
                      <ArrowUpRight size={20} />
                   </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination/Load More */}
        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-emerald-900/20 border border-white/5 rounded-2xl text-white/60 font-bold hover:bg-emerald-900/40 transition-all">
            আরও অভিযোগ দেখুন
          </button>
        </div>
      </div>
    </div>
  );
}