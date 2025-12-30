import { users } from "../data/users";

// Helper: map textual risk -> badge variant
export function getRiskVariant(riskText: string) {
  if (!riskText) return "secondary";
  const t = riskText.toLowerCase();
  if (t.includes("high")) return "destructive";
  if (t.includes("med") || t.includes("medium")) return "warning";
  if (t.includes("low")) return "success";
  return "secondary";
}

export function manageLogin(email: string, password: string) {
  const data = users.find((u) => u.email == email);
  if (data && data.email == email && data.password == password) {
    return true;
  }
  return false;
}


