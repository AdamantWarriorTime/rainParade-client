'use strict';

page('/', ctx => app.weatherView.initIndexPage());
page('/weather/start', ctx => app.weatherView.initLocationSearch());

page('/about-us', () => app.weatherView.initAboutUsPage());

page('/weather/results', ctx => app.weatherView.initResultsPage());











page('/show', ctx => app.weatherView.initResultPage());




page();

