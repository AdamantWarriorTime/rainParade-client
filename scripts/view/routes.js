'use strict';

page('/', ctx => app.weatherView.initIndexPage());
page('/weather/start', ctx => app.weatherView.initLocationSearch());
page('/about-us', () => app.weatherView.initAboutUsPage());
page('/searchhistory', () => app.Weather.fetchAll(app.weatherView.initSearchHistoryPage));















page();

