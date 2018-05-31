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

  Weather.info;

  Weather.prototype.toShowMore = function() {
    return app.render('showMore-template' ,this)
  }

  Weather.prototype.toOverview = function() {
    return app.render('overview-template', this)
  }

  Weather.load = obj => Weather.info = new Weather(obj);

  Weather.findData = userData => {
    console.log(userData);
    $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/location`, userData)
      .then(console.log)
      .catch(errorCallback);
  };

  module.Weather = Weather;
})(app);
