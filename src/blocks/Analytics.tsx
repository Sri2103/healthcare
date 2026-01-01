import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/Card";
export default function Analytics() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>First-Pass Yield (FPY)</CardTitle>
            <CardDescription>Claims passing first submission</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">93.4%</div>
            <div className="text-sm text-gray-500">+2.3% vs last month</div>
            <div className="mt-3">
              <svg
                width="100%"
                height="28"
                viewBox="0 0 100 28"
                preserveAspectRatio="none"
              >
                <polyline
                  points="0,20 20,12 40,8 60,10 80,6 100,4"
                  fill="none"
                  stroke="#1E4D8B"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Denial Rate</CardTitle>
            <CardDescription>Percent of denied claims</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">6.1%</div>
            <div className="text-sm text-gray-500">-1.1% vs last month</div>
            <div className="mt-3">
              <svg
                width="100%"
                height="28"
                viewBox="0 0 100 28"
                preserveAspectRatio="none"
              >
                <polyline
                  points="0,6 20,10 40,12 60,18 80,16 100,12"
                  fill="none"
                  stroke="#DC2626"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>DSO</CardTitle>
            <CardDescription>Days Sales Outstanding</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">37.8 days</div>
            <div className="text-sm text-gray-500">-4.2 days</div>
            <div className="mt-3">
              <svg
                width="100%"
                height="28"
                viewBox="0 0 100 28"
                preserveAspectRatio="none"
              >
                <polyline
                  points="0,18 20,16 40,14 60,12 80,10 100,8"
                  fill="none"
                  stroke="#16A34A"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AR &gt; 90 days</CardTitle>
            <CardDescription>Percentage of AR aged &gt;90</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">12.7%</div>
            <div className="text-sm text-gray-500">-2.0% vs last month</div>
            <div className="mt-3">
              <svg
                width="100%"
                height="28"
                viewBox="0 0 100 28"
                preserveAspectRatio="none"
              >
                <polyline
                  points="0,14 20,12 40,10 60,8 80,6 100,4"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Self-Pay Yield</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">+9.8%</div>
            <div className="text-sm text-gray-500">+3.1% vs last month</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Underpayment Recovery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">$1.8M</div>
            <div className="text-sm text-gray-500">+0.4% vs last month</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recovered Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">$310K</div>
            <div className="text-sm text-gray-500">This period</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Clean Claim Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">88.1%</div>
            <div className="text-sm text-gray-500">
              % of claims without edits
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Avg Days to Payment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">21 days</div>
            <div className="text-sm text-gray-500">Median</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Appeal Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">46%</div>
            <div className="text-sm text-gray-500">Of submitted appeals</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Trends</CardTitle>
            <CardDescription>FPY, denials, cash, propensity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-48 rounded-md border-gray-300 bg-white/60 p-4 text-sm text-slate-500">
              [Chart placeholder]
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Drivers</CardTitle>
            <CardDescription>Why denials are rising</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-[13px]">
              <li>Missing PA — 31%</li>
              <li>Modifier errors — 18%</li>
              <li>Eligibility lapses — 12%</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Collections Waterfall</CardTitle>
            <CardDescription>
              Overview of charges, adjustments and collections
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-[13px]">
              Charges: $4.2M — Adjustments: $300K — Collections: $3.9M
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Denial Aging Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-[13px]">
              0-30: 42% • 31-60: 28% • 61-90: 17% • 90+: 13%
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recovery Runbook</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-[13px]">
              Next steps: Auto-appeals → Provider follow-up → Contract re-rate
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
