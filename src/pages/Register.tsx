import { useState } from "react";
import { Input } from "../components/Input";
import Button from "../components/Button";
import { Card } from "../components/Card";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignup = () => {
    console.log({ name, email, password });
    // call signup API here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className={"p-6 border"}>
        <h2 className="text-xl font-bold mb-4">Create Account</h2>

        <div className="space-y-4">
          <Input
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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

          <Button onClick={handleSignup}>Sign Up</Button>
        </div>
      </Card>
    </div>
  );
}
