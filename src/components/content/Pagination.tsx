"use client";

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type PaginationProps = {
  baseUrl: string;
  currentPage: number;
  totalPages: number;
};

export default function Pagination({ baseUrl, currentPage, totalPages }: PaginationProps) {
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${baseUrl}?${params.toString()}`;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between mt-12">
      <Button asChild variant="outline" disabled={currentPage <= 1}>
        <Link href={createPageURL(currentPage - 1)}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </Link>
      </Button>

      <span className="text-sm text-muted-foreground">
        Page {currentPage} of {totalPages}
      </span>

      <Button asChild variant="outline" disabled={currentPage >= totalPages}>
        <Link href={createPageURL(currentPage + 1)}>
          Next
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
