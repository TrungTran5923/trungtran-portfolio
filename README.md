# Trung Tran Portfolio — Next.js

Bản Next.js (App Router) của portfolio, thay cho bản HTML/CSS tĩnh trước đó. Đây là nền tảng để gắn phần ecommerce vào cuối năm.

## Chạy thử ở máy

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`.

## Build production

```bash
npm run build
npm run start
```

## Cấu trúc

- `app/` — mỗi thư mục con là 1 route (`app/about-me/page.js` → `/about-me`).
- `components/Header.js`, `components/Footer.js` — dùng chung cho mọi trang qua `app/layout.js`, chỉ sửa 1 chỗ.
- `components/Reveal.js`, `components/Stagger.js` — component animation dùng lại được, chạy bằng Framer Motion (fade + trượt lên khi cuộn tới, có stagger cho nhóm card/số liệu).
- `app/globals.css` — toàn bộ design tokens (màu, font, spacing) + style dùng chung.

## Ảnh

Các chỗ đang là `.img-placeholder` (khung nét đứt) cần thay bằng ảnh thật. Cách làm:

1. Bỏ ảnh vào `public/images/`.
2. Dùng component `<Image>` của Next.js thay cho div placeholder, ví dụ:

```jsx
import Image from "next/image";

<Image src="/images/portrait.jpg" alt="Trần Lê Minh Trung" width={600} height={750} style={{ borderRadius: "10px" }} />
```

`next/image` tự tối ưu kích thước/định dạng ảnh, tốt hơn thẻ `<img>` thường.

## Deploy

Cách nhanh nhất: đẩy code lên GitHub rồi import vào **vercel.com** (Next.js là sản phẩm của Vercel nên deploy gần như 1 click, tự động build lại mỗi lần push code mới). Gắn domain `trungtranecom.pro.vn` trong phần Domain settings của project trên Vercel, rồi trỏ DNS theo hướng dẫn Vercel đưa ra.

## Bước tiếp theo cho ecommerce (cuối năm)

Khi bắt đầu phần ecommerce, có thể thêm:
- `app/shop/` — route mới cho danh sách sản phẩm.
- Kết nối backend bán hàng (Shopify headless / WooCommerce headless / Medusa.js) qua API trong `app/api/` hoặc trực tiếp trong server component.
- Giỏ hàng dùng React Context hoặc Zustand để giữ trạng thái xuyên suốt các trang.
