import { useState } from "react";
import "./App.css";

import TabButton from "./components/TabButton";
import { Tabs } from "./data/tabs";
import RevOptix from "./blocks/Revoptix";
import RevAccel from "./blocks/RevAccel";
import Previsit from "./blocks/Previsit";
import Prebill from "./blocks/Prebill";
import Ar from "./blocks/Ar";
import Scheduler from "./blocks/scheduler";
import SchedulePat from "./blocks/SchedulePat";
import Appeals from "./blocks/Appeals";
import Analytics from "./blocks/Analytics";
import DataOps from "./blocks/DataOps";
import AdminApi from "./blocks/AdminApi";
import HeaderBlock from "./blocks/Header";
import AdminPanel from "./blocks/AdminPanel";

function App() {
  const [adminPanelOpen, setAdminPanelOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("previsit");
  const [activeTenant, setActiveTenant] = useState("UnityCare Health System");
  const [search, setSearch] = useState("");
  return (
    <div
      className="min-h-screen bg-white text-gray-800"
      style={{ fontFamily: 'system-ui, "Segoe UI", Roboto, sans-serif' }}
    >
      {/* header */}
      <HeaderBlock
        activeTenant={activeTenant}
        setActiveTenant={setActiveTenant}
        search={search}
        setSearch={setSearch}
        setAdminPanelOpen={setAdminPanelOpen}
      />

      {/* main section */}
      <main className="mx-auto max-w-7xl px-4 py-6 space-y-6">
        {/* tab buttons */}
        <div className="flex flex-wrap gap-2">
          {Object.keys(Tabs).map((key) => {
            const curr: { key: string; label: string } =
              Tabs[key as keyof typeof Tabs];
            const tab: string = curr.key;
            const label: string = curr.label;

            return (
              <>
                <TabButton
                  active={activeTab == tab}
                  onClick={() => setActiveTab(tab)}
                >
                  {label}
                </TabButton>
              </>
            );
          })}
        </div>

        {/* active tab sections */}
        {/* RevOptix */}
        {activeTab === "revoptix" && <RevOptix />}

        {/* RevAccel Agent */}
        {activeTab === "revaccel" && <RevAccel />}

        {/* PreVisit (default) */}
        {activeTab === "previsit" && <Previsit />}

        {/* Pre-bill (detailed) */}
        {activeTab === "prebill" && <Prebill />}

        {/* A/R Worklist (detailed) */}
        {activeTab === "ar" && <Ar />}

        {/* Scheduler Ops (detailed) */}
        {activeTab === "scheduler" && <Scheduler />}

        {/* Scheduled Patients (detailed) */}
        {activeTab === "scheduledpat" && <SchedulePat />}

        {/* Appeals (GenAI) full */}
        {activeTab === "appeals" && <Appeals />}

        {/* Analytics expanded */}
        {activeTab === "analytics" && <Analytics />}
        {/* Data Mapping Admin detailed */}
        {activeTab === "dataops" && <DataOps />}
        {/* Admin APIs detailed */}
        {activeTab === "adminapis" && <AdminApi />}
      </main>

      {/* Admin Slide-Over Panel */}
      {adminPanelOpen && <AdminPanel setAdminPanelOpen={setAdminPanelOpen} />}
      <footer className="border-t py-6 text-center text-xs text-gray-500">
        (c) {new Date().getFullYear()} RCM Agentic AI Suite
      </footer>
    </div>
  );
}

export default App;
