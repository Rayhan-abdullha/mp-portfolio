"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, History, Target, ChevronLeft } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#011612] text-slate-200 pb-20 overflow-x-hidden">
      {/* Background Blobs */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-emerald-900/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gold-900/5 blur-[120px]" />
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-12 mt-24">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-[3rem] overflow-hidden border-2 border-[#D4AF37]/30 shadow-2xl"
          >
            <Image 
              src="https://i.imageupload.app/577a0b21eff3c429c702.jpeg" 
              alt="MP" fill className="object-cover" unoptimized 
            />
          </motion.div>
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4 italic">নূরুল ইসলাম নয়ন</h1>
            <p className="text-[#D4AF37] text-xl font-bold uppercase tracking-widest mb-6">সংসদ সদস্য, বাংলাদেশ জাতীয় সংসদ</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <span className="px-4 py-2 bg-emerald-900/40 rounded-full border border-emerald-500/20 text-xs font-bold">নির্বাচনী এলাকা: [আপনার এলাকা]</span>
              <span className="px-4 py-2 bg-emerald-900/40 rounded-full border border-emerald-500/20 text-xs font-bold">দল: বাংলাদেশ আওয়ামী লীগ</span>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: <History className="text-blue-400"/>, title: "রাজনৈতিক সূচনা", desc: "তৃণমূল থেকে উঠে আসা একজন নিবেদিত প্রাণ নেতা হিসেবে দীর্ঘ ২০ বছর যাবৎ জনসেবায় নিয়োজিত।" },
            { icon: <GraduationCap className="text-emerald-400"/>, title: "শিক্ষা জীবন", desc: "দেশের স্বনামধন্য শিক্ষা প্রতিষ্ঠান থেকে উচ্চশিক্ষা সম্পন্ন করেছেন এবং ছাত্র রাজনীতিতে সক্রিয় ছিলেন।" },
            { icon: <Award className="text-yellow-400"/>, title: "অর্জনসমূহ", desc: "এলাকার অবকাঠামোগত উন্নয়ন ও ডিজিটাল শিক্ষাব্যবস্থা প্রসারে বিশেষ অবদানের জন্য স্বীকৃত।" },
            { icon: <Target className="text-red-400"/>, title: "ভবিষ্যৎ লক্ষ্য", desc: "একটি স্মার্ট ও স্বনির্ভর নির্বাচনী এলাকা গড়ে তোলা যেখানে প্রতিটি নাগরিকের অধিকার নিশ্চিত হবে।" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-emerald-950/30 p-8 rounded-[2.5rem] border border-white/5 backdrop-blur-md"
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 italic">{item.title}</h3>
              <p className="text-white/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}