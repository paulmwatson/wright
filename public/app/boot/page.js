'use strict';

define(

  [
    'app/data/airplanes',
    'app/ui/airplanes-list-view',
    'app/ui/airplane-detail-view'
  ],

  function(airplanes, airplanesListView, airplanDetailView) {

    function initialize() {
      DEBUG.events.logAll();
      airplanes.attachTo(document);
      airplanesListView.attachTo('.airplanes-list-view');
      airplanDetailView.attachTo('.airplane-detail-view');
    }

    return initialize;
  }
);