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



this.showModal = true;

this.displayHide = () => {
  this.showModal = !this.showModal;
}

this.confess= function(){
    $http({
      method: 'POST',
      url: '/confession',
      data: {
        category: this.category,
        confession: this.confession
      }
    }).then(response=>{
      controller.getConfession();
      controller.changeInclude('home')
      controller.category = null;
      controller.confession = null;
    }, function(){
        console.log('error');
      });
  };

this.getConfession = function(){
  $http({
      method: 'GET',
      url: '/confessions',
    }).then(response=>{
      controller.confessions = response.data
      console.log(response.data);
    }, function(){
        console.log('error');
      });
}

this.deleteConfession = function(confession){
  $http({
    method: 'DELETE',
    url: '/confession/' + confession._id
  }).then(response=>{
    controller.getConfession();
  }, function() {
          console.log('error');
        });
};

this.editConfession = function(confession){
  $http({
    method: 'PUT',
    url: '/confession/' + confession._id,
    data: {
      category: this.editedCategory,
      confession: this.editedConfession
    }
  }).then(function(response){
    controller.editedCategory = null;
    controller.editedConfession = null;
    controller.getConfession();
    console.log(response);
  },function(){
        console.log('error');
      });
};

this.getConfession();
}]);
