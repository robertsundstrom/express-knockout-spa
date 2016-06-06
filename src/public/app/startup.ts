import $ from "jquery";

import ko from "knockout";
import "knockout-es5";
import "knockout-projections";

import router from "app/router";
import Main from "app/main";
import es6Loader from "app/es6loader";

router.config({
	routes: [
		{url: '', params: {page: 'home-page'}},
		{url: 'about', params: {page: 'about-page'}},
		{url: 'contact', params: {page: 'contact-page'}},
		{url: 'foo', params: {page: 'foo-page'}},
	]
});

// Register the SystemJS loader.
ko.components.loaders.unshift(es6Loader);

/* Pages */
ko.components.register('home-page', {
	template: {
		require: 'components/home-page/home.html!text'
	},
	viewModel: {
		require: 'components/home-page/home'
	}
});

ko.components.register('about-page', {
	template: {
		require: 'components/about-page/about.html!text'
	},
	viewModel: {
		require: 'components/about-page/about'
	}
});

ko.components.register('contact-page', {
	template: {
		require: 'components/contact-page/contact.html!text'
	},
	viewModel: {
		require: 'components/contact-page/contact'
	}
});

/* Components */
ko.components.register('greeter', {
		require: 'components/greeter/greeter'
});

// Bind Main model to initialize app
ko.track(Main);
ko.applyBindings(Main);