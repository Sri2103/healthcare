import {
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  BarChart3,
  Bell,
  X,
} from "lucide-react";
import { useState } from "react";
export default function NavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}
      <aside
        className={`
                fixed md:static inset-y-0 left-0 z-50
                w-64 bg-blue-600 text-white flex flex-col
                transform transition-transform duration-300
                ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
                md:translate-x-0
              `}
      >
        <div className="px-6 py-5 font-semibold text-lg flex justify-between items-center">
          <div>
            MediCare Pro
            <p className="text-xs text-blue-100">Healthcare System</p>
          </div>

          {/* Close button (mobile) */}
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-1 text-sm">
          <NavItem
            icon={<LayoutDashboard size={16} />}
            label="Dashboard"
            active
          />
          <NavItem icon={<Users size={16} />} label="Patients" badge="234" />
          <NavItem
            icon={<Calendar size={16} />}
            label="Appointments"
            badge="12"
          />
          <NavItem icon={<FileText size={16} />} label="Medical Records" />
          <NavItem icon={<BarChart3 size={16} />} label="Analytics" />
        </nav>

        <div className="px-4 pb-4 text-sm">
          <NavItem icon={<Bell size={16} />} label="Notifications" badge="5" />
        </div>
      </aside>
    </>
  );
}

const NavItem = ({
  icon,
  label,
  active,
  badge,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: string;
}) => (
  <div
    className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer
    ${active ? "bg-blue-500" : "hover:bg-blue-500/40"}`}
  >
    <div className="flex items-center gap-2">
      {icon}
      {label}
    </div>
    {badge && (
      <span className="text-xs bg-white/20 px-2 rounded-full">{badge}</span>
    )}
  </div>
);
