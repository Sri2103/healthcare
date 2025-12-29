import Badge from "../components/Badge";
import Button from "../components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/Card";
export default function Scheduler() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Tomorrow's Grid (No-Show Overlay)</CardTitle>
            <CardDescription>High-risk slots highlighted</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 md:grid-cols-3 gap-3 text-[13px]">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className={`rounded-xl border p-3 ${
                    i % 4 === 1 ? "bg-red-50 border-red-200" : "bg-white"
                  }`}
                >
                  <div className="font-medium">{9 + i}:00</div>
                  <div className="text-gray-500">
                    {i % 4 === 1 ? "No-show risk: 0.74" : "Risk: 0.18"}
                  </div>
                  <div className="mt-2 flex gap-2">
                    <Button variant="outline" size="sm">
                      Overbook
                    </Button>
                    <Button variant="outline" size="sm">
                      Telehealth
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card>
          <CardHeader>
            <CardTitle>Template Suggestions</CardTitle>
            <CardDescription>Duration and buffers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span>New-patient (Cardio)</span>
              <Badge>40 min</Badge>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span>Follow-up</span>
              <Badge>15 min</Badge>
            </div>
            <div className="mt-2">
              <Button className="w-full">Apply for Next Week</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardHeader>
            <CardTitle>No-show Heatmap</CardTitle>
            <CardDescription>By provider</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-[13px]">
              Dr. Smith — 18% no-show; Dr. Johnson — 9%
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
