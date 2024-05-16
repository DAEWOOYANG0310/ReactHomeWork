const upBtn = document.querySelector(".up-button");

window.addEventListener("scroll", () => {
  if (scrollY > 100) {
    upBtn.classList.add("show");
  } else {
    upBtn.classList.remove("show");
  }
});

upBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
