'use strict';

page('/', ctx => app.weatherView.initIndexPage());
page('/weather/start', ctx => app.weatherView.initLocationSearch());
// page('/about-us', () => app.weatherView.aboutus.initAboutUsPage());
page('/about-us', () => app.weatherView.initAboutUsPage());
page();

