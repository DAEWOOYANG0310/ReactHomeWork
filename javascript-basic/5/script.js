const btns = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("mouseover", () => {
    contents[i].classList.add("show");
  });
  btns[i].addEventListener("mouseout", () => {
    contents[i].classList.remove("show");
  });
}
