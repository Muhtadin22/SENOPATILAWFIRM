"use client";

import { useState, useTransition } from "react";
import { submitConsultation } from "@/app/actions/consultation";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function QuickContactForm() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{ success?: boolean; message?: string } | null>(null);

  async function handleSubmit(formData: FormData) {
    setStatus(null);

    const payload = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    startTransition(async () => {
      const res = await submitConsultation(payload);
      if (res.success) {
        setStatus({ success: true, message: res.message });
      } else {
        setStatus({ success: false, message: res.error });
      }
    });
  }

  return (
    <div className="bg-slate-950 border border-slate-800 p-8 rounded-lg shadow-xl">
      <h3 className="font-serif text-2xl font-bold text-white mb-2">Konsultasi Hukum Cepat</h3>
      <p className="text-xs text-slate-400 mb-6">
        Sampaikan permasalahan hukum Anda secara terenkripsi dan rahasia. Tim advokat kami akan merespons dalam kurun 1x24 jam.
      </p>

      {status && (
        <div
          className={`p-4 rounded-md mb-6 flex items-start gap-3 text-xs ${
            status.success
              ? "bg-emerald-950/60 border border-emerald-600/40 text-emerald-300"
              : "bg-rose-950/60 border border-rose-600/40 text-rose-300"
          }`}
        >
          {status.success ? (
            <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="h-5 w-5 text-rose-400 shrink-0 mt-0.5" />
          )}
          <span>{status.message}</span>
        </div>
      )}

      <form action={handleSubmit} className="space-y-4 text-xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-slate-300 mb-1.5 font-medium">Nama Lengkap *</label>
            <input
              type="text"
              name="fullName"
              required
              placeholder="Contoh: Budi Santoso, S.E."
              className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2.5 text-slate-100 focus:outline-none focus:border-amber-500 transition"
            />
          </div>
          <div>
            <label className="block text-slate-300 mb-1.5 font-medium">Nomor WhatsApp / Telepon *</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+62 812 3456 7890"
              className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2.5 text-slate-100 focus:outline-none focus:border-amber-500 transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-slate-300 mb-1.5 font-medium">Alamat Email *</label>
            <input
              type="email"
              name="email"
              required
              placeholder="nama@perusahaan.com"
              className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2.5 text-slate-100 focus:outline-none focus:border-amber-500 transition"
            />
          </div>
          <div>
            <label className="block text-slate-300 mb-1.5 font-medium">Subjek / Topik Perkara</label>
            <input
              type="text"
              name="subject"
              placeholder="Sengketa Kontrak / Hukum Bisnis"
              className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2.5 text-slate-100 focus:outline-none focus:border-amber-500 transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-slate-300 mb-1.5 font-medium">Ringkasan Masalah Hukum *</label>
          <textarea
            name="message"
            rows={4}
            required
            placeholder="Jelaskan secara singkat latar belakang kasus atau konsultasi yang Anda butuhkan..."
            className="w-full bg-slate-900 border border-slate-800 rounded px-3 py-2.5 text-slate-100 focus:outline-none focus:border-amber-500 transition resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-amber-600 hover:bg-amber-700 text-slate-950 font-bold py-3 rounded text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition disabled:opacity-50"
        >
          {isPending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Mengirim Pesan...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Kirim Permintaan Konsultasi
            </>
          )}
        </button>
      </form>
    </div>
  );
}