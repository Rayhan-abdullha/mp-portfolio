"use client"
import React from 'react'
import { Home, User, Image as ImageIcon, Megaphone, Building, Link } from 'lucide-react';
import { motion } from 'framer-motion';
import { useUI } from '../context/UIContext';
function MobileMenu() {
    const { activeTab, setActiveTab, reportModalOpen, setReportModalOpen } = useUI();
  return (
          <nav className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] h-20 bg-emerald-950/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] flex items-center justify-around px-6 z-50 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
        {[
          { id: 'home', icon: <Home size={22} />, label: 'হোম', link: '/' },
          { id: 'gallery', icon: <ImageIcon size={22} />, label: 'গ্যালারি', link: '/gallery' },
          { id: 'projects', icon: <Building size={22} />, label: 'উন্নয়ন', link: '/projects' },
          { id: 'profile', icon: <User size={22} />, label: 'পরিচয়', link: '/about' },
        ].map((tab) => (
          <Link href={tab.link} 
            key={tab.id} onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center gap-1 transition-all ${activeTab === tab.id ? 'text-[#D4AF37] scale-110' : 'text-emerald-100/40'}`}
          >
            {tab.icon}
            <span className="text-[9px] font-black uppercase tracking-tighter">{tab.label}</span>
            {activeTab === tab.id && <motion.div layoutId="dock-dot" className="w-1 h-1 bg-[#D4AF37] rounded-full mt-1 shadow-[0_0_10px_#D4AF37]" />}
          </Link>
        ))}
      <button 
          onClick={() => setReportModalOpen(true)}
            className={`flex flex-col items-center gap-1 transition-all ${reportModalOpen ? 'text-[#D4AF37] scale-110' : 'text-emerald-100/40'}`}
          >
            <Megaphone size={22} />
            <span className="text-[9px] font-black uppercase tracking-tighter">অভিযোগ</span>
            {reportModalOpen && <motion.div layoutId="dock-dot" className="w-1 h-1 bg-[#D4AF37] rounded-full mt-1 shadow-[0_0_10px_#D4AF37]" />}
          </button>
      </nav>
  )
}

export default MobileMenu