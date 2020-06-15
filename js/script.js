// modal
var subButton = document.querySelector(".sub-form-trigger");
var subOverlay = document.querySelector(".supscription-overlay");
var subForm = document.querySelector(".supscription-form");
var subOverlayClose = document.querySelector(".modal-close");
var feedLogin = document.querySelector(".feedback-login");

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
    }
  }
});

//slider
var wrapper = document.querySelector(".wrapper-main");
var slideHiddenRadio = document.querySelectorAll(".slider-radio");
var sliderContent = document.querySelectorAll(".slider-item");

function sliderChanger() {
  if (slideHiddenRadio[0].checked == true) {
    wrapper.classList.remove("wrapper-two", "wrapper-three");
    sliderContent[0].classList.add("slide-current");
    sliderContent[1].classList.remove("slide-current");
    sliderContent[2].classList.remove("slide-current");
    wrapper.classList.add("wrapper-one");
  } else if (slideHiddenRadio[1].checked == true) {
    wrapper.classList.remove("wrapper-one", "wrapper-three");
    wrapper.classList.add("wrapper-two");
    sliderContent[1].classList.add("slide-current");
    sliderContent[0].classList.remove("slide-current");
    sliderContent[2].classList.remove("slide-current");
  } else if (slideHiddenRadio[2].checked == true) {
    wrapper.classList.remove("wrapper-one", "wrapper-two");
    wrapper.classList.add("wrapper-three");
    sliderContent[2].classList.add("slide-current");
    sliderContent[0].classList.remove("slide-current");
    sliderContent[1].classList.remove("slide-current");
  }
}
