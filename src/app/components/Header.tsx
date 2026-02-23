"use client";
import { Bell, Menu } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useUI } from '../context/UIContext';


const Header = () => {
    const {setReportModalOpen } = useUI();

  const pathname = usePathname(); // বর্তমান পেজের পাথ জানার জন্য

  const menuItems = [
    { name: 'হোম', href: '/' },
    { name: 'পরিচয়', href: '/about' },
    { name: 'গ্যালারি', href: '/gallery' },
    { name: 'উন্নয়ন', href: '/projects' },
  ];

  return (
    // 'fixed' ব্যবহার করা হয়েছে যাতে স্ক্রল করলেও এটি উপরে থাকে
    <div className="fixed top-0 left-0 right-0 z-50 px-4 md:px-12 pt-4 pointer-events-none">
      <header className="max-w-7xl mx-auto h-16 md:h-20 bg-emerald-950/60 backdrop-blur-2xl border border-white/10 rounded-3xl flex justify-between items-center px-6 pointer-events-auto shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        {/* Left: Logo & Title */}
        <div className="flex items-center gap-3">
          <motion.div 
            whileHover={{ rotate: 360 }} 
            transition={{ duration: 0.7 }} 
            className="w-10 h-10 bg-gradient-to-tr from-red-600 to-red-800 rounded-full border border-white/20 flex items-center justify-center font-black text-[10px] shadow-lg shadow-red-900/20"
          >
            BD
          </motion.div>
          <div className="leading-none">
            <h1 className="text-sm md:text-lg font-black tracking-tighter text-white">
              নূরুল ইসলাম নয়ন <span className="text-[#D4AF37]">এমপি</span>
            </h1>
            <p className="text-[7px] md:text-[9px] uppercase tracking-[0.3em] text-emerald-400 font-bold">
              Constituency Portal
            </p>
          </div>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={`text-xs font-black uppercase tracking-widest transition-all relative group ${
                  isActive ? 'text-[#D4AF37]' : 'text-white/50 hover:text-white'
                }`}
              >
                {item.name}
                {/* Active Indicator Line */}
                <motion.span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#D4AF37] ${isActive ? 'w-full' : 'w-0 group-hover:w-full transition-all'}`}
                  layoutId="activeNav"
                />
              </Link>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={() => setReportModalOpen(true)} 
            className="hidden md:flex bg-emerald-500/10 hover:bg-[#D4AF37] hover:text-emerald-950 px-6 py-2 rounded-xl text-xs font-black border border-[#D4AF37]/30 transition-all shadow-lg active:scale-95 text-[#D4AF37]"
          >
            অভিযোগ করুন
          </button>

          <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20 text-emerald-400 cursor-pointer hover:bg-emerald-500/20 transition-all">
            <Bell size={18} />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header