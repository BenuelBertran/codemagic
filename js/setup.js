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


var onLoad = function(data) {
  console.log(data);
};
var onError = function(message) {
  console.error(message);
};
//Запрос данных для похожих волшебников
window.backend.load(onLoad, onError);


//Характеристики волшебников
var firstName = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон", "Иван", "Хуан Себастьян"];

var secondName = ["да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг", "да Марья", "Верон"];

var coatColor = ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)", "rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)"];

var eyesColor = ["black", "red", "blue", "yellow", "green", "black", "red", "blue", "yellow", "green"];

//Волшебники
var wizards = [
  {
  name: firstName[getRandom()] + " " + secondName[getRandom()],
  coatColor: coatColor[getRandom()],
  eyesColor: eyesColor[getRandom()]
  },
  {
  name: firstName[getRandom()] + " " + secondName[getRandom()],
  coatColor: coatColor[getRandom()],
  eyesColor: eyesColor[getRandom()]
  },
  {
  name: firstName[getRandom()] + " " + secondName[getRandom()],
  coatColor: coatColor[getRandom()],
  eyesColor: eyesColor[getRandom()]
  },
  {
  name: firstName[getRandom()] + " " + secondName[getRandom()],
  coatColor: coatColor[getRandom()],
  eyesColor: eyesColor[getRandom()]
  }
];

//Окно со списком волшебников
document.querySelector(".setup-similar").classList.remove("hidden");

//Список волшебников
var similarListElement = document.querySelector(".setup-similar-list");

//Шаблон волшебника
var similarWizardTemplate = document.querySelector("#similar-wizard-template").content.querySelector(".setup-similar-item");

//Добавление волшебников в список
for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(".wizard-coat").style.fill = wizards[i].coatColor;

  wizardElement.querySelector(".wizard-eyes").style.fill = wizards[i].eyesColor;

  wizardElement.querySelector(".setup-similar-label").textContent = wizards[i].name;

  similarListElement.appendChild(wizardElement);
}
