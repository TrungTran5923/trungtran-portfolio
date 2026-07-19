/**
 * Infinite horizontal scrolling strip of text items (platforms/tools used
 * instead of client logos, since there are no real brand logos to show).
 * Pure CSS animation — no client JS needed.
 */
export default function Marquee({ items }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span className="marquee-item" key={`${item}-${i}`}>
            <span className="dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
