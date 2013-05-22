'use strict';

define(

  [
    'components/flight/lib/component',
    'components/mustache/mustache'
  ],

  function(defineComponent, Mustache) {

    return defineComponent(airplaneDetailView);

    function airplaneDetailView() {

      this.render = function(ev, data) {
        this.$node.find('.airplane-name').text(data.airplane.name);
        this.$node.find('.airplane-desc').text(data.airplane.desc);
        this.$node.find('.airplane-image').attr('src', data.airplane.image_url);
      };

      this.after('initialize', function() {
        this.on(document, 'dataAirplaneUpdated', this.render);
      });
    }
  }
);
