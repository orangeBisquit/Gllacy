// modal show
var subButton = document.querySelector(".sub-form-trigger");
var subOverlay = document.querySelector(".supscription-overlay");
var subForm = document.querySelector(".supscription-form");
var subOverlayClose = document.querySelector(".modal-close");
var feedLogin = document.querySelector(".feedback-login");
var feedEmail = document.querySelector(".feedback-email");

subButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  subOverlay.classList.add("overlay-show");
  subForm.classList.add("modal-show");
  feedLogin.focus();
});

subOverlayClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  subOverlay.classList.remove("overlay-show");
  subForm.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (subOverlay.classList.contains("overlay-show")) {
      subOverlay.classList.remove("overlay-show");
      subForm.classList.remove("modal-show");
      subForm.classList.remove("modal-error");
    }
  }
});

// modal error
subForm.addEventListener("submit", function (evt) {
  if (!feedLogin.value || !feedEmail.value) {
    evt.preventDefault();
    console.log("Нужно ввести логин и пароль");
    subForm.classList.remove("modal-error");
    subForm.offsetWidth = subForm.offsetWidth;
    subForm.classList.add("modal-error");
  }
});
// slider
var wrapper = document.querySelector(".wrapper-main");
var slideRadios = document.querySelectorAll(".slider-radio");
var sliderContent = document.querySelectorAll(".slider-item");

slideRadios.forEach((slideRadios) =>
  slideRadios.addEventListener("change", () => sliderFunction())
);

function sliderFunction() {
  if (slideRadios[0].checked == true) {
    wrapper.classList.remove("wrapper-two", "wrapper-three");
    sliderContent[0].classList.add("slide-current");
    sliderContent[1].classList.remove("slide-current");
    sliderContent[2].classList.remove("slide-current");
    wrapper.classList.add("wrapper-one");
  } else if (slideRadios[1].checked == true) {
    wrapper.classList.remove("wrapper-one", "wrapper-three");
    wrapper.classList.add("wrapper-two");
    sliderContent[1].classList.add("slide-current");
    sliderContent[0].classList.remove("slide-current");
    sliderContent[2].classList.remove("slide-current");
  } else if (slideRadios[2].checked == true) {
    wrapper.classList.remove("wrapper-one", "wrapper-two");
    wrapper.classList.add("wrapper-three");
    sliderContent[2].classList.add("slide-current");
    sliderContent[0].classList.remove("slide-current");
    sliderContent[1].classList.remove("slide-current");
  }
}
