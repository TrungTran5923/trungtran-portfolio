import ServicesView from "@/views/ServicesView";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("en", "servicesPage", "/services");

export default function Page() {
  return <ServicesView lang="en" />;
}
