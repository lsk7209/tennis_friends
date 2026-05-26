import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-bold tracking-tight " +
    "transition-[transform,background-color,color] duration-200 ease-out " +
    "hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-accent-volt " +
    "focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none " +
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        volt: "bg-accent-volt text-court-ink rounded-none",
        pill: "bg-accent-volt text-court-ink rounded-full",
        outline:
          "border-[1.5px] border-white/20 text-white rounded-none hover:border-accent-volt",
        ghost: "text-white hover:text-accent-volt",
        destructive: "bg-accent-clay text-white rounded-none",
        // 기존 페이지 호환 aliases
        default: "bg-accent-volt text-court-ink rounded-none",
        secondary:
          "border-[1.5px] border-white/20 text-white rounded-none hover:border-accent-volt",
        link: "text-white underline-offset-4 hover:underline hover:text-accent-volt",
      },
      size: {
        sm: "h-9 px-4 text-[13px]",
        md: "h-12 px-6 text-[15px]",
        lg: "h-14 px-9 text-[17px]",
        // 기존 size 호환
        default: "h-12 px-6 text-[15px]",
        icon: "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: { variant: "volt", size: "md" },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
