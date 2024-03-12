import { DetailedHTMLProps, LabelHTMLAttributes } from 'react';

export interface ILabelProps
  extends DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  display?: boolean;
}
