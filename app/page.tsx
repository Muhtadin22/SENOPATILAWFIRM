import Image from "next/image";
import Link from "next/link";
import {
  Scale,
  ShieldCheck,
  Building2,
  Gavel,
  MapPin,
  Briefcase,
  PhoneCall,
  ArrowRight,
  Award,
  Clock,
  Lock,
  ChevronRight,
  Sparkles,
  HelpCircle,
  BadgeCheck,
  Mail,
  Landmark,
  Quote,
  History,
  CalendarCheck2
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function HomePage() {
  // Data Area Praktik Utama
  const practiceAreas = [
    {
      icon: Building2,
      title: "Hukum Perusahaan & Bisnis",
      desc: "Penyusunan & audit kontrak bisnis, merger-akuisisi (M&A), legal due diligence (LDD), serta kepatuhan tata kelola korporasi.",
      link: "/layanan-hukum"
    },
    {
      icon: Gavel,
      title: "Litigasi Pidana & Perdata",
      desc: "Advokasi di persidangan untuk perkara pidana khusus/tipikor, wanprestasi kontrak bisnis, dan sengketa perbankan.",
      link: "/layanan-hukum"
    },
    {
      icon: MapPin,
      title: "Pertanahan & HKI",
      desc: "Penyelesaian sengketa lahan komersial, tata ruang kawasan industri, serta pendaftaran & pembatalan merek di Pengadilan Niaga.",
      link: "/layanan-hukum"
    },
    {
      icon: Briefcase,
      title: "Arbitrase & Kepailitan (PKPU)",
      desc: "Representasi sengketa arbitrase internasional (SIAC/BANI) dan pengurusan restrukturisasi utang & kepailitan perusahaan.",
      link: "/layanan-hukum"
    }
  ];

  // Data Rekam Jejak Perkara (Case Highlights)
  const trackRecords = [
    {
      value: "USD 45 Juta",
      category: "Arbitrase Internasional",
      title: "Sengketa Kontrak Kontruksi & Energi di Singapore (SIAC)",
      desc: "Berhasil memenangkan gugatan arbitrase internasional mewakili konsorsium BUMN atas sengketa klaim pemutusan kontrak unilateral."
    },
    {
      value: "IDR 1.2 Triliun",
      category: "Restrukturisasi Utang (PKPU)",
      title: "Penyelesaian Kepailitan & Perdamaian Industri Manufaktur",
      desc: "Memimpin negosiasi perdamaian (Homologasi) dengan 14 kreditur perbankan nasional, menyelamatkan operasional perusahaan dan 3.000 tenaga kerja."
    },
    {
      value: "200 Hektar",
      category: "Pertanahan & Properti",
      title: "Advokasi Kepemilikan Lahan Kawasan Industri Strategis",
      desc: "Penyelesaian sengketa tumpang tindih sertifikat tanah dan pengamanan izin lokasi investasi asing (PMA) di Jawa Barat."
    }
  ];

  // Data Keunggulan Utama
  const features = [
    {
      icon: ShieldCheck,
      title: "100% Kerahasiaan Terjamin",
      desc: "Setiap komunikasi dan dokumen dilindungi penuh oleh jaminan Hak Kerahasiaan Advokat-Klien (Attorney-Client Privilege)."
    },
    {
      icon: Award,
      title: "Advokat Senior & Arbiter Terdaftar",
      desc: "Tim dipimpin oleh Doktor Hukum dengan rekam jejak memenangkan sengketa komersial bernilai triliunan rupiah."
    },
    {
      icon: Clock,
      title: "Respon Cepat Tindakan Darurat",
      desc: "Kesiapan pendampingan hukum cepat untuk situasi mendesak seperti panggilan kepolisian, penahanan, atau somasi ketat."
    },
    {
      icon: Lock,
      title: "Skema Biaya Transparan",
      desc: "Kejelasan opsi honorarium sejak awal (Flat Fee, Retainer, atau Success Fee) tanpa biaya tersembunyi."
    }
  ];

  // Data Testimoni Kepercayaan Klien
  const testimonials = [
    {
      quote: "Pendampingan dari tim Senopati Rahmad & Partners dalam sengketa arbitrase SIAC sangat taktis. Argumentasi yuridis mereka mengamankan aset perusahaan kami secara sempurna.",
      client: "Direktur Hukum & Kepatuhan",
      company: "Entitas BUMN Sektor Energi"
    },
    {
      quote: "Respon cepat dan ketajaman audit legal due diligence dari tim advokat Senior sangat membantu kelancaran proses akuisisi anak perusahaan kami bernilai ratusan miliar.",
      client: "Chief Executive Officer",
      company: "Grup Perusahaan Manufaktur Multinasional"
    }
  ];

  // Data FAQ
  const faqs = [
    {
      q: "Bagaimana prosedur konsultasi hukum pertama di Senopati Rahmad & Partners?",
      a: "Anda dapat menghubungi sekretariat kami langsung melalui WhatsApp atau panggilan telepon. Kami melakukan pemeriksaan benturan kepentingan (Conflict Check) sebelum menjadwalkan sesi konsultasi tatap muka atau vicon."
    },
    {
      q: "Apakah seluruh informasi perkara yang disampaikan terjamin kerahasiaannya?",
      a: "Ya. Berdasarkan Pasal 19 UU No. 18 Tahun 2003 tentang Advokat, seluruh dokumen dan fakta yang disampaikan klien bersifat rahasia dan terlindungi hukum."
    },
    {
      q: "Bagaimana penentuan struktur honorarium advokat di firma ini?",
      a: "Biaya ditentukan transparan berdasarkan kompleksitas perkara dan alokasi tim. Kami menyediakan opsi Retainer bulanan untuk korporasi, serta Flat Fee atau Success Fee untuk kasus litigasi khusus."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-sky-500 selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* =========================================================================
            1. HERO SECTION
           ========================================================================= */}
        <section className="relative py-24 lg:py-36 bg-gradient-to-b from-sky-50/90 via-white to-slate-50 border-b border-sky-100 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Headline & CTA */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 text-sky-900 text-xs font-semibold uppercase tracking-widest shadow-sm">
                  <Sparkles className="h-4 w-4 text-sky-700" />
                  <span>Advokasi Presisi & Perlindungan Aset Strategis</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Kepastian Hukum,{" "}
                  <span className="text-sky-800">Perlindungan Aset,</span>{" "}
                  & Solusi Strategis.
                </h1>

                <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  **Senopati Rahmad & Partners** memberikan pendampingan hukum berstandar internasional bagi entitas korporasi, BUMN, dan individu dalam menghadapi sengketa komersial bernilai tinggi.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link
                    href="/kontak"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <PhoneCall className="h-4 w-4" /> Hubungi Sekretariat Hukum
                  </Link>

                  <Link
                    href="/layanan-hukum"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-sky-300 text-slate-700 font-semibold px-6 py-4 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    Jelajahi Area Praktik <ArrowRight className="h-4 w-4 text-sky-700" />
                  </Link>
                </div>

                {/* Metrics Bar */}
                <div className="pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-center lg:text-left">
                  <div>
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-sky-700">22+</span>
                    <p className="text-[11px] text-slate-500 uppercase tracking-widest mt-0.5 font-medium">Tahun Pengalaman</p>
                  </div>
                  <div>
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-600">500+</span>
                    <p className="text-[11px] text-slate-500 uppercase tracking-widest mt-0.5 font-medium">Sengketa Selesai</p>
                  </div>
                  <div>
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-teal-700">IDR 5T+</span>
                    <p className="text-[11px] text-slate-500 uppercase tracking-widest mt-0.5 font-medium">Aset Terlindungi</p>
                  </div>
                </div>

              </div>

              {/* Right Column: Profile Frame */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md aspect-[3/4] rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-sky-900/10 group hover:shadow-3xl transition-all duration-500">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
                    alt="Dr. Rahmad Senopati, S.H., M.H."
                    fill
                    priority
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-sky-100 shadow-xl space-y-1">
                    <p className="font-serif text-base font-bold text-slate-900">Dr. Rahmad Senopati, S.H., M.H.</p>
                    <p className="text-xs text-amber-600 font-semibold uppercase tracking-wider">Managing Partner & Founder</p>
                    <p className="text-[11px] text-slate-500 line-clamp-1">Doktor Hukum UI • Spesialis Arbitrase & Tipikor</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* =========================================================================
            2. TRUST & ACCREDITATION BAR
           ========================================================================= */}
        <section className="py-12 bg-slate-900 text-white border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left space-y-1 shrink-0">
                <span className="text-xs text-amber-400 font-bold uppercase tracking-widest flex items-center justify-center lg:justify-start gap-1.5">
                  <BadgeCheck className="h-4 w-4" /> Legal Credential Guarantee
                </span>
                <p className="font-serif text-lg font-bold text-white">Lisensi & Keanggotaan Resmi Advokat</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full lg:w-auto text-center">
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                  <span className="font-serif text-base font-bold text-amber-400 block">PERADI</span>
                  <span className="text-[10px] text-slate-300">Advokat Terdaftar</span>
                </div>
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                  <span className="font-serif text-base font-bold text-amber-400 block">AKPI</span>
                  <span className="text-[10px] text-slate-300">Kurator & Pengurus</span>
                </div>
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                  <span className="font-serif text-base font-bold text-amber-400 block">HKHPM</span>
                  <span className="text-[10px] text-slate-300">Konsultan Pasar Modal</span>
                </div>
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                  <span className="font-serif text-base font-bold text-amber-400 block">SIAC / BANI</span>
                  <span className="text-[10px] text-slate-300">Arbiter Terdaftar</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* =========================================================================
            3. CORE PRACTICE AREAS GRID
           ========================================================================= */}
        <section className="py-20 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs text-amber-600 uppercase tracking-widest font-bold">Layanan Utama</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">Area Praktik Hukum Spesialis</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Pendampingan komprehensif yang dirancang khusus untuk mitigasi risiko bisnis dan penyelesaian sengketa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {practiceAreas.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 hover:border-sky-300 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="p-3.5 bg-sky-100/80 text-sky-800 border border-sky-200 rounded-xl w-fit group-hover:bg-sky-700 group-hover:text-white transition-colors duration-300 shadow-sm">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-200/60">
                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-800 uppercase tracking-wider transition"
                    >
                      Pelajari Selengkapnya <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* =========================================================================
            4. REKAM JEJAK & HIGHLIGHT KASUS
           ========================================================================= */}
        <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs text-amber-400 font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
                <History className="h-4 w-4" /> Rekam Jejak
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">Studi Perkara & Highlight Sengketa</h2>
              <p className="text-slate-300 text-xs sm:text-sm font-light">
                Contoh penyelesaian perkara bernilai tinggi yang berhasil ditangani tim advokat kami.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {trackRecords.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-amber-500/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-amber-400 font-serif text-2xl font-bold block">{item.value}</span>
                    <span className="text-[10px] text-sky-400 bg-sky-950/80 border border-sky-800 px-2.5 py-1 rounded uppercase tracking-wider font-semibold inline-block">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-base font-bold text-white leading-snug">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">{item.desc}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-500 font-mono">
                    *Identitas spesifik disesuaikan dengan prinsip kerahasiaan klien.
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* =========================================================================
            5. WHY CHOOSE US
           ========================================================================= */}
        <section className="py-20 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs text-teal-700 uppercase tracking-widest font-bold">Komitmen Pelayanan</span>
              <h2 className="font-serif text-3xl font-bold text-slate-900">Mengapa Memilih Senopati Rahmad & Partners?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:border-amber-400 hover:shadow-md transition-all duration-300 space-y-3"
                >
                  <div className="p-3 bg-amber-100/80 text-amber-700 border border-amber-200 rounded-xl w-fit">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-slate-900">{feature.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">{feature.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* =========================================================================
            6. MANAGING PARTNER EXECUTIVE SPOTLIGHT
           ========================================================================= */}
        <section className="py-20 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                <div className="lg:col-span-5 relative aspect-[3/4] max-w-md mx-auto w-full rounded-2xl overflow-hidden border-2 border-amber-500/40">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
                    alt="Dr. Rahmad Senopati, S.H., M.H."
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                      Managing Partner & Founder
                    </span>
                    <h2 className="font-serif text-3xl font-bold text-white">Dr. Rahmad Senopati, S.H., M.H., FCArb.</h2>
                    <p className="text-xs text-slate-400 font-mono">PERADI No. 09/12839/ADV • Kurator AKPI No. 142</p>
                  </div>

                  <blockquote className="border-l-4 border-amber-500 pl-4 py-2 bg-slate-900/90 rounded-r-xl text-slate-200 text-xs sm:text-sm italic leading-relaxed">
                    &quot;Strategi hukum terbaik tidak hanya memenangkan persidangan, tetapi juga menjaga keberlangsungan reputasi bisnis dan aset klien jangka panjang.&quot;
                  </blockquote>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    Berpengalaman lebih dari 22 tahun memimpin sengketa litigasi korporasi, arbitrase komersial, dan pendampingan perkara pidana khusus di tingkat Mahkamah Agung maupun forum internasional.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-4">
                    <Link
                      href="/tim-pengacara"
                      className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition shadow-md"
                    >
                      Lihat Seluruh Profil Tim Advokat <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>


        {/* =========================================================================
            7. KARTU INFORMASI KONTAK & KANTOR (TANPA FORM)
           ========================================================================= */}
        <section className="py-20 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs text-sky-700 font-bold uppercase tracking-widest">Konsultasi Langsung</span>
              <h2 className="font-serif text-3xl font-bold text-slate-900">Hubungi Sekretariat Hukum Kami</h2>
              <p className="text-xs sm:text-sm text-slate-600 font-light">
                Silakan hubungi tim sekretariat kami untuk menjadwalkan konsultasi tatap muka atau evaluasi awal dokumen perkara.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Alamat Kantor */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-sky-300 transition">
                <div className="p-3.5 bg-sky-100 text-sky-800 rounded-xl w-fit">
                  <Landmark className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">Kantor Pusat Jakarta</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Financial Club Tower, Lt. 18<br />
                  Jl. Jend. Sudirman Kav. 52-53, SCBD<br />
                  Jakarta Selatan, DKI Jakarta 12190
                </p>
                <div className="pt-2">
                  <span className="text-[11px] text-amber-700 font-semibold">Senin - Jumat (08.30 - 18.00 WIB)</span>
                </div>
              </div>

              {/* Card 2: Hotline WhatsApp */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-amber-400 transition">
                <div className="p-3.5 bg-amber-100 text-amber-800 rounded-xl w-fit">
                  <PhoneCall className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">Hotline & WhatsApp</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Layanan komunikasi cepat untuk keadaan darurat hukum atau permohonan pendampingan segera.
                </p>
                <div className="pt-2">
                  <a
                    href="https://wa.me/6281198765432"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 hover:text-amber-700 uppercase tracking-wider"
                  >
                    +62 811-9876-5432 <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Card 3: Email & Sekretariat */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-teal-400 transition">
                <div className="p-3.5 bg-teal-100 text-teal-800 rounded-xl w-fit">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">Email Resmi</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Kirimkan berkas ringkas atau penawaran kerja sama legal retainer langsung ke email resmi firma.
                </p>
                <div className="pt-2">
                  <a
                    href="mailto:secretariat@senopatirahmadlaw.com"
                    className="inline-flex items-center gap-2 text-xs font-bold text-teal-700 hover:text-teal-800 uppercase tracking-wider"
                  >
                    secretariat@senopatirahmadlaw.com <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* =========================================================================
            8. TESTIMONIALS SECTION
           ========================================================================= */}
        <section className="py-20 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs text-amber-600 font-bold uppercase tracking-widest">Kepercayaan Korporasi</span>
              <h2 className="font-serif text-3xl font-bold text-slate-900">Tanggapan Klien Kami</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-200/80 space-y-4 relative">
                  <Quote className="h-8 w-8 text-amber-500/30 absolute top-6 right-6" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic relative z-10">
                    &quot;{item.quote}&quot;
                  </p>
                  <div className="pt-2 border-t border-slate-200/80">
                    <p className="font-serif text-sm font-bold text-slate-900">{item.client}</p>
                    <p className="text-xs text-sky-700 font-medium">{item.company}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* =========================================================================
            9. FAQ ACCORDION SECTION
           ========================================================================= */}
        <section className="py-20 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            
            <div className="text-center space-y-2">
              <span className="text-xs text-sky-700 font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
                <HelpCircle className="h-4 w-4" /> Pertanyaan Sering Diajukan
              </span>
              <h2 className="font-serif text-3xl font-bold text-slate-900">Informasi Konsultasi Hukum</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 space-y-2 shadow-sm">
                  <h3 className="font-serif text-base font-bold text-slate-900 flex items-start gap-3">
                    <span className="text-amber-600 font-sans text-sm font-bold mt-0.5">Q.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed pl-7 font-light">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* =========================================================================
            10. FINAL CALL TO ACTION (CTA BANNER)
           ========================================================================= */}
        <section className="py-20 bg-gradient-to-r from-sky-700 via-sky-800 to-teal-800 text-white text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
            <Scale className="h-12 w-12 text-amber-300 mx-auto" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Solusi Hukum Terbaik Dimulai dari Diskusi Pertama.
            </h2>
            <p className="text-sky-100 text-xs sm:text-sm max-w-xl mx-auto font-light">
              Hubungi tim sekretariat hukum kami untuk menjadwalkan konsultasi tatap muka di kantor Jakarta atau secara daring.
            </p>
            <div className="pt-2">
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-wider shadow-xl transition-all duration-300 hover:scale-105"
              >
                Jadwalkan Konsultasi Sekarang <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}