import ServicesView from "@/views/ServicesView";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("vi", "servicesPage", "/services");

export default function Page() {
  return <ServicesView lang="vi" />;
}
