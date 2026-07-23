import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90",
        destructive: "bg-red-500 text-white hover:bg-red-500/90",
        outline:
          "border border-white/15 bg-transparent text-[var(--color-text)] hover:bg-white/5 hover:border-white/30",
        secondary:
          "bg-[var(--color-surface)] text-[var(--color-text)] hover:bg-white/10",
        ghost:
          "text-[var(--color-muted)] hover:bg-white/5 hover:text-[var(--color-text)]",
        link: "text-[var(--color-accent)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
