import {
  // LayoutDashboard,
  // Users,
  // Calendar,
  // FileText,
  // BarChart3,
  // Bell,
  Search,
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
  Import,
  Upload,
  LogOut,
  Coins,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router";

type SidebarItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  path?: string;
  children?: {
    label: string;
    path: string;
  }[];
};

const SIDEBAR_MENU: SidebarItem[] = [
  {
    id: "previst",
    label: "PerVisit AI Agent",
    icon: <Brain size={16} />,
    path: "/dashboard/previsit",
  },

  {
    id: "apptrev",
    label: "Appointement-RevenueIntelligence",
    icon: <Coins size={16} />,
    path: "/dashboard/apptrev",
  },
  {
    id: "schedulepat",
    label: "Schedule Patients",
    icon: <CalendarSync size={16} />,
    path: "/dashboard/schedulepat",
  },
  {
    id: "scheduler",
    label: "Scheduler Ops",
    icon: <ClipboardClock size={16} />,
    path: "/dashboard/scheduler",
  },
  {
    id: "prebill",
    label: "Pre-bill scrubber",
    icon: <Receipt size={16} />,
    path: "/dashboard/prebill",
  },
  {
    id: "revoptix",
    label: "RevOptix AI",
    icon: <CircleDollarSign size={16} />,
    path: "/dashboard/revoptix",
  },
  {
    id: "revaccel",
    label: "RevAccel Agent",
    icon: <Asterisk size={16} />,
    path: "/dashboard/revaccel",
  },
  {
    id: "ar",
    label: "A/R Worklist",
    icon: <Activity size={16} />,
    path: "/dashboard/ar",
  },
  {
    id: "appeals",
    label: "GenAi appeals",
    icon: <ScanEye size={16} />,
    path: "/dashboard/appeals",
  },

  {
    id: "analytics",
    label: "analytics",
    icon: <ChartBarIncreasing size={16} />,
    path: "/dashboard/analytics",
    children: [
      //{ label: "Access Optimization Agent", path: "/dashboard/analytics/aoa" },
      { label: "Billing Quality Agent", path: "/dashboard/analytics/bqa" },
      { label: "Cycle Velocity Agent", path: "/dashboard/analytics/cva" },
      { label: "AR recovery agent", path: "/dashboard/analytics/ara" },
      { label: "Revenu yield agent", path: "/dashboard/analytics/fin" },
      { label: "payments", path: "/dashboard/analytics/payments" },
      { label: "schedules", path: "/dashboard/analytics/schedule" },
    ],
  },
  {
    id: "bi",
    label: "Conversational BI",
    icon: <ChartColumnBig size={16} />,
    path: "/dashboard/bi",
  },
  {
    id: "dataops",
    label: "Data Mapping Admin",
    icon: <Waypoints size={16} />,
    path: "/dashboard/dataops",
  },
  {
    id: "adminapis",
    label: "X12 API Admin",
    icon: <Waypoints size={16} />,
    path: "/dashboard/adminapis",
  },
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
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

  /* open accordion*/
  useEffect(() => {
    const activeGroup = SIDEBAR_MENU.find((item) =>
      item.children?.some((child) => location.pathname.startsWith(child.path))
    );
    if (activeGroup) {
      setTimeout(() => {
        setOpenMenu(activeGroup.id);
      });
    }
  }, [location.pathname]);

  // toggle accordion
  const toggleAccordion = (id: string) => {
    setOpenMenu((prev) => (prev == id ? null : id));
  };

  return (
    <div className="min-h-screen flex bg-white relative overflow-hidden">
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
          {SIDEBAR_MENU.map((item) => {
            const isOpen = openMenu === item.id;
            return (
              <div key={item.id}>
                <button
                  onClick={() =>
                    item.children
                      ? toggleAccordion(item.id)
                      : nagivate(item.path!)
                  }
                  className={`w-full flex items-center justify-between px-3 py-2 mt-2 round-lg font-medium cursor-pointer
                    ${
                      location.pathname.startsWith(item.path ?? "")
                        ? "bg-white text-blue-600"
                        : "hover:bg-white hover:text-blue-400"
                    }
                    `}
                >
                  <div className="flex items-center  gap-2">
                    {item.icon}
                    <span className="text-start"> {item.label}</span>
                  </div>
                  {item.children && (
                    <span
                      className={`transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </span>
                  )}
                </button>
                {/* accordion */}
                {item.children && (
                  <div
                    className={`ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300
                    ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    {item.children.map((child) => (
                      <Link key={child.path} to={child.path}>
                        <div
                          className={`px-3 py-2 rounded-lg cursor-pointer mt-1
                          ${
                            location.pathname === child.path
                              ? "bg-white text-blue-600"
                              : "hover:bg-white hover:text-blue-400"
                          }`}
                        >
                          {child.label}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* <NavItem icon={<FileText size={16} />} label="Medical Records" /> */}
          {/* <NavItem icon={<BarChart3 size={16} />} label="Analytics" /> */}

          {/* <Link to={"/dashboard/previsit"}>
            <NavItem
              label="PerVisit AI Agent"
              icon={<Brain size={16} />}
              active={
                location.pathname === "/dashboard" ||
                location.pathname === "/dashboard/previsit"
              }
            />
          </Link> */}
          {/* <Link to={"/dashboard/bi"}>
            <NavItem
              icon={<ChartColumnBig size={16} />}
              label="conversational BI"
              active={location.pathname === "/dashboard/bi"}
            />
          </Link> */}
          {/* <Link to={"/dashboard/apptrev"}>
            <NavItem
              icon={<Coins />}
              label="Appointment - Revenue Intelligence"
            />
          </Link> */}
          {/* <Link to="/dashboard/schedulepat">
            <NavItem
              icon={<CalendarSync size={16} />}
              label="Scheduled Patients"
              active={location.pathname === "/dashboard/schedulepat"}
            />
          </Link> */}
          {/* <Link to="/dashboard/scheduler">
            <NavItem
              label="Scheduler Ops"
              icon={<ClipboardClock size={16} />}
              active={location.pathname === "/dashboard/scheduler"}
            />
          </Link> */}
          {/* <Link to="/dashboard/prebill">
            <NavItem
              label="Pre-Bill Scrubber"
              icon={<Receipt size={16} />}
              active={location.pathname === "/dashboard/prebill"}
            />
          </Link> */}

          {/* <Link to="/dashboard/ar">
            <NavItem
              icon={<Activity size={16} />}
              label="A/R Worklist"
              active={location.pathname === "/dashboard/ar"}
            />
          </Link> */}
          {/* <Link to="/dashboard/appeals">
            <NavItem
              label="GenAI Appeal"
              icon={<ScanEye size={16} />}
              active={location.pathname === "/dashboard/appeals"}
            />
          </Link> */}

          {/* <Link to="/dashboard/revoptix">
            <NavItem
              icon={<CircleDollarSign size={16} />}
              label="RevOptix AI"
              active={location.pathname === "/dashboard/revoptix"}
            />
          </Link> */}
          {/* <Link to="/dashboard/revaccel">
            <NavItem
              icon={<Asterisk size={16} />}
              label="RevAccel Agent"
              active={location.pathname === "/dashboard/revaccel"}
            />
          </Link> */}

          {/* <Link to={"/dashboard/analytics"}>
            <NavItem
              icon={<ChartBarIncreasing size={16} />}
              label="analytics"
              active={location.pathname === "/dashboard/analytics"}
            />
          </Link> */}
          {/* <Link to={"/dashboard/dataops"}>
            <NavItem
              icon={<Waypoints size={16} />}
              label="Data Mapping Admin"
              active={location.pathname === "/dashboard/dataops"}
            />
          </Link> */}
          {/* <Link to={"/dashboard/adminapis"}>
            <NavItem
              icon={<Waypoints size={16} />}
              label="X12 API Admin"
              active={location.pathname === "/dashboard/adminapis"}
            />
          </Link> */}
        </nav>

        <div className="px-4 pb-4 text-sm">
          {/* <NavItem icon={<Bell size={16} />} label="Notifications" badge="5" /> */}
          <button onClick={handleLogout}>
            <NavItem icon={<LogOut size={16} />} label="Logout" />
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className=" h-screen flex-1 flex flex-col md:ml-0">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 px-4 md:px-6 flex items-center justify-between">
          {/* Left: Hamburger + Search */}
          <div className="flex items-center gap-3 w-full max-w-md">
            {/* hide button on medium screens */}
            <button onClick={() => setSidebarOpen(true)} className="md:hidden">
              <Menu size={20} />
            </button>

            {/* main header */}
            <div className="relative flex-1 py-2">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                className="w-full 
                pl-9 pr-3 py-2 rounded-lg border text-sm focus:outline-none border-gray-300
                 bg-white outline-none
                active:border-gray-400"
                placeholder="Search patients, appointments..."
              />
            </div>
          </div>

          {/* import and export */}
          <div className=" mx-2 flex gap-2">
            <div>
              <div className="flex gap-2 border border-gray-200 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white cursor-pointer">
                <Import size={24} /> Import
              </div>
            </div>
            <div>
              {/* export */}
              <div className="flex gap-2 border border-gray-200 px-4 py-2 rounded-md hover:bg-blue-500  hover:text-white cursor-pointer">
                <Upload size={24} /> Export
              </div>
            </div>
            <div className="flex gap-2 border border-gray-200 px-4 py-2 rounded-md hover:bg-blue-500  hover:text-white cursor-pointer">
              Admin
            </div>
            <div className="flex gap-2 border border-gray-200 px-4 py-2 rounded-md hover:bg-blue-500  hover:text-white cursor-pointer">
              Data
            </div>
          </div>

          {/* Right */}
          {/* <div className="hidden md:flex items-center gap-4 text-sm">
            <Bell size={18} />
            <div className="text-right">
              <p className="font-medium">Dr. Ateeq</p>
              <p className="text-xs text-slate-500">Physician</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-slate-200" />
          </div> */}
        </header>

        {/* Content */}
        <div className="p-4 md:p-6 space-y-6 overflow-y-auto ">
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
