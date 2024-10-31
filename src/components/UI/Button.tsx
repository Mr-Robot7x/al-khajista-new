import React from "react";

type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link"
  | "whatsapp"
  | "white";

type ButtonSize = "default" | "sm" | "lg" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const buttonVariants: Record<ButtonVariant, string> = {
  default: "bg-grd duration-300 text-white",
  destructive: "bg-red-500 text-white hover:bg-red-600",
  outline:
    "border border-[#E80019] text-[#E80019] hover:bg-[#e96900] hover:text-white hover:border-transparent",
  secondary:
    "bg-[#f3f3f3] border border-transparent hover:border-neutral-300 transition-all",
  ghost: "hover:bg-[#f3f3f3] hover:text-black",
  link: "text-primary underline-offset-4 hover:underline",
  whatsapp: "bg-green-500 text-white",
  white:
    "bg-white text-[#E80019] hover:bg-[#e96900] hover:text-white hover:border-transparent",
};

const buttonSizes: Record<ButtonSize, string> = {
  default: "py-3 px-6 rounded-full",
  sm: "py-2 px-4 rounded-full",
  lg: "h-11 rounded-md px-8",
  icon: "h-12 w-12 rounded-full",
};

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}) => {
  const variantClasses = buttonVariants[variant];
  const sizeClasses = buttonSizes[size];

  return (
    <button
      className={`ts inline-flex transition-all items-center justify-center whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 ${variantClasses} ${sizeClasses} ${className} active:scale-90`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
