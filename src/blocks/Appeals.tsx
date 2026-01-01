import Button from "../components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/Card";
export default function Appeals() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Underpayment Variance</CardTitle>
            <CardDescription>Compare against contract</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[13px]">
                <thead>
                  <tr className="text-gray-500">
                    <th>Claim</th>
                    <th>CPT</th>
                    <th>Allowed</th>
                    <th>Paid</th>
                    <th>Variance</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-300">
                    <td>CLM-88213</td>
                    <td>70450</td>
                    <td>$400</td>
                    <td>$320</td>
                    <td className="text-red-600">-$80</td>
                    <td>
                      <Button size="sm">Generate Appeal</Button>
                    </td>
                  </tr>
                  <tr className="border-t border-gray-300">
                    <td>CLM-88298</td>
                    <td>97110</td>
                    <td>$250</td>
                    <td>$250</td>
                    <td className="text-gray-700">$0</td>
                    <td>
                      <Button size="sm">Review</Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Appeal Playbooks</CardTitle>
            <CardDescription>Templates & citations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-[13px]">
              UHC-Radiology: Missing PA note (31%) — Use template A
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Appeal Packet</CardTitle>
            <CardDescription>Templates, attachments</CardDescription>
          </CardHeader>
          <CardContent>
            <select className="w-full rounded-md border border-gray-300 bg-white outline-none transition duration-300 ease-in-out hover:border-blue-500 hover:bg-blue-50 active:border-blue-700 focus:ring-2 focus:ring-blue-400  px-3 py-2 text-[13px]">
              <option>Template A</option>
              <option>Template B</option>
            </select>
            <textarea
              className="w-full rounded-md border border-gray-300 bg-white outline-none transition duration-300 ease-in-out hover:border-blue-500 hover:bg-blue-50 active:border-blue-700 focus:ring-2 focus:ring-blue-400  px-3 py-2 mt-2"
              rows={6}
              placeholder="Auto-generated letter body"
            />
            <div className="mt-2">
              <Button className="w-full">Submit Appeal</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Denial Clusters</CardTitle>
            <CardDescription>RCA cohorts</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-[13px]">
              <li>UHC-Radiology: Missing PA (31%)</li>
              <li>Anthem-E/M: Modifier missing (18%)</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
