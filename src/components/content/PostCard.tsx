import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import type { Post } from '@/types';
import { routes } from '@/lib/routes';
import { ArrowRight, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  const primaryCategory = post.categories[0];

  return (
    <Card className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-white text-left shadow-[0_18px_45px_rgba(15,23,42,0.04)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
      <CardHeader className="p-0">
        <Link
          href={routes.blog.detail(post.slug)}
          className="relative block aspect-[4/3] w-full overflow-hidden"
        >
          <Image
            src={post.featuredImage.url}
            alt={post.featuredImage.alt}
            fill
            className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </Link>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-3 p-6 md:p-7">
        <div className="flex items-center justify-between text-xs text-slate-500">
          {primaryCategory && (
            <Badge className="rounded-full border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-700">
              {primaryCategory.name}
            </Badge>
          )}
          <div className="flex items-center gap-1.5 text-[11px]">
            <Calendar className="h-3.5 w-3.5 text-slate-400" />
            <time dateTime={post.publishedAt}>
              {format(new Date(post.publishedAt), "MMM d, yyyy")}
            </time>
          </div>
        </div>
        <h3 className="text-lg font-semibold tracking-tight text-slate-900 group-hover:text-slate-950">
          <Link href={routes.blog.detail(post.slug)}>{post.title}</Link>
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-slate-600 line-clamp-3">
          {post.excerpt}
        </p>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t border-slate-100 px-6 pb-5 pt-4 md:px-7 md:pb-6">
        <Link
          href={routes.blog.detail(post.slug)}
          className="inline-flex items-center text-sm font-medium text-[#FF6C8B] transition-colors hover:text-[#FF4A6E]"
        >
          Read article
          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
}
