import Link from "next/link";
import { LayoutDashboard, Scale, Briefcase, Users, FileText, MessageSquare, Settings, LogOut } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      {/* Sidebar Admin */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between p-4">
        <div>
          <div className="flex items-center gap-3 px-3 py-4 border-b border-slate-800 mb-6">
            <Scale className="h-6 w-6 text-amber-500" />
            <div>
              <h2 className="font-serif text-xs font-bold uppercase tracking-wider text-white">Senopati CMS</h2>
              <span className="text-[10px] text-amber-500 font-mono">Panel Admin</span>
            </div>
          </div>

          <nav className="space-y-1">
            {[
              { label: "Dashboard", icon: LayoutDashboard, href: "/admin/dashboard" },
              { label: "Layanan Hukum", icon: Briefcase, href: "/admin/layanan" },
              { label: "Tim Pengacara", icon: Users, href: "/admin/pengacara" },
              { label: "Artikel & Riset", icon: FileText, href: "/admin/artikel" },
              { label: "Pesan Konsultasi", icon: MessageSquare, href: "/admin/pesan" },
              { label: "Pengaturan Site", icon: Settings, href: "/admin/pengaturan" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-md text-xs font-medium text-slate-300 hover:bg-amber-600/10 hover:text-amber-400 transition"
              >
                <item.icon className="h-4 w-4 text-slate-400" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* User Info & Logout */}
        <div className="pt-4 border-t border-slate-800">
          <div className="flex items-center justify-between px-3 py-2">
            <div>
              <p className="text-xs font-bold text-white">Admin Utama</p>
              <p className="text-[10px] text-slate-500">admin@senopatirahmad.law</p>
            </div>
            <button className="text-slate-400 hover:text-red-400 p-1">
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 bg-slate-950 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}