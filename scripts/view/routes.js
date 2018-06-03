'use strict';

page('/rainParade-client', () => app.weatherView.initIndexPage());
page('/weather/start', () => app.weatherView.initLocationSearch());
page('/about-us', () => app.weatherView.initAboutUsPage());
page('/searchhistory', () => app.Weather.fetchAll(app.weatherView.initSearchHistoryPage));
page('/show', () => app.weatherView.initResultPage());




page();

