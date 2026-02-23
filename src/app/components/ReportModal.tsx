"use client"
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { X, Camera, Send, CheckCircle2 } from 'lucide-react';
const ReportModal = ({
    showReport, setShowReport }: any) => {
      const [isSubmitted, setIsSubmitted] = useState(false);
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // এখানে আপনার API Call হবে
        setIsSubmitted(true);
      };
  return (
    <AnimatePresence>
    {showReport && (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/80  backdrop-blur-xl flex items-end md:items-center justify-center p-4"
        >
        <motion.div 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="bg-[#022C22] w-full max-w-lg rounded-t-[3rem] md:rounded-[3rem] border border-white/10 shadow-[0_-20px_80px_rgba(0,0,0,0.5)] overflow-hidden relative"
        >
            {/* Close Button */}
            <button 
            onClick={() => setShowReport(false)}
            className="absolute top-6 right-6 p-2 bg-white/5 rounded-full text-white/40 hover:text-white transition-colors"
            >
            <X size={20} />
            </button>

            {!isSubmitted ? (
            <div className="p-8 md:p-12">
                <h3 className="text-3xl font-black text-white mb-2 italic tracking-tighter">অভিযোগ রিপোর্ট করুন</h3>
                <p className="text-emerald-400/60 text-xs font-bold uppercase tracking-widest mb-8">সরাসরি মাননীয় এমপির কাছে বার্তা পাঠান</p>
                
                <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="আপনার নাম" className="w-full p-4 bg-white/5 rounded-2xl border border-white/10 focus:border-[#D4AF37] focus:outline-none text-sm" />
                    <input type="tel" placeholder="মোবাইল" className="w-full p-4 bg-white/5 rounded-2xl border border-white/10 focus:border-[#D4AF37] focus:outline-none text-sm" />
                </div>
                <select className="w-full p-4 bg-white/5 rounded-2xl border border-white/10 focus:border-[#D4AF37] focus:outline-none text-sm appearance-none text-white/50">
                    <option>সমস্যার ধরন</option>
                    <option>রাস্তাঘাট</option>
                    <option>শিক্ষা</option>
                    <option>বিদ্যুৎ</option>
                </select>
                <textarea rows={4} placeholder="সমস্যার বিস্তারিত বর্ণনা..." className="w-full p-4 bg-white/5 rounded-2xl border border-white/10 focus:border-[#D4AF37] focus:outline-none text-sm"></textarea>
                
                <div className="flex items-center gap-4 p-4 border-2 border-dashed border-white/10 rounded-2xl text-white/40 hover:border-[#D4AF37] hover:text-[#D4AF37] cursor-pointer transition-all">
                    <Camera size={20}/> <span className="text-[10px] font-black uppercase tracking-[0.2em]">ছবি সংযুক্ত করুন</span>
                </div>

                <button 
                    onClick={() => { setIsSubmitted(true); setTimeout(() => { setIsSubmitted(false); setShowReport(false); }, 3000); }}
                    className="w-full py-5 bg-[#D4AF37] text-emerald-950 rounded-[2rem] font-black text-lg shadow-2xl shadow-gold-900/20 flex items-center justify-center gap-3 mt-4 active:scale-95 transition-all"
                >
                    আবেদন জমা দিন <Send size={20}/>
                </button>
                </div>
            </div>
            ) : (
            <div className="p-20 text-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-20 h-20 bg-[#D4AF37] text-emerald-950 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-gold-500/40">
                <CheckCircle2 size={40} />
                </motion.div>
                <h2 className="text-3xl font-black text-white mb-4 italic tracking-tighter">ধন্যবাদ!</h2>
                <p className="text-emerald-200/50 text-sm leading-relaxed">আপনার অভিযোগটি সফলভাবে এমপির বিশেষ দপ্তরে পাঠানো হয়েছে।</p>
            </div>
            )}
        </motion.div>
        </motion.div>
    )}
    </AnimatePresence>
  )
}

export default ReportModal