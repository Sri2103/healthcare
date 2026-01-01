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
export default function FlyoutSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeFlyout, setActiveFlyout] = useState<string | null>(null);

  return (
    <>
      {/* MOBILE HEADER */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center bg-[#0f1221] px-4 py-3 md:hidden">
        <button onClick={() => setSidebarOpen(true)} className="text-xl">
          ☰
        </button>
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
        className={`fixed z-40 h-full w-20 bg-[#0f1221] text-gray-300 p-3
        transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static`}
      >
        <nav className="space-y-2">
          {MENU.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => setActiveFlyout(item.id)}
              onMouseLeave={() => setActiveFlyout(null)}
            >
              {/* ICON BUTTON */}
              <button
                onClick={() =>
                  setActiveFlyout(activeFlyout === item.id ? null : item.id)
                }
                className="flex h-12 w-12 items-center justify-center rounded-lg hover:bg-[#1a1f36]"
              >
                <span className="text-lg">{item.icon}</span>
              </button>

              {/* FLYOUT */}
              {item.children && activeFlyout === item.id && (
                <div
                  className="absolute left-full top-0 ml-2 w-52 rounded-lg
                  bg-[#151a30] p-3 shadow-xl border border-gray-700 z-50"
                >
                  <div className="mb-2 text-sm font-semibold text-gray-200">
                    {item.label}
                  </div>

                  <div className="space-y-1 text-sm">
                    {item.children.map((child) => (
                      <a
                        key={child}
                        href="#"
                        className="block rounded px-2 py-1 hover:bg-[#1f2547]"
                      >
                        {child}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* CONTENT */}
      <main className="pt-14 md:pt-0 md:ml-20 p-6 bg-gray-100 min-h-screen">
        <h1 className="text-xl font-semibold">Main Content</h1>
      </main>
    </>
  );
}
