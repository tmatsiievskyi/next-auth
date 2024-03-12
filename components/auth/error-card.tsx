import { Card, CardFooter, CardHeader } from '@/ui/card';
import { Header } from './header';
import { BackButton } from './button.back';

const ErrorCard = () => {
  return (
    <Card className='w-[400px] shadow-md bg-white'>
      <CardHeader>
        <Header label='Oops! Something went wrong' />
      </CardHeader>
      <CardFooter>
        <BackButton label='Back to login' href='/auth/sign-in' />
      </CardFooter>
    </Card>
  );
};

export { ErrorCard };
