import { notFound } from "next/navigation";
import PostView from "@/views/PostView";
import { POSTS, getPost } from "@/lib/posts";
import { alternates } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = getPost(params.slug);
  if (!p) return {};
  return {
    title: p.vi.title,
    description: p.vi.excerpt,
    alternates: alternates("vi", `/blog/${p.slug}`),
    openGraph: { type: "article", title: p.vi.title, description: p.vi.excerpt },
  };
}

export default function Page({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();
  return <PostView lang="vi" post={post} />;
}
