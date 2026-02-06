import React from "react";

interface ButtonProps {
  href: string;
  target: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export default function Button({
  href,
  variant = "primary",
  children,
  icon,
}: ButtonProps) {
  const primaryStyles =
    "bg-zinc-950 text-white hover:bg-zinc-800 border-transparent";

  const secondaryStyles =
    "bg-white text-zinc-950 border-zinc-200 hover:bg-zinc-100";

  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium border transition-all duration-200";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variant === "primary" ? primaryStyles : secondaryStyles}`}
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </a>
  );
}
