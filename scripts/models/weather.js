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
  Weather.prototype.calcRainyDays = function() {
    Weather.info.rainyDays = 0;
    this.precipProbability.forEach(element => {
      if(element > 0.5) {
        Weather.info.rainyDays++;
      }
    });
  };

  // Prototype function to calculate the avg high, low and average
  Weather.prototype.calcAvgTemp = function() {
    Weather.info.avgHigh = (this.temperatureHigh.map((previous, current) => previous + current, 0))/10;
    Weather.info.avgLow = (this.temperatureLow.map((previous, current) => previous + current, 0))/10;
    Weather.info.avgAvg = (Weather.info.avgHigh + Weather.info.avgLow)/2;
  };

  Weather.load = obj => Weather.info = new Weather(obj);

  Weather.findData = (userData, callback) => {
    console.log(userData);
    $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/location`, userData)
      .then(Weather.load)
      .then(callback)
      .catch(errorCallback);
  };

  module.Weather = Weather;
})(app);
