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
  return (
    <Card className="group flex flex-col overflow-hidden transition-all duration-300 ease-out shadow-[0_18px_45px_rgba(15,23,42,0.04)] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
      <CardHeader className="p-0">
        <Link href={routes.blog.detail(post.slug)} className="block relative aspect-video w-full overflow-hidden">
          <Image
            src={post.featuredImage.url}
            alt={post.featuredImage.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-center justify-between text-xs text-slate-500">
            {post.categories[0] && <Badge variant="outline" className="uppercase tracking-widest">{post.categories[0].name}</Badge>}
            <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                <time dateTime={post.publishedAt}>
                    {format(new Date(post.publishedAt), 'MMM d, yyyy')}
                </time>
            </div>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-slate-900">
          <Link href={routes.blog.detail(post.slug)}>{post.title}</Link>
        </h3>
        <p className="mt-2 flex-1 text-sm text-slate-600 leading-relaxed">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="p-6 md:p-7 pt-0">
        <Link href={routes.blog.detail(post.slug)} className="text-sm font-medium text-fuchsia-600 inline-flex items-center group-hover:underline">
          Read More
          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
}
