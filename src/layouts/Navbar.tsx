import {
  // LayoutDashboard,
  // Users,
  // Calendar,
  // FileText,
  // BarChart3,
  // Bell,
  Menu,
  X,
  Brain,
  ChartColumnBig,
  CalendarSync,
  ClipboardClock,
  Receipt,
  Activity,
  ScanEye,
  CircleDollarSign,
  Asterisk,
  ChartBarIncreasing,
  Waypoints,
  LogOut,
  Coins,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const nagivate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("authenticated");
    if (isLoggedIn != "true") {
      nagivate("/login");
    }
  }, [nagivate]);

  const handleLogout = () => {
    localStorage.removeItem("authenticated");
    nagivate("/login");
  };

  return (
    <div className="min-h-screen flex bg-slate-50 relative overflow-hidden">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      <button onClick={() => setSidebarOpen(true)} className="md:hidden">
        <Menu size={20} />
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static inset-y-0 left-0 z-50
          w-64 bg-blue-600 text-white flex flex-col h-screen
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
              icon={<Brain size={16} />}
              active={
                location.pathname === "/dashboard" ||
                location.pathname === "/dashboard/previsit"
              }
            />
          </Link>
          <Link to={"/dashboard/bi"}>
            <NavItem
              icon={<ChartColumnBig size={16} />}
              label="conversational BI"
              active={location.pathname === "/dashboard/bi"}
            />
          </Link>
          <Link to={"/dashboard/apptrev"}>
            <NavItem
              icon={<Coins />}
              label="Appointment - Revenue Intelligence"
            />
          </Link>
          <Link to="/dashboard/schedulepat">
            <NavItem
              icon={<CalendarSync size={16} />}
              label="Scheduled Patients"
              active={location.pathname === "/dashboard/schedulepat"}
            />
          </Link>
          <Link to="/dashboard/scheduler">
            <NavItem
              label="Scheduler Ops"
              icon={<ClipboardClock size={16} />}
              active={location.pathname === "/dashboard/scheduler"}
            />
          </Link>
          <Link to="/dashboard/prebill">
            <NavItem
              label="Pre-Bill Scrubber"
              icon={<Receipt size={16} />}
              active={location.pathname === "/dashboard/prebill"}
            />
          </Link>

          <Link to="/dashboard/ar">
            <NavItem
              icon={<Activity size={16} />}
              label="A/R Worklist"
              active={location.pathname === "/dashboard/ar"}
            />
          </Link>
          <Link to="/dashboard/appeals">
            <NavItem
              label="GenAI Appeal"
              icon={<ScanEye size={16} />}
              active={location.pathname === "/dashboard/appeals"}
            />
          </Link>

          <Link to="/dashboard/revoptix">
            <NavItem
              icon={<CircleDollarSign size={16} />}
              label="RevOptix AI"
              active={location.pathname === "/dashboard/revoptix"}
            />
          </Link>
          <Link to="/dashboard/revaccel">
            <NavItem
              icon={<Asterisk size={16} />}
              label="RevAccel Agent"
              active={location.pathname === "/dashboard/revaccel"}
            />
          </Link>

          <Link to={"/dashboard/analytics"}>
            <NavItem
              icon={<ChartBarIncreasing size={16} />}
              label="analytics"
              active={location.pathname === "/dashboard/analytics"}
            />
          </Link>
          <Link to={"/dashboard/dataops"}>
            <NavItem
              icon={<Waypoints size={16} />}
              label="Data Mapping Admin"
              active={location.pathname === "/dashboard/dataops"}
            />
          </Link>
          <Link to={"/dashboard/adminapis"}>
            <NavItem
              icon={<Waypoints size={16} />}
              label="X12 API Admin"
              active={location.pathname === "/dashboard/adminapis"}
            />
          </Link>
        </nav>

        <div className="px-4 pb-4 text-sm">
          {/* <NavItem icon={<Bell size={16} />} label="Notifications" badge="5" /> */}
          <button onClick={handleLogout}>
            <NavItem icon={<LogOut size={16} />} label="Logout" />
          </button>
        </div>
      </aside>
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
    className={`flex items-center justify-between px-3 py-2 mt-2 rounded-lg cursor-pointer font-medium
    ${
      active ? "bg-white text-blue-600" : "hover:bg-white hover:text-blue-400"
    }`}
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
