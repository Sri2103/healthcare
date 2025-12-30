import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "./index.css";
// import App from "./App.tsx";
import BiDashboard from "./static/Bi.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Subscription from "./pages/Subscribe.tsx";

// import OTest from "./static/bake.tsx";
// import Jake from "./static/Jake.tsx";
import Previsit from "./blocks/Previsit.tsx";
import ConversationalBI from "./blocks/ConversationalBI.tsx";
import SchedulePat from "./blocks/SchedulePat.tsx";
import Scheduler from "./blocks/scheduler.tsx";
import Prebill from "./blocks/Prebill.tsx";
import Ar from "./blocks/Ar.tsx";
import Appeals from "./blocks/Appeals.tsx";
import RevAccel from "./blocks/RevAccel.tsx";
import DataOps from "./blocks/DataOps.tsx";
import AdminApi from "./blocks/AdminApi.tsx";
import RevOptix from "./blocks/Revoptix.tsx";
import Analytics from "./blocks/Analytics.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import AppointRev from "./blocks/AppointRev.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to={"dashboard"} />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="bi" element={<BiDashboard />} />
          <Route path="subscribe" element={<Subscription />} />
        </Route>

        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Previsit />} />
          <Route path="previsit" element={<Previsit />} />
          <Route path="bi" element={<ConversationalBI />} />
          <Route path="schedulepat" element={<SchedulePat />} />
          <Route path="scheduler" element={<Scheduler />} />
          <Route path="prebill" element={<Prebill />} />
          <Route path="ar" element={<Ar />} />
          <Route path="appeals" element={<Appeals />} />
          <Route path="revaccel" element={<RevAccel />} />
          <Route path="revoptix" element={<RevOptix />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="dataops" element={<DataOps />} />
          <Route path="adminapis" element={<AdminApi />} />
          <Route path="apptrev" element={<AppointRev />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
