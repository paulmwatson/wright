'use strict';

define(
  function() {
    var airplane =
      '{{#airplanes}}\
        <li>\
          <button data-airplane-url="{{url}}" class="js-view-airplane">{{name}}</button>\
        </li>\
      {{/airplanes}}';
    return {
      airplane: airplane
    }
  }

);