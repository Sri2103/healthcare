import Badge from "../components/Badge";
import Button from "../components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/Card";
import { claimLines } from "../data/data";
import { getRiskVariant } from "../utils/helper";
export default function Prebill() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-8 gap-4">
      <div className="lg:col-span-5">
        <Card>
          <CardHeader>
            <CardTitle>Claim Lines</CardTitle>
            <CardDescription>Risk-scored with fix hints</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[13px]">
                <thead>
                  <tr className="text-gray-500">
                    <th>Line</th>
                    <th>CPT</th>
                    <th>Dx</th>
                    <th>Risk</th>
                    <th>Top Hint</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {claimLines.map((r) => (
                    <tr key={r.id} className="border-t border-gray-300">
                      <td className="py-2">{r.id}</td>
                      <td>{r.cpt}</td>
                      <td>{r.dx}</td>
                      <td>
                        <Badge variant={getRiskVariant(r.risk)}>{r.risk}</Badge>
                      </td>
                      <td>{r.hint}</td>
                      <td>
                        <Button variant="outline" size="sm">
                          Apply Fix
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Claim Summary</CardTitle>
            <CardDescription>Provider, payer, DOS</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-[13px]">
              <div>
                <strong>Claim ID:</strong> CLM-88122
              </div>
              <div>
                <strong>Payer:</strong> UHC
              </div>
              <div>
                <strong>Provider:</strong> Dr. Smith
              </div>
              <div>
                <strong>Status:</strong> Draft
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <Button>Submit Claim</Button>
              <Button variant="outline">Save Draft</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-3 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Explainability</CardTitle>
            <CardDescription>Top SHAP drivers</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-[13px]">
              <li>Missing -25 modifier on 99213</li>
              <li>PA number not attached for 70553</li>
              <li>Provider specialty vs payer rule mismatch</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Validation</CardTitle>
            <CardDescription>Automated QA</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-[13px]">
              Errors: <span className="text-red-600">2</span> — Warnings:{" "}
              <span className="text-amber-600">3</span>
            </div>
            <div className="mt-2">
              <Button size="sm">Run Full Validation</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
