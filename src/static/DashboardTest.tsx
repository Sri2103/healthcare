import {
  Search,
  Menu,
  X,
  Brain,
  ChartColumnBig,
  //   CalendarSync,
  //   ClipboardClock,
  //   Receipt,
  //   Activity,
  //   ScanEye,
  //   CircleDollarSign,
  //   Asterisk,
  ChartBarIncreasing,
  Waypoints,
  Import,
  Upload,
  LogOut,
  Coins,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router";

/* ---------------- MENU CONFIG ---------------- */

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
    id: "agents",
    label: "AI Agents",
    icon: <Brain size={16} />,
    children: [
      { label: "PreVisit AI Agent", path: "/dashboard/previsit" },
      { label: "RevAccel Agent", path: "/dashboard/revaccel" },
    ],
  },
  {
    id: "bi",
    label: "Conversational BI",
    icon: <ChartColumnBig size={16} />,
    path: "/dashboard/bi",
  },
  {
    id: "revenue",
    label: "Revenue Intelligence",
    icon: <Coins size={16} />,
    children: [
      { label: "Appointment Revenue", path: "/dashboard/apptrev" },
      { label: "Pre-Bill Scrubber", path: "/dashboard/prebill" },
      { label: "A/R Worklist", path: "/dashboard/ar" },
      { label: "GenAI Appeals", path: "/dashboard/appeals" },
    ],
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: <ChartBarIncreasing size={16} />,
    path: "/dashboard/analytics",
  },
  {
    id: "admin",
    label: "Admin",
    icon: <Waypoints size={16} />,
    children: [
      { label: "Data Mapping Admin", path: "/dashboard/dataops" },
      { label: "X12 API Admin", path: "/dashboard/adminapis" },
    ],
  },
];

/* ---------------- COMPONENT ---------------- */

export default function DashboardTest() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  /* -------- AUTH GUARD -------- */
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("authenticated");
    if (isLoggedIn !== "true") navigate("/login");
  }, [navigate]);

  /* -------- AUTO OPEN ACCORDION -------- */
  useEffect(() => {
    const activeGroup = SIDEBAR_MENU.find((item) =>
      item.children?.some((child) => location.pathname.startsWith(child.path))
    );
    if (activeGroup) {
      setTimeout(() => {
        setOpenMenu(activeGroup.id);
      }, 0);
    }
  }, [location.pathname]);

  const toggleAccordion = (id: string) => {
    setOpenMenu((prev) => (prev === id ? null : id));
  };

  const handleLogout = () => {
    localStorage.removeItem("authenticated");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-slate-50 relative overflow-hidden">
      {/* ---------------- MOBILE OVERLAY ---------------- */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* ---------------- SIDEBAR ---------------- */}
      <aside
        className={`
          fixed md:static inset-y-0 left-0 z-50
          w-64 bg-blue-600 text-white flex flex-col h-screen
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* BRAND */}
        <div className="px-6 py-5 font-semibold text-lg flex justify-between items-center">
          <div>
            RCM Agentic AI Suite
            <p className="text-xs text-blue-100">Healthcare System</p>
          </div>
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {/* ---------------- NAV ---------------- */}
        <nav className="flex-1 px-4 space-y-1 text-sm">
          {SIDEBAR_MENU.map((item) => {
            const isOpen = openMenu === item.id;

            return (
              <div key={item.id}>
                {/* PARENT */}
                <button
                  onClick={() =>
                    item.children
                      ? toggleAccordion(item.id)
                      : navigate(item.path!)
                  }
                  className={`w-full flex items-center justify-between px-3 py-2 mt-2 rounded-lg font-medium
                  ${
                    location.pathname.startsWith(item.path ?? "")
                      ? "bg-white text-blue-600"
                      : "hover:bg-white hover:text-blue-400"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    {item.label}
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

                {/* ACCORDION */}
                {item.children && (
                  <div
                    className={`ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300
                    ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    {item.children.map((child) => (
                      <Link key={child.path} to={child.path}>
                        <div
                          className={`px-3 py-2 rounded-lg cursor-pointer
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
        </nav>

        {/* ---------------- FOOTER ---------------- */}
        <div className="px-4 pb-4 text-sm">
          <button onClick={handleLogout}>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white hover:text-blue-400">
              <LogOut size={16} /> Logout
            </div>
          </button>
        </div>
      </aside>

      {/* ---------------- MAIN ---------------- */}
      <main className="h-screen flex-1 flex flex-col">
        {/* HEADER */}
        <header className="h-16 bg-white border-b border-gray-200 px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 w-full max-w-md">
            <button onClick={() => setSidebarOpen(true)} className="md:hidden">
              <Menu size={20} />
            </button>

            <div className="relative flex-1 py-2">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                className="w-full pl-9 pr-3 py-2 rounded-lg border text-sm border-gray-300"
                placeholder="Search patients, appointments..."
              />
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex gap-2 border px-4 py-2 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white">
              <Import size={18} /> Import
            </div>
            <div className="flex gap-2 border px-4 py-2 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white">
              <Upload size={18} /> Export
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <div className="p-4 md:p-6 space-y-6 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
