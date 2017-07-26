angular.module('madhopura').controller('loginCtrl', ['$scope','$state', function($scope,$state){
 
   $scope.login = function() {
   	alert("gif");
  	var mobileNo = $scope.mobileNo;
  	var password = $scope.password;
  	var loginData = {"mobileNumber":mobileNo,"password":password};
  	var login_url = "";
  	// defferedFactory.getData(loginData,login_url)
  	//    .then(function successCallback(response) {
  	//    	 $state.go('app.home');
  	//    }).function(errorCallback(response){
   //       console.log(response.error);

  	//    })
   }	

   $scope.signup = function() {
   	$state.go('app.registration');
   }

}]);