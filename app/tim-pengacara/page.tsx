import Image from "next/image";
import Link from "next/link";
import {
  Scale,
  ShieldCheck,
  Award,
  GraduationCap,
  Gavel,
  Briefcase,
  Mail,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  BadgeCheck,
  ChevronRight,
  Globe,
  Sparkles,
  Building2
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Custom LinkedIn Icon untuk menghindari issue pembatalan export di versi lucide-react terbaru
function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function TimPengacaraPage() {
  // Data Managing Partner Utama (Executive Spotlight)
  const managingPartner = {
    id: "rahmad-senopati",
    name: "Dr. Rahmad Senopati, S.H., M.H., FCArb.",
    role: "Managing Partner & Founder",
    license: "Lisensi PERADI No. 09/12839/ADV • Kurator AKPI No. 142",
    experience: "22+ Tahun Pengalaman",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
    quote:
      "Reputasi advokat di ruang sidang dibangun dari tiga hal: penguasaan fakta tanpa cela, argumentasi hukum yang tajam, dan keteguhan moral dalam membela hak klien.",
    bio: "Spesialis Litigasi Pidana Khusus, Tipikor, dan Arbitrase Komersial Internasional. Telah berhasil mewakili puluhan entitas BUMN, perusahaan multinasional, dan tokoh nasional dalam sengketa peradilan bernilai tinggi.",
    education: [
      "Doktor Ilmu Hukum (Ph.D) — Universitas Indonesia (Cum Laude)",
      "Master of Laws (LL.M.) in International Commercial Arbitration — NUS Singapore",
      "Sarjana Hukum (S.H.) — Universitas Gadjah Mada"
    ],
    expertise: [
      "Litigasi Pidana Khusus & Tipikor",
      "Arbitrase Internasional (SIAC / BANI)",
      "Sengketa Perbankan & Keuangan",
      "Penyelesaian Sengketa Korporasi"
    ],
    achievements: [
      "Memenangkan Sengketa Arbitrase Singapore (SIAC) bernilai USD 45 Juta",
      "Advokat Terbaik Bidang Litigasi Komersial - Indonesia Legal Awards",
      "Ketua Tim Kuasa Hukum Akuisisi Aset Strategis BUMN"
    ]
  };

  // Data Senior Partners & Associates
  const attorneys = [
    {
      id: "ahmad-wijaya",
      name: "Ahmad Wijaya Kusuma, S.H., LL.M.",
      role: "Senior Partner — Corporate & M&A",
      license: "Lisensi PERADI No. 11/88921/ADV",
      experience: "16+ Tahun Pengalaman",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop",
      bio: "Pakar hukum transaksi pasar modal, restrukturisasi perusahaan, dan merger-akuisisi (M&A). Berpengalaman memimpin audit legal (LDD) untuk transaksi bernilai triliunan rupiah.",
      education: "LL.M. in Corporate Law — Harvard Law School, USA",
      expertise: [
        "Merger, Akuisisi & Restrukturisasi",
        "Hukum Pasar Modal & Obligasi",
        "Investasi Penanaman Modal Asing (PMA)"
      ],
      trackRecord: "Menangani 80+ Transaksi M&A Korporasi Multinasional"
    },
    {
      id: "diana-saraswati",
      name: "Diana Saraswati, S.H., M.Kn.",
      role: "Partner — Pertanahan & HKI",
      license: "Lisensi PERADI No. 14/77234/ADV",
      experience: "14+ Tahun Pengalaman",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      bio: "Ahli dalam advokasi sengketa tanah komersial skala besar, perizinan tata ruang kawasan industri, serta penanganan pembatalan merek & paten di Pengadilan Niaga.",
      education: "Magister Kenotariatan (M.Kn.) — Universitas Diponegoro",
      expertise: [
        "Sengketa Tanah & Properti Komersial",
        "Litigasi Merek, Paten & Hak Cipta",
        "Uji Tuntas Aset Real Estate"
      ],
      trackRecord: "Penyelesaian Sengketa Lahan Kawasan Industri 200 Hektar"
    },
    {
      id: "hendra-pratama",
      name: "Hendra Pratama, S.H., M.H.",
      role: "Partner — Litigasi & Kepailitan",
      license: "Lisensi PERADI No. 12/90123/ADV • Kurator AKPI",
      experience: "12+ Tahun Pengalaman",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
      bio: "Advokat ketat dan taktis dalam sengketa eksekusi jaminan, kepailitan & PKPU, serta penanganan perkara wanprestasi kontrak bisnis bernilai tinggi.",
      education: "Magister Hukum Bisnis (M.H.) — Universitas Tarumanagara",
      expertise: [
        "Kepailitan & Restrukturisasi Utang (PKPU)",
        "Litigasi Sengketa Kontrak Wanprestasi",
        "Eksekusi Jaminan Fidusia & Hak Tanggungan"
      ],
      trackRecord: "Restrukturisasi Utang Perusahaan Manufaktur senilai IDR 1.2 T"
    },
    {
      id: "ratna-mutia",
      name: "Ratna Mutia, S.H., LL.M.",
      role: "Senior Associate — Ketenagakerjaan",
      license: "Lisensi PERADI No. 18/44120/ADV",
      experience: "8+ Tahun Pengalaman",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
      bio: "Fokus pada hukum hubungan industrial, penyusunan Perjanjian Kerja Bersama (PKB), negosiasi serikat pekerja, dan advokasi persidangan di Pengadilan PHI.",
      education: "LL.M. in Employment Law — Leiden University, Belanda",
      expertise: [
        "Sengketa Hubungan Industrial (PHI)",
        "Penyusunan PKB & Peraturan Perusahaan",
        "Audit Kepatuhan Ketenagakerjaan"
      ],
      trackRecord: "Advokasi Kepatuhan Tenaga Kerja 5.000+ Karyawan Korporasi"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-amber-500 selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* =========================================================================
            1. HERO SECTION (AUTHORITATIVE EXECUTIVE BANNER)
           ========================================================================= */}
        <section className="relative py-28 lg:py-36 bg-white border-b border-slate-200 overflow-hidden">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-100/70 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

          {/* Decorative Scale Watermark */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-[0.03] text-sky-950 pointer-events-none hidden lg:block">
            <Scale className="w-[550px] h-[550px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-50 border border-sky-200/80 text-sky-900 text-xs font-semibold uppercase tracking-widest mb-6 shadow-xs">
              <ShieldCheck className="h-4 w-4 text-amber-600" />
              <span>Advokat Senior • Ketegasan & Keahlian Presisi</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
              Kekuatan Strategi &{" "}
              <span className="text-sky-800 underline decoration-amber-500/40 decoration-4 underline-offset-8">
                Ketegasan Yuridis
              </span>{" "}
              di Setiap Medan Hukum.
            </h1>

            <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed max-w-3xl mx-auto">
              Tim pengacara <strong className="font-semibold text-slate-900">Senopati Rahmad & Partners</strong> dibentuk oleh para praktisi hukum senior bertalenta tinggi. Kami menggabungkan kedalaman akademik, wawasan bisnis komersial, dan ketangguhan advokasi di persidangan.
            </p>

            {/* Quick Metrics Bar */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8 border-t border-slate-200">
              <div className="text-center p-3 rounded-xl bg-slate-50/60 border border-slate-100">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-sky-900">25+</span>
                <p className="text-[11px] text-slate-500 uppercase tracking-widest font-semibold mt-1">Advokat & Partner</p>
              </div>
              <div className="text-center p-3 rounded-xl bg-slate-50/60 border border-slate-100">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-sky-900">100%</span>
                <p className="text-[11px] text-slate-500 uppercase tracking-widest font-semibold mt-1">Lisensi Beracara PERADI</p>
              </div>
              <div className="text-center p-3 rounded-xl bg-slate-50/60 border border-slate-100">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-600">500+</span>
                <p className="text-[11px] text-slate-500 uppercase tracking-widest font-semibold mt-1">Sengketa Dimenangkan</p>
              </div>
              <div className="text-center p-3 rounded-xl bg-slate-50/60 border border-slate-100">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-600">IDR 5T+</span>
                <p className="text-[11px] text-slate-500 uppercase tracking-widest font-semibold mt-1">Aset Klien Dipertahankan</p>
              </div>
            </div>
          </div>
        </section>


        {/* =========================================================================
            2. MANAGING PARTNER SPOTLIGHT (EXECUTIVE PROFILE & CRISP PHOTO)
           ========================================================================= */}
        <section className="py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <span className="text-xs text-amber-600 uppercase tracking-widest font-bold flex items-center justify-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5" /> Kepemimpinan Utama
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">Managing Partner Profile</h2>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-md group transition-all duration-500 hover:border-sky-300 hover:shadow-2xl">
              
              {/* Subtle Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-800 via-amber-500 to-sky-900" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Photo Column - Fully Sharp & Vibrant with Elegant Gold Accent Frame */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border-2 border-slate-200 shadow-xl group-hover:border-amber-500 transition-colors duration-500 bg-slate-100">
                    <Image
                      src={managingPartner.image}
                      alt={managingPartner.name}
                      fill
                      priority
                      className="object-cover object-top brightness-100 contrast-[1.02] scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Protection Layer at Bottom for Text Clarity */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90" />

                    {/* Floating Glassmorphism Experience Badge */}
                    <div className="absolute bottom-4 left-4 right-4 z-20 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200/80 text-center shadow-lg transition-all duration-300">
                      <p className="font-serif text-sm font-bold text-sky-900">{managingPartner.experience}</p>
                      <p className="text-[10px] text-slate-600 uppercase tracking-wider font-semibold">Litigasi & Arbitrase Internasional</p>
                    </div>
                  </div>
                </div>

                {/* Bio Details */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-sky-900 text-xs font-bold uppercase tracking-widest bg-sky-50 px-3.5 py-1.5 rounded-md border border-sky-200/80 inline-block mb-3">
                      {managingPartner.role}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                      {managingPartner.name}
                    </h2>
                    <p className="text-xs text-slate-500 font-mono mt-1.5 font-semibold flex items-center gap-1.5">
                      <BadgeCheck className="h-4 w-4 text-sky-800 inline" /> {managingPartner.license}
                    </p>
                  </div>

                  {/* Quote Block */}
                  <div className="border-l-4 border-amber-500 pl-4 py-3 bg-slate-50 p-4 rounded-r-xl border-y border-r border-slate-200/60 shadow-xs">
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed italic font-medium">
                      &quot;{managingPartner.quote}&quot;
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {managingPartner.bio}
                  </p>

                  {/* Education List */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-600 flex items-center gap-2">
                      <GraduationCap className="h-4 w-4" /> Riwayat Pendidikan Tinggi:
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-700 font-medium">
                      {managingPartner.education.map((edu, edIdx) => (
                        <li key={edIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                          <span>{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expertise Badges */}
                  <div className="space-y-2 pt-3 border-t border-slate-200">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">Spesialisasi Utama:</h4>
                    <div className="flex flex-wrap gap-2">
                      {managingPartner.expertise.map((exp, eIdx) => (
                        <span key={eIdx} className="bg-slate-50 border border-slate-200 text-slate-800 text-[11px] px-3 py-1 rounded-md font-medium shadow-2xs">
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="pt-3 flex flex-wrap items-center gap-4">
                    <Link
                      href="/kontak"
                      className="inline-flex items-center gap-2 bg-sky-900 hover:bg-sky-950 text-white font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition duration-300 shadow-md hover:shadow-lg"
                    >
                      <PhoneCall className="h-4 w-4 text-amber-400" /> Konsultasi dengan Managing Partner
                    </Link>

                    <div className="flex gap-2">
                      <button aria-label="LinkedIn Profile" className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 hover:text-sky-900 hover:border-sky-300 shadow-2xs transition duration-300">
                        <LinkedinIcon className="h-4 w-4" />
                      </button>
                      <button aria-label="Send Email" className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 hover:text-sky-900 hover:border-sky-300 shadow-2xs transition duration-300">
                        <Mail className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </section>


        {/* =========================================================================
            3. SENIOR PARTNERS & ASSOCIATES (CRISP PHOTOS, ELEGANT CARDS, SMOOTH HOVER)
           ========================================================================= */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs text-sky-900 uppercase tracking-widest font-bold">
                Jajaran Advokat Utama
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">Mitra & Advokat Senior</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Spesialis teruji yang memimpin setiap departemen hukum di Senopati Rahmad & Partners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {attorneys.map((attorney) => (
                <div
                  key={attorney.id}
                  className="bg-slate-50/70 border border-slate-200 rounded-2xl overflow-hidden flex flex-col sm:flex-row shadow-sm hover:shadow-2xl hover:border-sky-300 hover:-translate-y-1.5 transition-all duration-500 ease-out group"
                >
                  {/* Photo Section - Fully Sharp with Smooth Zoom & Badge Overlay */}
                  <div className="sm:w-1/2 relative aspect-[3/4] sm:aspect-auto shrink-0 overflow-hidden border-b sm:border-b-0 sm:border-r border-slate-200 bg-slate-200">
                    <Image
                      src={attorney.image}
                      alt={attorney.name}
                      fill
                      className="object-cover object-top brightness-100 contrast-[1.02] scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Overlay for subtle text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />

                    {/* Floating Experience Badge */}
                    <span className="absolute top-3 left-3 z-20 bg-white/95 border border-slate-200 text-sky-900 text-[10px] font-mono font-bold px-2.5 py-1 rounded-md shadow-xs backdrop-blur-sm group-hover:bg-sky-900 group-hover:text-white transition-colors duration-300">
                      {attorney.experience}
                    </span>
                  </div>

                  {/* Profile Details */}
                  <div className="sm:w-1/2 p-6 flex flex-col justify-between space-y-4 bg-white">
                    <div className="space-y-3">
                      <div>
                        <span className="text-[10px] text-amber-600 font-bold uppercase tracking-wider block">
                          {attorney.role}
                        </span>
                        <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-sky-900 transition-colors duration-300 mt-0.5">
                          {attorney.name}
                        </h3>
                        <p className="text-[10px] text-slate-500 font-mono mt-1 font-semibold">
                          {attorney.license}
                        </p>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-3">
                        {attorney.bio}
                      </p>

                      {/* Track Record Highlight */}
                      <div className="p-2.5 bg-slate-50 border border-slate-200/80 rounded-lg text-[11px] text-slate-700 font-medium flex items-center gap-2">
                        <Award className="h-4 w-4 text-amber-600 shrink-0" />
                        <span className="line-clamp-1">{attorney.trackRecord}</span>
                      </div>

                      {/* Expertise Badges */}
                      <div className="space-y-1.5 pt-1">
                        <p className="text-[10px] text-sky-900 font-bold uppercase tracking-wider">Spesialisasi:</p>
                        <div className="flex flex-wrap gap-1">
                          {attorney.expertise.map((exp, eIdx) => (
                            <span key={eIdx} className="bg-slate-100 border border-slate-200/70 text-slate-700 text-[10px] px-2 py-0.5 rounded font-medium group-hover:border-sky-200 transition-colors duration-300">
                              {exp}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                      <div className="flex gap-2">
                        <button aria-label="LinkedIn" className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 hover:text-sky-900 hover:border-sky-300 transition-colors duration-300">
                          <LinkedinIcon className="h-3.5 w-3.5" />
                        </button>
                        <button aria-label="Email" className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 hover:text-sky-900 hover:border-sky-300 transition-colors duration-300">
                          <Mail className="h-3.5 w-3.5" />
                        </button>
                      </div>

                      <Link
                        href="/kontak"
                        className="text-sky-900 hover:text-sky-950 font-bold inline-flex items-center gap-1 uppercase tracking-wider text-[10px] transition duration-300 group-hover:translate-x-1"
                      >
                        Konsultasi <ChevronRight className="h-3 w-3 text-amber-600" />
                      </Link>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* =========================================================================
            4. LISENSI & KUALIFIKASI RESMI (CREDENTIAL STRIP)
           ========================================================================= */}
        <section className="py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs text-amber-600 uppercase tracking-widest font-bold">
                Jaminan Kualifikasi
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">Lisensi & Akreditasi Resmi</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Seluruh pengacara kami terdaftar secara SAH dan terikat oleh Kode Etik Advokat Indonesia.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "PERADI", label: "Perhimpunan Advokat Indonesia", desc: "Seluruh Advokat Memiliki Kartu Tanda Anggota & Izin Beracara Resmi" },
                { title: "AKPI", label: "Asosiasi Kurator & Pengurus Indonesia", desc: "Keahlian Resmi Pengurusan Kepailitan & PKPU Perusahaan" },
                { title: "HKHPM", label: "Himpunan Konsultan Hukum Pasar Modal", desc: "Sertifikasi Resmi Pendampingan Transaksi Emisi Efek & IPO" },
                { title: "SIAC / BANI", label: "Arbitrase Internasional & Nasional", desc: "Fellow & Arbiter Terdaftar Forum Arbitrase Internasional" }
              ].map((acc, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/90 space-y-3 text-center hover:border-amber-500/60 hover:shadow-lg transition-all duration-300 shadow-xs">
                  <div className="p-3 bg-sky-50 text-sky-900 border border-sky-200/80 rounded-xl w-fit mx-auto">
                    <BadgeCheck className="h-7 w-7 text-amber-600" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-sky-900">{acc.title}</h3>
                  <h4 className="text-xs font-bold text-slate-900">{acc.label}</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-normal">{acc.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* =========================================================================
            5. EXCLUSIVE CALL TO ACTION (CTA)
           ========================================================================= */}
        <section className="py-20 bg-slate-900 text-center relative overflow-hidden">
          {/* Subtle Accent Radial Backlight */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.12),transparent_70%)] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
            <Scale className="h-12 w-12 text-amber-400 mx-auto" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              Sampaikan Perkara Anda Kepada Tim Advokat Senior Kami.
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto font-normal">
              Setiap sesi konsultasi dilindungi oleh jaminan kerahasiaan (*Attorney-Client Privilege*).
            </p>
            <div className="pt-2">
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-wider transition duration-300 shadow-xl hover:shadow-2xl"
              >
                Jadwalkan Konsultasi Eksklusif <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}