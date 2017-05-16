app.controller("ItemNewCtrl", function(http, $q, $scope, FIREBASE_CONFIG) {
  let postNewItem = (newItem) => {
    return $q ((resolve, reject) => {
      $http.post(`${FIREBASE_CONFIG.databaseURL}/items.json`, JSON.stringify(newItem))
      .then((results) => {
        resolve(results);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  $scope.addNewItem = () => {
    $scope.newTask.isCompleted = false;
    postNewItem($scope.newTask).then(() => {
      $scope.newTask = {};
      // switch views
    }).catch((error) => {
      console.log("add error", error);
    });
  };
});