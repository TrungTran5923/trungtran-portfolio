import HomeView from "@/views/HomeView";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("en", "home", "/");

export default function Page() {
  return <HomeView lang="en" />;
}
