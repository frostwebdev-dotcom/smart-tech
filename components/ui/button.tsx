import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "default" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "default",
      type = "button",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    const variants = {
      primary:
        "bg-primary text-primary-foreground shadow hover:bg-primary/90 active:scale-[0.98]",
      secondary:
        "bg-accent text-accent-foreground hover:bg-accent/80 active:scale-[0.98]",
      outline:
        "border-2 border-border bg-transparent hover:bg-accent hover:text-accent-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    };
    const sizes = {
      sm: "h-9 px-4 text-sm",
      default: "h-11 px-6 text-base",
      lg: "h-12 px-8 text-lg",
    };
    const composedClassName = cn(base, variants[variant], sizes[size], className);

    if (asChild && React.isValidElement(props.children)) {
      const child = React.Children.only(props.children);
      const { children: _children, ...restProps } = props;
      return React.cloneElement(child as React.ReactElement<{ className?: string }>, {
        ...restProps,
        className: cn(composedClassName, (child.props as { className?: string }).className),
        ref,
      });
    }

    return (
      <button
        type={type}
        ref={ref}
        className={composedClassName}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
