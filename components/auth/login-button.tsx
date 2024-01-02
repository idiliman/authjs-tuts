'use client';

import { useRouter } from 'next/navigation';

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: 'modal' | 'redirect';
  asChild?: boolean;
}

export function LoginButton({ children, asChild, mode = 'redirect' }: LoginButtonProps) {
  const router = useRouter();

  const onClick = () => {
    router.push('/auth/login');
  };

  return (
    <span onClick={onClick} className='cursor-pointer'>
      {children}
    </span>
  );
}
