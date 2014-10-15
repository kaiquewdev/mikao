describe('Mikao', function () {
  beforeEach(module('mikao'));
  
  var expectedDict = [{
    disease: 'Acidentes',
    cause: 'Rebelião contra autoridade. Crença em violência, raiva.',
    positiveAffirmation: 'Paz e segurança. Eu amo e aceito tudo na vida como uma fonte de sabedoria.',
  }, {
    disease: 'Acne',
    cause: 'Não se aceitar; desamor de si.',
    positiveAffirmation: 'Eu amo-me e aceito-me tal como sou. Eu sou maravilhoso e amado por todos (causas emocionais das doenças)',
  }];

  it('should have dict', inject(function (dict) {
    expect(dict).toEqual(expectedDict);
  }));

  it('should have dict in controller', inject(function ($controller, $rootScope) {
    var scope = $rootScope.$new();
    var MainCtrl = $controller('MainCtrl', {
      $scope: scope 
    });

    expect(scope.dict).toEqual(expectedDict);
  }));

  it('should have result in controller', inject(function ($controller, $rootScope) {
    var scope = $rootScope.$new();
    var MainCtrl = $controller('MainCtrl', {
      $scope: scope 
    });

    expect(scope.result).toEqual([]);
  }));
});
