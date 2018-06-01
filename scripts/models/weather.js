'use strict';

var app = app || {};

(function (module) {

  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

  function Weather(rawObj) {
    Object.keys(rawObj).forEach(key => this[key] = rawObj[key]);
  }

  Weather.findData = userData => {
    console.log(userData);
    $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/location`, userData)
      .then(console.log)
      .catch(errorCallback);
  };

  Weather.create = weather => 
  $.post(`${app.ENVIRONMENT.apiUrl}/api/v1/date`, weather)
  .then(console.log)
  .then(console.log('boyhowdy'))


  module.Weather = Weather;
})(app);
