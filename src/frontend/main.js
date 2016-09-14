import angular from 'angular';
import 'angular-animate';
import 'angular-route';
import 'angular-ui-router';

import 'angular-i18n/angular-locale_de-de.js';
import 'semantic-ui/dist/semantic.js';
import 'semantic-ui/dist/semantic.css';

import SampleController from './controllers/sampleController.js';
import SampleTemplate from './views/sampleView.html';

import './app.scss';

function init({ $stateProvider }) {
	$stateProvider
		.state('home', {
			url: '/',
			controller: SampleController,
			template: SampleTemplate,
		});
}

const app = angular
  .module('app', ['ui.router', 'ngAnimate'])
  .controller('SampleController', SampleController);

app.config( ($stateProvider, $urlRouterProvider) => {
	$urlRouterProvider.when('', '/');
	init({
		$stateProvider,
	});
});
