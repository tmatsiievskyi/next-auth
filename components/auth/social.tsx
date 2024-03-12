'use client';

import { Button } from '@/ui/button';

const Social = () => {
  return (
    <div className='flex items-center justify-evenly w-full gap-x-2'>
      <Button variant='outline'>Google</Button>
      <Button variant='outline'>Github</Button>
    </div>
  );
};

export { Social };
