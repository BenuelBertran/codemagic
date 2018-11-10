/* jshint node: true */
"use strict";

//Переменные
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_COLOR = "#ffffff";
var FONT_TYPE = "16px PT Mono";
var FONT_COLOR = "#000000";
var STAT_HEIGHT = -CLOUD_HEIGHT + 140;
var STAT_WIDTH = 40;

//Текстовое облако
var makeCloud = function (ctx, start_x, start_y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(start_x, start_y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

//Поиск максимального значения в массиве
var getMaxElement = function (array) {
    var maxElement = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] > maxElement) {
        maxElement = array[i];
      }
    }
    return maxElement;
  };

window.renderStatistics = function (ctx, names, times) {
  makeCloud (ctx, CLOUD_X + 10, CLOUD_Y + 10, "rgba(0, 0, 0, 0.7)");
  makeCloud (ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  ctx.fillStyle = FONT_COLOR;
  ctx.font = FONT_TYPE;
  ctx.fillText("Ура, вы победили!", CLOUD_X + 10, CLOUD_Y + 40);
  ctx.fillText("Список результатов:", CLOUD_X + 10, CLOUD_Y + 60);

  var maxTime = getMaxElement (times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = FONT_COLOR;
    ctx.fillText(Math.ceil(times[i]), CLOUD_X + 50, CLOUD_Y + 90 - (STAT_HEIGHT - (STAT_HEIGHT * times[i] / maxTime)));
    ctx.fillText(names[i], CLOUD_X + 50, CLOUD_HEIGHT -10);
    if (names [i] === "Вы") {
      ctx.fillStyle = "rgba(255, 0, 0, 1)";
    } else {
      ctx.fillStyle = "rgba(0, 0," + Math.ceil(Math.random() * 255) + ", 1)";
    }
    ctx.fillRect(CLOUD_X + 50, CLOUD_HEIGHT - 30, STAT_WIDTH, (STAT_HEIGHT * times[i]) / maxTime);

    CLOUD_X += 90;
  }
};
