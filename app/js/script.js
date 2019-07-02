let slider            = document.querySelector(".slider");
let sliderButtonLeft  = document.querySelector(".slider-button--left");
let sliderButtonRight = document.querySelector(".slider-button--right");
let formInput         = document.querySelectorAll(".form-contact__input");
let formInputName     = document.querySelector(".form-contact__input--name");
let formInputEmail    = document.querySelector(".form-contact__input--email");
let formInputTopic    = document.querySelector(".form-contact__input--topic");
let formInputText     = document.querySelector(".form-contact__input--text");
let formButton        = document.querySelector(".form-contact__submit");
let popupForm         = document.querySelector(".popup--form");
let popupTransit      = document.querySelector(".popup--transit");
let linkTransit       = document.querySelector(".page-footer__transit");
let overlay           = document.querySelector(".overlay");
let anchors           = document.querySelectorAll(".page-nav__link");
let header            = document.querySelector(".scroll-header");
let slideIndex        = 1;
let slides            = document.getElementsByClassName("slider-photo");

slidesMove(slideIndex);

  slider.addEventListener('mouseover', function(evt) {
    sliderButtonLeft.classList.add('slider-buttton--show');
    sliderButtonRight.classList.add('slider-buttton--show');
  });

  slider.addEventListener('mouseout', function(evt) {
    sliderButtonLeft.classList.remove('slider-buttton--show');
    sliderButtonRight.classList.remove('slider-buttton--show');
  });

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
    if (slideIndex <= 0) {
      slideIndex = slides.length - 1;
    } else {
      slideIndex--;
    }
    slidesMove(slideIndex);
  });


  sliderButtonRight.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (slideIndex >= slides.length - 1) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }
    slidesMove(slideIndex);
  });

  function slidesMove(slideIndex) {
    let n = slideIndex;
    let currentSlide = slides[n];
    let next = slides[n + 1];
    let prev = slides[n - 1];

    if (n == 0) {
      prev = slides[slides.length - 1];
    } else
    if (n == slides.length - 1) {
      next = slides[0];
    };
    currentSlide.classList.add("slider-photo--show");
    prev.classList.remove("slider-photo--show");
    next.classList.remove("slider-photo--show");
  }

  formButton.addEventListener("click", function(evt) {
    let formElements = [formInputName, formInputEmail, formInputTopic, formInputText];
    if (!formInputName.value || !formInputEmail.value || !formInputTopic.value || !formInputText.value) {
      evt.preventDefault();
      for (let i = 0; i < 4; i++) {
        let formElement = formElements[i];
        if (!formElement.value) {
          formElement.classList.add("form-contact__input--red");
        } else {
          formElement.classList.remove("form-contact__input--red");
          formElement.classList.add("form-contact__input--green");
        }
      }
    } else {
        evt.preventDefault();
        for (let i = 0; i < 4; i++) {
          formElements[i].classList.add("form-contact__input--green");
        }
        popupForm.classList.remove("popup--hide");
        overlay.classList.remove("overlay--hide");
    }
  });

  formInput.forEach(function(formInput) {
    formInput.addEventListener('focusout', function(evt) {
      evt.preventDefault();
      if (!formInput.value) {
        formInput.classList.remove('form-contact__input--green');
        formInput.classList.add('form-contact__input--red');
      } else {
        formInput.classList.remove('form-contact__input--red');
        formInput.classList.add('form-contact__input--green');
      }
    })
  })

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
    else {
      if (!popupTransit.classList.contains("popup--hide")) {
        popupTransit.classList.add("popup--hide");
        overlay.classList.add("overlay--hide");
      }
    }
  });


  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      if (!popupForm.classList.contains("popup--hide")) {
        evt.preventDefault();
        popupForm.classList.add("popup--hide");
        overlay.classList.add("overlay--hide");
      } else {
        if (!popupTransit.classList.contains("popup--hide")) {
          evt.preventDefault();
          popupTransit.classList.add("popup--hide");
          overlay.classList.add("overlay--hide");
        }
      }
    }
  });

  window.addEventListener("scroll", function(evt) {
    if (window.pageYOffset > 240 && !header.classList.contains("scroll-header--show")) {
      header.classList.add("scroll-header--show");
      header.classList.remove("scroll-header--visually-hidden");
    } else {
      if (window.pageYOffset <= 240 && header.classList.contains("scroll-header--show")){
        header.classList.remove("scroll-header--show");
        header.classList.add("scroll-header--visually-hidden");
      }
    }
  });

  header.addEventListener("mouseover", function() {
    header.classList.remove("scroll-header--hide");
  })

  header.addEventListener("mouseout", function() {
    header.classList.add("scroll-header--hide");
  })
