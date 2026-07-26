/**
 * Infinite horizontal scrolling strip of text items (platforms/tools used
 * instead of client logos, since there are no real brand logos to show).
 * Pure CSS animation — no client JS needed.
 *
 * Repeated 4x (not 2x): the loop resets by translating exactly one copy's
 * width. If a single copy is narrower than the viewport, a 2x-repeat shows
 * a blank gap right before the reset — repeating enough times keeps one
 * copy wider than any realistic viewport, so the loop is seamless.
 */
export default function Marquee({ items }) {
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span className="marquee-item" key={`${item}-${i}`}>
            <span className="dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
