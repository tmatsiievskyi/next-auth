import { ReactNode } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/ui/card';
import { Header } from './header';
import { Social } from './social';
import { BackButton } from './button.back';

interface ICardWrapperProps {
  children: ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonHref,
  backButtonLabel,
  showSocial,
}: ICardWrapperProps) => {
  return (
    <Card className='w-[400px] shadow-md bg-white'>
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};
