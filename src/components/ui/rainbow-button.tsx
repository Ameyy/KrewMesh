import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  target?: string;
}

export function RainbowButton({
  children,
  className,
  href,
  target,
  ...props
}: RainbowButtonProps) {
  const buttonClassName = cn(
    "group relative inline-flex h-11 cursor-pointer items-center justify-center rounded-full bg-[#D5360C] hover:bg-[#b82d09] px-8 py-2.5 font-bold text-[#E6D5BD] shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5360C] disabled:pointer-events-none disabled:opacity-50 select-none",
    className
  );

  const content = (
    <span className="relative z-10 inline-flex items-center justify-center gap-2">
      {children}
    </span>
  );

  if (href) {
    return (
      <Link href={href} target={target} className={buttonClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={buttonClassName}
      {...props}
    >
      {content}
    </button>
  );
}
