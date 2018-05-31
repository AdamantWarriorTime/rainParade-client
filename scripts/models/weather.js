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

  module.Weather = Weather;
})(app);
