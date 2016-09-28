(function(){
  angular
    .module("calculateApp")
    .controller("additionBox", additionController);

  function additionController($scope){
    var math = this;
    $scope.data= [];
    $scope.addNumbers = function(){
      $scope.data.push({number: $scope.numberOne});
      $scope.data.push({number: $scope.numberTwo});
      console.log($scope.data);
      var answer = $scope.data.reduce(function(sum, input){
        return sum + input.number;
      }, 0);
      $scope.answer = answer;

      $scope.data = [];
      $scope.numberOne = "";
      $scope.numberTwo = "";
      console.log(answer);
    };
  }

})();
