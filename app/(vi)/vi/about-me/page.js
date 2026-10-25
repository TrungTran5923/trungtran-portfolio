import AboutView from "@/views/AboutView";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("vi", "about", "/about-me");

export default function Page() {
  return <AboutView lang="vi" />;
}
