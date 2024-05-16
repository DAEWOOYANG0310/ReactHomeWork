function 모달창열닫() {
  document.querySelector(".modal").classList.toggle("show");
}

document.querySelector(".modal-btn").addEventListener("click", 모달창열닫);

document.querySelector(".close-btn").addEventListener("click", 모달창열닫);

function 경고메세지열닫(값) {
  document.querySelector(".경고메세지").style.display = 값;
}

document.querySelector(".login").addEventListener("click", function () {
  if (document.querySelector(".아이디").value === "") {
    경고메세지열닫("block");
  } else if (document.querySelector(".비밀번호").value === "") {
    경고메세지열닫("block");
  } else {
    // 로그인 진행하기
    alert("로그인 완료!");
  }
});

document.querySelector(".경고창닫기").addEventListener("click", function () {
  경고메세지열닫("none");
});

document.querySelector(".modal").addEventListener("click", function (e) {
  if (e.target === document.querySelector(".modal")) {
    document.querySelector(".modal").classList.toggle("show");
  }
});
