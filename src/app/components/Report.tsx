"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Camera, MapPin, User, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function ReportProblem() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // এখানে আপনার API Call হবে
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-2">আপনার অভিযোগ জমা হয়েছে!</h2>
          <p className="text-gray-500 mb-8">মাননীয় সংসদ সদস্যের কার্যালয় থেকে আপনার সাথে দ্রুত যোগাযোগ করা হবে। ধন্যবাদ।</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="w-full py-4 bg-[#064E3B] text-white rounded-2xl font-bold"
          >
            আবার হোম পেজে যান
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* Header */}
      <div className="bg-[#064E3B] pt-12 pb-24 px-6 rounded-b-[40px]">
        <h1 className="text-3xl font-black text-white mb-2 text-center">সমস্যা রিপোর্ট করুন</h1>
        <p className="text-green-100 text-center text-sm opacity-80">আপনার এলাকার সমস্যা সরাসরি মাননীয় এমপির কাছে জানান</p>
      </div>

      <div className="max-w-md mx-auto px-6 -mt-16">
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Personal Info Card */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-4">
              <User size={16} className="text-green-600" /> আপনার তথ্য
            </label>
            <div className="space-y-4">
              <input 
                required
                type="text" 
                placeholder="আপনার নাম" 
                className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-green-500 text-sm"
              />
              <input 
                required
                type="tel" 
                placeholder="মোবাইল নম্বর" 
                className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-green-500 text-sm"
              />
            </div>
          </div>

          {/* Location Info Card */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-4">
              <MapPin size={16} className="text-green-600" /> এলাকা / ঠিকানা
            </label>
            <select className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-green-500 text-sm appearance-none">
              <option>আপনার ইউনিয়ন নির্বাচন করুন</option>
              <option>ইউনিয়ন ১</option>
              <option>ইউনিয়ন ২</option>
              <option>ইউনিয়ন ৩</option>
            </select>
            <input 
              type="text" 
              placeholder="গ্রামের নাম" 
              className="w-full mt-4 p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-green-500 text-sm"
            />
          </div>

          {/* Problem Details Card */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-4">
              <MessageSquare size={16} className="text-green-600" /> সমস্যার বিবরণ
            </label>
            <textarea 
              rows={4}
              placeholder="বিস্তারিত লিখুন..." 
              className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-green-500 text-sm"
            ></textarea>
            
            <div className="mt-4 flex items-center gap-4 p-4 bg-green-50 rounded-2xl border-dashed border-2 border-green-200 cursor-pointer">
               <Camera className="text-green-600" />
               <span className="text-xs font-bold text-green-700">সমস্যার ছবি সংযুক্ত করুন (যদি থাকে)</span>
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full py-5 bg-[#064E3B] text-white rounded-[2rem] font-black text-lg shadow-xl shadow-green-900/20 flex items-center justify-center gap-3 active:scale-95 transition-all"
          >
            আবেদন জমা দিন <Send size={20} />
          </button>

        </form>
      </div>
    </div>
  );
}