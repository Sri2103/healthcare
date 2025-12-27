import Button from "../components/Button";

function HeaderBlock({
  activeTenant,
  setActiveTenant,
  search,
  setSearch,
  setAdminPanelOpen,
}: {
  activeTenant: string;
  setActiveTenant: (val: string) => void;
  search: string;
  setSearch: (val: string) => void;
  setAdminPanelOpen: (val: boolean) => void;
}) {
  return (
    <header className="sticky top-0 z-30 border-b bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-lg bg-[#1E4D8B]/10 text-[#1E4D8B] grid place-items-center">
            ★
          </div>
          <span className="font-semibold text-[15px]">
            RCM Agentic AI Suite
          </span>
          {/* <Badge>Wireframes</Badge> */}
        </div>
        <div className="ml-auto flex items-center gap-2">
          <select
            className="rounded-xl border px-3 py-2 text-[13px]"
            value={activeTenant}
            onChange={(e) => setActiveTenant(e.target.value)}
          >
            <option>UnityCare Health System</option>
            <option>ClearBridge Health Partners</option>
            <option>Horizon Valley Health</option>
          </select>
          <input
            className="w-70 rounded-xl border px-3 py-2 text-[13px]"
            placeholder="Search patient/claim/order"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            variant="outline"
            size="sm"
            onClick={() => setAdminPanelOpen(true)}
          >
            Admin
          </Button>
        </div>
      </div>
    </header>
  );
}

export default HeaderBlock;
