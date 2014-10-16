angular
  .module('mikao', [])
  .value('dictURL', 'http://kaiquewdev.github.io/mikao/dict.json')
  .factory('getDictList', function ($http, dictURL) {
    return function () {
      return $http({
        method: 'GET',
        url: dictURL 
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
