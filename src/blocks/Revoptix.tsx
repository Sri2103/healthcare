import Badge from "../components/Badge";
import Button from "../components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/Card";
import { revOptixMetrics } from "../data/data";
import { getRiskVariant } from "../utils/helper";

export default function RevOptix() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {revOptixMetrics.map((m) => (
        <Card key={m.title}>
          <CardHeader>
            <CardTitle>{m.title}</CardTitle>
            <CardDescription
              className={m.delta >= 0 ? "text-green-600" : "text-red-600"}
            >
              {m.delta >= 0
                ? `+${m.delta}% vs last month`
                : `${m.delta}% vs last month`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">{m.value}</div>
            <div className="text-sm text-gray-500 mt-2">Quick actions</div>
            <div className="mt-2 flex gap-2">
              <Badge variant={getRiskVariant("High")}>Denial Risk: High</Badge>
              <Button size="sm">Investigate</Button>
              <Button variant="outline" size="sm">
                Export CSV
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
