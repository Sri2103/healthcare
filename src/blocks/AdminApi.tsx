import Button from "../components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/Card";
export default function AdminApi() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Eligibility 270/271 Endpoint</CardTitle>
          <CardDescription>Configure clearinghouse/payer API</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-2">
            <input
              className="w-full rounded-xl border px-3 py-2"
              defaultValue="https://api.clearinghouse.io/eligibility"
            />
            <div className="grid grid-cols-2 gap-2">
              <select className="rounded-xl border px-3 py-2">
                <option>API Key</option>
                <option>OAuth2</option>
              </select>
              <input
                className="rounded-xl border px-3 py-2"
                defaultValue="vault://elig-key"
              />
            </div>
            <div className="mt-2 flex gap-2">
              <Button size="sm">Test Ping</Button>
              <Button size="sm" variant="outline">
                Parse 271
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Prior Auth 278 Endpoint</CardTitle>
          <CardDescription>PA submissions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-2">
            <input
              className="w-full rounded-xl border px-3 py-2"
              defaultValue="https://api.clearinghouse.io/pa-278"
            />
            <div className="grid grid-cols-2 gap-2 mt-2">
              <select className="rounded-xl border px-3 py-2">
                <option>API Key</option>
                <option>OAuth2</option>
              </select>
              <input
                className="rounded-xl border px-3 py-2"
                defaultValue="vault://pa-key"
              />
            </div>
            <div className="mt-2 flex gap-2">
              <Button size="sm">Send 278</Button>
              <Button size="sm" variant="outline">
                Parse Response
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
