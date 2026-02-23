"use client"
import React from 'react'
import { Home, User, Megaphone, Building, Users, Landmark } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useUI } from '../context/UIContext';

function MobileMenu() {
  const { activeTab, setActiveTab, reportModalOpen, setReportModalOpen } = useUI();

  const menuItems = [
    { id: 'home', icon: <Home size={20} />, label: 'হোম', link: '/' },
    { id: 'complaints', icon: <Megaphone size={20} />, label: 'অভিযোগ', link: '/complaints' },
    { id: 'representives', icon: <Users size={20} />, label: 'প্রতিনিধি', link: '/representives' },
    { id: 'govt-offices', icon: <Landmark size={20} />, label: 'দপ্তর', link: '/govt-offices' },
    { id: 'projects', icon: <Building size={20} />, label: 'উন্নয়ন', link: '/projects' },
    { id: 'about', icon: <User size={20} />, label: 'পরিচয়', link: '/about' },
  ];

  return (
    <>
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <nav className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] h-20 bg-emerald-950/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] flex items-center z-50 shadow-[0_20px_50px_rgba(0,0,0,0.8)] px-2 overflow-hidden">
        
        <div className="flex items-center w-full h-full overflow-x-auto hide-scrollbar gap-1 scroll-smooth">
          
          {menuItems.map((tab) => {
            const isActive = activeTab === tab.id && !reportModalOpen;
            return (
              <Link 
                href={tab.link} 
                key={tab.id} 
                onClick={() => {
                  setActiveTab(tab.id);
                  setReportModalOpen(false);
                }}
                className="relative flex flex-col items-center justify-center min-w-[75px] h-full transition-all shrink-0"
              >
                {/* Background Pill Effect */}
                {isActive && (
                  <motion.div 
                    layoutId="active-pill"
                    className="absolute inset-x-1 inset-y-2 bg-[#D4AF37]/5 rounded-2xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                <div className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-[#D4AF37]' : 'text-emerald-100/40'}`}>
                  {tab.icon}
                </div>
                
                <span className={`relative z-10 text-[9px] font-black uppercase tracking-tighter mt-1 transition-colors duration-300 ${isActive ? 'text-white' : 'text-emerald-100/30'}`}>
                  {tab.label}
                </span>

                {/* --- The Dots Indicator (....) --- */}
                {isActive && (
                  <motion.div 
                    layoutId="active-dot"
                    className="absolute bottom-2 flex gap-0.5"
                  >
                    <span className="w-1 h-1 bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]" />
                  </motion.div>
                )}
              </Link>
            )
          })}

          <div className="w-[1px] h-8 bg-white/10 mx-2 shrink-0" />

          {/* Report Button with its own dot */}
          <button 
            onClick={() => {
              setReportModalOpen(true);
              setActiveTab(''); 
            }}
            className="relative flex flex-col items-center justify-center min-w-[75px] h-full transition-all shrink-0 pr-4"
          >
            <div className={`relative z-10 ${reportModalOpen ? 'text-red-500' : 'text-emerald-100/40'}`}>
              <Megaphone size={20} />
            </div>
            <span className={`relative z-10 text-[9px] font-black uppercase tracking-tighter mt-1 ${reportModalOpen ? 'text-white' : 'text-emerald-100/30'}`}>
              রিপোর্ট
            </span>

            {reportModalOpen && (
              <motion.div 
                layoutId="active-dot"
                className="absolute bottom-2 flex gap-0.5"
              >
                <span className="w-1 h-1 bg-red-500 rounded-full shadow-[0_0_8px_#ff0000]" />
              </motion.div>
            )}
          </button>

        </div>
      </nav>
    </>
  )
}

export default MobileMenu