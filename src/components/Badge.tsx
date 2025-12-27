function Badge({
  children,
  variant = "secondary",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "secondary" | "destructive" | "success" | "warning";
  className?: string;
}) {
  const variants = {
    secondary: "bg-slate-100 text-gray-700",
    destructive: "bg-red-100 text-red-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-amber-100 text-amber-700",
  };
  const cls = `inline-flex items-center rounded-full text-[12px] px-2 py-0.5 ${variants[variant]} ${className}`;
  return <span className={cls}>{children}</span>;
}

export default Badge;
