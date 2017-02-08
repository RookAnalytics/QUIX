import homeCtrl from './views/home/homeCtrl.js';

import homeHtml from './views/home/home.html';

config.$inject = [
	'$stateProvider',
	'$urlRouterProvider',
	'$compileProvider',
  '$locationProvider'
];

export default function config(
  $stateProvider,
  $urlRouterProvider,
  $compileProvider,
  $locationProvider
) {

	// https://docs.angularjs.org/guide/production
	$compileProvider.debugInfoEnabled(false);

	$urlRouterProvider.when('', '/');

	$stateProvider
		.state('home', {
			url: '/',
			template: homeHtml,
			controller: homeCtrl,
			controllerAs: 'homeCtrl'
		});

}