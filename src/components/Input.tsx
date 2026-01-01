type InputProps = {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
}: InputProps) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-300 
        bg-white 
        rounded-md 
        px-4 py-2 
        outline-none 
        transition 
        duration-300 
        ease-in-out 
        hover:border-blue-500 hover:bg-blue-50 
        active:border-blue-700 
        focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}
