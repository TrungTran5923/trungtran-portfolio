import PortfolioView from "@/views/PortfolioView";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("en", "portfolio", "/portfolio");

export default function Page() {
  return <PortfolioView lang="en" />;
}
