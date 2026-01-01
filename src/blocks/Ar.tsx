import Badge from "../components/Badge";
import Button from "../components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/Card";
import { worklist } from "../data/data";
export default function Ar() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Ranked Worklist</CardTitle>
            <CardDescription>Expected value - contact cost</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[13px]">
                <thead>
                  <tr className="text-gray-500">
                    <th>Acct</th>
                    <th>Balance</th>
                    <th>Aging</th>
                    <th>Propensity</th>
                    <th>Recommended Action</th>
                    <th>Owner</th>
                    <th className="text-right">Send</th>
                  </tr>
                </thead>
                <tbody>
                  {worklist.map((w) => (
                    <tr key={w.acct} className="border-t border-gray-300">
                      <td className="py-2">{w.acct}</td>
                      <td>{w.bal}</td>
                      <td>{w.age}</td>
                      <td>
                        <Badge>{w.p}</Badge>
                      </td>
                      <td>{w.action}</td>
                      <td>Ops Team</td>
                      <td className="text-right">
                        <Button size="sm">Execute</Button>
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
            <CardTitle>Account Timeline</CardTitle>
            <CardDescription>Communication & payments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-[13px]">
              INV-7741: SMS sent (2025-11-01), Link clicked (2025-11-02), PTP Rs
              500 promised (2025-11-03)
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-1 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Action Composer</CardTitle>
            <CardDescription>Message preview & schedule</CardDescription>
          </CardHeader>
          <CardContent>
            <textarea
              className="w-full rounded-md border border-gray-300 bg-white outline-none transition duration-300 ease-in-out hover:border-blue-500 hover:bg-blue-50 active:border-blue-700 focus:ring-2 focus:ring-blue-400 px-3 py-2 text-[13px]"
              defaultValue="Hi {first_name}, your balance of $980.00 is due on {due_date}. Pay securely here: {link}."
            />
            <div className="mt-2 flex gap-2">
              <Button variant="outline">Email</Button>
              <Button variant="outline">SMS</Button>
              <Button variant="outline">Call</Button>
            </div>
            <div className="mt-2">
              <Button className="w-full">Queue Outreach</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Outcomes</CardTitle>
            <CardDescription>Recent</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-[13px]">
              INV-7602 — Promise-to-pay $500 (2025-11-04)
            </div>
            <div className="text-[13px]">
              INV-7741 — SMS delivered, link clicked (2025-11-02)
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
