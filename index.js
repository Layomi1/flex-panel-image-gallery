const panels = document.querySelectorAll(".panel");

function toggleOpen(e) {
  this.classList.toggle("open");
}
function toggleOpenActive(e) {
  if (e.propertyName && e.propertyName.includes("flex-grow")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleOpenActive),
);
