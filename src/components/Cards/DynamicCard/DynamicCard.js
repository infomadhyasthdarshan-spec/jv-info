import React from "react";

const DynamicCard = ({
  cardStyles = {},
  headings = [],
  paragraphs = [],
  buttons = [],
}) => {
  const mergeStyles = (base, responsive = {}) => {
    return `${base} ${Object.entries(responsive)
      .map(([key, value]) => `${key}:${value}`)
      .join(" ")}`;
  };

  return (
    <div className={mergeStyles(cardStyles.base, cardStyles.responsive)}>
      {headings.map((h, idx) => (
        <h2 key={idx} className={mergeStyles(h.base, h.responsive)}>
          {h.text}
        </h2>
      ))}

      {paragraphs.map((p, idx) => (
        <div key={idx}>
          {p.type === "list" ? (
            <ul className={mergeStyles(p.base, p.responsive)}>
              {p.text.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className={mergeStyles(p.base, p.responsive)}>{p.text}</p>
          )}
        </div>
      ))}

      {buttons.map((btn, idx) => (
        <button key={idx} className={mergeStyles(btn.base, btn.responsive)}>
          {btn.children.map((child, cidx) => (
            <span key={cidx} className={mergeStyles(child.base, child.responsive)}>
              {child.icon && <span className="mr-2">{child.icon}</span>}
              {child.text}
            </span>
          ))}
        </button>
      ))}
    </div>
  );
};

export default DynamicCard;
