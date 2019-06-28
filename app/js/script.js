let sliderButtonLeft  = document.querySelector(".slider-button--left");
let sliderButtonRight = document.querySelector(".slider-button--right");
let sliderImgFirst    = document.querySelector(".slider-photo:nth-child(n)");
let sliderImgLast     = document.querySelector(".slider-photo:nth-child(2n)");
let formButton        = document.querySelector(".form-contact__submit");
let popupForm         = document.querySelector(".popup--form");
let popupTransit      = document.querySelector(".popup--transit");
let linkTransit       = document.querySelector(".page-footer__transit")
let overlay           = document.querySelector(".overlay");
let anchors           = document.querySelectorAll(".page-nav__link");
let header            = document.querySelector(".page-header");

  anchors.forEach(function(anchors) {
    anchors.addEventListener('click', function (evt) {
      evt.preventDefault()
      if (anchors.classList.contains("page-nav__link--about")) {
        document.querySelector('#about').scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
      else if (anchors.classList.contains("page-nav__link--merch")) {
        document.querySelector('#merch').scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
      else if (anchors.classList.contains("page-nav__link--logo")) {
        document.querySelector('#slider').scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
      else if (anchors.classList.contains("page-nav__link--news")) {
        document.querySelector('#news').scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
      else if (anchors.classList.contains("page-nav__link--contacts")) {
        document.querySelector('#contacts').scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  });

  sliderButtonLeft.addEventListener("click", function(evt) {
    evt.preventDefault();
    sliderButtonLeft.classList.add("slider-button--hide");
    sliderButtonLeft.classList.remove("slider-button--show");
    sliderButtonRight.classList.add("slider-button--show");
    sliderButtonRight.classList.remove("slider-button--hide");
    sliderImgFirst.classList.add("slider-photo--show")
    sliderImgLast.classList.add("slider-photo--hide");
    sliderImgFirst.classList.remove("slider-photo--hide");
    sliderImgLast.classList.remove("slider-photo--show");
  });

  sliderButtonRight.addEventListener("click", function(evt) {
    evt.preventDefault();
    sliderButtonLeft.classList.add("slider-button--show");
    sliderButtonLeft.classList.remove("slider-button--hide");
    sliderButtonRight.classList.add("slider-button--hide");
    sliderButtonRight.classList.remove("slider-button--show");
    sliderImgFirst.classList.add("slider-photo--hide");
    sliderImgFirst.classList.remove("slider-photo--show");
    sliderImgLast.classList.add("slider-photo--show");
    sliderImgLast.classList.remove("slider-photo--hide");
  });

  formButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupForm.classList.remove("popup--hide");
    overlay.classList.remove("overlay--hide");
  });

  linkTransit.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupTransit.classList.remove("popup--hide");
    overlay.classList.remove("overlay--hide");
  })

  overlay.addEventListener("click", function() {
    if (!popupForm.classList.contains("popup--hide")) {
      popupForm.classList.add("popup--hide");
      overlay.classList.add("overlay--hide");
    }
    else if (!popupTransit.classList.contains("popup--hide")) {
      popupTransit.classList.add("popup--hide");
      overlay.classList.add("overlay--hide");
    }
  });


  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      if (!popupForm.classList.contains("popup--hide")) {
        evt.preventDefault();
        popupForm.classList.add("popup--hide");
        overlay.classList.add("overlay--hide");
      } else if (!popupTransit.classList.contains("popup--hide")) {
        evt.preventDefault();
        popupTransit.classList.add("popup--hide");
        overlay.classList.add("overlay--hide");
      }
    }
  });
