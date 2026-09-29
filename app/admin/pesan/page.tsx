import { getConsultations, markConsultationAsRead, deleteConsultation } from "@/app/actions/consultation";
import { Mail, MailOpen, Trash2, Calendar, Phone, User } from "lucide-react";

export default async function AdminPesanPage() {
  const result = await getConsultations();
  const consultations = result.data || [];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <h1 className="font-serif text-2xl font-bold text-white">Pesan & Konsultasi Masuk</h1>
          <p className="text-xs text-slate-400">Kelola permintaan konsultasi hukum dari calon klien.</p>
        </div>
        <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs px-3 py-1 rounded-full font-mono">
          Total: {consultations.length} Pesan
        </span>
      </div>

      <div className="space-y-4">
        {consultations.length === 0 ? (
          <div className="text-center py-12 bg-slate-900 rounded-lg border border-slate-800 text-slate-500 text-xs">
            Belum ada pesan masuk.
          </div>
        ) : (
          consultations.map((item) => (
            <div
              key={item.id}
              className={`p-5 rounded-lg border transition ${
                item.isRead
                  ? "bg-slate-900/50 border-slate-800 text-slate-400"
                  : "bg-slate-900 border-amber-500/40 text-slate-200 shadow-md"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-3 mb-3">
                <div className="flex items-center gap-3">
                  <span
                    className={`p-2 rounded-full ${
                      item.isRead ? "bg-slate-800 text-slate-500" : "bg-amber-500/20 text-amber-400"
                    }`}
                  >
                    {item.isRead ? <MailOpen className="h-4 w-4" /> : <Mail className="h-4 w-4" />}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <User className="h-3.5 w-3.5 text-amber-500" /> {item.fullName}
                    </h3>
                    <p className="text-[11px] text-slate-400 flex items-center gap-2 mt-0.5">
                      <span>{item.email}</span> • <span>{item.phone}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-slate-500 flex items-center gap-1 font-mono">
                    <Calendar className="h-3 w-3" />
                    {new Date(item.createdAt).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    {!item.isRead && (
                      <form
                        action={async () => {
                          "use server";
                          await markConsultationAsRead(item.id);
                        }}
                      >
                        <button
                          type="submit"
                          className="text-[11px] bg-slate-800 hover:bg-slate-700 text-amber-400 px-3 py-1 rounded border border-slate-700 transition"
                        >
                          Tandai Dibaca
                        </button>
                      </form>
                    )}

                    <form
                      action={async () => {
                        "use server";
                        await deleteConsultation(item.id);
                      }}
                    >
                      <button
                        type="submit"
                        className="p-1.5 text-slate-500 hover:text-rose-400 transition rounded"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              <div>
                <span className="inline-block bg-slate-950 px-2.5 py-0.5 rounded text-[10px] font-semibold text-amber-500 border border-slate-800 mb-2">
                  Subjek: {item.subject}
                </span>
                <p className="text-xs leading-relaxed whitespace-pre-line text-slate-300">{item.message}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}