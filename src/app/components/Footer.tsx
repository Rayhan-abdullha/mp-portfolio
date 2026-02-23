'use client'
import { Facebook, Youtube } from 'lucide-react'
import React from 'react'
import ReportModal from './ReportModal'
import { useUI } from '../context/UIContext';
const Footer = () => {
  const { reportModalOpen, setReportModalOpen } = useUI();
  return (
          <footer className="py-20 bg-emerald-950/50 border-t border-white/5 text-center relative overflow-hidden">
        <div className="max-w-xl mx-auto px-6 relative z-10">
          <div className="flex justify-center gap-10 mb-10">
             <Facebook className="text-white/40 hover:text-[#D4AF37] transition-all cursor-pointer" />
             <Youtube className="text-white/40 hover:text-red-600 transition-all cursor-pointer" />
             <div className="w-6 h-6 border border-white/40 rounded flex items-center justify-center text-white/40 hover:text-white hover:border-white text-[8px] font-black cursor-pointer">X</div>
          </div>
          <p className="text-xs font-black uppercase tracking-[0.5em] text-emerald-500 mb-4 italic">Constituency of Honor</p>
          <p className="text-white/20 text-[9px] font-medium leading-loose uppercase tracking-widest">নূরুল ইসলাম নয়ন এমপি মহোদয়ের ডিজিটাল প্ল্যাটফর্ম। <br /> কপিরাইট সংরক্ষিত ২০২৬।</p>
      </div>
      <ReportModal showReport={reportModalOpen} setShowReport={setReportModalOpen}/>
      
      </footer>
  )
}

export default Footer