angular
    .module('BrianList', [])
    
    .config(config);

  config.$inject = ['$httpProvider'];

  function config($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
  }