import Button from "../components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/Card";
export default function DataOps() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Source to Target Mapping</CardTitle>
            <CardDescription>Field mappings & transforms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[13px]">
                <thead>
                  <tr className="text-gray-500">
                    <th>Source Field</th>
                    <th>Target</th>
                    <th>Type</th>
                    <th>Transform</th>
                    <th>Sample</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td>emr.patient_id</td>
                    <td>dim_patient.patient_id</td>
                    <td>STRING</td>
                    <td>passthrough</td>
                    <td>P12345</td>
                    <td>
                      <Button size="sm">Edit</Button>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td>emr.order.cpt</td>
                    <td>orders_fact.cpt_code</td>
                    <td>STRING</td>
                    <td>upper()</td>
                    <td>70553</td>
                    <td>
                      <Button size="sm">Edit</Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Source Connection</CardTitle>
            <CardDescription>PMS/EMR connectors</CardDescription>
          </CardHeader>
          <CardContent>
            <input
              className="w-full rounded-xl border px-3 py-2 text-[13px]"
              defaultValue="sftp://pms.example.com/drop"
            />
            <div className="grid grid-cols-2 gap-2 mt-2">
              <input
                className="rounded-xl border px-3 py-2"
                defaultValue="ingest"
              />
              <input
                className="rounded-xl border px-3 py-2"
                defaultValue="vault://pms-key"
              />
            </div>
            <div className="mt-2 flex gap-2">
              <Button size="sm">Test Connect</Button>
              <Button size="sm" variant="outline">
                Preview Sample
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardHeader>
            <CardTitle>DQ Rules</CardTitle>
            <CardDescription>Quality checks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-[13px]">
              Mandatory keys: On — Referential integrity: On — Bounds checks: On
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
