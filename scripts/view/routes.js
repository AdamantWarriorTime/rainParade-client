'use strict';

page('/', ctx => app.weatherView.initIndexPage());
page('/weather/start', ctx => app.weatherView.initLocationSearch());
page('/about-us', ctx => app.aboutus.initAboutUsPage());
page();

