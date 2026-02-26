(() => {
  const reducedMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) return;

  const boot = (root, options) => {
    if (!root) return;

    const {
      dataAttr,
      imageClass,
      intervalMs,
      labelsAttr = null,
      labelTarget = null,
      altPrefix = "",
    } = options;

    const imagesRaw = root.getAttribute(dataAttr) || "";
    const images = imagesRaw
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    if (images.length < 2) return;

    const labelsRaw = labelsAttr ? root.getAttribute(labelsAttr) || "" : "";
    const labels = labelsRaw
      .split("||")
      .map((s) => s.trim())
      .filter(Boolean);
    const labelEl = labelTarget ? root.parentElement.querySelector(labelTarget) : null;

    const a = root.querySelector(`.${imageClass}.is-a`);
    const b = root.querySelector(`.${imageClass}.is-b`);
    if (!a || !b) return;

    let currentIndex = 0;
    let showingA = true;

    const setVisible = (img, visible) => {
      img.classList.toggle("is-visible", visible);
    };
    const setSpeakerMeta = (img, index) => {
      const label = labels[index] || "";
      if (label && labelEl) labelEl.textContent = label;
      if (label && altPrefix) img.alt = `${altPrefix}${label}`;
    };

    const next = () => {
      const nextIndex = (currentIndex + 1) % images.length;
      const nextSrc = images[nextIndex];

      const incoming = showingA ? b : a;
      const outgoing = showingA ? a : b;

      incoming.src = nextSrc;
      setSpeakerMeta(incoming, nextIndex);
      setVisible(incoming, true);
      setVisible(outgoing, false);

      currentIndex = nextIndex;
      showingA = !showingA;
    };

    a.src = images[0];
    b.src = images[1 % images.length];
    setSpeakerMeta(a, 0);
    setSpeakerMeta(b, 1 % images.length);
    setVisible(a, true);
    setVisible(b, false);
    window.setInterval(next, intervalMs);
  };

  boot(document.querySelector("[data-hero-images]"), {
    dataAttr: "data-hero-images",
    imageClass: "hero-img",
    intervalMs: 7000,
  });
  boot(document.querySelector("[data-speaker-images]"), {
    dataAttr: "data-speaker-images",
    imageClass: "speaker-img",
    intervalMs: 4500,
    labelsAttr: "data-speaker-labels",
    labelTarget: "[data-speaker-name]",
    altPrefix: "Placeholder portrait of ",
  });
})();
