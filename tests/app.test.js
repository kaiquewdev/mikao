describe('Mikao', function () {
  beforeEach(module('mikao'));
  
  it('should have result in controller', inject(function ($controller, $rootScope) {
    var scope = $rootScope.$new();
    var MainCtrl = $controller('MainCtrl', {
      $scope: scope 
    });

    expect(scope.result).toEqual([]);
  }));
});
