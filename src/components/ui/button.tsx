import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[transform,background-color,color,box-shadow,opacity] duration-150 ease-[var(--ease-out)] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[image:var(--pbg)] text-[var(--on-accent)] shadow-[inset_0_1px_0_rgba(255,255,255,.4),0_1px_8px_rgba(0,0,0,.3)] hover:opacity-90",
        outline:
          "border border-line2 bg-elevated text-fg hover:border-muted",
        ghost: "bg-transparent text-muted hover:bg-elevated hover:text-fg",
        link: "bg-transparent text-fg underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 rounded-[10px] px-4 text-sm",
        sm: "h-9 rounded-[10px] px-3.5 text-sm",
        lg: "h-12 rounded-[10px] px-6 text-base",
        icon: "size-10 rounded-[10px]",
        "icon-sm": "size-9 rounded-[10px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
