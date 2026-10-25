import BlogView from "@/views/BlogView";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("vi", "blog", "/blog");

export default function Page() {
  return <BlogView lang="vi" />;
}
