(() => {
  if (typeof window.L === "undefined") return;
  const mapEls = Array.from(document.querySelectorAll(".venue-map"));
  if (mapEls.length === 0) return;

  const asFloat = (value) => Number.parseFloat(value || "");
  const escapeHtml = (value) =>
    String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");

  const iconFor = (className) =>
    window.L.divIcon({
      className: "",
      html: `<span class="map-dot ${className}" aria-hidden="true"></span>`,
      iconSize: [14, 14],
      iconAnchor: [7, 7],
    });

  const pointsFromElement = (el) => {
    const points = [];
    const maybePush = (name, address, latRaw, lngRaw, className) => {
      const lat = asFloat(latRaw);
      const lng = asFloat(lngRaw);
      if (Number.isNaN(lat) || Number.isNaN(lng)) return;
      points.push({ name, address, lat, lng, className });
    };

    maybePush(
      el.dataset.summerName || "Summer School",
      el.dataset.summerAddress || "",
      el.dataset.summerLat,
      el.dataset.summerLng,
      "is-summer"
    );
    maybePush(
      el.dataset.workshopName || "Workshop",
      el.dataset.workshopAddress || "",
      el.dataset.workshopLat,
      el.dataset.workshopLng,
      "is-workshop"
    );
    return points;
  };

  mapEls.forEach((el) => {
    const points = pointsFromElement(el);
    if (points.length === 0) return;

    const map = window.L.map(el, {
      zoomControl: true,
      scrollWheelZoom: false,
      dragging: true,
    });

    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const addMarker = (item) => {
      const marker = window.L.marker([item.lat, item.lng], {
        icon: iconFor(item.className),
      }).addTo(map);

      marker
        .bindTooltip(item.name, {
          className: "map-tooltip",
          direction: "top",
          offset: [0, -8],
        })
        .openTooltip();

      marker.bindPopup(
        `<strong>${escapeHtml(item.name)}</strong><br>${escapeHtml(item.address)}`
      );

      return marker;
    };

    const markers = points.map(addMarker);
    if (markers.length === 1) {
      map.setView([points[0].lat, points[0].lng], 17);
      return;
    }

    const markerGroup = window.L.featureGroup(markers);
    map.fitBounds(markerGroup.getBounds().pad(0.45), { maxZoom: 17 });
  });
})();
