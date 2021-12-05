export default function Resize() {
  function adjustZoomLevel() {
    let documentWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // 1 cm = 37.795276px;
    let zoomLevel = documentWidth / (23 * 37.795276);

    if (zoomLevel >= 1) return;

    document.querySelector(".book").style.transform = "scale(" + zoomLevel + ")";
  }

  adjustZoomLevel();

  window.addEventListener("resize", adjustZoomLevel);
}