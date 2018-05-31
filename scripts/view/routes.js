'use strict';

page('/', ctx => app.weatherView.initIndexPage());
page('/weather/start', ctx => app.weatherView.initLocationSearch());
page();

