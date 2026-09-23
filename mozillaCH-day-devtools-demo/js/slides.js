require.config({
  paths: {
    'hammer': '../../shared/js/hammer',
    'modernizr.custom.45394': '../../shared/js/modernizr.custom.45394',
    'slide-controller': '../../shared/js/slide-controller'
  }
});

require(['order!../slide_config', 'order!modernizr.custom.45394',
         'order!prettify/prettify', 'order!hammer', 'order!slide-controller',
         'order!slide-deck'], function(someModule) {

});
