import { type VariantProps } from 'cva';
import { buttonVariants } from '.';

type TButtonVariants = typeof buttonVariants;

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<TButtonVariants> {
  asChild?: boolean;
}
