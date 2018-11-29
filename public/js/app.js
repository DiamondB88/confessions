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
    const confession = null;



this.showModal = true;

this.displayHide = () => {
  this.showModal = !this.showModal;
}

this.confess= function(){
    $http({
      method: 'POST',
      url: '/confessions',
      data: {
        category: this.category,
        confession: this.confession
      }
    }).then(response=>{
      controller.getConfession();
      controller.changeInclude('home')
      controller.category = null;
      controller.confession = null;
    }, function(error){
        console.log(error);
      });
  };

this.getConfession = function(){
  $http({
      method: 'GET',
      url: '/confessions',
    }).then(response=>{
      controller.confessions = response.data
      console.log(response.data);
    }, function(error){
        console.log(error);
      });
}

this.deleteConfession = function(confession){
  $http({
    method: 'DELETE',
    url: '/confessions/' + confession._id
  }).then(response=>{
    controller.getConfession();
  }, function() {
          console.log('error');
        });
};

this.editConfession = function(){
  $http({
    method: 'PUT',
    url: '/confessions/' + this.confession._id,
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

  this.increaseLikes = function(confession){
    confession.likes += 1
    $http({
      method: 'PUT',
      url: '/confessions/' + confession._id,
      data: {likes: confession.likes}
    }).then(function(response){
    }, function(error){
        console.log(error);
      })
  }

  this.decreaseLikes = function(confession){
    confession.dislikes -= 1
    $http({
      method: 'PUT',
      url: '/confessions/' + confession._id,
      data: {dislikes: confession.dislikes}
    }).then(function(response){
    }, function(error){
        console.log(error);
      })
  }


this.showEditForm = (index) => {
   this.indexOfEditFormToShow =index
 }
 this.testConfession = function (confession){
   this.confession = confession
   console.log(confession);
 }

 var _captchaTries = 0;
function recaptchaOnload() {
    _captchaTries++;
    if (_captchaTries > 9)
        return;
    if ($('.g-recaptcha').length > 0) {
        grecaptcha.render("recaptcha", {
            sitekey: '6LePr30UAAAAAIUgqPiC7guERBSakhPfnZY9QBl4',
            callback: function() {
                console.log('recaptcha callback');
            }
        });
        return;
    }
    window.setTimeout(recaptchaOnload, 1000);
}

this.getConfession();
}]);
