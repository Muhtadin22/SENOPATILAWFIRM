"use client";

import { Send } from "lucide-react";

export default function LeadForm() {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <h3 className="font-serif text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
        Formulir Permohonan Konsultasi Hukum
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
            Nama Lengkap *
          </label>
          <input
            type="text"
            placeholder="Contoh: Budi Santoso, S.E."
            className="w-full px-4 py-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-sky-600 transition"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
            Nomor WhatsApp / HP *
          </label>
          <input
            type="tel"
            placeholder="0812-xxxx-xxxx"
            className="w-full px-4 py-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-sky-600 transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
            Email Perusahaan / Pribadi *
          </label>
          <input
            type="email"
            placeholder="nama@perusahaan.com"
            className="w-full px-4 py-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-sky-600 transition"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
            Kategori Perkara *
          </label>
          <select className="w-full px-4 py-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-sky-600 transition text-slate-700">
            <option>Sengketa Bisnis & Perusahaan</option>
            <option>Litigasi Perdata / Wanprestasi</option>
            <option>Litigasi Pidana Khusus / Tipikor</option>
            <option>Sengketa Tanah & Properti</option>
            <option>Arbitrase / PKPU Kepailitan</option>
            <option>Lainnya</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
          Ringkasan Singkat Perkara *
        </label>
        <textarea
          rows={4}
          placeholder="Uraikan posisi kasus, pihak terkait, dan estimasi nilai sengketa secara umum..."
          className="w-full px-4 py-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-sky-600 transition"
        ></textarea>
      </div>

      <p className="text-[10px] text-slate-500 italic">
        * Seluruh isian dalam formulir ini dilindungi penuh oleh Hak Kerahasiaan Klien (*Attorney-Client Privilege*).
      </p>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-4 rounded-xl text-xs uppercase tracking-wider transition shadow-md shadow-amber-500/20"
      >
        <Send className="h-4 w-4" /> Kirim Permohonan Konsultasi
      </button>
    </form>
  );
}