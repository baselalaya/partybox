import type { FC, ReactNode, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import Container from '@/components/layout/Container';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

const Section: FC<SectionProps> = ({ children, className, containerClassName, ...props }) => {
  return (
    <section className={cn('py-16 sm:py-20 lg:py-24', className)} {...props}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
};

export default Section;
