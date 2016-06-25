var toggle = document.querySelector(".main-navigation__toggle");
var header = document.querySelector(".page-header");
var headerWrapper = document.querySelector(".page-header__wrapper");
var menu = document.querySelector(".main-navigation__items");
var myMap = document.querySelector(".map");
var intro = document.querySelector(".pink-intro");

var inputSurname = document.querySelector("#surname");
var inputName = document.querySelector("#name");
var inputMiddleName = document.querySelector("#middle-name");
var inputMail = document.querySelector("#email");
var inputPhone = document.querySelector("#tel");
var inputEmotions = document.querySelector("#emotions");

var buttonSubmit = document.querySelector(".form-main-history__button");
var successfully = document.querySelector(".form-main-history__successfully");
var unsuccessful = document.querySelector(".form-main-history__unsuccessful");
var successfullyButton = document.querySelector(".form-main-history__successfully button");
var unsuccessfulButton = document.querySelector(".form-main-history__unsuccessful button");

var pruning = document.querySelector(".redactor__tool--pruning");
var pruningRange = document.querySelector(".redactor__range--pruning");
var saturation = document.querySelector(".redactor__tool--saturation");
var saturationRange = document.querySelector(".redactor__range--saturation");
var contrast = document.querySelector(".redactor__tool--contrast");
var contrastRange = document.querySelector(".redactor__range--contrast");


if (toggle) {
  toggle.onclick = function() {
    if (toggle.classList.contains("main-navigation__toggle--closed")) {
      toggle.classList.remove("main-navigation__toggle--closed");
      toggle.classList.add("main-navigation__toggle--opened");
      headerWrapper.classList.add("page-header__wrapper--opened");
      menu.classList.remove("main-navigation__items--closed");
      menu.classList.add("main-navigation__items--opened");
    }
    else if (toggle.classList.contains("main-navigation__toggle--opened")) {
      toggle.classList.remove("main-navigation__toggle--opened");
      toggle.classList.add("main-navigation__toggle--closed");
      headerWrapper.classList.remove("page-header__wrapper--opened");
      menu.classList.remove("main-navigation__items--opened");
      menu.classList.add("main-navigation__items--closed");
    }
  };
};

window.onload = function() {
  if (toggle) {
    if (toggle.classList.contains("main-navigation__toggle--opened")) {
      toggle.classList.remove("main-navigation__toggle--opened");
      toggle.classList.add("main-navigation__toggle--closed");
      headerWrapper.classList.remove("page-header__wrapper--opened");
      header.classList.remove("page-header--without-script");
      intro.classList.remove("pink-intro--without-script");
      menu.classList.remove("main-navigation__items--opened");
      menu.classList.add("main-navigation__items--closed");
    }
  }

  if (myMap) {
    var myLatLng = { lat: 59.938631, lng: 30.323055 };

    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(myMap, {
      center: myLatLng,
      scrollwheel: false,
      zoom: 17
    });
    var markerImage = new google.maps.MarkerImage(
      "img/map-marker.png",
      new google.maps.Size(36, 35),
      new google.maps.Point(0, 0),
      new google.maps.Point(20, 20)
  );
    // Create a marker and set its position.
    var marker = new google.maps.Marker({
      icon: markerImage,
      map: map,
      position: myLatLng,
      title: "Это мы!"
    });
  }

  if (inputPhone && inputMail) {
    if (window.matchMedia("(min-width: 700px)").matches) {
      inputPhone.placeholder = "+7 ХХХ ХХХ-ХХ-ХХ";
      inputMail.placeholder = "Введите почту";
    } 
  }

  if (buttonSubmit) {
    buttonSubmit.onclick = function (event) {
      event.preventDefault();
      if (inputSurname.value === "" &&
        inputName.value === "" &&
        inputMiddleName.value === "" &&
        inputMail.value === "" &&
        inputPhone.value === "" &&
        inputEmotions.value === "") {
        unsuccessful.classList.remove("form-main-history__unsuccessful--disabled");
        unsuccessful.classList.add("form-main-history__unsuccessful--enable");
      } else {
        successfully.classList.remove("form-main-history__successfully--disabled");
        successfully.classList.add("form-main-history__successfully--enable");
      }
    };

    successfullyButton.onclick = function () {
      successfully.classList.remove("form-main-history__successfully--enable");
      successfully.classList.add("form-main-history__successfully--disabled");
    };

    unsuccessfulButton.onclick = function () {
      unsuccessful.classList.remove("form-main-history__unsuccessful--enable");
      unsuccessful.classList.add("form-main-history__unsuccessful--disabled");
    };
  }

  if (contrast) {
    pruning.onclick = function () {
      pruning.classList.add("redactor__tool--active");
      pruningRange.classList.add("redactor__range--active");
      saturation.classList.remove("redactor__tool--active");
      saturationRange.classList.remove("redactor__range--active");
      contrast.classList.remove("redactor__tool--active");
      contrastRange.classList.remove("redactor__range--active");
    };
    saturation.onclick = function () {
      saturation.classList.add("redactor__tool--active");
      saturationRange.classList.add("redactor__range--active");
      pruning.classList.remove("redactor__tool--active");
      pruningRange.classList.remove("redactor__range--active");
      contrast.classList.remove("redactor__tool--active");
      contrastRange.classList.remove("redactor__range--active");

    };
    contrast.onclick = function () {
      contrast.classList.add("redactor__tool--active");
      contrastRange.classList.add("redactor__range--active");
      saturation.classList.remove("redactor__tool--active");
      saturationRange.classList.remove("redactor__range--active");
      pruning.classList.remove("redactor__tool--active");
      pruningRange.classList.remove("redactor__range--active");

    }
  }
};
