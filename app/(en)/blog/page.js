import BlogView from "@/views/BlogView";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("en", "blog", "/blog");

export default function Page() {
  return <BlogView lang="en" />;
}
