const button = document.querySelector("button");
const input = document.querySelector("input");
const span = document.querySelector("span");

button.addEventListener("click", function () {
  const value = input.value;
  if (value < 10000) {
    span.innerHTML = 3000;
  } else if (value < 30000) {
    span.innerHTML = 2000;
  } else if (value < 50000) {
    span.innerHTML = 1000;
  } else {
    span.innerHTML = 0;
  }
});

// 왜 value를 넣어야 되는가?
// button.addEventListener("click", function () {
//   if (input < 10000) {
//     span.innerHTML = 3000;
//   } else if (input < 30000) {
//     span.innerHTML = 2000;
//   } else if (input < 50000) {
//     span.innerHTML = 1000;
//   } else {
//     span.innerHTML = 0;
//   }
// });
// 내가만든 코드는 왜안되는가? 물어보자
