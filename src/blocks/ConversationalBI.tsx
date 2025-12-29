import { useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/Card";
import Button from "../components/Button";

export default function ConversationalBI() {
  const [chatMessages, setChatMessages] = useState<
    Array<{ from: "user" | "bot"; text: string }>
  >([
    {
      from: "bot",
      text: "Hi — I am RevBot. Ask about denials, scheduling risk, or revenue opportunities.",
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  function sendChat() {
    const txt = chatInput.trim();
    if (!txt) return;
    setChatMessages((p) => [...p, { from: "user", text: txt }]);
    setChatInput("");
    setTimeout(() => {
      setChatMessages((p) => [
        ...p,
        {
          from: "bot",
          text: `Summary for "${txt}": Denial drivers: missing PA & coding. Opportunities: appeal, underpayment recovery.`,
        },
      ]);
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 400);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Conversational BI — RevBot</CardTitle>
            <CardDescription>Ask questions</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col" style={{ height: 420 }}>
            <div className="flex-1 overflow-y-auto px-2 py-3">
              {chatMessages.map((m, idx) => (
                <div
                  key={idx}
                  className={`mb-3 flex ${
                    m.from === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] rounded-xl px-3 py-2 text-[14px] ${
                      m.from === "user"
                        ? "bg-[#0F4C81] text-white"
                        : "bg-white border"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <div className="mt-3 flex gap-2">
              <input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendChat();
                }}
                placeholder="Ask RevBot..."
                className="flex-1 rounded-xl border px-3 py-2 text-[13px]"
              />
              <Button size="sm" onClick={sendChat}>
                Send
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Suggested Prompts</CardTitle>
            <CardDescription>Click to insert</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              {[
                "Top denial drivers this month",
                "Providers with highest no-show risk",
                "Recovered revenue > $50k",
              ].map((p) => (
                <button
                  key={p}
                  onClick={() => setChatInput(p)}
                  className="text-left rounded-xl border px-3 py-2 hover:bg-gray-50"
                >
                  {p}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
