/* global module */
module.exports = function (config) {
	'use strict';
	config.set({
		autoWatch: true,
		singleRun: true,

		frameworks: ['jspm', 'jasmine'],

		files: [
			'node_modules/babel-polyfill/dist/polyfill.js'
		],

		jspm: {
			config: 'public/jspm.config.js',
			loadFiles: [
				'public/*.spec.js'
			],
			serveFiles: [
				'public/!(*spec).js'
			]
		},

		proxies: {
			'/public/': '/base/public/',
			'/jspm_packages/': '/public/jspm_packages/'
		},

		browsers: ['PhantomJS'],

		preprocessors: {
			'public/!(*spec).js': ['babel', 'sourcemap', 'coverage']
		},

		babelPreprocessor: {
			options: {
				sourceMap: 'inline'
			},
			sourceFileName: function(file) {
				return file.originalPath;
			}
		},

		reporters: ['coverage', 'progress'],

		coverageReporter: {
			instrumenters: {isparta: require('isparta')},
			instrumenter: {
				'public/*.js': 'isparta'
			},

			reporters: [
				{
					type: 'text-summary',
					subdir: normalizationBrowserName
				},
				{
					type: 'html',
					dir: 'coverage/',
					subdir: normalizationBrowserName
				}
			]
		}
	});

	function normalizationBrowserName(browser) {
		return browser.toLowerCase().split(/[ /-]/)[0];
	}
};