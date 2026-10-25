import { getContent } from "@/lib/content";
import { CONTACT, SOCIALS } from "@/lib/site";

/** Floating quick-contact buttons (Zalo + LinkedIn), bottom-right on every page. */
export default function ChatButtons({ lang = "en" }) {
  const t = getContent(lang).chat;
  const linkedin = SOCIALS.find((s) => s.name === "LinkedIn")?.href;

  return (
    <div className="chat-float">
      <a href={CONTACT.zalo} target="_blank" rel="noopener noreferrer" className="chat-btn chat-zalo" aria-label={t.zalo} title={t.zalo}>
        <span>Zalo</span>
      </a>
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="chat-btn chat-linkedin" aria-label={t.linkedin} title={t.linkedin}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8h4.52v14H.24V8zm7.5 0h4.33v1.92h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.01 5.42 6.93V22h-4.51v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.49V22H7.74V8z" />
          </svg>
        </a>
      )}
    </div>
  );
}
