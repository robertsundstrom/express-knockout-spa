import $ from "jquery";
import ko from "knockout";
import "knockout-es5";
import "knockout-projections";
import "knockout-validation";

import router from "app/router";
import Main from "app/main";
import es6Loader from "app/es6loader";

router.config({
	routes: [
		{url: '', params: {page: 'home-page'}},
		{url: 'about', params: {page: 'about-page'}},
		{url: 'contact', params: {page: 'contact-page'}},
		{url: 'login', params: {page: 'login-page'}},
		{url: 'register', params: {page: 'register-page'}},
		{url: 'profile', params: {page: 'profile-page'}},
		{url: 'forgot-password', params: {page: 'forgot-password-page'}},
		{url: 'reset-password', params: {page: 'reset-password-page'}}
	]
});

// Register the SystemJS loader.
ko.components.loaders.unshift(es6Loader);

// Validation
ko.validation.init({
	grouping : { deep: true, observable: true }, 
	decorateInputElement: true, 
	parseInputAttributes: true, 
	decorateElementOnModified: false, 
	messagesOnModified: false,
	errorElementClass: 'has-error',
    errorMessageClass: 'help-block'},
	true);

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

ko.components.register('login-page', {
	template: {
		require: 'components/login-page/login.html!text'
	},
	viewModel: {
		require: 'components/login-page/login'
	}
});

ko.components.register('register-page', {
	template: {
		require: 'components/register-page/register.html!text'
	},
	viewModel: {
		require: 'components/register-page/register'
	}
});

ko.components.register('profile-page', {
	template: {
		require: 'components/profile-page/profile.html!text'
	},
	viewModel: {
		require: 'components/profile-page/profile'
	}
});

ko.components.register('forgot-password-page', {
	template: {
		require: 'components/forgot-password-page/forgot-password.html!text'
	},
	viewModel: {
		require: 'components/forgot-password-page/forgot-password'
	}
});

ko.components.register('reset-password-page', {
	template: {
		require: 'components/reset-password-page/reset-password.html!text'
	},
	viewModel: {
		require: 'components/reset-password-page/reset-password'
	}
});

/* Components */
ko.components.register('nav-bar', {
		require: 'components/nav-bar/nav-bar'
});

ko.components.register('login-partial', {
		require: 'components/login-partial/login-partial'
});

ko.components.register('contact-form', {
		require: 'components/contact-form/contact-form'
});

ko.components.register('greeter', {
		require: 'components/greeter/greeter'
});

// Bind Main model to initialize app
ko.track(Main);
ko.applyBindings(Main);