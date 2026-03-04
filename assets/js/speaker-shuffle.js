(() => {
  const randomizeList = (listEl) => {
    const items = Array.from(listEl.children);
    if (items.length < 2) return;

    for (let i = items.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }

    items.forEach((item) => listEl.appendChild(item));
  };

  const lists = document.querySelectorAll(".speaker-carousel-list");
  lists.forEach(randomizeList);
})();
