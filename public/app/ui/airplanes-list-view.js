'use strict';

define(

  [
    'components/flight/lib/component',
    'components/mustache/mustache',
    'app/templates/airplanes'
  ],

  function(defineComponent, Mustache, templates) {

    return defineComponent(airplanesListView);

    function airplanesListView() {

      this.render = function(ev, data) {
        var html = Mustache.render(templates.airplane, {airplanes: data.airplanes}, {airplanes: templates.airplane});
        this.$node.find('.airplanes-list').html(html);
        this.on('button', 'click', this.loadDetail)
        this.$node.find('button:first').click();
      };

      this.loadDetail = function(ev) {
        var url = $(ev.currentTarget).attr('data-airplane-url');
        this.trigger(document, 'dataLoadAirplaneDetail', {url: url});
      };

      this.after('initialize', function() {
        this.on(document, 'dataAirplanesUpdated', this.render);
        this.trigger(document, 'dataUpdateAirplanes');
      });
    }
  }
);
