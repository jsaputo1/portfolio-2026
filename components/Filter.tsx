import React from "react";

interface FilterProps {
  children: React.ReactNode;
  isActive?: boolean;
  onClick: () => void;
}

export default function Filter({
  children,
  isActive = false,
  onClick,
}: FilterProps) {
  const baseStyles =
    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer";

  const activeStyles = isActive
    ? "bg-zinc-950 text-white"
    : "bg-white text-zinc-700 hover:bg-zinc-100 border-zinc-200 border-1 ";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${activeStyles}`}
      type="button"
    >
      {children}
    </button>
  );
}
