import Link from "next/link";
import { Scale, MapPin, Phone, Mail, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-amber-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Identitas Firma */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-600/10 border border-amber-500/30 rounded">
                <Scale className="h-6 w-6 text-amber-500" />
              </div>
              <span className="font-serif text-base font-bold text-slate-100 uppercase tracking-wide">
                Senopati Rahmad & Partners
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Firma hukum berdedikasi tinggi dalam memberikan solusi hukum strategis, responsif, dan berintegritas untuk klien korporasi maupun perorangan.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-500 font-medium">
              <Shield className="h-4 w-4" /> Terdaftar & Terlisensi Resmi PERADI
            </div>
          </div>

          {/* Area Praktik Utama */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-slate-100 uppercase tracking-wider mb-4 border-b border-amber-600/30 pb-2 inline-block">
              Area Praktik
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/layanan-hukum/hukum-perusahaan" className="hover:text-amber-400 transition">Hukum Perusahaan & Bisnis</Link></li>
              <li><Link href="/layanan-hukum/hukum-pidana" className="hover:text-amber-400 transition">Litigasi Pidana & Tipikor</Link></li>
              <li><Link href="/layanan-hukum/hukum-perdata" className="hover:text-amber-400 transition">Sengketa Perdata & Arbitrase</Link></li>
              <li><Link href="/layanan-hukum/hki" className="hover:text-amber-400 transition">Hak Kekayaan Intelektual</Link></li>
              <li><Link href="/layanan-hukum/pertanahan-properti" className="hover:text-amber-400 transition">Pertanahan & Real Estate</Link></li>
            </ul>
          </div>

          {/* Navigasi Cepat */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-slate-100 uppercase tracking-wider mb-4 border-b border-amber-600/30 pb-2 inline-block">
              Tautan Ringkas
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/tentang-kami" className="hover:text-amber-400 transition">Tentang Profil Firma</Link></li>
              <li><Link href="/tim-pengacara" className="hover:text-amber-400 transition">Profil Advokat & Partners</Link></li>
              <li><Link href="/artikel" className="hover:text-amber-400 transition">Publikasi Hukum & Riset</Link></li>
              <li><Link href="/kontak" className="hover:text-amber-400 transition">Jadwalkan Konsultasi</Link></li>
              <li><Link href="/admin/login" className="hover:text-slate-200 transition">Portal Internal Admin</Link></li>
            </ul>
          </div>

          {/* Informasi Kontak */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-slate-100 uppercase tracking-wider mb-4 border-b border-amber-600/30 pb-2 inline-block">
              Kantor Pusat
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Kawasan SCBD, Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan, 12190</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-amber-500 shrink-0" />
                <span>+62 21 555 8900 / +62 811 9988 77</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-amber-500 shrink-0" />
                <span>info@senopatirahmad.law</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Senopati Rahmad & Partners. All rights reserved.</p>
          <p className="italic">Advocates & Legal Consultants • High-Integrity Legal Practice</p>
        </div>
      </div>
    </footer>
  );
}