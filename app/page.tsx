import { SignInButton } from '@/components/auth';
import { Button } from '@/ui/button';

export default function Home() {
  return (
    <main className='flex h-full flex-col items-center justify-center'>
      <SignInButton>
        <Button variant='primary'>Sign In</Button>
      </SignInButton>
    </main>
  );
}
