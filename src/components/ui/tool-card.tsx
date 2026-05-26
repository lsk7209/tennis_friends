import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const toolCardVariants = cva(
  "relative flex flex-col border transition-[transform,border-color] " +
    "duration-300 ease-out hover:-translate-y-1.5 cursor-pointer",
  {
    variants: {
      variant: {
        featured:
          "bg-accent-volt text-court-ink border-transparent p-8 row-span-2 col-span-1",
        standard:
          "bg-court-ink-3 border-white/10 hover:border-accent-volt p-6 h-[360px] justify-between",
        chart:
          "bg-court-ink-3 border-white/10 hover:border-accent-volt p-6 h-[360px] justify-between",
      },
    },
    defaultVariants: { variant: "standard" },
  },
);

export interface ToolCardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toolCardVariants> {}

function ToolCard({ className, variant, ...props }: ToolCardProps) {
  return (
    <div className={cn(toolCardVariants({ variant, className }))} {...props} />
  );
}

function ToolCardLabel({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-[11px] font-bold uppercase tracking-[0.18em] opacity-60 mb-3",
        className,
      )}
      {...props}
    />
  );
}

function ToolCardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-2xl font-bold leading-tight mb-2", className)}
      {...props}
    />
  );
}

function ToolCardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm opacity-70 leading-relaxed", className)}
      {...props}
    />
  );
}

export {
  ToolCard,
  ToolCardLabel,
  ToolCardTitle,
  ToolCardDescription,
  toolCardVariants,
};
