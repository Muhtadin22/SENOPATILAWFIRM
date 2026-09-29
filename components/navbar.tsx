"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Scale,
  Menu,
  X,
  ChevronDown,
  PhoneCall,
  ArrowRight,
  ShieldCheck,
  Building2,
  Gavel,
  Briefcase,
  MapPin,
  FileCheck2,
  Scale as ScaleIcon,
  Sparkles,
  ChevronRight
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // Data Area Praktik untuk Mega Menu
  const mainPractices = [
    {
      icon: Building2,
      title: "Hukum Perusahaan & M&A",
      desc: "Legal audit, transaksi saham, merger-akuisisi, & kepatuhan tata kelola.",
      href: "/layanan-hukum"
    },
    {
      icon: Gavel,
      title: "Litigasi Pidana & Perdata",
      desc: "Penanganan perkara Tipikor, wanprestasi, & sengketa perbankan.",
      href: "/layanan-hukum"
    },
    {
      icon: Briefcase,
      title: "Arbitrase & Kepailitan (PKPU)",
      desc: "Representasi sengketa SIAC/BANI & homologasi kepailitan industri.",
      href: "/layanan-hukum"
    },
    {
      icon: MapPin,
      title: "Pertanahan & HKI",
      desc: "Sengketa lahan komersial, HKI, & pendaftaran merek Pengadilan Niaga.",
      href: "/layanan-hukum"
    }
  ];

  const corporateServices = [
    {
      icon: FileCheck2,
      title: "Corporate Legal Retainer",
      desc: "Pendampingan hukum rutin bulanan perusahaan.",
      href: "/layanan-hukum"
    },
    {
      icon: ScaleIcon,
      title: "Legal Due Diligence (LDD)",
      desc: "Audit kepatuhan hukum transaksi investasi.",
      href: "/layanan-hukum"
    }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 text-slate-800 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="p-2.5 bg-sky-50 border border-sky-200 rounded-xl group-hover:bg-sky-700 group-hover:border-sky-700 transition-all duration-300 shadow-sm group-hover:scale-105">
              <Scale className="h-6 w-6 text-sky-800 group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-wider text-slate-900 uppercase leading-none">
                Senopati Rahmad
              </span>
              <span className="text-[10px] tracking-widest text-amber-600 uppercase font-sans font-semibold mt-1">
                & Partners • Legal Consultants
              </span>
            </div>
          </Link>

          {/* Navigasi Desktop */}
          <nav className="hidden md:flex items-center space-x-7 text-sm font-medium">
            <Link href="/" className="text-slate-700 hover:text-sky-800 transition-colors duration-200 py-2">
              Beranda
            </Link>
            
            <Link href="/tentang-kami" className="text-slate-700 hover:text-sky-800 transition-colors duration-200 py-2">
              Tentang Kami
            </Link>

            {/* =========================================================================
                MEGA MENU TRIGGER (LAYANAN HUKUM)
               ========================================================================= */}
            <div 
              className="py-6"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 text-slate-700 hover:text-sky-800 transition-colors duration-200 focus:outline-none font-medium"
              >
                <span>Layanan Hukum</span>
                <ChevronDown className={`h-4 w-4 text-sky-700 transition-transform duration-300 ${isMegaMenuOpen ? "rotate-180 text-amber-600" : ""}`} />
              </button>

              {/* MEGA MENU CONTAINER PANEL */}
              <div 
                className={`fixed top-[80px] left-0 right-0 w-full bg-white/98 backdrop-blur-2xl border-b border-slate-200 shadow-2xl transition-all duration-300 ease-out origin-top z-50 ${
                  isMegaMenuOpen 
                    ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto" 
                    : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="max-w-7xl mx-auto px-6 py-8">
                  <div className="grid grid-cols-12 gap-8 items-stretch">
                    
                    {/* Kolom 1 & 2: Area Praktik Utama (2 Columns Grid) */}
                    <div className="col-span-6 space-y-4 pr-6 border-r border-slate-100">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <span className="text-xs font-bold text-sky-800 uppercase tracking-widest flex items-center gap-2">
                          <Sparkles className="h-3.5 w-3.5 text-amber-500" /> Area Praktik Utama
                        </span>
                        <Link 
                          href="/layanan-hukum" 
                          className="text-xs text-amber-600 hover:text-amber-700 font-semibold flex items-center gap-1 hover:underline"
                        >
                          Lihat Semua Area <ChevronRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {mainPractices.map((practice, idx) => (
                          <Link
                            key={idx}
                            href={practice.href}
                            className="p-3.5 rounded-xl border border-slate-100 hover:border-sky-200 hover:bg-sky-50/50 transition-all duration-200 group flex items-start gap-3"
                          >
                            <div className="p-2.5 bg-sky-100/80 text-sky-800 rounded-lg group-hover:bg-sky-800 group-hover:text-white transition-colors shrink-0">
                              <practice.icon className="h-4 w-4" />
                            </div>
                            <div className="space-y-1">
                              <h4 className="text-xs font-bold text-slate-900 group-hover:text-sky-800 transition-colors">
                                {practice.title}
                              </h4>
                              <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed font-light">
                                {practice.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Kolom 3: Layanan Korporasi & Retainer */}
                    <div className="col-span-3 space-y-4 pr-6 border-r border-slate-100">
                      <div className="pb-2 border-b border-slate-100">
                        <span className="text-xs font-bold text-slate-900 uppercase tracking-widest">
                          Layanan Korporasi
                        </span>
                      </div>

                      <div className="space-y-3">
                        {corporateServices.map((service, idx) => (
                          <Link
                            key={idx}
                            href={service.href}
                            className="p-3 rounded-xl border border-slate-100 hover:border-amber-300 hover:bg-amber-50/40 transition-all duration-200 group flex items-start gap-3"
                          >
                            <div className="p-2 bg-amber-100 text-amber-800 rounded-lg group-hover:bg-amber-600 group-hover:text-white transition-colors shrink-0">
                              <service.icon className="h-4 w-4" />
                            </div>
                            <div className="space-y-0.5">
                              <h4 className="text-xs font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                                {service.title}
                              </h4>
                              <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed font-light">
                                {service.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Kolom 4: Exclusive Call to Action Card */}
                    <div className="col-span-3">
                      <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-2xl p-5 space-y-4 relative overflow-hidden h-full flex flex-col justify-between border border-slate-800 shadow-xl">
                        <div className="space-y-2 relative z-10">
                          <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20 inline-block">
                            Pendampingan Segera
                          </span>
                          <h4 className="font-serif text-sm font-bold text-white leading-snug">
                            Menghadapi Panggilan Perkara atau Sengketa Bisnis?
                          </h4>
                          <p className="text-[11px] text-slate-300 font-light leading-relaxed">
                            Tim advokat senior kami siap melakukan analisis awal kerangka hukum & pemeriksaan benturan kepentingan.
                          </p>
                        </div>

                        <div className="pt-2 relative z-10">
                          <Link
                            href="/kontak"
                            className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider transition shadow-md"
                          >
                            <PhoneCall className="h-3.5 w-3.5" /> Evaluasi Kasus
                          </Link>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <Link href="/tim-pengacara" className="text-slate-700 hover:text-sky-800 transition-colors duration-200 py-2">
              Tim Pengacara
            </Link>

            <Link href="/artikel" className="text-slate-700 hover:text-sky-800 transition-colors duration-200 py-2">
              Artikel & Riset
            </Link>

            <Link href="/kontak" className="text-slate-700 hover:text-sky-800 transition-colors duration-200 py-2">
              Kontak
            </Link>
          </nav>

          {/* CTA Konsultasi Desktop */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/kontak"
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all duration-300 shadow-md shadow-amber-500/20 hover:shadow-lg hover:-translate-y-0.5"
            >
              <PhoneCall className="h-4 w-4" />
              Konsultasi Hukum
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2.5 rounded-xl bg-slate-100/80 text-slate-800 hover:bg-sky-50 hover:text-sky-800 transition-all duration-300 active:scale-95"
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <span className={`absolute transition-all duration-300 transform ${isOpen ? "rotate-90 opacity-100 scale-100" : "rotate-0 opacity-0 scale-75"}`}>
                <X className="h-6 w-6 text-amber-600" />
              </span>
              <span className={`absolute transition-all duration-300 transform ${!isOpen ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-75"}`}>
                <Menu className="h-6 w-6 text-slate-800" />
              </span>
            </div>
          </button>

        </div>
      </div>

      {/* =========================================================================
          ANIMATED MOBILE & TABLET NAVIGATION DRAWER
         ========================================================================= */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out border-b border-slate-200/80 bg-white/98 backdrop-blur-2xl ${
          isOpen ? "max-h-[540px] opacity-100 shadow-2xl" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 pt-4 pb-8 space-y-3">
          
          <div className="space-y-1 divide-y divide-slate-100">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm font-semibold text-slate-800 hover:text-sky-800"
            >
              Beranda
            </Link>

            <Link
              href="/tentang-kami"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm font-semibold text-slate-800 hover:text-sky-800"
            >
              Tentang Kami
            </Link>

            {/* Mobile Collapsible Sub-Menu */}
            <div className="py-2">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex items-center justify-between py-1 text-sm font-semibold text-slate-800 hover:text-sky-800"
              >
                <span>Layanan Hukum</span>
                <ChevronDown className={`h-4 w-4 text-sky-700 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`} />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out pl-4 space-y-2 mt-2 border-l-2 border-sky-200 ${
                  isMobileServicesOpen ? "max-h-60 opacity-100 py-1" : "max-h-0 opacity-0"
                }`}
              >
                <Link
                  href="/layanan-hukum"
                  onClick={() => setIsOpen(false)}
                  className="block py-1.5 text-xs font-bold text-sky-800 hover:underline"
                >
                  Lihat Semua Area Praktik →
                </Link>
                {mainPractices.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-1.5 text-xs text-slate-600 hover:text-sky-800 font-medium"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/tim-pengacara"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm font-semibold text-slate-800 hover:text-sky-800"
            >
              Tim Pengacara
            </Link>

            <Link
              href="/artikel"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm font-semibold text-slate-800 hover:text-sky-800"
            >
              Artikel & Riset
            </Link>

            <Link
              href="/kontak"
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm font-semibold text-slate-800 hover:text-sky-800"
            >
              Kontak Sekretariat
            </Link>
          </div>

          <div className="pt-4">
            <Link
              href="/kontak"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2.5 w-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-lg shadow-amber-500/25 transition-all"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Hubungi Konsultasi Darurat</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <div className="flex items-center justify-center gap-2 mt-3 text-[11px] text-slate-500 font-medium">
              <ShieldCheck className="h-3.5 w-3.5 text-teal-600" />
              <span>Respon Maksimal 2 Jam Kerja • Attorney Privilege</span>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}