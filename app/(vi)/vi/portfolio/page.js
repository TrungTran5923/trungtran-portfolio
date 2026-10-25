import PortfolioView from "@/views/PortfolioView";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("vi", "portfolio", "/portfolio");

export default function Page() {
  return <PortfolioView lang="vi" />;
}
