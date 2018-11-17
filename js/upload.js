/* jshint node: true */
/* jshint browser: true */
/* global window */
"use strict";

(function() {
  var URL = "https://js.dump.academy/code-and-magick";

  window.upload = function(data, onLoad) {
    //Создание нового запроса
    var xhr = new XMLHttpRequest();
    //Инициализация запроса
    xhr.open("POST", URL);
    //Указание формата ответа
    xhr.responseType = "json";
    //Выполнить, при получениии ответа
    xhr.addEventListener("load", function() {
      onLoad(xhr.response);
    });
    //Отправка запроса
    xhr.send(data);
  };
})();
