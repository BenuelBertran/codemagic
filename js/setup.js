/* jshint node: true */
"use strict";

//Получение случайного значения от 1 до 10
var getRandom = function () {
  var randomDigit = Math.floor(Math.random() * 10);

  return randomDigit;
};

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

//Окно создания персонажа
document.querySelector(".setup").classList.remove("hidden");

//Окно со списком волшебников
document.querySelector(".setup-similar").classList.remove("hidden");

//Список волшебников
var similarListElement = document.querySelector(".setup-similar-list");

//Волшебник (шаблон)
var similarWizardTemplate = document.querySelector("#similar-wizard-template").content.querySelector(".setup-similar-item");

//Добавление волшебников в список
for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(".wizard-coat").style.fill = wizards[i].coatColor;

  wizardElement.querySelector(".wizard-eyes").style.fill = wizards[i].eyesColor;

  wizardElement.querySelector(".setup-similar-label").textContent = wizards[i].name;

  similarListElement.appendChild(wizardElement);
}
