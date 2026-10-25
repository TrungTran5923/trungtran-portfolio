// Portfolio projects (both languages). `featured` = shown on the home page.
// `caseStudy` = has its own page at /portfolio/<slug>. Images live in
// /public/images/. Projects with no image are listed under "More Projects".
export const PROJECTS = [
  {
    slug: "tiktok-shop-robot-vacuum",
    featured: true,
    caseStudy: true,
    img: "prj-roborock.png",
    proofDir: "proof", // drop ranking screenshots into /public/images/proof/
    link: "https://www.tiktok.com/@roborockflagshipstore",
    linkKind: "site",
    en: {
      tag: "Ecommerce Operations",
      title: "TikTok Shop Flagship Store — Robot & Vacuum",
      meta: "#1 in Robot & Vacuum — TikTok Shop 6.6, 9.9 & 11.11",
      desc: "Full operational ownership of the official TikTok Shop store of a global robot-vacuum brand, inside the Home Appliances category.",
      client: "Global robot-vacuum brand (via Vietnam O-Tech Smart Equipment)",
      role: "Ecommerce Executive",
      tech: "TikTok Shop Seller Center, Power BI, Google Sheets",
      period: "01/2025 – Present",
      challenge:
        "Robot & Vacuum is one of the most competitive segments of TikTok Shop's Home Appliances category. Several global brands fight for the top spots in every mega sale, so price, content and timing all have to work together.",
      did: [
        "Store optimization and product positioning: listings, storefront layout, vouchers and Flash Sale structure.",
        "Mega sale planning for 6.6, 9.9 and 11.11: competitor benchmarks, layered offers and a day-by-day calendar.",
        "Livestream execution: scripts, offer sequencing and on-air support during sale sessions.",
        "Daily dashboards to track orders, conversion and stock, with in-flight price and voucher adjustments.",
      ],
      outcome:
        "The store ranked #1 in Robot & Vacuum during the 6.6.2025, 11.11.2025 and 9.9.2026 mega sales, contributed to 9-figure VND revenue, and gained stronger visibility and brand presence on TikTok Shop.",
    },
    vi: {
      tag: "Vận hành TMĐT",
      title: "Gian hàng TikTok Shop chính hãng — Robot & Máy hút bụi",
      meta: "#1 ngành Robot & Máy hút bụi — TikTok Shop 6.6, 9.9 & 11.11",
      desc: "Phụ trách toàn bộ vận hành gian hàng TikTok Shop chính hãng của một thương hiệu robot hút bụi toàn cầu, thuộc ngành hàng Điện gia dụng.",
      client: "Thương hiệu robot hút bụi toàn cầu (qua Vietnam O-Tech Smart Equipment)",
      role: "Chuyên viên Thương mại điện tử",
      tech: "TikTok Shop Seller Center, Power BI, Google Sheets",
      period: "01/2025 – nay",
      challenge:
        "Robot & Máy hút bụi là một trong những phân khúc cạnh tranh nhất của ngành Điện gia dụng trên TikTok Shop. Nhiều thương hiệu toàn cầu tranh vị trí dẫn đầu ở mỗi đợt mega sale, nên giá, nội dung và thời điểm đều phải khớp nhau.",
      did: [
        "Tối ưu gian hàng và định vị sản phẩm: listing, bố cục gian hàng, voucher và cấu trúc Flash Sale.",
        "Lên kế hoạch mega sale 6.6, 9.9, 11.11: so sánh đối thủ, xếp lớp ưu đãi và lịch triển khai theo từng ngày.",
        "Triển khai livestream: kịch bản, thứ tự tung ưu đãi và hỗ trợ trực tiếp trong các phiên sale.",
        "Dashboard hằng ngày theo dõi đơn hàng, tỷ lệ chuyển đổi và tồn kho, điều chỉnh giá và voucher ngay trong chiến dịch.",
      ],
      outcome:
        "Gian hàng đạt #1 ngành Robot & Máy hút bụi trong các đợt mega sale 6.6.2025, 11.11.2025 và 9.9.2026, đóng góp doanh thu quy mô 9 chữ số (VND), đồng thời tăng độ nhận diện thương hiệu trên TikTok Shop.",
    },
  },
  {
    slug: "ueh-rennes",
    featured: true,
    caseStudy: true,
    img: "prj-ueh-rennes.png",
    link: "https://rennesueh.edu.vn/",
    linkKind: "site",
    en: {
      tag: "Website Development",
      title: "UEH-Rennes",
      meta: "Program website for UEH – Rennes School of Business",
      desc: "Program website with clear course information and lead forms for prospective students.",
      client: "UEH – Rennes School of Business",
      role: "Web Developer",
      tech: "WordPress, Elementor",
      challenge:
        "Prospective students need to understand the program, entry requirements and next steps quickly — and the team needed a site they could keep up to date on their own.",
      did: [
        "Planned the site structure around the questions students actually ask.",
        "Built responsive pages in WordPress and Elementor.",
        "Added lead forms so interested students can register for advice.",
        "Set up basic SEO and page speed optimization.",
      ],
      outcome: "A live program website that presents the course clearly, collects enquiries and can be updated by the team without a developer.",
    },
    vi: {
      tag: "Thiết kế Website",
      title: "UEH-Rennes",
      meta: "Website chương trình UEH – Rennes School of Business",
      desc: "Website chương trình đào tạo với thông tin khóa học rõ ràng và form đăng ký cho học viên tiềm năng.",
      client: "UEH – Rennes School of Business",
      role: "Lập trình viên web",
      tech: "WordPress, Elementor",
      challenge:
        "Học viên tiềm năng cần hiểu nhanh về chương trình, điều kiện đầu vào và các bước tiếp theo — và đội ngũ cần một website có thể tự cập nhật.",
      did: [
        "Xây dựng cấu trúc website xoay quanh những câu hỏi học viên thường đặt ra.",
        "Làm các trang responsive bằng WordPress và Elementor.",
        "Thêm form đăng ký để học viên quan tâm để lại thông tin tư vấn.",
        "Thiết lập SEO cơ bản và tối ưu tốc độ tải trang.",
      ],
      outcome: "Website chương trình đang hoạt động, trình bày khóa học rõ ràng, thu thập thông tin đăng ký và đội ngũ có thể tự cập nhật mà không cần lập trình viên.",
    },
  },
  {
    slug: "styleai",
    featured: true,
    caseStudy: true,
    img: "prj-styleai.png",
    link: "https://styleai.io.vn/",
    linkKind: "site",
    en: {
      tag: "Web + AI",
      title: "StyleAI",
      meta: "Website with a built-in AI styling feature",
      desc: "Website with a built-in AI styling feature that gives visitors personalized suggestions.",
      client: "Personal project — UEH MIS Master's program",
      role: "Web Developer",
      tech: "WordPress, AI integration",
      challenge: "Explore how AI can be built into a regular website to give shoppers personal styling advice, instead of a static product catalogue.",
      did: [
        "Designed the user flow from question to personalized suggestion.",
        "Built the website on WordPress.",
        "Integrated an AI feature that generates styling suggestions for each visitor.",
      ],
      outcome: "A working AI-powered website, live at styleai.io.vn.",
    },
    vi: {
      tag: "Web + AI",
      title: "StyleAI",
      meta: "Website tích hợp tính năng tư vấn phong cách bằng AI",
      desc: "Website tích hợp tính năng AI gợi ý phong cách cá nhân hóa cho từng người truy cập.",
      client: "Dự án cá nhân — chương trình Thạc sĩ MIS, UEH",
      role: "Lập trình viên web",
      tech: "WordPress, tích hợp AI",
      challenge: "Thử nghiệm cách đưa AI vào một website thông thường để tư vấn phong cách cá nhân cho người mua, thay vì chỉ là danh mục sản phẩm tĩnh.",
      did: [
        "Thiết kế luồng trải nghiệm từ câu hỏi đến gợi ý cá nhân hóa.",
        "Xây dựng website trên WordPress.",
        "Tích hợp tính năng AI tạo gợi ý phong cách cho từng người dùng.",
      ],
      outcome: "Website ứng dụng AI đang hoạt động tại styleai.io.vn.",
    },
  },
  {
    slug: "stu",
    img: "prj-stu.png",
    link: "https://tuyensinhdaihoc.stu.edu.vn/",
    linkKind: "site",
    en: { tag: "Website Development", title: "STU Admissions", desc: "University admissions website rebuilt with clearer structure and faster pages.", tech: "WordPress, Elementor", client: "Saigon Technology University" },
    vi: { tag: "Thiết kế Website", title: "STU Tuyển sinh", desc: "Website tuyển sinh đại học được làm lại với cấu trúc rõ ràng và tốc độ nhanh hơn.", tech: "WordPress, Elementor", client: "Trường Đại học Công nghệ Sài Gòn" },
  },
  {
    slug: "dusdee-car",
    img: "prj-dusdee.png",
    link: "https://github.com/TrungTran5923/dusdee_car",
    linkKind: "code",
    en: { tag: "Website Development", title: "DusDEe Car", desc: "Hand-coded website built outside page-builder templates.", tech: "HTML, CSS, JS", client: "Personal project" },
    vi: { tag: "Thiết kế Website", title: "DusDEe Car", desc: "Website viết tay hoàn toàn, không dùng template page builder.", tech: "HTML, CSS, JS", client: "Dự án cá nhân" },
  },
  {
    slug: "snowball-movie",
    img: "prj-snowball.png",
    link: "https://github.com/TrungTran5923/snowballmovie",
    linkKind: "code",
    en: { tag: "Website Development", title: "Snowball Movie", desc: "Film project website that works as a portfolio and press page.", tech: "HTML, CSS, JS", client: "Snowball Movie" },
    vi: { tag: "Thiết kế Website", title: "Snowball Movie", desc: "Website cho dự án phim, vừa là portfolio vừa là trang thông tin báo chí.", tech: "HTML, CSS, JS", client: "Snowball Movie" },
  },
  {
    slug: "power-bi-dashboard",
    img: "prj-dashboard.png",
    en: { tag: "Data & Automation", title: "Cross-Marketplace Dashboard", desc: "Power BI dashboard pulling TikTok Shop, Shopee and Lazada data automatically for near real-time reporting.", tech: "Power BI, Google Colab, Sheets, Lark Base", client: "Personal project" },
    vi: { tag: "Dữ liệu & Tự động hóa", title: "Dashboard đa sàn", desc: "Dashboard Power BI tự động lấy dữ liệu TikTok Shop, Shopee, Lazada để báo cáo gần như theo thời gian thực.", tech: "Power BI, Google Colab, Sheets, Lark Base", client: "Dự án cá nhân" },
  },
];

export function getProject(slug) {
  return PROJECTS.find((p) => p.slug === slug);
}
