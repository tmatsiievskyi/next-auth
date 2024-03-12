'use client';

import { useRouter } from 'next/navigation';

interface ILoginButtonProps {
  children: React.ReactNode;
  mode?: 'modal' | 'redirect';
  asChild?: boolean;
}

const SignInButton = ({ children, mode, asChild }: ILoginButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push('/auth/sign-in');
  };

  if (mode === 'modal') {
    return <span>Todo</span>;
  }

  return (
    <span className='cursor-pointer' onClick={onClick}>
      {children}
    </span>
  );
};

export { SignInButton };
