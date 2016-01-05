/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-rangesliderjs',
  included(app) {
    this._super.included(app);
    app.import('bower_components/rangeslider.js/dist/rangeslider.js');
    app.import('bower_components/rangeslider.js/dist/rangeslider.css');
  }//,

  // isDevelopingAddon() {
  //   return true;
  // }
};
