'use strict';

define(

  [
    'components/flight/lib/component'
  ],

  function(defineComponent) {
    return defineComponent(airplanes);

    function airplanes() {

      this.get = function(ev, data) {
        $.getJSON(data.url, jQuery.proxy(function(d){
          this.trigger(document, 'dataAirplaneUpdated', {airplane: d});
        }, this));
      };

      this.update = function(ev, data) {
        $.getJSON('/airplanes.json', jQuery.proxy(function(d){
          this.trigger(document, 'dataAirplanesUpdated', {airplanes: d});
        }, this));
      };

      this.after("initialize", function() {
        this.on(document, 'dataUpdateAirplanes', this.update);
        this.on(document, 'dataLoadAirplaneDetail', this.get);
      });
    }
  }
);
