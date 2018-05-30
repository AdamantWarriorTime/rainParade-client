'use strict';

var app = app || {};

(function (module) {

  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);

  }; 

  Weather.find = (userEvent, callback) => {
    $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/weather`, userEvent)
    .then(console.log)
    .catch(errorCallback);
  } 
  module.Event = Event;
})(app);
