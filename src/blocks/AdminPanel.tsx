import Button from "../components/Button";

export default function AdminPanel({
  setAdminPanelOpen,
}: {
  setAdminPanelOpen: (val: boolean) => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/30 backdrop-blur-sm">
      <div className="w-95 h-full bg-white shadow-xl border-l animate-slide-in p-4 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-[#1E4D8B]">Admin Panel</h2>
          <button
            className="text-gray-600 hover:text-black text-xl"
            onClick={() => setAdminPanelOpen(false)}
          >
            ×
          </button>
        </div>

        <div className="space-y-4 text-[14px]">
          <div>
            <h3 className="font-medium">User Management</h3>
            <p className="text-gray-500 text-sm">
              Add, edit and manage system users
            </p>
            <Button className="mt-2 w-full" size="sm">
              Open
            </Button>
          </div>

          <div>
            <h3 className="font-medium">Role & Access Control</h3>
            <p className="text-gray-500 text-sm">
              Define permissions & access levels
            </p>
            <Button className="mt-2 w-full" size="sm">
              Configure
            </Button>
          </div>

          <div>
            <h3 className="font-medium">System Settings</h3>
            <p className="text-gray-500 text-sm">
              Manage org-wide configurations
            </p>
            <Button className="mt-2 w-full" size="sm">
              Manage
            </Button>
          </div>

          <div>
            <h3 className="font-medium">Audit Logs</h3>
            <p className="text-gray-500 text-sm">Track system activity</p>
            <Button className="mt-2 w-full" size="sm">
              View Logs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
