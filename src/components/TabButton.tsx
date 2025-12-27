function TabButton({ active, onClick, children }: any) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl border px-3 py-2 text-[13px] ${
        active
          ? "bg-[#163A63] text-white border-[#163A63]"
          : "bg-white hover:bg-gray-50"
      }`}
    >
      {children}
    </button>
  );
}

export default TabButton;
