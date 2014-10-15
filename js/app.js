angular
  .module('mikao', [])
  .value('dict', [{
    disease: 'Acidentes',
    cause: 'Rebelião contra autoridade. Crença em violência, raiva.',
    positiveAffirmation: 'Paz e segurança. Eu amo e aceito tudo na vida como uma fonte de sabedoria.',
  }, {
    disease: 'Acne',
    cause: 'Não se aceitar; desamor de si.',
    positiveAffirmation: 'Eu amo-me e aceito-me tal como sou. Eu sou maravilhoso e amado por todos (causas emocionais das doenças)',
  }])
  .controller('MainCtrl', function ($scope, dict) {
    $scope.dict = dict;
    $scope.result = [];
  })
  .run(function ($log) {
    $log.debug('Mikao is running!');
  });

angular
  .bootstrap(document, [
    'mikao'
  ]);
