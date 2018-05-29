'use strict';

var app = app || {};


(function (module) {
  const weatherView = {};
  weatherView.initSearchPage = function(){
    module.showOnly('#calendar')
    $('#calendarForm').on('submit', function(event) {
      event.preventDefault();
      console.log('success muchachos')
      let userEvent = {
        date: event.target.userDate.value,
      };
      event.target.userDate.value = '';
      module.showOnly('#location');
      $('#locationForm').on('submit', function(event) {
        event.preventDefault();
        userEvent.location = event.target.userLocation.value || '';
        userEvent.zipCode = event.target.zipCode.value || '';
        console.log(userEvent)
        event.target.zipCode.value = '';
        event.target.userLocation.value = '';
        module.Weather.find(userEvent, weatherView.initSearchResultPage);
      })
    })
  }

  

  module.weatherView = weatherView;
})(app);