/* jshint node: true */
/* jshint browser: true */
/* global window */
"use strict";

(function() {
  //
  window.backend = {
    load: function(onLoad, onError) {
      //Создание нового запроса
      var xhr = new XMLHttpRequest();
      //Инициализация запроса
      xhr.open("GET", "https://js.dump.academy/code-and-magick/data");
      //Указание формата ответа
      xhr.responseType = "json";
      //Выполнить, при получениии ответа
      xhr.addEventListener("load", function() {
        if (xhr.status === 200) {
          onLoad(xhr.response);
        } else {
          onError("Ошибка на стороне клиента: " + "#" + xhr.status + " " + xhr.statusText);
        }
      });
      //Отправка запроса
      xhr.send();
    },
    save: function(data, onLoad, onError) {

    }
  };
})();
