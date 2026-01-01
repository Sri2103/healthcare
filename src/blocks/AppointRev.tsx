import Button from "../components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/Card";
import { appointmentOpportunities } from "../data/data";

export default function AppointRev() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2">
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
      </div>
      <div>
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
      </div>
    </div>
  );
}
