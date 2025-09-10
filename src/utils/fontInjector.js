export function wrapHindiWords() {
  const hindiRegex = /[\u0900-\u097F]+/g;

  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  const textNodes = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach((textNode) => {
    const text = textNode.textContent;

    if (hindiRegex.test(text)) {
      const parent = textNode.parentElement;

      // Skip if already processed
      if (parent.classList.contains('font-hindi') || parent.classList.contains('font-english')) return;

      // Process by replacing Hindi words with spans
      const newHTML = text.replace(hindiRegex, (match) => {
        return `<span class="font-hindi">${match}</span>`;
      });

      const span = document.createElement('span');
      span.className = 'font-english'; // Default English font for the entire block
      span.innerHTML = newHTML;

      parent.replaceChild(span, textNode);
    }
  });
}
