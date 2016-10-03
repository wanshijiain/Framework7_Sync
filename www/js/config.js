var myApp={};
var mainView={};
var rightView={};
var $$=Dom7;
angular.module("AngularApp",[
  'AngularApp.controllers',
  'AngularApp.directives',
  'AngularApp.services',
  'AngularApp.filters'
  ]);

AngularApp.run(function(){
  myApp=new Framework7({
    modalTitle:'Framework7',
    material:'true',
    pushState:'true',
    angular:'true'
  });
  mainView=myApp.addView('.view-main',{});
})

AngularApp.config(
window.location.hash="#!/templates/home/home.html"

);
