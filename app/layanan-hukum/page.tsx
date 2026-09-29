import Link from "next/link";
import {
  Scale,
  Building2,
  Gavel,
  Award,
  MapPin,
  Users,
  Briefcase,
  FileSignature,
  ArrowRight,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  FileSearch,
  Search,
  Layers,
  Sparkles,
  Coins,
  Lock,
  Workflow,
  Clock,
  ChevronRight
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function LayananHukumPage() {
  // 4 Pilar Utama Praktik Hukum beserta Sub-Spesialisasi Detail
  const practicePillars = [
    {
      id: "korporasi-bisnis",
      pillar: "PILAR I",
      icon: Building2,
      category: "Hukum Perusahaan, Transaksi & Bisnis",
      tagline: "Proteksi Yuridis untuk Ekosistem Komersial & Investasi",
      description:
        "Pendampingan hukum menyeluruh untuk memastikan seluruh langkah strategis perusahaan berjalan selaras dengan regulasi nasional maupun internasional serta terhindar dari potensi gugatan pasca-transaksi.",
      subServices: [
        "Merger, Akuisisi (M&A) & Joint Venture",
        "Uji Tuntas Hukum (Legal Due Diligence / LDD)",
        "Penyusunan & Review Kontrak Bisnis Lintas Negara",
        "Kepatuhan Tata Kelola Perusahaan (Corporate Governance & ESG)",
        "Pasar Modal, Emisi Obligasi & IPO Check",
        "Restrukturisasi Utang & Kepailitan / PKPU"
      ]
    },
    {
      id: "litigasi-sengketa",
      pillar: "PILAR II",
      icon: Gavel,
      category: "Litigasi Pidana, Perdata & Arbitrase",
      tagline: "Advokasi Agresif & Terukur di Dalam Maupun Luar Pengadilan",
      description:
        "Representasi hukum berdedikasi tinggi dalam menangani sengketa kompleks, tindak pidana bisnis/korporasi, hingga penyelesaian forum arbitrase independen.",
      subServices: [
        "Litigasi Pidana Khusus (Tipikor, TPPU & Perbankan)",
        "Sengketa Perdata, Wanprestasi & Perbuatan Melawan Hukum (PMH)",
        "Arbitrase Nasional (BANI) & Internasional (SIAC / ICC)",
        "Sengketa Hubungan Industrial (PHI / Ketenagakerjaan)",
        "Sengketa Pajak & Pengadilan Tata Usaha Negara (PTUN)",
        "Eksekusi Putusan Pengadilan & Jaminan Fidusia"
      ]
    },
    {
      id: "aset-properti-hki",
      pillar: "PILAR III",
      icon: MapPin,
      category: "Pertanahan, Properti & Kekayaan Intelektual",
      tagline: "Pengamanan Aset Vital & Hak Hak Cipta Komersial",
      description:
        "Legal audit komprehensif terhadap aset fisik immovable maupun insentif tak berwujud (intangible assets) untuk menjamin kepemilikan mutlak dan proteksi lisensi.",
      subServices: [
        "Sengketa Kepemilikan Lahan & Pembebasan Tanah Komersial",
        "Legal Audit Aset Properti & Perizinan Tata Ruang (PBB/IMB/PBG)",
        "Pendaftaran & Perlindungan Merek Dagang, Paten & Hak Cipta",
        "Litigasi Pembatalan Merek & Penindakan Pelanggaran HKI",
        "Penyusunan Perjanjian Lisensi & Francise (Waralaba)",
        "Sengketa Rahasia Dagang & Transfer Teknologi"
      ]
    },
    {
      id: "private-client",
      pillar: "PILAR IV",
      icon: Briefcase,
      category: "Private Client & Hukum Keluarga Eksklusif",
      tagline: "Layanan Konfidensial untuk Tokoh & High-Net-Worth Individuals",
      description:
        "Pendampingan privat dengan kerahasiaan absolut untuk perlindungan kekayaan keluarga, perencanaan waris, serta masalah hukum personal skala sensitif.",
      subServices: [
        "Perencanaan Struktur Waris & Penyelamatan Aset Keluarga",
        "Penyelesaian Sengketa Pembagian Harta Bersama (Gono-Gini)",
        "Perjanjian Pra-Nikah & Pasca-Nikah Lintas Kewarganegaraan",
        "Perlindungan Hukum Reputasi Tokoh Publik / Defamation",
        "Konsultasi Hukum Privat Pribadi (Personal Retainer)",
        "Penyelesaian Konflik Internal Pemegang Saham Keluarga"
      ]
    }
  ];

  // Metodologi 5 Tahap Penanganan Perkara
  const workflowSteps = [
    {
      step: "01",
      title: "Konsultasi & Audit Yuridis Awal",
      desc: "Pengumpulan bukti, identifikasi fakta hukum, dan studi dokumen awal secara konfidensial untuk menentukan legal standing."
    },
    {
      step: "02",
      title: "Peta Risiko & Formulasi Strategi",
      desc: "Penyusunan Master Legal Strategy, analisis potensi risiko gugatan balik, serta pemilihan jalur peradilan (non-litigasi vs litigasi)."
    },
    {
      step: "03",
      title: "Penyusunan Dokumen Hukum Presisi",
      desc: "Formulasi somasi, legal opinion, berkas gugatan, memori banding/kasasi, atau draft perjanjian komersial berstandar internasional."
    },
    {
      step: "04",
      title: "Tindakan Advokasi & Negosiasi Taktis",
      desc: "Pendampingan langsung pada proses penyidikan, persidangan di pengadilan, atau negosiasi meja bundar demi hasil optimal."
    },
    {
      step: "05",
      title: "Eksekusi Putusan & Evaluasi Pasca-Perkara",
      desc: "Pengawalan eksekusi hak-hak klien hingga tuntas serta penyusunan panduan mitigasi agar kasus serupa tidak berulang."
    }
  ];

  // Model Skema Kerjasama / Retainer
  const retainerModels = [
    {
      title: "Ad-Hoc / Project-Based",
      badge: "Sesuai Kebutuhan Kasus",
      description: "Penanganan fokus untuk satu perkara litigasi spesifik, transaksi M&A, atau pembuatan kontrak tunggal.",
      features: [
        "Biaya tetap transparan di awal (Fixed Fee / Capped Fee)",
        "Tim khusus yang ditunjuk sesuai domain kasus",
        "Laporan perkembangan berkala (Progress Report)",
        "Ideal untuk individu atau proyek perusahaan spontan"
      ]
    },
    {
      title: "Corporate Legal Retainer",
      badge: "Paling Populer untuk Bisnis",
      description: "Layanan penasihat hukum tetap bulanan untuk mendampingi seluruh operasional harian korporasi Anda.",
      features: [
        "Alokasi jam konsultasi tak terbatas per bulan",
        "Prioritas respon cepat (SLA < 2 Jam)",
        "Free review kontrak bisnis & legal opinion rutin",
        "Diskon khusus untuk penanganan perkara litigasi pengadilan"
      ]
    },
    {
      title: "Success-Fee Based Litigation",
      badge: "Khusus Sengketa Komersial",
      description: "Skema pembiayaan hukum yang diselaraskan dengan tingkat keberhasilan pengembalian aset/ganti rugi.",
      features: [
        "Down payment operasional awal yang fleksibel",
        "Persentase success fee disepakati transparan di depan",
        "Orientasi penuh pada pencapaian hasil eksekusi riil",
        "Ideal untuk sengketa klaim utang-piutang skala besar"
      ]
    }
  ];

  // Pertanyaan Umum (FAQ)
  const faqs = [
    {
      q: "Bagaimana kriteria penentuan biaya jasa hukum (Legal Fee) di Senopati Rahmad & Partners?",
      a: "Komposisi biaya dihitung secara transparan berdasarkan kompleksitas perkara, estimasi durasi penanganan, tingkat risiko, serta model kerjasama yang dipilih (Retainer Bulanan, Fixed Fee Per Kasus, atau Success Fee). Seluruh skema disepakati dalam Surat Perjanjian Jasa Hukum (SPJH) sebelum tindakan hukum dimulai."
    },
    {
      q: "Bagaimana kerahasiaan dokumen dan data sensitif perusahaan kami dijamin?",
      a: "Setiap advokat dan staf pendukung kami terikat oleh Sumpah Advokat dan Kode Etik Advokat Indonesia, serta menandatangani Non-Disclosure Agreement (NDA) ketat. Kami juga menerapkan enkripsi digital berstandar keamanan tinggi dalam pengelolaan arsip berkas perkara."
    },
    {
      q: "Apakah Senopati Rahmad & Partners melayani kasus di luar wilayah Jabodetabek atau Luar Negeri?",
      a: "Ya. Jaringan advokat kami memiliki izin praktik resmi di seluruh wilayah hukum Republik Indonesia. Untuk perkara internasional, kami bekerjasama dengan mitra jaringan firma hukum global dan lembaga arbitrase internasional (seperti SIAC Singapura dan ICC Paris)."
    },
    {
      q: "Berapa lama estimasi waktu yang dibutuhkan dari konsultasi awal hingga tindakan hukum pertama?",
      a: "Untuk kasus darurat (seperti panggilan penyidikan atau somasi mendesak), tim advokat dapat diterjunkan dalam kurun waktu 1x24 jam. Untuk audit legal atau penyusunan draft perjanjian, analisis awal diselesaikan rata-rata dalam 3 hingga 5 hari kerja."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-amber-500 selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* =========================================================================
            1. HERO SECTION EKSKLUSIF (BANNER LAYANAN HUKUM)
           ========================================================================= */}
        <section className="relative py-28 lg:py-36 bg-slate-50 border-b border-slate-200 overflow-hidden">
          {/* Ambient Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

          {/* Legal Watermark Emblem */}
          <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-[0.03] text-sky-900 pointer-events-none hidden lg:block">
            <Scale className="w-[600px] h-[600px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-sky-200 text-sky-800 text-xs font-semibold uppercase tracking-widest mb-6 shadow-sm">
              <Layers className="h-4 w-4 text-amber-600" />
              <span>Komprehensif • Presisi • Berintegritas</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
              Spektrum Layanan Hukum{" "}
              <span className="text-sky-800">
                Tingkat Tinggi & Strategis.
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed max-w-3xl mx-auto">
              Setiap persoalan hukum membutuhkan formulasi pendekatan yang unik. <strong className="font-semibold text-slate-900">Senopati Rahmad & Partners</strong> menghadirkan kombinasi kepakaran akademik, penguasaan peta peradilan, dan kejelian bisnis untuk memastikan kepentingan hukum Anda terlindungi secara mutlak.
            </p>

            {/* Anchor Links Navigasi Cepat */}
            <div className="mt-10 flex flex-wrap justify-center gap-3 text-xs font-medium">
              <a href="#pilar-praktik" className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-sky-800 hover:border-sky-300 shadow-sm transition">
                Area Praktik Utama
              </a>
              <a href="#metodologi" className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-sky-800 hover:border-sky-300 shadow-sm transition">
                Metodologi Penanganan
              </a>
              <a href="#skema-kerjasama" className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-sky-800 hover:border-sky-300 shadow-sm transition">
                Skema Retainer & Biaya
              </a>
              <a href="#faq" className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-sky-800 hover:border-sky-300 shadow-sm transition">
                FAQ Layanan
              </a>
            </div>
          </div>
        </section>


        {/* =========================================================================
            2. SHOWCASE PILAR PRAKTIK UTAMA (DETAIL SHOWCASE WITH SUB-SERVICES)
           ========================================================================= */}
        <section id="pilar-praktik" className="py-24 bg-white border-b border-slate-200/80 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs text-sky-800 uppercase tracking-widest font-bold">
                Keahlian Khusus
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">4 Pilar Utama Area Praktik</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Rincian cakupan hukum profesional yang ditangani langsung oleh Advokat Partner spesialis di bidangnya.
              </p>
            </div>

            <div className="space-y-12">
              {practicePillars.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-8 lg:p-10 hover:border-sky-300 hover:shadow-lg transition duration-300 shadow-sm relative overflow-hidden group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Header Pilar & Deskripsi */}
                    <div className="lg:col-span-5 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-sky-100 text-sky-800 border border-sky-200 px-3 py-1 rounded-md">
                          {item.pillar}
                        </span>
                        <div className="p-2 bg-white rounded-lg text-sky-800 border border-slate-200 shadow-sm">
                          <item.icon className="h-6 w-6" />
                        </div>
                      </div>

                      <h3 className="font-serif text-2xl font-bold text-slate-900 group-hover:text-sky-800 transition">
                        {item.category}
                      </h3>

                      <p className="text-xs text-amber-600 font-bold italic">
                        &quot;{item.tagline}&quot;
                      </p>

                      <p className="text-xs text-slate-600 leading-relaxed font-light">
                        {item.description}
                      </p>

                      <div className="pt-2">
                        <Link
                          href="/kontak"
                          className="inline-flex items-center gap-2 text-xs font-bold text-sky-800 hover:text-sky-900 uppercase tracking-wider"
                        >
                          Konsultasikan Area Ini <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Grid Sub-Layanan Detail */}
                    <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                      <h4 className="text-xs font-serif font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
                        Cakupan Sub-Layanan Spesifik:
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {item.subServices.map((sub, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                            <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                            <span>{sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* =========================================================================
            3. METODOLOGI & ALUR PENANGANAN KASUS (5-STEP WORKFLOW)
           ========================================================================= */}
        <section id="metodologi" className="py-24 bg-slate-50 border-b border-slate-200/80 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs text-amber-600 uppercase tracking-widest font-bold">
                Standar Operasional
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">Metodologi & Alur Penanganan Perkara</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Prosedur kerja terstruktur untuk menjamin transparansi, ketepatan analisis, dan eksekusi hukum tanpa cela.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
              {workflowSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between relative group hover:border-sky-300 hover:shadow-md transition duration-300"
                >
                  <div className="space-y-3">
                    <span className="font-serif text-3xl font-bold text-slate-300 group-hover:text-amber-600 transition">
                      {step.step}
                    </span>
                    <h3 className="font-serif text-base font-bold text-slate-900 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>

                  {idx < workflowSteps.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                      <ChevronRight className="h-6 w-6" />
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* =========================================================================
            4. SKEMA KERJASAMA & TRANSPARANSI BIAYA (RETAINER & PROJECT FEE)
           ========================================================================= */}
        <section id="skema-kerjasama" className="py-24 bg-white border-b border-slate-200/80 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs text-sky-800 uppercase tracking-widest font-bold">
                Model Engagement Transparan
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">Skema Opsi Kerjasama Jasa Hukum</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Pilihan skema finansial yang fleksibel dan terprediksi sesuai kebutuhan operasional bisnis maupun perkara personal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {retainerModels.map((model, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50/80 border border-slate-200 rounded-2xl p-8 flex flex-col justify-between hover:border-sky-300 hover:shadow-lg transition duration-300 shadow-sm relative group"
                >
                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-md">
                        {model.badge}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-slate-900 mt-4">{model.title}</h3>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">{model.description}</p>
                    </div>

                    <div className="border-t border-slate-200 pt-6 space-y-3">
                      <h4 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">Keunggulan Skema:</h4>
                      {model.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 mt-8 border-t border-slate-200">
                    <Link
                      href="/kontak"
                      className="block text-center bg-slate-900 hover:bg-sky-800 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition duration-200 shadow-sm"
                    >
                      Minta Penawaran Skema
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* =========================================================================
            5. KOMPARASI STRATEGIS: PENDAMPINGAN ADVOKAT VS PENANGANAN MANDIRI
           ========================================================================= */}
        <section className="py-24 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs text-amber-600 uppercase tracking-widest font-bold">
                  Mitigasi Risiko
                </span>
                <h2 className="font-serif text-3xl font-bold text-slate-900 leading-tight">
                  Mengapa Pendampingan Advokat Profesional Sangat Krusial?
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  Kekeliruan kecil dalam perumusan pasal klausul perjanjian atau kesalahan prosedur acara di persidangan dapat berakibat pada hilangnya hak hukum secara permanen serta timbulnya kerugian finansial yang tak terukur.
                </p>

                <div className="p-4 bg-white border border-amber-200 rounded-xl flex items-start gap-3 shadow-sm">
                  <ShieldAlert className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-700 italic">
                    &quot;Pencegahan sengketa melalui legal audit dini membutuhkan biaya jauh lebih efisien dibandingkan penanganan kasus yang telah masuk ke tahap litigasi persidangan.&quot;
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md">
                <h3 className="font-serif text-base font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3">
                  Matriks Perbandingan Pendampingan Hukum
                </h3>

                <div className="space-y-4 text-xs">
                  <div className="grid grid-cols-12 gap-4 pb-3 border-b border-slate-200 font-bold text-slate-900 uppercase font-mono text-[10px]">
                    <div className="col-span-4">Aspek Perkara</div>
                    <div className="col-span-4 text-rose-600">Tanpa Advokat Senior</div>
                    <div className="col-span-4 text-emerald-700">Dengan Senopati Rahmad</div>
                  </div>

                  {[
                    {
                      aspect: "Analisis Klausul Kontrak",
                      without: "Rentan celah hukum & pasal jebakan",
                      with: "Di-audit presisi, proteksi hak mutlak"
                    },
                    {
                      aspect: "Pendampingan Penyidikan",
                      without: "Berisiko intimidasi & salah BAP",
                      with: "Hak konstitusional terjamin 100%"
                    },
                    {
                      aspect: "Strategi Persidangan",
                      without: "Reaktif & bukti tidak terstruktur",
                      with: "Taktis, didukung yurisprudensi kuat"
                    },
                    {
                      aspect: "Eksekusi Hak / Aset",
                      without: "Proses tersendat & memakan waktu",
                      with: "Pengawalan eksekusi hingga tuntas"
                    }
                  ].map((row, rIdx) => (
                    <div key={rIdx} className="grid grid-cols-12 gap-4 py-2 border-b border-slate-100 text-slate-700">
                      <div className="col-span-4 font-bold text-slate-900">{row.aspect}</div>
                      <div className="col-span-4 text-rose-600 font-medium">{row.without}</div>
                      <div className="col-span-4 text-emerald-700 font-bold">{row.with}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* =========================================================================
            6. PERTANYAAN UMUM LAYANAN HUKUM (FAQ ACCORDION MATRIX)
           ========================================================================= */}
        <section id="faq" className="py-24 bg-white border-b border-slate-200/80 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center space-y-3">
              <span className="text-xs text-sky-800 uppercase tracking-widest font-bold">
                Informasi Penting
              </span>
              <h2 className="font-serif text-3xl font-bold text-slate-900">Pertanyaan Sering Diajukan (FAQ)</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Jawaban langsung atas pertanyaan teknis mengenai prosedur pendampingan hukum dan operasional kami.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, fIdx) => (
                <div
                  key={fIdx}
                  className="bg-slate-50/80 p-6 rounded-xl border border-slate-200 space-y-3 hover:border-sky-200 transition shadow-sm"
                >
                  <h3 className="font-serif text-base font-bold text-slate-900 flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light pl-8">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* =========================================================================
            7. EXCLUSIVE CALL TO ACTION (CTA)
           ========================================================================= */}
        <section className="py-20 bg-slate-900 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
            <ShieldCheck className="h-12 w-12 text-amber-500 mx-auto" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Lindungi Hak Hukum & Masa Depan Bisnis Anda Hari Ini.
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
              Tim advokat senior kami siap memberikan studi kelayakan awal untuk menentukan opsi hukum terbaik yang tersedia bagi Anda.
            </p>
            <div className="pt-2">
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-wider transition shadow-xl"
              >
                Jadwalkan Konsultasi Rahasia <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}