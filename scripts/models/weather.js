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
    return app.render('showMore-template' ,this);
  };

  Weather.prototype.toOverview = function() {
    return app.render('overview-template', this);
  };

  // Prototype function to calculate how many rainy days there were
  Weather.calcRainyDays = function() {
    Weather.info.rainy_days = 0;
    Weather.info.precipProbability.forEach(function(element) {
      if(element > 0.5) {
        Weather.info.rainy_days++;
      }
    });
  };

  // Prototype function to calculate the avg high, low and average
  Weather.calcAvgTemp = function() {
    Weather.info.avgHigh = (Math.round(((Weather.info.temperatureHigh.reduce((previous, current) => previous + current))/10)*10))/10;
    Weather.info.avgLow = (Math.round(((Weather.info.temperatureLow.reduce((previous, current) => previous + current))/10)*10))/10;
    Weather.info.avg_temp = (Weather.info.avgHigh + Weather.info.avgLow)/2;
  };

  Weather.load = obj => Weather.info = new Weather(obj);

  Weather.findData = (userData, callback) => {
    console.log(userData);
    $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/location`, userData)
      .then(Weather.load)
      .then(callback)
      .catch(errorCallback);
  };

  Weather.create = obj => 
    $.post(`${app.ENVIRONMENT.apiUrl}/api/v1/weather`, obj)
      .then(() => page('/'))
      .catch(errorCallback)

  Weather.fetchAll = callback =>
    $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/searchhistory`)
    .then(Weather.load)
    .then(callback)
    .catch(errorCallback);




  module.Weather = Weather;
})(app);
