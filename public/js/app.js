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

}]);
