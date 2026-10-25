import ContactView from "@/views/ContactView";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("en", "contact", "/contact-us");

export default function Page() {
  return <ContactView lang="en" />;
}
