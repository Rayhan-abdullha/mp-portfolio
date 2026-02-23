"use client";
import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, MessageSquare,
   ShieldAlert, Construction, Bell, Globe, ExternalLink,
} from 'lucide-react';
import Image from 'next/image';
import ReportProblem from './Report';
import ReportModal from './ReportModal';
import { useUI } from '../context/UIContext';

export default function MPPortal() {
  const {
    reportModalOpen,
    setReportModalOpen,
  } = useUI();

  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  // --- Animation Constants ---
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVars = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="min-h-screen bg-[#011612] text-slate-200 font-sans selection:bg-gold-500/30 overflow-x-hidden">
      
      {/* --- ১. প্রিমিয়াম ব্যাকগ্রাউন্ড এলিমেন্ট --- */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-600/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* --- ২. ফ্লোটিং গ্লাস হেডার --- */}


      <main className="relative z-10 max-w-7xl mx-auto pt-8 px-4 md:px-12">
        
        {/* --- ৩. হিরো সেকশন: আল্ট্রা প্রিমিয়াম --- */}
        <section className="grid lg:grid-cols-12 gap-10 items-center mb-24 mt-20 md:mt-24">
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-950/50 border border-emerald-500/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">সর্বদা জনগণের পাশে</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 italic">
              সেবার তরে <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">নিবেদিত প্রাণ।</span>
            </h2>
            <p className="text-emerald-100/60 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
              মাননীয় প্রধানমন্ত্রী তারেক রহমান হাত ধরে স্মার্ট বাংলাদেশ বিনির্মাণে আমাদের এলাকার উন্নয়ন অব্যাহত রাখতে আমি প্রতিশ্রুতিবদ্ধ।
            </p>
            <div className="flex flex-wrap gap-5">
              <button onClick={() => setReportModalOpen(true)} className="px-10 py-5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-emerald-950 font-black rounded-2xl shadow-2xl shadow-gold-500/20 hover:scale-105 active:scale-95 transition-all uppercase tracking-widest text-sm">অভিযোগ করুন</button>
              <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all uppercase tracking-widest text-sm backdrop-blur-md">উন্নয়ন প্রকল্প</button>
            </div>
          </motion.div>

          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-emerald-500 blur-[100px] opacity-20 group-hover:opacity-30 transition-all duration-1000" />
            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border-2 border-white/10 shadow-3xl">
              <Image src="https://i.imageupload.app/577a0b21eff3c429c702.jpeg" alt="MP Portrait" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <p className="text-[#D4AF37] font-black text-2xl">নূরুল ইসলাম নয়ন</p>
                <p className="text-white/60 text-sm font-bold uppercase tracking-widest">সদস্য, জাতীয় সংসদ</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- ৪. সেকশন: এলাকার গৌরব ও মিডিয়া গ্যালারি --- */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h3 className="text-4xl font-black text-white tracking-tighter mb-2 italic">মিডিয়া গ্যালারি</h3>
              <p className="text-emerald-400 font-bold text-sm tracking-widest uppercase italic">এলাকার উন্নয়নের খণ্ডচিত্র</p>
            </div>
            <div className="flex gap-4">
               {['সব', 'ভিডিও', 'ছবি'].map((cat, i) => (
                 <button key={i} className={`px-6 py-2 rounded-xl text-xs font-bold border transition-all ${i===0 ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400' : 'bg-white/5 border-white/10 text-white/40 hover:text-white'}`}>{cat}</button>
               ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { span: 'md:col-span-2 md:row-span-2', img: 'https://i.ibb.co.com/20G8sGC4/606836128-1420488253120091-7498631054917273773-n.jpg' },
              { span: 'col-span-1', img: 'https://i.ibb.co.com/20G8sGC4/606836128-1420488253120091-7498631054917273773-n.jpg' },
              { span: 'col-span-1', img: 'https://i.ibb.co.com/20G8sGC4/606836128-1420488253120091-7498631054917273773-n.jpg' },
              { span: 'md:col-span-2', img: 'https://i.ibb.co.com/20G8sGC4/606836128-1420488253120091-7498631054917273773-n.jpg' },
            ].map((item, i) => (
              <motion.div 
                whileHover={{ scale: 0.98 }}
                key={i} className={`${item.span} relative aspect-square md:aspect-auto min-h-[200px] bg-emerald-900 rounded-3xl overflow-hidden border border-white/5 group cursor-pointer shadow-2xl`}
              >
                <Image src={item.img} alt="Gallery" fill className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:rotate-2 group-hover:scale-110" unoptimized />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
                <div className="absolute bottom-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-all">
                  <ExternalLink size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- ৫. সেকশন: উন্নয়ন ট্র্যাকার ও জরুরী ডিরেক্টরি --- */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          
          <motion.div variants={containerVars} initial="hidden" whileInView="visible" className="bg-emerald-950/30 p-10 rounded-[4rem] border border-white/5 backdrop-blur-md">
            <h3 className="text-2xl font-black text-[#D4AF37] mb-10 flex items-center gap-4 italic uppercase tracking-tighter">
              <Construction size={28} /> উন্নয়ন ট্র্যাকার
            </h3>
            <div className="space-y-8">
              {[
                { label: "ডিজিটাল হাসপাতাল", progress: 85 },
                { label: "স্মার্ট ভিলেজ কানেক্টিভিটি", progress: 60 },
                { label: "সৌর বিদ্যুৎ প্রকল্প", progress: 95 },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-emerald-300 mb-3">
                    <span>{item.label}</span>
                    <span>{item.progress}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-emerald-900 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: `${item.progress}%` }} 
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-emerald-500 to-[#D4AF37]" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Phone size={32}/>, title: "এম্বুলেন্স", call: "৯৯৯", color: "from-red-500/20 to-red-950/50" },
              { icon: <ShieldAlert size={32}/>, title: "পুলিশ", call: "১০২", color: "from-blue-500/20 to-blue-950/50" },
              { icon: <MessageSquare size={32}/>, title: "অভিযোগ", call: "০১৭...", color: "from-emerald-500/20 to-emerald-950/50" },
              { icon: <Globe size={32}/>, title: "তথ্য", call: "৩৩৩", color: "from-yellow-500/20 to-yellow-950/50" },
            ].map((item, i) => (
              <motion.a 
                href={`tel:${item.call}`}
                whileHover={{ y: -10 }}
                key={i} className={`bg-gradient-to-br ${item.color} border border-white/5 p-8 rounded-[3rem] flex flex-col items-center justify-center text-center shadow-xl backdrop-blur-md`}
              >
                <div className="mb-4 text-white/80">{item.icon}</div>
                <p className="font-black text-white text-sm uppercase tracking-widest">{item.title}</p>
                <p className="text-[#D4AF37] font-bold text-xs mt-2 font-mono italic">{item.call}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </main>
      <ReportModal showReport={reportModalOpen} setShowReport={setReportModalOpen}/>
    </div>
  );
}