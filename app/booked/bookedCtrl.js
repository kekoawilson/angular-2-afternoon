angular.module('devmtnTravel').controller('bookedCtrl', function( $scope, $stateParams, mainSrvc ) {
    mainSrvc.getPackageInfo().then( function( res ) {
      $scope.allPackages = res.data;
  
      if ( $stateParams.id ) {
        $scope.allPackages.map( package => {
          if (package.id === ($stateParams.id *1) ){
            $scope.package = package
          }
        })
      } else {
        console.log('not a match');
      }
    });
  });