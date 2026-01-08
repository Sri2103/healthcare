import Badge from "../components/Badge";
import Button from "../components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/Card";

export default function AppointRev() {
  return (
    <div className="grid grid-cols-1 gap-6">
      {/* <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Appointment - Revenue Intelligence</CardTitle>
            <CardDescription>
              Scheduling & collections opportunities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-500">
                  Estimated Opportunity
                </div>
                <div className="text-2xl font-semibold">$83,100</div>
                <div className="text-xs text-gray-500 mt-1">Next 90 days</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">
                  Booked Visits at Risk
                </div>
                <div className="text-2xl font-semibold">412</div>
                <div className="text-xs text-gray-500 mt-1">
                  Top providers: Dr. Smith, Dr. Johnson, Dr. Nguyen
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-sm font-medium">Top Opportunities</div>
              <div className="mt-2 space-y-2">
                {appointmentOpportunities.map((op) => (
                  <div
                    key={op.id}
                    className="rounded-xl border border-gray-300 bg-white p-3 flex items-center justify-between"
                  >
                    <div>
                      <div className="font-medium">{op.title}</div>
                      <div className="text-xs text-gray-500">
                        Provider: {op.provider} • {op.impact} • Channel:{" "}
                        {op.channel}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{op.estRevenue}</div>
                      <div className="text-xs text-gray-500">Est. revenue</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <Button size="sm">Run Outreach (SMS)</Button>
              <Button size="sm">Create Deposit Campaign</Button>
              <Button size="sm" variant="outline">
                Export Opportunities
              </Button>
            </div>
          </CardContent>
        </Card>
      </div> */}
      {/* <div>
        <Card>
          <CardHeader>
            <CardTitle>Filters</CardTitle>
            <CardDescription>Refine opportunities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <label className="text-sm">Provider</label>
              <select className="rounded-xl border  border-gray-300 px-3 py-2">
                <option>All</option>
                <option>Dr. Smith</option>
                <option>Dr. Johnson</option>
                <option>Dr. Nguyen</option>
              </select>
              <label className="text-sm">Min Est. Revenue</label>
              <input
                className="rounded-xl border border-gray-300 px-3 py-2"
                defaultValue="$0"
              />
              <div className="mt-2 flex gap-2">
                <Button size="sm">Apply</Button>
                <Button size="sm" variant="outline">
                  Reset
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div> */}
      <div className="grid grid-cols-1 gap-6">
        {/* TOP TWO PANEL LAYOUT */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* RISK DISTRIBUTION */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Appointment Risk Distribution</CardTitle>
                  <CardDescription>
                    AI scored probability buckets
                  </CardDescription>
                </div>
                <div className="flex gap-1">
                  <Badge variant="success">Low</Badge>
                  <Badge variant="warning">Medium</Badge>
                  <Badge variant="destructive">High</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative flex items-end justify-around h-44 bg-linear-to-t from-gray-100 to-white rounded-xl border border-gray-300 p-4">
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="relative w-14 bg-emerald-500/80 rounded-lg"
                    style={{ height: "65%" }}
                  >
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-emerald-700">
                      65%
                    </span>
                  </div>
                  <div className="text-xs font-medium">Low Risk</div>
                  <div className="text-[11px] text-gray-500">1,120 appts</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="relative w-14 bg-amber-500/80 rounded-lg"
                    style={{ height: "40%" }}
                  >
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-amber-700">
                      40%
                    </span>
                  </div>
                  <div className="text-xs font-medium">Medium Risk</div>
                  <div className="text-[11px] text-gray-500">640 appts</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="relative w-14 bg-rose-500/80 rounded-lg"
                    style={{ height: "30%" }}
                  >
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-rose-700">
                      30%
                    </span>
                  </div>
                  <div className="text-xs font-medium">High Risk</div>
                  <div className="text-[11px] text-gray-500">412 appts</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* OPPORTUNITY MIX */}
          <Card>
            <CardHeader>
              <CardTitle>Opportunity Mix</CardTitle>
              <CardDescription>Revenue contribution by lever</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>No-show Prevention</span>
                  <span>$28.4K</span>
                </div>
                <div className="h-2 bg-gray-200 rounded">
                  <div
                    className="h-2 bg-emerald-500 rounded"
                    style={{ width: "44%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Pre-Visit Collections</span>
                  <span>$19.6K</span>
                </div>
                <div className="h-2 bg-gray-200 rounded">
                  <div
                    className="h-2 bg-sky-500 rounded"
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Slot Optimization</span>
                  <span>$16.8K</span>
                </div>
                <div className="h-2 bg-gray-200 rounded">
                  <div
                    className="h-2 bg-amber-500 rounded"
                    style={{ width: "26%" }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* OPPORTUNITY METRICS */}
        <Card>
          <CardHeader>
            <CardTitle>Opportunity Metrics</CardTitle>
            <CardDescription>Where revenue can be unlocked</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="rounded-xl border border-gray-300 p-3 bg-emerald-50">
              <div className="font-medium">Total Opportunity</div>
              <div className="text-2xl">$64,800</div>
            </div>
            <div className="rounded-xl border border-gray-300 p-3 bg-sky-50">
              <div className="font-medium">Conversion</div>
              <div className="text-2xl">$28,400</div>
            </div>
            <div className="rounded-xl border border-gray-300 p-3 bg-amber-50">
              <div className="font-medium">Pre-Visit Collections</div>
              <div className="text-2xl">$19,600</div>
            </div>
            <div className="rounded-xl border border-gray-300 p-3 bg-rose-50">
              <div className="font-medium">Slot Optimization</div>
              <div className="text-2xl">$16,800</div>
            </div>
          </CardContent>
        </Card>

        {/* TOP OPPORTUNITIES */}
        <Card>
          <CardHeader>
            <CardTitle>Top Opportunities</CardTitle>
            <CardDescription>
              Highest impact, action-ready revenue opportunities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border border-gray-300 rounded-xl p-4 bg-white hover:shadow-sm transition">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <div className="font-medium">
                    Waitlist Backfill for Same-Day Cancellations
                  </div>
                  <div className="text-xs text-gray-500">
                    Driver: Late cancellations · Channel: Auto-call
                  </div>
                  <div className="flex gap-2 mt-1">
                    <Badge variant="success">Recoverable</Badge>
                    <Badge variant="secondary">Automation</Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-emerald-700">
                    $11,200
                  </div>
                  <div className="text-[11px] text-gray-500">Est. recovery</div>
                </div>
              </div>
            </div>

            <div className="border border-gray-300 rounded-xl p-4 bg-white hover:shadow-sm transition">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <div className="font-medium">
                    Overbook Buffer for Chronic No-Show Slots
                  </div>
                  <div className="text-xs text-gray-500">
                    Driver: Predictable no-show patterns · Channel: Template
                    rule
                  </div>
                  <div className="flex gap-2 mt-1">
                    <Badge variant="warning">Medium Risk</Badge>
                    <Badge variant="secondary">Scheduler Ops</Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-emerald-700">
                    $9,800
                  </div>
                  <div className="text-[11px] text-gray-500">Est. recovery</div>
                </div>
              </div>
            </div>

            <div className="border border-gray-300 rounded-xl p-4 bg-white hover:shadow-sm transition">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <div className="font-medium">
                    Pre-Authorization Verification – High-Value Visits
                  </div>
                  <div className="text-xs text-gray-500">
                    Driver: Auth-related cancellations · Channel: Pre-visit
                    check
                  </div>
                  <div className="flex gap-2 mt-1">
                    <Badge variant="destructive">High Risk</Badge>
                    <Badge variant="secondary">Revenue Ops</Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-emerald-700">
                    $7,600
                  </div>
                  <div className="text-[11px] text-gray-500">Est. recovery</div>
                </div>
              </div>
            </div>

            <div className="border border-gray-300 rounded-xl p-4 bg-white hover:shadow-sm transition">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <div className="font-medium">
                    Patient Payment Reminder – High Deductible Plans
                  </div>
                  <div className="text-xs text-gray-500">
                    Driver: High OOP exposure · Channel: SMS / Email
                  </div>
                  <div className="flex gap-2 mt-1">
                    <Badge variant="warning">Medium Risk</Badge>
                    <Badge variant="secondary">Front Desk</Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-emerald-700">
                    $6,900
                  </div>
                  <div className="text-[11px] text-gray-500">Est. recovery</div>
                </div>
              </div>
            </div>

            <div className="border border-gray-300 rounded-xl p-4 bg-white hover:shadow-sm transition">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <div className="font-medium">
                    Provider Template Optimization – Underutilized Slots
                  </div>
                  <div className="text-xs text-gray-500">
                    Driver: Capacity mismatch · Channel: Template update
                  </div>
                  <div className="flex gap-2 mt-1">
                    <Badge variant="success">Recoverable</Badge>
                    <Badge variant="secondary">Ops Optimization</Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-emerald-700">
                    $8,300
                  </div>
                  <div className="text-[11px] text-gray-500">Est. recovery</div>
                </div>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <Button size="sm">Run Selected Actions</Button>
              <Button size="sm" variant="outline">
                View All Opportunities
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
