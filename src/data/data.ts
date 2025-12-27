// sample data
export const scheduledRows = [
  {
    dos: "11-15-2025 09:30",
    patient: "John Miller",
    provider: "Dr. Smith",
    vt: "MRI Brain",
    ns: "0.74 (High)",
    elig: "Active",
    pa: "Needed - Submitted",
    oop: "$240.00",
  },
  {
    dos: "11-16-2025 11:00",
    patient: "Emily Davis",
    provider: "Dr. Johnson",
    vt: "E/M 99213",
    ns: "0.18 (Low)",
    elig: "Active",
    pa: "Not required",
    oop: "$60.00",
  },
  {
    dos: "11-18-2025 14:15",
    patient: "Michael Brown",
    provider: "Dr. Williams",
    vt: "PT 97110",
    ns: "0.52 (Med)",
    elig: "Active",
    pa: "Approved",
    oop: "$120.00",
  },
  {
    dos: "11-19-2025 10:00",
    patient: "Sarah Johnson",
    provider: "Dr. Nguyen",
    vt: "CT 70450",
    ns: "0.39 (Med)",
    elig: "Pending refresh",
    pa: "Needed - Not submitted",
    oop: "-",
  },
];

export const revOptixMetrics = [
  { title: "Reclaimed Revenue Opportunities", value: "$310,000", delta: 3.2 },
  {
    title: "Reimbursement Gap - Govt. Benchmarks",
    value: "$75,200",
    delta: -1.4,
  },
  {
    title: "Self-Pay Reclassification Opportunities",
    value: "$42,900",
    delta: 2.8,
  },
  {
    title: "Care Gap - Major Procedure Patients",
    value: "892 patients",
    delta: 1.1,
  },
  {
    title: "Revenue Hold - Provider Enrollment Delays",
    value: "$128,500",
    delta: -0.9,
  },
  { title: "Clinical Intensity Coding Gap", value: "+4.1%", delta: 1.3 },
  { title: "Charge Pairing Gaps", value: "$56,800", delta: 2.4 },
  {
    title: "Lost in Transmission - Recovery Queue",
    value: "317 claims",
    delta: 3.7,
  },
  {
    title: "Payment Delay - Edit Resolution Backlog",
    value: "2,147 claims",
    delta: -2.2,
  },
  {
    title: "Global Surgery Window Adjustment Errors",
    value: "84 cases",
    delta: 1.9,
  },
  { title: "Payment Cycle Tracking Gaps", value: "$98,300", delta: 2.5 },
  { title: "Visit Conversion Gap", value: "11.3%", delta: 1.6 },
  { title: "Denial Resolution Aging Index", value: "39.7 days", delta: -3.4 },
];

export const claimLines = [
  {
    id: 1,
    cpt: "99213",
    dx: "R51",
    risk: "0.81 (High)",
    hint: "Consider -25 modifier",
  },
  {
    id: 2,
    cpt: "70553",
    dx: "G43.909",
    risk: "0.36 (Med)",
    hint: "Attach PA#",
  },
];

export const worklist = [
  {
    acct: "INV-7741",
    bal: "$1,890.00",
    age: "90+",
    p: 0.62,
    action: "SMS + EMI link",
  },
  {
    acct: "INV-7602",
    bal: "$980.00",
    age: "60",
    p: 0.27,
    action: "Counselor call",
  },
];

// Example patient-level denial risk (would come from model in real app)
export const patientDenialRisk = "High"; // options: High / Med / Low
