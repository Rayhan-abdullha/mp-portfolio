"use client";
import { motion } from 'framer-motion';
import { Drill, Landmark, HardHat, Rotate3D } from 'lucide-react';

const projects = [
  { icon: <Rotate3D />, title: "পৌরসভা সংযোগ সড়ক", status: "৮৫%", color: "bg-blue-500", desc: "১৫ কি.মি. পাকা রাস্তা সংস্কার কাজ শেষ পর্যায়ে।" },
  { icon: <Landmark />, title: "আধুনিক অডিটোরিয়াম", status: "৪০%", color: "bg-[#D4AF37]", desc: "উপজেলা পর্যায়ে ৫০০ আসনের মাল্টিপারপাস ভবন।" },
  { icon: <HardHat />, title: "স্মার্ট স্কুল মডেলিং", status: "৯৫%", color: "bg-emerald-500", desc: "১০টি স্কুলে ডিজিটাল ল্যাব স্থাপন সম্পন্ন।" }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#011612] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter mb-16 mt-7 md:mt-10">উন্নয়ন প্রকল্পসমূহ</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-emerald-950/30 p-8 rounded-[3rem] border border-white/5 backdrop-blur-xl relative overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full" />
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-[#D4AF37] mb-8 border border-emerald-500/20">{p.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4 italic">{p.title}</h3>
              <p className="text-white/40 text-sm mb-8 leading-relaxed">{p.desc}</p>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-black uppercase text-[#D4AF37]">
                  <span>অগ্রগতি</span>
                  <span>{p.status}</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }} 
                    whileInView={{ width: p.status }} 
                    className={`h-full ${p.color}`} 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}