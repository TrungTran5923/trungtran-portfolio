import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

export const metadata = {
  metadataBase: new URL("https://trungtranecom.pro.vn"),
  title: {
    default: "Trung Tran — TikTok Shop Growth & WordPress Developer",
    template: "%s | Trung Tran",
  },
  description:
    "Ecommerce Operations Executive scaling Roborock's TikTok Shop storefront to #1 in Vacuum Cleaners — and the developer behind the sites that back it up.",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800;900&family=Kanit:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Cursor />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
