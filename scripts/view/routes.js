'use strict';

page('/', ctx => app.weatherView.initIndexPage());
page('/weather/start', ctx => app.weatherView.initLocationSearch());
page('/weather/results', ctx => app.weatherView.initResultsPage());
// page('/about-us', () => app.weatherView.initAboutUsPage());
// page('/searchhistory')















page();

