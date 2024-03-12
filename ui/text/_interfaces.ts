import { PropsWithChildren } from 'react';
import { textVariants } from './text';
import { VariantProps } from 'cva';

type TTextType = 'xs' | 'sm' | 'base' | 'lg' | 'xl';
type TTextVariant = 'dark' | 'light' | 'primary';
type TTextAs = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TTextProps = typeof textVariants;

export interface ITextProps
  extends PropsWithChildren,
    VariantProps<TTextProps> {
  // size?: TTextType;
  // color?: TTextVariant;
  as?: TTextAs;
  className?: string;
}
