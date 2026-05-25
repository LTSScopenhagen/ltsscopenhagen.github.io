(() => {
  const list = document.querySelector("[data-shuffle-contributions]");
  if (!list) return;

  const items = Array.from(list.children);
  if (items.length < 2) return;

  const randomInt = (max) => {
    if (window.crypto && window.crypto.getRandomValues) {
      const values = new Uint32Array(1);
      window.crypto.getRandomValues(values);
      return values[0] % max;
    }
    return Math.floor(Math.random() * max);
  };

  for (let index = items.length - 1; index > 0; index -= 1) {
    const swapIndex = randomInt(index + 1);
    [items[index], items[swapIndex]] = [items[swapIndex], items[index]];
  }

  const fragment = document.createDocumentFragment();
  items.forEach((item) => fragment.appendChild(item));
  list.appendChild(fragment);
})();
