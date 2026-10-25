import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import ChatButtons from "@/components/ChatButtons";
import { SITE_URL } from "@/lib/site";

const LANG = "vi";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Trung Tran — Vận hành TMĐT & Xây dựng Website",
    template: "%s | Trung Tran",
  },
  description: "Vận hành gian hàng TikTok Shop đạt #1 ngành hàng và làm website WordPress, Next.js. Nhận việc freelance và bán thời gian từ xa.",
  openGraph: { type: "website", siteName: "Trung Tran", locale: "vi_VN" },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/images/favicon.png", apple: "/images/favicon.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang={LANG}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800;900&family=Kanit:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Cursor />
        <Header lang={LANG} />
        {children}
        <Footer lang={LANG} />
        <ChatButtons lang={LANG} />
      </body>
    </html>
  );
}
