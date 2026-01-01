import Badge from "../components/Badge";
import Button from "../components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/Card";
import { scheduledRows } from "../data/data";
import { getRiskVariant } from "../utils/helper";
export default function SchedulePat() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Date Range & Filters</CardTitle>
          <CardDescription>Filter scheduled patients</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[13px]">
          <div className="md:col-span-2">
            <div className="font-medium">From</div>
            <input
              type="date"
              className="w-full rounded-md border border-gray-300 bg-white outline-none transition duration-300 ease-in-out hover:border-blue-500 hover:bg-blue-50 active:border-blue-700 focus:ring-2 focus:ring-blue-400 px-3 py-2"
              defaultValue="2025-11-12"
            />
          </div>
          <div className="md:col-span-2">
            <div className="font-medium">To</div>
            <input
              type="date"
              className="w-full rounded-md border border-gray-300 bg-white outline-none transition duration-300 ease-in-out hover:border-blue-500 hover:bg-blue-50 active:border-blue-700 focus:ring-2 focus:ring-blue-400 px-3 py-2"
              defaultValue="2025-11-20"
            />
          </div>
          <div className="md:col-span-1 flex items-end">
            <Button className="w-full">Apply</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Scheduled Patients</CardTitle>
          <CardDescription>
            No-show risk %, eligibility, PA, and OOP
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px]">
              <thead>
                <tr className="text-gray-500">
                  <th>DOS</th>
                  <th>Patient</th>
                  <th>Provider</th>
                  <th>Visit</th>
                  <th>Risk</th>
                  <th>Eligibility</th>
                  <th>PA</th>
                  <th>OOP</th>
                </tr>
              </thead>
              <tbody>
                {scheduledRows.map((r, i) => (
                  <tr key={i} className="border-t border-gray-300">
                    <td className="py-2">{r.dos}</td>
                    <td>{r.patient}</td>
                    <td>{r.provider}</td>
                    <td>{r.vt}</td>
                    <td>
                      <Badge variant={getRiskVariant(r.ns)}>{r.ns}</Badge>
                    </td>
                    <td>
                      <span
                        className={
                          r.elig === "Active"
                            ? "text-green-600 font-medium"
                            : "text-red-600 font-medium"
                        }
                      >
                        {r.elig}
                      </span>
                    </td>
                    <td>{r.pa}</td>
                    <td>{r.oop}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
