const featureReadCtrl = require('./featureReadCtrl.js');

module.exports = function(app) {

  app.get('/api/v1/featureTest', featureReadCtrl.test);

}