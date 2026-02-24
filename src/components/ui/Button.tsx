// src/components/ui/Button.tsx
import * as React from "react";
import Link from "next/link";

type ButtonVariant =
  | "solidTeal"
  | "solidTealLight"
  | "outlineGlass"
  | "outlineLight";

type ButtonSize = "cta" | "lg" | "md" | "sm";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

const base =
  "inline-flex items-center justify-center rounded-2xl font-semibold tracking-tight transition-all duration-200 select-none " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
  "disabled:opacity-50 disabled:pointer-events-none active:translate-y-[1px]";

const sizes: Record<ButtonSize, string> = {
  cta: "h-[48px] px-8 text-[14px] leading-none",
  lg: "h-14 px-8 text-lg",
  md: "h-12 px-6 text-bsase",
  sm: "h-10 px-5 text-sm",
};

const variants: Record<ButtonVariant, string> = {
  // dark theme filled (matches screenshot)
  solidTeal:
    "bg-[#0f3f42] text-white shadow-[0_18px_55px_rgba(0,0,0,0.55)] " +
    "hover:bg-[#115055] focus-visible:ring-white/25 focus-visible:ring-offset-[#12181b]",

  // light theme filled (same teal, but offset ring for light bg)
  solidTealLight:
    "bg-[#0f3f42] text-white shadow-[0_16px_45px_rgba(0,0,0,0.20)] " +
    "hover:bg-[#115055] focus-visible:ring-black/15 focus-visible:ring-offset-[#f1f3f5]",

  // dark theme outline pill (glass-like)
  outlineGlass:
    "bg-transparent text-white border border-white/20 " +
    "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_18px_55px_rgba(0,0,0,0.55)] " +
    "hover:border-white/30 hover:bg-white/[0.03] " +
    "focus-visible:ring-white/25 focus-visible:ring-offset-[#12181b]",

  // light theme outline pill
  outlineLight:
    "bg-transparent text-[#0b0f14] border border-black/15 " +
    "shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04),0_16px_45px_rgba(0,0,0,0.10)] " +
    "hover:border-black/25 hover:bg-black/[0.03] " +
    "focus-visible:ring-black/15 focus-visible:ring-offset-[#f1f3f5]",
};

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(props, ref) {
  const {
    variant = "solidTeal",
    size = "md",
    className,
    children,
    ...rest
  } = props as ButtonProps;

  const classes = cn(base, sizes[size], variants[variant], className);

  if ("href" in props && props.href) {
    const { href, ...aProps } = rest as ButtonAsLink;
    return (
      <Link
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        {...aProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...(rest as ButtonAsButton)}
    >
      {children}
    </button>
  );
});
