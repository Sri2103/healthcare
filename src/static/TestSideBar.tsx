import { useState } from "react";

type MenuItem = {
  id: string;
  label: string;
  icon: string;
  children?: string[];
};

const MENU: MenuItem[] = [
  {
    id: "category",
    label: "Category",
    icon: "📦",
    children: ["HTML & CSS", "JavaScript", "PHP & MySQL"],
  },
  {
    id: "posts",
    label: "Posts",
    icon: "📝",
    children: ["All Posts", "Add New", "Drafts"],
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: "📊",
    children: ["Overview", "Reports", "Exports"],
  },
  {
    id: "charts",
    label: "Chart",
    icon: "📈",
  },
];

export default function ResponsiveSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState<string[]>(["category"]);

  const toggleMenu = (id: string) => {
    setOpenMenus((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <>
      {/* MOBILE HEADER */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between bg-blue-200 px-4 py-3 md:hidden">
        <button onClick={() => setSidebarOpen(true)} className="text-xl">
          ☰
        </button>
        <span className="text-gray-200 font-medium">Dashboard</span>
      </header>

      {/* OVERLAY */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed z-40 h-full w-64 bg-[#0f1221] text-gray-300 p-4
        transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static`}
      >
        <div className="mb-6 text-lg font-semibold text-gray-100">
          Admin Panel
        </div>

        {MENU.map((item) => {
          const isOpen = openMenus.includes(item.id);

          return (
            <div key={item.id} className="mb-2">
              <button
                onClick={() => (item.children ? toggleMenu(item.id) : null)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 hover:bg-[#1a1f36]"
              >
                <div className="flex items-center gap-3">
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>

                {item.children && (
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </button>

              {/* CHILDREN */}
              {item.children && (
                <div
                  className={`ml-8 mt-2 space-y-2 text-sm overflow-hidden transition-all duration-300
                  ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  {item.children.map((child) => (
                    <a
                      key={child}
                      href="#"
                      className="block rounded px-2 py-1 hover:text-white"
                    >
                      {child}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </aside>

      {/* CONTENT */}
      <main className="pt-14 md:pt-0 md:ml-64 p-6 min-h-screen bg-gray-100">
        <h1 className="text-xl font-semibold">Main Content</h1>
      </main>
    </>
  );
}
