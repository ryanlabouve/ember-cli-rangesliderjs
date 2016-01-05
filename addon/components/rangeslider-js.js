import Ember from 'ember';
import layout from '../templates/components/rangeslider-js';

export default Ember.Component.extend({
  layout: layout,

  start: null,
  min: 10,
  max: 1000,
  step: 1,
  value: 300,
  dataOrientation: "horizontal",

  rangesliderOptions: {
    // From https://andreruffert.github.io/rangeslider.js/#options
    //
    // Feature detection the default is `true`.
    // Set this to `false` if you want to use rangeslider ui
    polyfill: false,
  },

  didInitAttrs() {
    this.set('value', this.get('start'));
  },

  didUpdateAttrs() {
    this._updateValue();
    this._updateConfig();
  },

  didInsertElement() {
    const _self = this;
    const config = this.get('rangesliderOptions');

    // Is there an easier way to do this?
    const cbs = (function(_self) {
      return {
        onSlideEnd(position, value) {
          _self._onSlideEnd(position, value, _self.attrs.slideEnd);
        },
        onSlide(position, value) {
          _self._onSlide(position, value, _self.attrs.slide);
        }
      };
    })(_self);

    const opts = Ember.merge(config, cbs);
    this.$('input').rangeslider(opts);
    this.set('$el', this.$('input'));
  },

  willDestroyElement() {
    this.$('input').rangeslider('destroy');
  },

  _updateValue() {
    const $el = this.get('$el');
    const action = function() {
      $el.val(this.get('start')).change();
    };
    Ember.run.scheduleOnce('afterRender', this, action);
  },

  _updateConfig() {
    const $el = this.get('$el');
    const action = function() {
      $el.rangeslider('update', true);
    };
    Ember.run.scheduleOnce('afterRender', this, action);
  },

  _onSlideEnd(position, value, slideEnd) {
    if (typeof slideEnd !== 'function') {
      Ember.Logger.warn('No slide end action provided!');
    }

    slideEnd(value);
  },

  _onSlide(position, value, slide) {
    if (typeof slide !== 'function') {
      Ember.Logger.warn('No slide action provided!');
    }

    slide(value);
  }
});
