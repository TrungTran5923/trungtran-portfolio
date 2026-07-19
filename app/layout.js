import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://trungtranecom.pro.vn"),
  title: {
    default: "Trung Tran — TikTok Shop Growth & WordPress Developer",
    template: "%s | Trung Tran",
  },
  description:
    "Ecommerce Operations Executive scaling Roborock's TikTok Shop storefront to #1 in Vacuum Cleaners — and the developer behind the sites that back it up.",
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%23060606'/%3E%3Ctext x='32' y='45' font-family='Georgia,serif' font-size='34' font-weight='700' fill='%23BFF747' text-anchor='middle'%3ET%3C/text%3E%3C/svg%3E",
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
