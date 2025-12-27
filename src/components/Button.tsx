function Button({
  children,
  variant = "default",
  size = "md",
  className = "",
  ...props
}: any) {
  const base =
    "inline-flex items-center justify-center rounded-xl border text-[13px] font-medium focus:outline-none focus:ring-2 focus:ring-[#1E4D8B] transition";
  const sizes: any = {
    sm: "px-2.5 py-1.5",
    md: "px-3.5 py-2",
    lg: "px-4 py-2.5",
  };
  const variants: any = {
    default: "bg-[#1E4D8B] text-white border-[#1E4D8B] hover:bg-[#1E4D8B]/90",
    outline: "bg-white text-gray-700 border-gray-300 hover:bg-gray-50",
  };
  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
