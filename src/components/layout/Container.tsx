import type { FC, ReactNode, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn('container mx-auto px-4 sm:px-6 lg:px-8', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
