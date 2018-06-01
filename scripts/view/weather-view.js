'use strict';

var app = app || {};


(function (module) {


  $('.icon-menu').on('click', function(event) {
    $('.menu').slideToggle(350);
  });



  const weatherView = {};
  const userData = {};

  weatherView.initSearchHistoryPage = function() {
    module.showOnly('.historyPage');
    module.Weather.all.forEach(element => $('#historyPageInit').append(element.toHtml()));
      
  
  };


  weatherView.initIndexPage = function() {
    module.showOnly('#start-page');
  };

  weatherView.initOverview = function() {
    module.showOnly('#overview');
    module.Weather.calcRainyDays();
    module.Weather.calcAvgTemp();
    $('#overview').append(module.Weather.info.toOverview());
    $('#saveWeather').on('submit', function(event) {
      event.preventDefault();
      module.Weather.create(module.Weather.info); 
    })
  };
  
  weatherView.initDateSearch = function() {
    console.log('hello');
    module.showOnly('.calendar');
    $('#calendarForm').on('submit', function(event) {
      event.preventDefault();
      userData.date = event.target.userDate.value;
      console.log(userData.date);
      module.Weather.findData(userData, weatherView.initOverview);
      event.target.userDate.value = '';
    });
  };

  weatherView.initLocationSearch = function() {
    module.showOnly('.location');
    $('#locationForm').on('submit', function(event) {
      event.preventDefault();
      userData.location = event.target.userLocation.value;
      console.log(userData.location);
      weatherView.initDateSearch();
      event.target.userLocation.value = '';
    });
  };

  weatherView.initAboutUsPage = function(){
    module.showOnly('#about-us');
    console.log('test initabout');
  };

  // weatherView.initSearchPage = function(){
  //   module.showOnly('#calendar')
  //   $('#calendarForm').on('submit', function(event) {
  //     event.preventDefault();
  //     console.log('success muchachos')
  //     let userEvent = {
  //       date: event.target.userDate.value,
  //     };
  //     event.target.userDate.value = '';
  //     module.showOnly('#location');
  //     $('#locationForm').on('submit', function(event) {
  //       event.preventDefault();
  //       userEvent.location = event.target.userLocation.value || '';
  //       userEvent.zipCode = event.target.zipCode.value || '';
  //       console.log(userEvent)
  //       event.target.zipCode.value = '';
  //       event.target.userLocation.value = '';
  //       for(let i=1; i < 11; i++){
  //         let year = parseInt(userEvent.date.split('-')[0]) - i;
  //         userEvent.date.replace(/^\d{1,4}/g, year.toString())
  //         module.Weather.find(userEvent, weatherView.initSearchResultPage);
  //       }
  //     })
  //   })
  // }



  module.weatherView = weatherView;
  module.userData = userData;
})(app);