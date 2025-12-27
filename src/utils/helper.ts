// Helper: map textual risk -> badge variant
export function getRiskVariant(riskText: string) {
  if (!riskText) return "secondary";
  const t = riskText.toLowerCase();
  if (t.includes("high")) return "destructive";
  if (t.includes("med") || t.includes("medium")) return "warning";
  if (t.includes("low")) return "success";
  return "secondary";
}
