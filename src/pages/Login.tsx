import { useState } from "react";
import { Input } from "../components/Input";
import Button from "../components/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log({ email, password });
    // call login API here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <div className="space-y-4">
          <Input
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button onClick={handleLogin}>Login</Button>
        </div>
      </div>
    </div>
  );
}
