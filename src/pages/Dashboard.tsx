import {
  // LayoutDashboard,
  // Users,
  // Calendar,
  // FileText,
  // BarChart3,
  Bell,
  Search,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex bg-slate-50 relative overflow-hidden">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
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
            RCM Agentic AI Suite
            <p className="text-xs text-blue-100">Healthcare System</p>
          </div>

          {/* Close button (mobile) */}
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-1 text-sm">
          {/* <NavItem icon={<FileText size={16} />} label="Medical Records" /> */}
          {/* <NavItem icon={<BarChart3 size={16} />} label="Analytics" /> */}

          <Link to={"/dashboard/previsit"}>
            <NavItem
              label="PerVisit AI Agent"
              active={
                location.pathname === "/dashboard" ||
                location.pathname === "/dashboard/previsit"
              }
            />
          </Link>
          <Link to={"/dashboard/bi"}>
            <NavItem
              label="conversational BI"
              active={location.pathname === "/dashboard/bi"}
            />
          </Link>
          <Link to="/dashboard/schedulepat">
            <NavItem
              label="Scheduled Patients"
              active={location.pathname === "/dashboard/schedulepat"}
            />
          </Link>
          <Link to="/dashboard/scheduler">
            <NavItem
              label="Scheduler Ops"
              active={location.pathname === "/dashboard/scheduler"}
            />
          </Link>
          <Link to="/dashboard/prebill">
            <NavItem
              label="Pre-Bill Scrubber"
              active={location.pathname === "/dashboard/prebill"}
            />
          </Link>

          <Link to="/dashboard/ar">
            <NavItem
              label="A/R Worklist"
              active={location.pathname === "/dashboard/ar"}
            />
          </Link>
          <Link to="/dashboard/appeals">
            <NavItem
              label="GenAI Appeal"
              active={location.pathname === "/dashboard/appeals"}
            />
          </Link>

          <Link to="/dashboard/revoptix">
            <NavItem
              label="RevOptix AI"
              active={location.pathname === "/dashboard/revoptix"}
            />
          </Link>
          <Link to="/dashboard/revaccel">
            <NavItem
              label="RevAccel Agent"
              active={location.pathname === "/dashboard/revaccel"}
            />
          </Link>

          <Link to={"/dashboard/analytics"}>
            <NavItem
              label="analytics"
              active={location.pathname === "/dashboard/analytics"}
            />
          </Link>
          <Link to={"/dashboard/dataops"}>
            <NavItem
              label="Data Mapping Admin"
              active={location.pathname === "/dashboard/dataops"}
            />
          </Link>
          <Link to={"/dashboard/adminapis"}>
            <NavItem
              label="X12 API Admin"
              active={location.pathname === "/dashboard/dataops"}
            />
          </Link>
        </nav>

        <div className="px-4 pb-4 text-sm">
          <NavItem icon={<Bell size={16} />} label="Notifications" badge="5" />
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col md:ml-0">
        {/* Header */}
        <header className="h-16 bg-white border-b px-4 md:px-6 flex items-center justify-between">
          {/* Left: Hamburger + Search */}
          <div className="flex items-center gap-3 w-full max-w-md">
            <button onClick={() => setSidebarOpen(true)} className="md:hidden">
              <Menu size={20} />
            </button>

            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                className="w-full pl-9 pr-3 py-2 rounded-lg border text-sm focus:outline-none"
                placeholder="Search patients, appointments..."
              />
            </div>
          </div>

          {/* Right */}
          <div className="hidden md:flex items-center gap-4 text-sm">
            <Bell size={18} />
            <div className="text-right">
              <p className="font-medium">Dr. Ateeq</p>
              <p className="text-xs text-slate-500">Physician</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-slate-200" />
          </div>
        </header>

        {/* Content */}
        <div className="p-4 md:p-6 space-y-6">
          {/* same content as before */}
          <Outlet />
        </div>
      </main>
    </div>
  );
}

/* ---------- Reusable Components ---------- */

const NavItem = ({
  icon,
  label,
  active,
  badge,
}: {
  icon?: React.ReactNode;
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
