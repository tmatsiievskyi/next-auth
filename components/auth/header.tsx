import { cn } from '@/lib/utils';

interface IHeaderProps {
  label: string;
}

const Header = ({ label }: IHeaderProps) => {
  return (
    <div className='w-full flex flex-col gap-y-4 items-center justify-center'>
      <h2 className={cn('text-3xl font-semibold')}>Auth</h2>
      <p className=' text-muted-foreground text-sm'>{label}</p>
    </div>
  );
};

export { Header };
