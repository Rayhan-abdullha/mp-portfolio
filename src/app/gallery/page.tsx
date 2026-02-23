"use client";
import { motion } from 'framer-motion';

const images = [
  { src: "https://i.imageupload.app/577a0b21eff3c429c702.jpeg", size: "col-span-2 row-span-2" },
  { src: "https://i.imageupload.app/577a0b21eff3c429c702.jpeg", size: "col-span-1" },
  { src: "https://i.imageupload.app/577a0b21eff3c429c702.jpeg", size: "col-span-1" },
  { src: "https://i.imageupload.app/577a0b21eff3c429c702.jpeg", size: "col-span-2" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#011612] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16 mt-10">
        <h1 className="text-5xl font-black text-white italic tracking-tighter mb-4">মিডিয়া গ্যালারি</h1>
        <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[200px]">
        {images.map((img, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 0.98, rotate: 1 }}
            className={`${img.size} relative rounded-[2.5rem] overflow-hidden border border-white/10 group cursor-pointer shadow-2xl`}
          >
            <img src={img.src} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-all" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}