import Link from "next/link";
import {
  Scale,
  Target,
  History,
  ShieldCheck,
  Award,
  ArrowRight,
  CheckCircle2,
  Quote,
  Lock,
  Scroll,
  Building2,
  Users,
  Briefcase,
  BookOpenCheck,
  HeartHandshake,
  Compass,
  FileCheck2,
  Clock
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function TentangKamiPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-amber-500 selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* =========================================================================
            1. HERO SECTION EKSKLUSIF DENGAN BACKGROUND AMBIENT & WATERMARK
           ========================================================================= */}
        <section className="relative py-28 lg:py-36 bg-gradient-to-b from-sky-50/70 via-white to-slate-50 overflow-hidden border-b border-slate-200">
          {/* Subtle Grid Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

          {/* Legal Watermark Emblem */}
          <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-[0.03] text-sky-900 pointer-events-none hidden lg:block">
            <Scale className="w-[600px] h-[600px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-sky-200 text-sky-800 text-xs font-semibold uppercase tracking-widest mb-6 shadow-sm">
              <History className="h-4 w-4 text-amber-600" />
              <span>Profil & Identitas Firma Hukum</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
              Dedikasi Tanpa Batas untuk{" "}
              <span className="bg-gradient-to-r from-sky-800 via-sky-700 to-amber-600 bg-clip-text text-transparent">
                Keadilan & Kepastian Hukum.
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed max-w-3xl mx-auto">
              Sejak pendiriannya, <strong className="font-semibold text-slate-900">Senopati Rahmad & Partners</strong> telah bertransformasi menjadi salah satu firma hukum terdepan di Indonesia. Kami memadukan ketaatan pada asas hukum konvensional dengan kejelian bisnis modern untuk melindungi kepentingan strategis klien.
            </p>

            {/* Quick Metrics Bar */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8 border-t border-slate-200/80">
              <div className="text-center">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-sky-800">15+ Tahun</span>
                <p className="text-[11px] text-slate-500 uppercase tracking-widest mt-1">Praktik Hukum</p>
              </div>
              <div className="text-center">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-sky-800">IDR 5T+</span>
                <p className="text-[11px] text-slate-500 uppercase tracking-widest mt-1">Nilai Sengketa & Transaksi</p>
              </div>
              <div className="text-center">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-sky-800">500+</span>
                <p className="text-[11px] text-slate-500 uppercase tracking-widest mt-1">Perkara Terselesaikan</p>
              </div>
              <div className="text-center">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-600">100%</span>
                <p className="text-[11px] text-slate-500 uppercase tracking-widest mt-1">Komitmen Integritas</p>
              </div>
            </div>
          </div>
        </section>


        {/* =========================================================================
            2. SAMBUTAN MANAGING PARTNER (EXECUTIVE STATEMENT)
           ========================================================================= */}
        <section className="py-24 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 lg:p-12 relative overflow-hidden shadow-xl">
              <Quote className="h-16 w-16 text-sky-500/10 absolute top-6 right-6" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Visual Avatar Placeholder */}
                <div className="lg:col-span-4 flex flex-col items-center text-center border-b lg:border-b-0 lg:border-r border-slate-200 pb-8 lg:pb-0 lg:pr-8">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-sky-50 border-2 border-sky-200 flex items-center justify-center font-serif text-3xl font-bold text-sky-800 shadow-inner mb-4">
                    SR
                  </div>
                  <h3 className="font-serif text-xl font-bold text-slate-900">Dr. Rahmad Senopati, S.H., M.H.</h3>
                  <p className="text-xs text-amber-600 font-bold uppercase tracking-wider mt-1">Managing Partner</p>
                  <span className="mt-3 text-[10px] text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 font-mono font-medium">
                    Advokat PERADI & Kurator AKPI
                  </span>
                </div>

                {/* Quote Content */}
                <div className="lg:col-span-8 space-y-4">
                  <span className="text-xs text-sky-800 uppercase tracking-widest font-bold">
                    Pesan Pengurus Utama
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                    &quot;Hukum Bukan Sekadar Peraturan Di Atas Kertas, Namun Perisai Pelindung Keberlangsungan Masa Depan Anda.&quot;
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    Dalam lanskap bisnis dan dinamika sosial yang penuh ketidakpastian, peran firma hukum tidak hanya menyelesaikan masalah yang sudah timbul, tetapi merancang strategi preventif agar sengketa tidak pernah terjadi. Di Senopati Rahmad & Partners, kami memegang teguh integritas etis, kejujuran fakta, dan keagungan profesi advokat sebagai komitmen utama kami kepada setiap klien.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* =========================================================================
            3. VISI, MISI & PILAR METODOLOGI HUKUM
           ========================================================================= */}
        <section className="py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs text-sky-800 uppercase tracking-widest font-bold">
                Landasan Kerja
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">Visi, Misi & Metodologi Taktis</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Pendekatan sistematis yang membedakan penanganan perkara di firma kami dari praktik konvensional.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-slate-50/80 p-8 rounded-2xl border border-slate-200/80 hover:border-sky-300 hover:bg-sky-50/30 hover:shadow-lg transition duration-300 space-y-4 relative group">
                <div className="p-3 bg-sky-100/80 border border-sky-200 w-fit rounded-xl text-sky-800">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900">Visi Strategis</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Menjadi rujukan utama firma hukum independen nasional dan regional yang diakui atas presisi analisis, keberhasilan litigasi tinggi, dan standar moralitis tanpa kompromi.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-slate-50/80 p-8 rounded-2xl border border-slate-200/80 hover:border-sky-300 hover:bg-sky-50/30 hover:shadow-lg transition duration-300 space-y-4 relative group">
                <div className="p-3 bg-sky-100/80 border border-sky-200 w-fit rounded-xl text-sky-800">
                  <Compass className="h-7 w-7" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900">Misi Pelayanan</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Menyediakan representasi hukum tingkat tinggi melalui kombinasi riset dogmatis mendalam, advokasi tegas di persidangan, serta negosiasi bisnis bernilai tinggi.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-slate-50/80 p-8 rounded-2xl border border-slate-200/80 hover:border-sky-300 hover:bg-sky-50/30 hover:shadow-lg transition duration-300 space-y-4 relative group">
                <div className="p-3 bg-sky-100/80 border border-sky-200 w-fit rounded-xl text-sky-800">
                  <BookOpenCheck className="h-7 w-7" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900">Metodologi Presisi</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Setiap perkara melewati tahapan *Legal Audit*, *Risk Exposure Mapping*, dan penyusunan *Master Litigation Plan* sebelum tindakan yuridis resmi diambil.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* =========================================================================
            4. SEJARAH & REKAM JEJAK PERKEMBANGAN (TIMELINE MILESTONES)
           ========================================================================= */}
        <section className="py-24 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs text-amber-600 uppercase tracking-widest font-bold">
                Perjalanan Firma
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">Milestone & Rekam Jejak Sejarah</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Jejak langkah pertumbuhan Senopati Rahmad & Partners dalam menangani kasus-kasus bersejarah.
              </p>
            </div>

            <div className="relative border-l-2 border-sky-200 max-w-4xl mx-auto space-y-12 pl-6 sm:pl-10">
              {[
                {
                  year: "2010",
                  title: "Pendirian Kantor Hukum",
                  desc: "Didirikan di Jakarta oleh Dr. Rahmad Senopati dengan fokus awal pada Praktik Litigasi Perdata dan Hukum Pidana Khusus."
                },
                {
                  year: "2015",
                  title: "Ekspansi Divisi Hukum Korporasi & Bisnis",
                  desc: "Membuka departemen khusus M&A, Restrukturisasi Utang, dan Akuisisi Aset Properti untuk melayani BUMN serta Perusahaan Swasta Nasional."
                },
                {
                  year: "2020",
                  title: "Praktik Arbitrase Internasional & HKI",
                  desc: "Memperluas jangkauan layanan ke tingkat internasional melalui representasi sengketa dagang di SIAC (Singapore) dan BANI Jakarta."
                },
                {
                  year: "2025 - Sekarang",
                  title: "Penghargaan Top-Tier Law Firm & Modernisasi Digital",
                  desc: "Diakui sebagai salah satu Firma Hukum Terkemuka Indonesia dengan penguatan sistem manajemen perkara berbasis keamanan data terenkripsi."
                }
              ].map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-white border-2 border-amber-500 group-hover:bg-amber-500 transition duration-300" />
                  
                  <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-sky-300 hover:shadow-md transition">
                    <span className="font-mono text-amber-600 text-sm font-bold">{item.year}</span>
                    <h3 className="font-serif text-lg font-bold text-slate-900 mt-1 mb-2">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* =========================================================================
            5. NILAI UTAMA FIRMA (CORE VALUES)
           ========================================================================= */}
        <section className="py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs text-sky-800 uppercase tracking-widest font-bold">
                Prinsip Profesi
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">Nilai-Nilai Utama Kami</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: ShieldCheck,
                  title: "Integritas Absolut",
                  desc: "Menolak segala bentuk kompromi etika. Menjaga nama baik firma dan kepercayaan klien di atas segalanya."
                },
                {
                  icon: Lock,
                  title: "Kerahasiaan Ketat",
                  desc: "Perlindungan data dan informasi klien dijamin dengan protokol keamanan digital serta sumpah profesi advokat."
                },
                {
                  icon: Award,
                  title: "Keunggulan Akademis",
                  desc: "Setiap argumentasi hukum didasarkan pada riset perundang-undangan dan yurisprudensi terbaru yang tak terbantahkan."
                },
                {
                  icon: HeartHandshake,
                  title: "Orientasi Solusi Klien",
                  desc: "Fokus pada pencapaian hasil komersial yang realistis, efisien dari segi waktu dan beban biaya litigation."
                }
              ].map((val, idx) => (
                <div key={idx} className="bg-slate-50/80 p-6 rounded-xl border border-slate-200 space-y-3 hover:border-sky-300 hover:shadow-md transition">
                  <div className="p-3 bg-amber-50 text-amber-600 rounded-lg w-fit border border-amber-200">
                    <val.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-slate-900">{val.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* =========================================================================
            6. TATA KELOLA, KETAHANAN DATA & PRO BONO (CSR)
           ========================================================================= */}
        <section className="py-24 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <div className="space-y-6">
                <span className="text-xs text-sky-800 uppercase tracking-widest font-bold">
                  Tanggung Jawab Profesi & CSR
                </span>
                <h2 className="font-serif text-3xl font-bold text-slate-900 leading-tight">
                  Sistem Tata Kelola & Komitmen Bantuan Hukum Pro Bono.
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  Selain melayani entitas korporasi besar, Senopati Rahmad & Partners secara aktif menjalankan mandat sosial advokat. Kami mengalokasikan jam kerja tahunan khusus untuk bantuan hukum nirlaba (*Pro Bono*) bagi masyarakat yang membutuhkan keadilan.
                </p>

                <div className="space-y-3 pt-2 text-xs">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900">Program Pos Bantuan Hukum (Posbakum)</h4>
                      <p className="text-slate-600 mt-1">Pendampingan hukum gratis untuk perkara-perkara kemanusiaan dan hak asasi manusia.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900">Kemitraan Edukasi Hukum Kampus</h4>
                      <p className="text-slate-600 mt-1">Menyelenggarakan eksaminasi publik dan klinik hukum bagi mahasiswa fakultas hukum terkemuka.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Card */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl space-y-6 relative">
                <h3 className="font-serif text-xl font-bold text-slate-900 border-b border-slate-200 pb-4">
                  Sertifikasi & Standar Kerahasiaan
                </h3>
                <ul className="space-y-4 text-xs text-slate-700">
                  <li className="flex items-center gap-3">
                    <Scroll className="h-5 w-5 text-sky-700 shrink-0" />
                    <span>Terlisensi Resmi PERADI (Perhimpunan Advokat Indonesia)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FileCheck2 className="h-5 w-5 text-sky-700 shrink-0" />
                    <span>Anggota Aktif AKPI (Asosiasi Kurator dan Pengurus Indonesia)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-sky-700 shrink-0" />
                    <span>Sistem Pengelolaan Dokumen Kasus Berstandar Terenkripsi ISO</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>


        {/* =========================================================================
            7. CALL TO ACTION (CTA KONSULTASI)
           ========================================================================= */}
        <section className="py-20 bg-slate-900 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
            <Scale className="h-12 w-12 text-amber-500 mx-auto" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Siap Diskusi Mengenai Kebutuhan Hukum Anda?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
              Jadwalkan sesi konsultasi eksklusif bersama mitra dan advokat senior kami untuk mendapatkan analisis hukum yang jelas.
            </p>
            <div className="pt-2">
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-wider transition shadow-xl shadow-amber-500/20"
              >
                Hubungi Kantor Hukum <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}