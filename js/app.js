angular
  .module('mikao', [])
  .factory('getDictList', function ($http) {
    return function () {
      return $http({
        method: 'GET',
        url: 'dict.json'
      });
    };
  })
  .controller('MainCtrl', function ($scope, getDictList) {
    $scope.dict = [];

    getDictList()
      .success(function (data) {
        $scope.dict = data;
      });
  })
  .run(function ($log) {
    $log.debug('Mikao is running!');
  });

angular
  .bootstrap(document, [
    'mikao'
  ]);
