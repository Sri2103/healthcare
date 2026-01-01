export function Card({ children, className = "" }: any) {
  return (
    <div
      className={`
        w-full
        min-w-[240px]
        max-w-full
        rounded-xl sm:rounded-2xl
        border border-gray-200
        bg-gray-50
        shadow-sm
        hover:shadow-md lg:hover:shadow-xl
        transition-all
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children }: any) {
  return (
    <div
      className="
        border-b border-gray-200
        px-3 py-2
        sm:px-4 sm:py-3
        lg:px-5
        text-blue-800
      "
    >
      {children}
    </div>
  );
}

export function CardTitle({ children, className = "" }: any) {
  return (
    <div
      className={`
        font-semibold
        text-sm sm:text-[15px] lg:text-base
        leading-tight
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export function CardDescription({ children }: any) {
  return (
    <div
      className="
        text-xs sm:text-[13px]
        text-gray-500
        leading-snug
        mt-0.5
      "
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }: any) {
  return (
    <div
      className={`
        px-3 py-2
        sm:px-4 sm:py-3
        lg:px-5 lg:py-4
        ${className}
      `}
    >
      {children}
    </div>
  );
}

