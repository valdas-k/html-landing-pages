function openDetailsOnMobile() {
  if (window.matchMedia("(min-width: 768px").matches) {
    document.querySelectorAll("details").forEach(detail => {
      detail.setAttribute("open", "");
    })
  } else {
    document.querySelectorAll("details").forEach(detail => {
      detail.setAttribute("close", "");
    })
  }
}

openDetailsOnMobile();
window.addEventListener("resize", openDetailsOnMobile);