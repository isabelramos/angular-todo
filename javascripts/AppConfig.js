app.run(function(FIREBASE_CONFIG) {
  firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider) {
  $routeProvider
    .when("/auth", {
      templateUrl: "partials/auth.html",
      controller: "AuthCtrl"
    })
    .when("/items/list", {
      templateUrl: "partials/item-list.html",
      controller: "ItemListCtrl"
    })
    .when("/items/new", {
      templateUrl: "partials/item-new.html",
      controller: "ItemNewCtrl"
    })
    .when("/items/view/:id", {
      templateUrl: "partials/item-view.html",
      controller: "ItemViewCtrl"
    })
    .when("/items/edit/:id", {
      templateUrl: "partials/item-new.html",
      controller: "ItemEditCtrl"
    })
    .otherwise("/auth");
});