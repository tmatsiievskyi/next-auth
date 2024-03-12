import { forwardRef, ElementRef } from 'react';
import { ILabelProps } from './_interfaces';
import { cn } from '@/lib/utils';

const Label = forwardRef<HTMLLabelElement, ILabelProps>(
  ({ display, className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className
      )}
      {...props}
    />
  )
);
Label.displayName = 'Label';

export { Label };
