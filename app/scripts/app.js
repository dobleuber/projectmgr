'use strict';

angular.module('projectmgrApp', [
  'ngRoute',
  'ngResource'
]).config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

  // Enable Angular to pull data from 3rd party domain (used for API)
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    
    // Include authorization request with every $http
    $httpProvider.interceptors.push('Headersauthinterceptor');
    
    // Check response header if 401 re-direct to login page
    $httpProvider.responseInterceptors.push('Responseauthinterceptor');

  $routeProvider
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    })
    .when('/projectMgr', {
      templateUrl: 'views/projectmgr.html',
      controller: 'ProjectmgrCtrl'
    })
    .when('/categoryList', {
      templateUrl: 'views/categorylist.html',
      controller: 'CategorylistCtrl'
    })
    .when('/questionList', {
      templateUrl: 'views/questionlist.html',
      controller: 'QuestionlistCtrl'
    })
    .when('/incidentReport/:id', {
      templateUrl: 'views/incidentreport.html',
      controller: 'IncidentreportCtrl'
    })
    .when('/newUser', {
      templateUrl: 'views/newuser.html',
      controller: 'NewuserCtrl'
    })
    .when('/newProject', {
      templateUrl: 'views/newproject.html',
      controller: 'NewprojectCtrl'
    })
    .otherwise({
      redirectTo: '/login'
    });
  }
]);

var settings = {
  url:'http://codingqna.com:3000/'
};

// I don't want any real form submit, just ajax
$.validator.setDefaults({
  debug: true
});
var validateUtils = {

  highlight: function(element) {
    if($(element).siblings("i").length === 0){
      var icon = $("<i>").addClass("fa fa-exclamation-triangle");
      $(element).after(icon);
    }
  },
  unhighlight: function(element){
    $(element).siblings("i").remove();
  },            
  errorPlacement: function(error, element) {
    element.siblings("i").qtip({
      content: {
        text: error.text() // Use the "div" element next to this for the content
      },
      position: { 
        my: 'top center',
        at: 'bottom center'
      },
      style:'qtip qtip-red qtip-rounded qtip-shadow'
    });
  }
};