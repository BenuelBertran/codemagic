/* jshint node: true */
/* jshint browser: true */
/* global window */
"use strict";

var setup = document.querySelector(".setup");
var setupUser = setup.querySelector(".upload");


setupUser.addEventListener ("mousedown", function(evt) {
  evt.preventDefault();
  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };
  var dragged = false;

  var onMouseMove = function (evt) {
    evt.preventDefault();
    dragged = true;

    var shift = {
      x: startCoords.x - evt.clientX,
      y: startCoords.y - evt.clientY
    };
    startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    setup.style.top = (setup.offsetTop - shift.y) + "px";
    setup.style.left = (setup.offsetLeft - shift.x) + "px";
  };

  var onMouseUp = function (evt) {
    evt.preventDefault();

    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);

    if (dragged) {
      var onClickPreventDefault = function (evt) {
        evt.preventDefault();
        setupUser.removeEventListener("click", onClickPreventDefault);
      };
      setupUser.addEventListener("click", onClickPreventDefault);
    }
  };

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
});

