"use client";


interface ComplianceLogosProps {
  variant?: "grayscale" | "color";
  size?: "sm" | "md" | "lg";
}

const logos = [
  { name: "FERPA", badge: "ferpa" },
  { name: "COPPA", badge: "coppa" },
  { name: "GDPR", badge: "gdpr" },
  { name: "SOC 2", badge: "soc2" },
];

export default function ComplianceLogos({
  variant = "grayscale",
  size = "sm",
}: ComplianceLogosProps) {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-12",
  };

  return (
    <div className="flex items-center gap-4 flex-wrap justify-center">
      {logos.map((logo) => (
        <div
          key={logo.badge}
          className={`
            ${variant === "grayscale" ? "opacity-50 grayscale hover:opacity-100 hover:grayscale-0" : ""}
            transition-all duration-300
            group relative
          `}
          title={logo.name}
        >
          {/* Placeholder for actual logo - would use real logo images */}
          <div
            className={`
              ${sizeClasses[size]}
              px-4 py-2
              bg-slate-100
              rounded-lg
              border border-slate-200
              flex items-center justify-center
              font-bold text-xs
              ${variant === "color" ? "text-brand-blue" : "text-slate-600"}
            `}
          >
            {logo.name}
          </div>

          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            {logo.name} Compliant
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900" />
          </div>
        </div>
      ))}
    </div>
  );
}
