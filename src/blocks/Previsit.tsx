import Badge from "../components/Badge";
import Button from "../components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/Card";
import { patientDenialRisk } from "../data/data";
import { getRiskVariant } from "../utils/helper";
function Previsit() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Patient Context</CardTitle>
            <CardDescription>
              Demographics, payer/plan, encounter
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2 text-[13px]">
              <div>
                <strong>Patient:</strong> John Miller
              </div>
              <div>
                <strong>MRN:</strong> 204511
              </div>
              <div>
                <strong>Payer:</strong> UnitedHealthcare ChoicePlus
              </div>
              <div>
                <strong>Plan:</strong> PPO
              </div>
              <div>
                <strong>Provider:</strong> Dr. Smith (Neuro)
              </div>
              <div>
                <strong>DOS:</strong> 11-20-2025
              </div>
            </div>
            <div className="mt-2 flex gap-2">
              <Badge variant="success">Eligibility ✓</Badge>
              <Badge>PA Needed?</Badge>
              <Badge variant="warning">Propensity: Low</Badge>
              {/* Patient-level denial risk, color-coded */}
              <Badge variant={getRiskVariant(patientDenialRisk)}>
                Denial Risk: {patientDenialRisk}
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Order</CardTitle>
            <CardDescription>Service intent</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="font-medium">CPT</div>
                <input
                  className="w-full rounded-xl border px-3 py-2 text-[13px]"
                  defaultValue="70553"
                />
              </div>
              <div>
                <div className="font-medium">ICD-10</div>
                <input
                  className="w-full rounded-xl border px-3 py-2 text-[13px]"
                  defaultValue="G43.909"
                />
              </div>
              <div>
                <div className="font-medium">POS</div>
                <select
                  className="w-full rounded-xl border px-3 py-2 text-[13px]"
                  defaultValue="OP"
                >
                  <option>OP</option>
                  <option>ASC</option>
                  <option>IP</option>
                </select>
              </div>
              <div>
                <div className="font-medium">Site</div>
                <input
                  className="w-full rounded-xl border px-3 py-2 text-[13px]"
                  defaultValue="Imaging Center 1"
                />
              </div>
              <div className="col-span-2">
                <Button className="w-full">Re-score Risk</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Eligibility</CardTitle>
            <CardDescription>270/271 response snapshot</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2 text-[13px]">
              <div>
                <strong>Coverage:</strong> Active
              </div>
              <div>
                <strong>Deductible Remain:</strong> $750
              </div>
              <div>
                <strong>Co-insurance:</strong> 20%
              </div>
              <div>
                <strong>Copay:</strong> $40
              </div>
            </div>
            <div className="mt-2 flex gap-2">
              <Button variant="outline">Refresh</Button>
              <Button variant="outline">View Raw 271</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Patient Cost Estimate</CardTitle>
            <CardDescription>Allowed x Benefits</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-[13px]">
              <strong>Allowed:</strong> $800 — <strong>OOP:</strong> $240
            </div>
            <div className="mt-2 flex gap-2">
              <Button>Collect Deposit</Button>
              <Button variant="outline">Offer EMI Plan</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Prior Authorization</CardTitle>
            <CardDescription>Prediction & submit</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-[13px]">
              <strong>Needs PA:</strong> Likely — <strong>First-Pass:</strong>{" "}
              34%
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Button variant="outline">Attach Docs</Button>
              <Button>Submit PA</Button>
            </div>
            <div className="mt-3">
              <textarea
                className="w-full rounded-xl border px-3 py-2 text-[13px]"
                placeholder="Notes or payer response"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Comms</CardTitle>
            <CardDescription>Estimate reminders</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-2">
            <Button variant="outline">Email</Button>
            <Button variant="outline">SMS</Button>
            <Button variant="outline">IVR</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Previsit;
