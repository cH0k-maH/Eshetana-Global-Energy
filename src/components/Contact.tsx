"use client";

import { useState, FormEvent } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  MessageSquare 
} from "lucide-react";
import { contactData } from "../data/contact";

export default function Contact() {
  const [isSent, setIsSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0B2E59]/10 text-[#0B2E59] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Corporate Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2E59] tracking-tight font-heading mb-4">
            Get In Touch With Our Team
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Reach out to our operational bases or executive liaison offices for general inquiries, 
            contractor partnerships, or immediate operational support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Office Locations & Contact Information [PLACEHOLDERS] */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Operational Offices Cards */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                Operating Offices & Bases
              </h3>

              {contactData.offices.map((office, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-xl border transition-all ${
                    office.isHeadquarters
                      ? "bg-[#071F3D] text-white border-slate-700 shadow-md"
                      : "bg-[#F4F6F8] text-slate-800 border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      office.isHeadquarters 
                        ? "bg-[#F26A21] text-white" 
                        : "bg-slate-200 text-slate-700"
                    }`}>
                      {office.type}
                    </span>
                    <span className="text-xs font-semibold opacity-75">{office.city.split("(")[0].trim()}</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-2.5">
                      <MapPin className={`w-4 h-4 flex-shrink-0 mt-0.5 ${office.isHeadquarters ? "text-[#F26A21]" : "text-[#0B2E59]"}`} />
                      <span className={office.isHeadquarters ? "text-slate-200" : "text-slate-600"}>{office.address}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Phone className={`w-4 h-4 flex-shrink-0 ${office.isHeadquarters ? "text-[#F26A21]" : "text-[#0B2E59]"}`} />
                      <span className={office.isHeadquarters ? "text-slate-200" : "text-slate-600"}>{office.phones.join(" / ")}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Mail className={`w-4 h-4 flex-shrink-0 ${office.isHeadquarters ? "text-[#F26A21]" : "text-[#0B2E59]"}`} />
                      <span className={office.isHeadquarters ? "text-slate-200" : "text-slate-600"}>{office.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Hours & Direct Lines */}
            <div className="p-6 rounded-xl bg-[#F4F6F8] border border-slate-200 space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#F26A21]" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B2E59]">Business Hours</h4>
                  <p className="text-xs text-slate-600">{contactData.workingHours}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7 bg-[#F4F6F8] p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-5 h-5 text-[#F26A21]" />
              <h3 className="text-xl font-bold text-[#0B2E59]">Send Us a Message</h3>
            </div>

            {isSent ? (
              <div className="p-8 text-center bg-white rounded-xl border border-slate-200">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-[#0B2E59] mb-2">Message Sent</h4>
                <p className="text-sm text-slate-600 mb-6">
                  Thank you for reaching out. A representative will contact you via email or phone shortly.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="px-5 py-2.5 rounded bg-[#0B2E59] text-white text-xs font-bold uppercase tracking-wider"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Your Name <span className="text-[#F26A21]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. David Williams"
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#F26A21] focus:ring-1 focus:ring-[#F26A21]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Email Address <span className="text-[#F26A21]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="e.g. d.williams@energy.com"
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#F26A21] focus:ring-1 focus:ring-[#F26A21]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+234 800 000 0000"
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#F26A21] focus:ring-1 focus:ring-[#F26A21]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="e.g. Energy Partners Ltd."
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#F26A21] focus:ring-1 focus:ring-[#F26A21]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Subject / Area of Interest <span className="text-[#F26A21]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="e.g. Asset Integrity Inquiries / Partnership Proposal"
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#F26A21] focus:ring-1 focus:ring-[#F26A21]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Message <span className="text-[#F26A21]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Please write your inquiry here..."
                    className="w-full p-3 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:border-[#F26A21] focus:ring-1 focus:ring-[#F26A21]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-7 py-3 rounded bg-[#0B2E59] hover:bg-[#123A68] text-white font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4 text-[#F26A21]" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
