(() => {
  const root = document.querySelector("[data-hero-images]");
  if (!root) return;

  const reducedMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) return;

  const imagesRaw = root.getAttribute("data-hero-images") || "";
  const images = imagesRaw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (images.length < 2) return;

  const a = root.querySelector(".hero-img.is-a");
  const b = root.querySelector(".hero-img.is-b");
  if (!a || !b) return;

  let currentIndex = 0;
  let showingA = true;

  const setVisible = (img, visible) => {
    img.classList.toggle("is-visible", visible);
  };

  const next = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    const nextSrc = images[nextIndex];

    const incoming = showingA ? b : a;
    const outgoing = showingA ? a : b;

    incoming.src = nextSrc;
    setVisible(incoming, true);
    setVisible(outgoing, false);

    currentIndex = nextIndex;
    showingA = !showingA;
  };

  a.src = images[0];
  b.src = images[1];
  setVisible(a, true);
  setVisible(b, false);
  currentIndex = 0;
  showingA = true;

  window.setInterval(next, 7000);
})();

