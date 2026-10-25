import HomeView from "@/views/HomeView";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("vi", "home", "/");

export default function Page() {
  return <HomeView lang="vi" />;
}
