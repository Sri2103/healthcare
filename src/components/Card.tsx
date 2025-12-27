export function Card({ children, className = "" }: any) {
  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-gray-50 ${className}`}
    >
      {children}
    </div>
  );
}
export function CardHeader({ children }: any) {
  return (
    <div className="border-b px-4 py-3 bg-blue-50 text-blue-800">
      {children}
    </div>
  );
}
export function CardTitle({ children, className = "" }: any) {
  return (
    <div className={`font-semibold text-[15px] ${className}`}>{children}</div>
  );
}
export function CardDescription({ children }: any) {
  return <div className="text-[12px] text-gray-500">{children}</div>;
}
export function CardContent({ children, className = "" }: any) {
  return <div className={`px-4 py-3 ${className}`}>{children}</div>;
}
