/* jshint node: true */
/* jshint browser: true */
/* global window */
"use strict";

//Открытие\закрытие окна создания персонажа
var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;
var setup = document.querySelector(".setup");
var setupOpen = document.querySelector(".setup-open");
var setupClose = setup.querySelector(".setup-close");
var setupOpenIcon = setupOpen.querySelector(".setup-open-icon");
var onPopupEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closeUserPopup();
  }
};
//Положение окна создания персонажа по умолчанию
var popupDefaultCoords = {
  x: "50%",
  y: "80px"
};

//Открытие окна создания персонажа
var openUserPopup = function () {
  setup.classList.remove("hidden");
  document.addEventListener("keydown", onPopupEscPress);
};

//Закрытие окна создания персонажа
var closeUserPopup = function () {
  setup.classList.add("hidden");
  //Возврат окна в положение по умолчанию
  setup.style.left = popupDefaultCoords.x;
  setup.style.top = popupDefaultCoords.y;
  document.removeEventListener("keydown", onPopupEscPress);
};

setupOpenIcon.tabIndex = "0";
setupClose.tabIndex = "0";

setupOpen.addEventListener("click", function() {
  openUserPopup();
});

setupClose.addEventListener("click", function() {
  closeUserPopup();
});

setupOpen.addEventListener("keydown" ,function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openUserPopup();
  }
});

setupClose.addEventListener("keydown" ,function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closeUserPopup();
  }
});

//Валидация ввода имени персонажа
var userName = document.querySelector(".setup-user-name");
userName.setAttribute('minlength', '2');

//Переменные вещей для раскраски
var setupWizard = document.querySelector(".setup-wizard");
var wizardCoat = setupWizard.querySelector(".wizard-coat");
var coatName = setup.querySelector("[name='coat-color']");
var wizardEyes = setupWizard.querySelector(".wizard-eyes");
var eyesName = setup.querySelector("[name='eyes-color']");
var wizardFireball = document.querySelector(".setup-fireball-wrap");
var fireballName = wizardFireball.querySelector("[name='fireball-color']");

//Случайное число в диапазоне
var getRandomRange = function (min, max) {
  return Math.random() * (max - min) + min;
};

//Цвета мантий
var coatColors = [
  "rgb(101, 137, 164)",
  "rgb(241, 43, 107)",
  "rgb(146, 100, 161)",
  "rgb(56, 159, 117)",
  "rgb(215, 210, 55)",
  "rgb(0, 0, 0)"
];

var currentCoatColor = coatColors[0];

var getRandomCoatColor = function() {
  var randomCoatColor = coatColors[Math.floor(getRandomRange(0, 6))];
  while (randomCoatColor === currentCoatColor) {
    randomCoatColor = coatColors[Math.floor(getRandomRange(0, 6))];
  }
  wizardCoat.style.fill = randomCoatColor;
  coatName.setAttribute("value", randomCoatColor);
  currentCoatColor = randomCoatColor;
};

wizardCoat.addEventListener("click", getRandomCoatColor);

//Цвета глаз
var eyesColors = [
  "black",
  "red",
  "blue",
  "yellow",
  "green"
];

var currentEyesColor = eyesColors[0];

var getRandomEyesColor = function() {
  var randomEyesColor = eyesColors[Math.floor(getRandomRange(0, 5))];
  while (randomEyesColor === currentEyesColor) {
    randomEyesColor = eyesColors[Math.floor(getRandomRange(0, 5))];
  }
  wizardEyes.style.fill = randomEyesColor;
  eyesName.setAttribute("value", randomEyesColor);
  currentEyesColor = randomEyesColor;
};

wizardEyes.addEventListener("click", getRandomEyesColor);

//Цвета файербола
var fireballColors = [
  "#ee4830",
  "#30a8ee",
  "#5ce6c0",
  "#e848d5",
  "#e6e848"
];

var currentFireballColor = fireballColors[0];

var getRandomFireballColor = function() {
  var randomFireballColor = fireballColors[Math.floor(getRandomRange(0, 5))];
  while (randomFireballColor === currentFireballColor) {
    randomFireballColor = fireballColors[Math.floor(getRandomRange(0, 5))];
  }
  wizardFireball.style.backgroundColor = randomFireballColor;
  fireballName.setAttribute("value", randomFireballColor);
  currentFireballColor = randomFireballColor;
};

wizardFireball.addEventListener("click", getRandomFireballColor);

//Адрес отправки формы
var userForm = document.querySelector(".setup-wizard-form");
userForm.setAttribute("action", "https://js.dump.academy/code-and-magick");

//Получение случайного значения от 1 до 10
var getRandom = function () {
  var randomDigit = Math.floor(Math.random() * 10);

  return randomDigit;
};

///// Создание похожих волшебников /////

//Окно со списком похожих волшебников
document.querySelector(".setup-similar").classList.remove("hidden");

//Список похожих волшебников
var similarListElement = document.querySelector(".setup-similar-list");

//Шаблон волшебника
var similarWizardTemplate = document.querySelector("#similar-wizard-template").content.querySelector(".setup-similar-item");

//Получение данных о волшебниках с Успехом
var onSuccess = function (wizard) {
  //Коллекция для вставки списка похожих волшебниклв
  var fragment = document.createDocumentFragment();

  //Вставка списка похожих волшебников в коллекцию
  for (var i = 0; i < 4; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector(".wizard-coat").style.fill = wizard[i].colorCoat;

    wizardElement.querySelector(".wizard-eyes").style.fill = wizard[i].colorEyes;

    wizardElement.querySelector(".setup-similar-label").textContent = wizard[i].name;

    fragment.appendChild(wizardElement);
  }

  //Вставка коллекции со списком похожих волшебников на страницу
  similarListElement.appendChild(fragment);
};

//Получение данных о волшебниках с Ошибкой
var onError =  function (errorMessage) {
  //Всплывающее сообщение об ошибке
  var message = document.createElement("div");
  message.style = "z-index: 100; width: 30%; margin: 0 auto; padding: 20px; border: 5px solid black; box-sizing: border-box; text-align: center; background-color: red; color: black";
  message.style.position = "absolute";
  message.style.top = "50%";
  message.style.left = 0;
  message.style.right = 0;
  message.style.fontSize = "30px";

  message.textContent = errorMessage;
  document.body.insertAdjacentElement("afterBegin", message);
};

//Наполнение шаблонов волшебника данными с сервера
window.backend.load(onSuccess, onError);

//Отправка данных формы волшебника персонажа без перезагрузки
userForm.addEventListener("submit", function(evt) {
  window.backend.save(new FormData(userForm), function(success) {
    closeUserPopup();
  });
  evt.preventDefault();
});
