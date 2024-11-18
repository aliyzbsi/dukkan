import { cva } from "class-variance-authority";

// CVA ile buton stillerini tanımlıyoruz
const buttonStyles = cva(
  "inline-flex items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2", // Temel stiller
  {
    variants: {
      size: {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
      variant: {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        secondary: "bg-gray-300 text-black hover:bg-gray-400",
        outline: "border border-blue-500 text-blue-500 hover:bg-blue-50",
        iconOnly: "p-2",
      },
      hasIcon: {
        true: "flex gap-2 items-center",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "primary",
    },
  }
);

// Button bileşenini oluşturuyoruz
export const Button = ({
  size,
  variant,
  hasIcon,
  icon,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={buttonStyles({ size, variant, hasIcon: !!icon, className })}
      {...props}
    >
      {icon && <span className="icon">{icon}</span>}
      {children && <span>{children}</span>}
    </button>
  );
};
