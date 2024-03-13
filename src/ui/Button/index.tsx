import styles from "./Button.module.css";
import { type ButtonHTMLAttributes, memo } from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

const buttonStyles = cva(styles.base, {
  variants: {
    size: {
      xs: styles.extraSmall,
      sm: styles.small,
      base: styles.medium,
      lg: styles.large,
      xl: styles.extraLarge,
    },
    variant: {
      text: styles.text,
      primary: styles.primary,
      secondary: styles.secondary,
    },
  },
  defaultVariants: {
    size: "base",
    variant: "text",
  },
});

export type ButtonVariantProps = VariantProps<typeof buttonStyles>;

interface ButtonProps
  extends ButtonVariantProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = memo<ButtonProps>(
  ({ children, className, size, variant, ...rest }) => {
    const calculatedClassName = buttonStyles({ className, size, variant });
    return (
      <button className={calculatedClassName} {...rest}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
