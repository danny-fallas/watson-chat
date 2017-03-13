(function () {
  "use strict";

  angular
    .module('watsonDemoApp')
    .factory('PromiseService', ['$http', '$q', '$location', PromiseService]);

  function PromiseService($http, $q, $location) {
    var api_url = $location.protocol() + '://' + $location.host() + ':' + $location.port() + '/api/send';

    function HttpPost(parameters) {
      var deferred = $q.defer();
      var req = {
        method: 'POST',
        url: api_url,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        data: parameters
      }
      $http(req).then(function (data) {
        deferred.resolve(data);
        //deferred.reject(err);
      });
      return deferred.promise;
    }

    return {
      Post: HttpPost
    }
  }
})();