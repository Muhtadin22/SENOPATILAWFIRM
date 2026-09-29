import { getAttorneys, deleteAttorney } from "@/app/actions/attorney";
import { Plus, UserCheck, Trash2, Edit, Award } from "lucide-react";
import Link from "next/link";

export default async function AdminPengacaraPage() {
  const result = await getAttorneys();
  const attorneys = result.data || [];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <h1 className="font-serif text-2xl font-bold text-white">Manajemen Tim Pengacara</h1>
          <p className="text-xs text-slate-400">Kelola profil advokat, mitra, dan asosiasi firma.</p>
        </div>
        <button className="bg-amber-600 hover:bg-amber-700 text-slate-950 font-bold text-xs px-4 py-2 rounded flex items-center gap-2 transition">
          <Plus className="h-4 w-4" /> Tambah Advokat
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {attorneys.length === 0 ? (
          <div className="col-span-full text-center py-12 bg-slate-900 rounded-lg border border-slate-800 text-slate-500 text-xs">
            Belum ada data advokat. Silakan tambahkan data baru.
          </div>
        ) : (
          attorneys.map((attorney) => (
            <div key={attorney.id} className="bg-slate-900 border border-slate-800 rounded-lg p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-slate-800 border border-amber-500/30 flex items-center justify-center font-serif text-lg font-bold text-amber-500">
                      {attorney.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-slate-100 text-base">{attorney.name}</h3>
                      <p className="text-[11px] text-amber-500 font-medium">{attorney.title}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-400 mb-6">
                  <p className="inline-block bg-slate-950 px-2 py-0.5 rounded text-[10px] text-slate-300 border border-slate-800">
                    Jabatan: <span className="text-amber-400 font-semibold">{attorney.role}</span>
                  </p>
                  <p className="line-clamp-2 text-[11px] leading-relaxed text-slate-400">{attorney.bio}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <Link
                  href={`/tim-pengacara/${attorney.id}`}
                  className="text-slate-400 hover:text-amber-400 text-[11px] flex items-center gap-1"
                  target="_blank"
                >
                  Lihat Profil
                </Link>

                <div className="flex items-center gap-2">
                  <button className="p-1.5 text-slate-400 hover:text-amber-400 transition">
                    <Edit className="h-4 w-4" />
                  </button>

                  <form
                    action={async () => {
                      "use server";
                      await deleteAttorney(attorney.id);
                    }}
                  >
                    <button type="submit" className="p-1.5 text-slate-400 hover:text-rose-400 transition">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}