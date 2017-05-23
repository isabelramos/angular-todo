app.controller("AuthCtrl", function($scope, AuthFactory, UserFactory) {
	$scope.auth = {};

	$scope.registerUser = () => {
		AuthFactory.registerWithEmail($scope.auth).then((didRegister) => {
			console.log("didRegister", didRegister);
			$scope.auth.uid = didRegister.uid;
			return UserFactory.addUser($scope.auth);
		}, (error) => {
			console.log("registerWithEmail error", error);
		}).then((registerComplete) => {
			console.log("registerComplete", registerComplete);
		}).catch(() =>{
			console.log("addUser error", error);
		});
	};

	$scope.loginUser = () => {
		
	};


});