import angular from 'angular';
import uiRouter from 'angular-ui-router';

// STYLES
import './all.scss';

// CONFIG & RUN
import quixConfig from './appconfig.js';
import quixRun from './apprun.js';

// COMPONENTS
// import here

// SERVICES
// import here

// CONTROLLERS
// import here

angular.module('QuixAnalytics', [
  uiRouter
])
  .config(quixConfig)
  .run(quixRun);
