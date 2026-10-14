// Blog posts. To add a post: append an object here and drop its cover image
// in /public/images/ (name it in the `img` field). Image is optional — the
// gradient is the fallback.
export const POSTS = [
  {
    slug: "tiktok-shop-number-one-vacuum-cleaners",
    tag: "Case Study",
    title: "How I Took a TikTok Shop Storefront to #1 in Vacuum Cleaners on 11.11",
    excerpt:
      "The pricing, Flash Sale, and voucher thinking behind a #1 category ranking during TikTok Shop's biggest mega sale.",
    date: "Nov 2025",
    readTime: "6 min read",
    img: "blog-1.png",
    gradient: "linear-gradient(135deg, #bff747, #1c2b12)",
    body: [
      { p: "Ranking #1 in a category on a mega sale day looks like a single result. In practice it is the sum of a few hundred small decisions made in the weeks before. This is how I approached the 11.11 campaign for a vacuum cleaner storefront on TikTok Shop, after the same storefront reached #1 on 6.6." },
      { h: "Start with the benchmark, not the discount", p: "Before touching a price I built a simple sheet of the top competing listings: price, voucher depth, sold count, and content format. The goal was never to be the cheapest. It was to know exactly where our offer sat so that every discount had a reason." },
      { h: "Stack the offer in layers", p: "A Flash Sale price, a shop voucher, and a platform voucher each do a different job. The Flash Sale earns visibility, the voucher lowers the final price at checkout, and the platform voucher brings in shoppers who are already in a buying mood. I mapped each layer to the day's traffic windows instead of switching everything on at once." },
      { h: "Content has to carry the price", p: "A good price with a weak product video converts badly. Short videos and livestream segments were planned around the same offer calendar, so the message a shopper saw matched the price they found on the product page." },
      { h: "Watch the dashboard, adjust in-flight", p: "During the sale, I tracked orders, conversion, and stock hour by hour. Small adjustments, such as moving a voucher or re-timing a livestream segment, mattered more than any big plan made beforehand." },
      { h: "What I would repeat", p: "Benchmark first, layer the offer, align content to the calendar, and review the data in real time. None of it is complicated, but it only works when all four are done together." },
    ],
  },
  {
    slug: "flash-sale-pre-launch-checklist",
    tag: "Playbook",
    title: "5 Things I Check Before Every Flash Sale Campaign",
    excerpt:
      "The short pre-launch checklist I run through before any Flash Sale goes live, from stock buffers to voucher stacking.",
    date: "Sep 2025",
    readTime: "4 min read",
    img: "blog-2.png",
    gradient: "linear-gradient(135deg, #3a3a3a, #0c0c0c)",
    body: [
      { p: "Flash Sales reward preparation and punish surprises. Most of the problems I have seen came from something small that nobody checked, not from a bad strategy. These are the five checks I do every time." },
      { h: "1. Stock with a buffer", p: "Confirm the available stock against the expected volume, then keep a buffer. Running out in the first hour kills momentum and can hurt ranking for the rest of the campaign." },
      { h: "2. Price and margin after all discounts", p: "Calculate the final price after the Flash Sale discount, shop voucher, and platform voucher together. If the combined stack breaks the margin, fix it before launch, not after the first orders arrive." },
      { h: "3. Voucher stacking rules", p: "Check which vouchers can combine and which cannot, and test the checkout yourself. A voucher that does not apply, or one that stacks unexpectedly, is a customer service problem within minutes." },
      { h: "4. Listing quality", p: "Main image, title, price display, and variants should all be correct and consistent. A sale sends far more traffic than normal, so any weakness in the listing gets magnified." },
      { h: "5. Content and livestream schedule", p: "Make sure the videos, livestream slots, and product talking points match the offer. Shoppers should see the same price and message everywhere." },
      { p: "Print it, tick it, and run it before every campaign. It takes fifteen minutes and has saved me from more than one avoidable mistake." },
    ],
  },
  {
    slug: "why-i-still-write-html-css-as-an-ecommerce-operator",
    tag: "Perspective",
    title: "Why I Still Write HTML/CSS as an Ecommerce Operator",
    excerpt:
      "Marketplace operations and web development look like different jobs. I have found they reward the same instincts.",
    date: "Jul 2025",
    readTime: "4 min read",
    img: "blog-3.png",
    gradient: "linear-gradient(135deg, #4d5b2e, #101010)",
    body: [
      { p: "On paper, running a marketplace storefront and building websites are two separate careers. In my day-to-day they keep feeding each other, and that is why I have not given up either one." },
      { h: "Both are about clarity", p: "A product page and a web page have the same job: help a visitor understand an offer quickly and act on it. Working on one trains my eye for the other, from what goes above the fold to how much text is too much." },
      { h: "Both live on data", p: "Operations teaches me to read conversion, traffic, and drop-off. Those habits carry straight into web work, where I care about page speed, structure, and what visitors actually click." },
      { h: "Building keeps me close to the details", p: "Writing HTML and CSS by hand, rather than only dragging blocks in a builder, makes me understand why a layout works. It also makes me faster when I automate reports or build small tools for the team." },
      { h: "It makes me a better collaborator", p: "When I brief a designer or a developer, I know what is easy and what is expensive. When I work with the operations team, I know how a number gets from a platform to a dashboard." },
      { p: "I do not think everyone in ecommerce needs to code. But understanding both sides has made me more useful on each, and that is reason enough to keep writing the occasional stylesheet." },
    ],
  },
];

export function getPost(slug) {
  return POSTS.find((p) => p.slug === slug);
}
