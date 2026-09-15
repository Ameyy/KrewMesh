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
    "group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-white transition-all duration-300 [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:scale-[1.03] active:scale-[0.98] isolate",

    // Radiant diffuse glowing rainbow light effect (ambient outer aura)
    "before:absolute before:-inset-[4px] before:-z-10 before:rounded-[inherit] before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:opacity-90 before:blur-[14px] before:transition-all before:duration-300 hover:before:opacity-100 hover:before:blur-[22px]",

    // Sharp animated rainbow halo ring
    "after:absolute after:-inset-[1.5px] after:-z-10 after:rounded-[inherit] after:animate-rainbow after:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] after:bg-[length:200%] after:opacity-100",

    // Inner button core background with border clip
    "bg-[linear-gradient(#0c0c0e,#0c0c0e),linear-gradient(#0c0c0e_50%,rgba(12,12,14,0.6)_80%,rgba(12,12,14,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
    "dark:bg-[linear-gradient(#0c0c0e,#0c0c0e),linear-gradient(#0c0c0e_50%,rgba(12,12,14,0.6)_80%,rgba(12,12,14,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",

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
