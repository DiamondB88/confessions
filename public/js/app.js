const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http){

  this.includePath = 'partials/home.html';
  this.navPath = 'partials/nav.html'

  this.changeInclude = (path) => {
    this.includePath = 'partials/'+ path +'.html';
    console.log(this.changeInclude);
  };

  this.changeNavPath = (path) => {
    this.navPath = 'partials/'+ path
+ '.html';
console.log(this.changeNavPath);
};

    const controller = this;

    this.register = function(){
  console.log("hey");
    $http({
        method:'POST',
        url: '/sessions',
        data: {
            username: this.username,
            password: this.password
        }
    }).then(function(response){
      controller.loggedInUser = response.data.username;
      // controller.changeInclude
      // controller.changeNavPath
        console.log(response);
        controller.username = null,
        controller.password = null
    }, function(){
        console.log('error');
    });
}
this.showModal = true;

this.displayHide = () => {
  this.showModal = !this.showModal;
}

}]);
