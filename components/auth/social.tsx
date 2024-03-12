'use client';
import { signIn } from 'next-auth/react';

import { Button } from '@/ui/button';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

const Social = () => {
  const onClick = (provider: 'google' | 'github') => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className='flex items-center justify-evenly w-full gap-x-2'>
      <Button variant='outline' onClick={() => onClick('google')}>
        Google
      </Button>
      <Button variant='outline' onClick={() => onClick('github')}>
        Github
      </Button>
    </div>
  );
};

export { Social };
