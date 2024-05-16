// 1. 버튼 태그를 가져온다
// 2. 버튼 태그에 이벤트를 등록한다

// 이벤트가 발생하면

function 토글열닫() {
  document.querySelector(".modal").classList.toggle("show");
}
function 경고메세지(값) {
  document.querySelector(".경고메세지").style.display = 값;
}

document.querySelector(".경고창닫기").addEventListener("click", function () {
  document.querySelector(".경고메세지").style.display = "none";
});

document.querySelector(".modal-btn").addEventListener("click", 토글열닫);

document.querySelector(".close-btn").addEventListener("click", 토글열닫);

document.querySelector(".login").addEventListener("click", function () {
  if (document.querySelector(".아이디").value === "") {
    경고메세지("block");
  } else if (document.querySelector(".비밀번호").value === "") {
    경고메세지("block");
  } else {
    alert("로그인 성공");
  }
});

document.querySelector(".modal").addEventListener("click", function 함수명(e) {
  if (e.target === document.querySelector(".modal"))
    document.querySelector(".modal").classList.remove("show");
});
