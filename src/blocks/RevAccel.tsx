import Button from "../components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/Card";

export default function RevAccel() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Actionable A/R Intelligence</CardTitle>
          <CardDescription>
            Priority accounts & recommended actions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-semibold">$512,400</div>
          <div className="text-sm text-gray-500">Estimated recoverable</div>
          <div className="mt-2">
            <Button size="sm">View Opportunities</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Revenue Leakage Risk — Denials Aging</CardTitle>
          <CardDescription>At-risk dollars by aging cohort</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-semibold">$128,300</div>
          <div className="text-sm text-gray-500">High-risk (90+ days)</div>
          <div className="mt-2">
            <Button variant="outline" size="sm">
              Drill into Aging
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>MR Denial Prevention AI</CardTitle>
          <CardDescription>Modelled prevented denials</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-semibold">3,420 prevented</div>
          <div className="text-sm text-gray-500">Worth ~$212,000</div>
          <div className="mt-2">
            <Button size="sm">Tune Model</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Revenue Hold — Suspense A/R</CardTitle>
          <CardDescription>
            Claims on hold awaiting enrollment/attachments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-semibold">$94,700</div>
          <div className="text-sm text-gray-500">112 claims</div>
          <div className="mt-2">
            <Button variant="outline" size="sm">
              Release Queue
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>TFL Protect AI</CardTitle>
          <CardDescription>
            Third-Party Liability recoveries identified
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-semibold">$68,900</div>
          <div className="text-sm text-gray-500">45 cases flagged</div>
          <div className="mt-2">
            <Button size="sm">Review TFL Cases</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pending Follow-Up (45+ Days)</CardTitle>
          <CardDescription>Accounts awaiting follow-up</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-semibold">372</div>
          <div className="text-sm text-gray-500">45+ days pending</div>
          <div className="mt-2">
            <Button variant="outline" size="sm">
              Assign Owners
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-3">
        <CardHeader>
          <CardTitle>RevAccel Pipeline</CardTitle>
          <CardDescription>Latest detections & actions</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-[13px] space-y-1">
            <li>Top opportunity: UHC radiology — $42,300</li>
            <li>MR AI alerts today: 128</li>
            <li>Pending TFL cases: 45</li>
          </ul>
          <div className="mt-3">
            <Button size="sm">Export Opportunities</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
