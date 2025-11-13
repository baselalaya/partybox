import type { FC, ReactNode, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn('max-w-6xl mx-auto px-4 md:px-6', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
