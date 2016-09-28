describe('Testing the angularjs Test suite', function() {
    describe('Testing AngularJs controller', function() {
        it('$scope.data should create an empty array', function() {
            module("calculateApp");
            var scope = {};
            var ctrl;
            var arr = [];
            inject(function($controller) {
                ctrl = $controller('additionBox', {
                    $scope: scope
                });
            });
            expect(scope.data).toEqual(arr);
        });

        it('$scope.answer should be 24', function(){
          var scope = {}
          var ctrl;
          inject(function($controller) {
              ctrl = $controller('additionBox', {
                  $scope: scope
              });
          });
          scope.numberOne = 12;
          scope.numberTwo = 12;
          expect(scope.answer).toEqual(24);
        });


    });
});
