import { cn } from '@/lib/utils';
import { ITextProps } from './_interfaces';
import { cva } from 'cva';

export const textVariants = cva('font-medium leading-normal', {
  variants: {
    color: {
      light: 'text-light',
      dark: 'text-dark',
      primary: 'text-primary',
    },
    size: {
      base: 'text-base',
      sm: 'text-sm',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    color: 'light',
    size: 'base',
  },
});

const Text = ({
  children,
  className,
  color = 'dark',
  size = 'base',
  as = 'p',
  ...props
}: ITextProps) => {
  const Tag = as;

  return (
    <Tag className={textVariants({ color, size, className })} {...props}>
      {children}
    </Tag>
  );
};

export { Text };
