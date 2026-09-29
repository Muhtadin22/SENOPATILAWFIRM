import Link from "next/link";
import { BookOpen, Calendar, ArrowRight, Search, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ArtikelRisetPage() {
  const articles = [
    {
      category: "Regulasi Bisnis",
      date: "25 Sep 2026",
      title: "Implikasi UU Cipta Kerja Terbaru terhadap Klausul Pemutusan Hubungan Kerja (PHK)",
      desc: "Analisis komprehensif bagi praktisi HR dan direksi mengenai perubahan skema kompensasi dan prosedur penyelesaian sengketa ketenagakerjaan di PHI."
    },
    {
      category: "Litigasi & Arbitrase",
      date: "12 Sep 2026",
      title: "Memilih Arbitrase vs Pengadilan Negeri dalam Kontrak Komersial",
      desc: "Kelebihan dan kelemahan penyelesaian sengketa alternatif untuk menjaga kerahasiaan bisnis dan efisiensi waktu penyelesaian perkara."
    },
    {
      category: "Kekayaan Intelektual",
      date: "04 Sep 2026",
      title: "Perlindungan Hak Cipta AI (Artificial Intelligence) di Indonesia",
      desc: "Tinjauan yuridis mengenai status kepemilikan karya yang dihasilkan oleh kecerdasan buatan berdasarkan UU Hak Cipta No. 28 Tahun 2014."
    },
    {
      category: "Corporate Crime",
      date: "20 Ags 2026",
      title: "Vicarious Liability: Tanggung Jawab Pidana Korporasi atas Tindakan Direksi",
      desc: "Membangun sistem compliance (kepatuhan) perusahaan untuk memitigasi risiko hukum pidana korporasi di sektor pertambangan dan finansial."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      <Navbar />

      <main className="flex-grow">
        {/* HEADER */}
        <section className="py-20 bg-slate-900 border-b border-amber-600/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-950 border border-amber-500/40 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">
                  <BookOpen className="h-4 w-4" /> Publikasi & Insight
                </div>
                <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight">Jurnal Hukum & Riset Industri.</h1>
              </div>
              
              {/* Search Bar */}
              <div className="relative w-full md:w-80">
                <input 
                  type="text" 
                  placeholder="Cari artikel hukum..." 
                  className="w-full bg-slate-950 border border-slate-700 text-sm text-slate-200 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                />
                <Search className="absolute left-3 top-3.5 h-4 w-4 text-slate-500" />
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED ARTICLE */}
        <section className="py-12 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 border border-slate-800 p-8 lg:p-12 rounded-2xl relative overflow-hidden group">
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 max-w-3xl">
                <span className="bg-amber-600 text-slate-950 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">Riset Utama</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-6 mb-4 leading-tight group-hover:text-amber-400 transition">
                  Panduan Legal Due Diligence (LDD) Menjelang Merger & Akuisisi 2026
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-8">
                  Sebuah laporan ekstensif mengenai elemen krusial yang wajib diperiksa dalam proses uji tuntas hukum guna menghindari sengketa pasca-akuisisi dan kerugian finansial tersembunyi.
                </p>
                <button className="inline-flex items-center gap-2 text-amber-500 font-bold text-xs uppercase tracking-wider hover:text-amber-400 transition">
                  Baca Laporan Penuh <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ARTICLES GRID */}
        <section className="py-12 pb-24 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article, idx) => (
                <div key={idx} className="bg-slate-900/50 p-6 sm:p-8 rounded-xl border border-slate-800 hover:border-amber-500/40 hover:bg-slate-900 transition duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-4 text-[11px] font-mono">
                      <span className="text-amber-400 bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20">{article.category}</span>
                      <span className="text-slate-500 flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {article.date}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white mb-3 hover:text-amber-400 transition cursor-pointer">{article.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">{article.desc}</p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-800">
                    <button className="text-xs text-amber-500 font-semibold inline-flex items-center gap-1.5 uppercase tracking-wider hover:text-amber-400 transition">
                      Baca Artikel <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}