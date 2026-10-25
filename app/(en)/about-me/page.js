import AboutView from "@/views/AboutView";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("en", "about", "/about-me");

export default function Page() {
  return <AboutView lang="en" />;
}
