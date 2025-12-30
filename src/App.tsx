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
import ConversationalBI from "./blocks/ConversationalBI";
import { Link, useNavigate } from "react-router";
import Button from "./components/Button";

function App() {
  const [adminPanelOpen, setAdminPanelOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("previsit");
  const [activeTenant, setActiveTenant] = useState("UnityCare Health System");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("authenticated");
  if (!isLoggedIn) {
    navigate("/login");
  }
  return (
    <div
      className="min-h-screen bg-white text-gray-800 flex flex-col"
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
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-6 ">
          <div className="flex flex-col md:flex-row gap-6">
            {/* tab buttons */}
            <aside className="md:w-56 shrink-0">
              <div className="flex md:flex-col flex-wrap gap-2 md:sticky md:top-20">
                <Button>
                  <Link to={"/dashboard"}>Power BI</Link>
                </Button>
                {Object.keys(Tabs).map((key) => {
                  const curr: { key: string; label: string } =
                    Tabs[key as keyof typeof Tabs];
                  const tab: string = curr.key;
                  const label: string = curr.label;

                  return (
                    <TabButton
                      active={activeTab == tab}
                      onClick={() => setActiveTab(tab)}
                    >
                      {label}
                    </TabButton>
                  );
                })}
              </div>
            </aside>

            {/* active tab sections */}
            {activeTab === "revoptix" && <RevOptix />}
            {activeTab === "revaccel" && <RevAccel />}
            {/* PreVisit (default) */}
            {activeTab === "previsit" && <Previsit />}
            {activeTab === "prebill" && <Prebill />}
            {activeTab === "ar" && <Ar />}
            {activeTab === "scheduler" && <Scheduler />}
            {activeTab === "scheduledpat" && <SchedulePat />}
            {activeTab === "appeals" && <Appeals />}
            {activeTab === "analytics" && <Analytics />}
            {activeTab === "dataops" && <DataOps />}
            {activeTab === "adminapis" && <AdminApi />}
            {activeTab === "conversationalBI" && <ConversationalBI />}
          </div>
        </div>
      </main>
      {/* Admin Slide-Over Panel */}
      {adminPanelOpen && <AdminPanel setAdminPanelOpen={setAdminPanelOpen} />}
      <footer className="border-t py-6 text-center text-xs text-gray-500 flex-0 ">
        (c) {new Date().getFullYear()} RCM Agentic AI Suite
      </footer>
    </div>
  );
}

export default App;
