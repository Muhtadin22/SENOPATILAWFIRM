"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Scale,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  HelpCircle,
  ShieldCheck,
  Calendar,
  User,
  Building2,
  FileText,
  CheckCircle2,
  MessageSquareText,
  AlertCircle,
  ChevronRight,
  Sparkles
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function KontakPage() {
  // State Form Konsultasi
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    category: "Hukum Perusahaan & Bisnis",
    date: "",
    time: "09:00 - 11:00 WIB",
    description: "",
  });

  // Handler Submit Form ke WhatsApp
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Nomor WhatsApp Resmi Kantor (Format Internasional tanpa tanda +)
    const whatsappTarget = "087788216357";

    // Formatting Pesan WhatsApp
    const message =
      `*FORMULIR PENJADWALAN KONSULTASI HUKUM*
*Senopati Rahmad & Partners Law Firm*

• *Nama Lengkap:* ${formData.name}
• *No. WhatsApp/HP:* ${formData.phone}
• *Perusahaan / Entitas:* ${formData.company || "-"}
• *Kategori Perkara:* ${formData.category}
• *Rencana Tanggal:* ${formData.date || "Segera"}
• *Pilihan Waktu:* ${formData.time}

*Ringkasan Singkat Kasus:*
"${formData.description}"

_Pesan ini dikirim secara otomatis melalui website senopatirahmadlaw.com_`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${whatsappTarget}?text=${encodedMessage}`;

    // Redirect Buka WhatsApp Tab Baru
    window.open(waUrl, "_blank");
  };

  // FAQ Kontak & Konsultasi
  const contactFaqs = [
    {
      q: "Apakah seluruh data dan deskripsi kasus yang saya kirimkan terjamin kerahasiaannya?",
      a: "Ya, 100% terjamin. Seluruh informasi yang disampaikan dalam formulir ini dilindungi oleh prinsip Hak Kerahasiaan Hubungan Advokat-Klien (Attorney-Client Privilege) serta Kode Etik Advokat Indonesia."
    },
    {
      q: "Apakah sesi konsultasi dapat dilakukan secara Daring (Online Meeting)?",
      a: "Tentu. Kami menyediakan opsi konsultasi tatap muka langsung di kantor pusat kami (Jakarta Selatan) maupun secara daring melalui Zoom / Google Meet sesuai kenyamanan Anda."
    },
    {
      q: "Dokumen apa saja yang perlu disiapkan sebelum sesi konsultasi?",
      a: "Disarankan untuk menyiapkan dokumen kronologi singkat, salinan kontrak/perjanjian terkait, atau berkas somasi/panggilan peradilan (jika kasus sudah masuk tahap pemeriksaan resmi)."
    },
    {
      q: "Berapa lama konfirmasi jadwal konsultasi diterima setelah mengirim formulir ini?",
      a: "Tim sekretariat kami akan mengonfirmasi ketersediaan jadwal Advokat Partner dalam kurun waktu maksimal 1x24 jam kerja melalui WhatsApp atau panggilan telepon resmi."
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
          {/* Subtle Grid Pattern Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-100/70 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

          {/* Decorative Scale Watermark */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-[0.03] text-sky-950 pointer-events-none hidden lg:block">
            <Scale className="w-[550px] h-[550px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-50 border border-sky-200/80 text-sky-900 text-xs font-semibold uppercase tracking-widest mb-6 shadow-xs">
              <MessageSquareText className="h-4 w-4 text-amber-600" />
              <span>Respon Cepat • Kerahasiaan Terjamin</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
              Jadwalkan Konsultasi Hukum{" "}
              <span className="text-sky-900 underline decoration-amber-500/40 decoration-4 underline-offset-8">
                Eksklusif & Strategis.
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
              Tim sekretariat dan Advokat Partner kami siap menerima dan mengevaluasi kasus Anda. Silakan isi formulir di bawah ini untuk terhubung langsung via WhatsApp.
            </p>
          </div>
        </section>


        {/* =========================================================================
            2. MAIN GRID SECTION: INFORMASI KONTAK & FORM WA DIRECT
           ========================================================================= */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

              {/* Kiri: Detail Informasi Kontak & Jam Operasional (5 Cols) */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <span className="text-xs text-amber-600 uppercase tracking-widest font-bold flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5" /> Lokasi & Komunikasi
                  </span>
                  <h2 className="font-serif text-3xl font-bold text-slate-900 mt-1">Kantor Pusat Kami</h2>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Kunjungi kantor kami atau hubungi saluran telepon resmi untuk janji temu langsung.
                  </p>
                </div>

                {/* Info Cards */}
                <div className="space-y-4">
                  {/* Address Card */}
                  <div className="bg-white border border-slate-200/90 p-6 rounded-2xl flex items-start gap-4 hover:border-sky-300 hover:shadow-lg transition-all duration-300 shadow-xs">
                    <div className="p-3 bg-sky-50 text-sky-900 border border-sky-200/80 rounded-xl shrink-0">
                      <MapPin className="h-6 w-6 text-sky-900" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-slate-900 text-base">Alamat Utama</h3>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">
                        Senopati Legal Tower, Lantai 18 & 19<br />
                        Jl. Jend. Sudirman Kav. 52-53, Kebayoran Baru<br />
                        Jakarta Selatan, DKI Jakarta 12190
                      </p>
                    </div>
                  </div>

                  {/* Phone & WA Card */}
                  <div className="bg-white border border-slate-200/90 p-6 rounded-2xl flex items-start gap-4 hover:border-sky-300 hover:shadow-lg transition-all duration-300 shadow-xs">
                    <div className="p-3 bg-sky-50 text-sky-900 border border-sky-200/80 rounded-xl shrink-0">
                      <Phone className="h-6 w-6 text-sky-900" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-slate-900 text-base">Telepon & WhatsApp</h3>
                      <p className="text-xs text-slate-600 mt-1">
                        Hunting Office: <span className="text-sky-900 font-mono font-bold">(021) 555-8899</span>
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5">
                        WhatsApp Hotline: <span className="text-amber-600 font-mono font-bold">+62 812-3456-7890</span>
                      </p>
                    </div>
                  </div>

                  {/* Email Card */}
                  <div className="bg-white border border-slate-200/90 p-6 rounded-2xl flex items-start gap-4 hover:border-sky-300 hover:shadow-lg transition-all duration-300 shadow-xs">
                    <div className="p-3 bg-sky-50 text-sky-900 border border-sky-200/80 rounded-xl shrink-0">
                      <Mail className="h-6 w-6 text-sky-900" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-slate-900 text-base">Surat Elektronik (Email)</h3>
                      <p className="text-xs text-sky-900 mt-1 font-mono font-semibold">
                        consultation@senopatirahmadlaw.com
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5 font-mono">
                        info@senopatirahmadlaw.com
                      </p>
                    </div>
                  </div>

                  {/* Office Hours Card */}
                  <div className="bg-white border border-slate-200/90 p-6 rounded-2xl flex items-start gap-4 hover:border-sky-300 hover:shadow-lg transition-all duration-300 shadow-xs">
                    <div className="p-3 bg-sky-50 text-sky-900 border border-sky-200/80 rounded-xl shrink-0">
                      <Clock className="h-6 w-6 text-sky-900" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-slate-900 text-base">Jam Kerja Kantor</h3>
                      <p className="text-xs text-slate-600 mt-1">
                        Senin - Jumat: <span className="text-slate-900 font-semibold">08.30 - 18.00 WIB</span>
                      </p>
                      <p className="text-xs text-amber-600 mt-0.5 font-semibold">
                        *Layanan Penanganan Darurat Litigasi 24/7
                      </p>
                    </div>
                  </div>
                </div>

                {/* Emergency Notice Card */}
                <div className="p-5 bg-amber-50 border border-amber-300/80 rounded-2xl flex items-start gap-3 shadow-2xs">
                  <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-700 leading-relaxed font-normal">
                    Untuk kasus mendesak seperti <strong className="text-slate-900 font-semibold">Penangkapan, Penahanan, atau Somasi Batas Waktu 1x24 Jam</strong>, Anda dapat langsung menghubungi WhatsApp Hotline untuk penanganan darurat tim advokat.
                  </p>
                </div>
              </div>


              {/* Kanan: Form Penjadwalan Konsultasi WA Direct (7 Cols) */}
              <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
                {/* Top Decorative Line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-800 via-amber-500 to-sky-900" />

                <div className="mb-8">
                  <div className="flex items-center gap-2 text-amber-600 text-xs font-bold uppercase tracking-wider mb-2">
                    <Calendar className="h-4 w-4" /> Form Janji Temu Konsultasi
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">Isi Detail Konsultasi Anda</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Isi formulir ini untuk membuat draft pesan otomatis yang dikirim langsung ke WhatsApp sekretariat kami.
                  </p>
                </div>

                <form onSubmit={handleWhatsAppSubmit} className="space-y-5">

                  {/* Nama & Telepon */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Nama Lengkap <span className="text-amber-600">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Dr. Alexander / Bapak Budi"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 pl-10 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-800 focus:bg-white focus:ring-2 focus:ring-sky-100 transition duration-200"
                        />
                        <User className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Nomor WhatsApp / HP <span className="text-amber-600">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="081234567890"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 pl-10 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-800 focus:bg-white focus:ring-2 focus:ring-sky-100 transition duration-200 font-mono"
                        />
                        <Phone className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                      </div>
                    </div>
                  </div>

                  {/* Perusahaan & Kategori */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Nama Perusahaan / Personal
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="PT Mitra Sejahtera / Personal"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 pl-10 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-800 focus:bg-white focus:ring-2 focus:ring-sky-100 transition duration-200"
                        />
                        <Building2 className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Kategori Layanan Hukum <span className="text-amber-600">*</span>
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-sky-800 focus:bg-white focus:ring-2 focus:ring-sky-100 transition duration-200 cursor-pointer font-medium"
                      >
                        <option value="Hukum Perusahaan & Bisnis">Hukum Perusahaan & Bisnis</option>
                        <option value="Litigasi Pidana Khusus & Tipikor">Litigasi Pidana Khusus & Tipikor</option>
                        <option value="Litigasi Perdata & Arbitrase">Litigasi Perdata & Arbitrase</option>
                        <option value="Pertanahan & Real Estate">Pertanahan & Real Estate</option>
                        <option value="Hak Kekayaan Intelektual (HKI)">Hak Kekayaan Intelektual (HKI)</option>
                        <option value="Kepailitan & PKPU">Kepailitan & PKPU</option>
                        <option value="Private Client Services">Private Client & Waris</option>
                      </select>
                    </div>
                  </div>

                  {/* Tanggal & Jam Rencana */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Rencana Tanggal Konsultasi
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-sky-800 focus:bg-white focus:ring-2 focus:ring-sky-100 transition duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Pilihan Waktu
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-sky-800 focus:bg-white focus:ring-2 focus:ring-sky-100 transition duration-200 cursor-pointer font-medium"
                      >
                        <option value="09:00 - 11:00 WIB">Pagi (09:00 - 11:00 WIB)</option>
                        <option value="13:30 - 15:30 WIB">Siang (13:30 - 15:30 WIB)</option>
                        <option value="16:00 - 18:00 WIB">Sore (16:00 - 18:00 WIB)</option>
                      </select>
                    </div>
                  </div>

                  {/* Deskripsi Kasus */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Ringkasan Kasus / Permasalahan Hukum <span className="text-amber-600">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Jelaskan secara singkat persoalan hukum yang dihadapi (contoh: Sengketa wanprestasi kontrak pasokan bahan baku atau somasi tanah)..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-800 focus:bg-white focus:ring-2 focus:ring-sky-100 transition duration-200 leading-relaxed resize-none"
                    />
                  </div>

                  {/* Tombol Kirim WA Direct */}
                  <button
                    type="submit"
                    className="w-full bg-sky-900 hover:bg-sky-950 text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2.5 group"
                  >
                    <Send className="h-4 w-4 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
                    <span>Kirim & Hubungi via WhatsApp Kantor</span>
                  </button>

                  <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5 pt-1">
                    <ShieldCheck className="h-4 w-4 text-amber-600" />
                    <span>Informasi dikirimkan secara langsung ke WhatsApp sekretariat resmi.</span>
                  </p>
                </form>

              </div>

            </div>
          </div>
        </section>


        {/* =========================================================================
            3. FREQUENTLY ASKED QUESTIONS (FAQ KONTRAK & KONSULTASI)
           ========================================================================= */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

            <div className="text-center space-y-3">
              <span className="text-xs text-amber-600 uppercase tracking-widest font-bold">
                Bantuan Pertanyaan
              </span>
              <h2 className="font-serif text-3xl font-bold text-slate-900">Pertanyaan seputar Konsultasi</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Hal-hal penting yang perlu Anda ketahui sebelum menjadwalkan janji temu.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactFaqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3 hover:border-sky-300 hover:shadow-md transition-all duration-300 shadow-2xs">
                  <h3 className="font-serif text-base font-bold text-slate-900 flex items-start gap-2.5">
                    <HelpCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal pl-7">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* =========================================================================
            4. LEGAL DISCLAIMER BANNER
           ========================================================================= */}
        <section className="py-10 bg-slate-100 text-slate-500 text-[11px] leading-relaxed border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
            <p>
              <strong className="text-slate-700">Penafian (Disclaimer):</strong> Pengiriman pesan atau formulir penjadwalan ini tidak secara otomatis membentuk hubungan hukum Advokat-Klien (*Attorney-Client Relationship*) sebelum adanya persetujuan dan penandatanganan Surat Perjanjian Jasa Hukum (SPJH) resmi oleh Senopati Rahmad & Partners.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}