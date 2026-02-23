"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Globe, ArrowLeft, Mail, ExternalLink, User } from 'lucide-react';
import Link from 'next/link';

export default function OfficeDetails() {
  return (
    <div className="min-h-screen bg-[#011612] pt-32 pb-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <Link href="/govt-offices" className="inline-flex items-center gap-2 text-white/40 hover:text-[#D4AF37] mb-10 transition-colors">
          <ArrowLeft size={18} /> ফিরে যান
        </Link>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* তথ্য কার্ড */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-emerald-950/40 p-8 rounded-[3rem] border border-white/10 backdrop-blur-xl">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-3xl flex items-center justify-center text-emerald-950 mb-6 shadow-xl shadow-[#D4AF37]/20">
                <Shield size={32} />
              </div>
              <h1 className="text-3xl font-black text-white italic mb-2 tracking-tighter">থানা / পুলিশ স্টেশন</h1>
              <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-8">নিরাপত্তা ও প্রশাসন</p>
              
              <div className="space-y-6">
                <DetailItem icon={<MapPin/>} label="ঠিকানা" value="উপজেলা সদর, মেইন রোড সংলগ্ন" />
                <DetailItem icon={<Phone/>} label="হটলাইন" value="017XXXXXXXX" />
                <DetailItem icon={<Mail/>} label="ইমেইল" value="oc.police@gov.bd" />
                <DetailItem icon={<Clock/>} label="অফিস সময়" value="২৪ ঘণ্টা খোলা" />
              </div>
              
              <button className="w-full mt-10 py-4 bg-white/5 hover:bg-[#D4AF37] hover:text-emerald-950 text-white font-black rounded-2xl border border-white/10 transition-all flex items-center justify-center gap-2 uppercase text-xs tracking-widest">
                সরাসরি কল করুন <ExternalLink size={14}/>
              </button>
            </motion.div>
          </div>

          {/* ম্যাপ এবং কর্মকর্তাদের তালিকা */}
          <div className="lg:col-span-2 space-y-8">
            {/* গুগল ম্যাপ এরিয়া */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="h-[400px] bg-emerald-900/20 rounded-[3rem] border border-white/10 overflow-hidden relative shadow-2xl">
              {/* ম্যাপ এমবেড করা যাবে এখানে */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.254272231177!2d90.37586224443152!3d23.79855080000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0cdca072d6f%3A0x6e760c4a45a6c1e1!2sPolice%20Station!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd" 
                className="w-full h-full grayscale opacity-70 contrast-125"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </motion.div>

            {/* কর্মকর্তাদের তালিকা */}
            <div className="grid md:grid-cols-2 gap-6">
               <OfficialCard name="মো: আব্দুর রহমান" role="অফিসার ইনচার্জ (OC)" phone="01711223344" />
               <OfficialCard name="সৈয়দ আশরাফ" role="তদন্ত কর্মকর্তা" phone="01711556677" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailItem({ icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="text-[#D4AF37] mt-1 group-hover:scale-110 transition-transform">{icon}</div>
      <div>
        <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">{label}</p>
        <p className="text-white text-sm font-medium">{value}</p>
      </div>
    </div>
  );
}

function OfficialCard({ name, role, phone }: { name: string, role: string, phone: string }) {
  return (
    <div className="bg-white/5 p-6 rounded-[2rem] border border-white/5 flex items-center gap-4">
      <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37]"><User size={20}/></div>
      <div>
        <h4 className="text-white font-bold text-sm">{name}</h4>
        <p className="text-[#D4AF37] text-[10px] uppercase font-black">{role}</p>
        <p className="text-white/30 text-[10px] mt-1">{phone}</p>
      </div>
    </div>
  );
}

function Shield({ size }: { size: number }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>; }