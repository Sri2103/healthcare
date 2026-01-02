function Button({
  children,
  variant = "default",
  size = "md",
  className = "",
  ...props
}: any) {
  const base =
    "inline-flex items-center justify-center rounded-xl border text-[13px] font-medium focus:outline-none focus:ring-2 focus:ring-[#1E4D8B] transition cursor-pointer";
  const sizes: any = {
    sm: "px-2.5 py-1.5",
    md: "px-3.5 py-2",
    lg: "px-4 py-2.5",
  };
  const variants: any = {
    default: "bg-blue-500 text-white border-[#1E4D8B] hover:bg-blue-500/90",
    outline: "bg-gray-100  text-black border-gray-300 hover:bg-gray-150",
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
