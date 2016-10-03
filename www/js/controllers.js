AngularApp.controllers("RootCtrl",[
  "$scope",
  "$compile",
  "$rootScope"
function($scope,$compile,$rootScope){
  $scope.title="Frameworky(a)";
  $$('.panel-left').on('open',function(){
    $$('.statusbar-overlay').addClass('with-panel-left');
  });
   $$('.panel-right').on('open',function(){
     $$('.statusbar-overlay').addClass('with-panel-right');
   });
   $$('.panel-left, .panel-right').on('close',function(){
     $$('.statusbar-overlay').removeClass('with-panel-left with-panel-right');
   });
   var dynamicPageIndex=0;
   $scope.createContentPage=function(){
     mainView.router.loadContent(
       '  <!-- Page, data-page contains page name-->' +
          '  <div data-page="dynamic-content" class="page">' +
          '    <!-- Top Navbar-->' +
          '    <div class="navbar">' +
          '      <div class="navbar-inner">' +
          '        <div class="left"><a href="#" class="back link icon-only"><i class="icon icon-back"></i></a></div>' +
          '        <div class="center">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
          '      </div>' +
          '    </div>' +
          '    <!-- Scrollable page content-->' +
          '    <div class="page-content">' +
          '      <div class="content-block">' +
          '        <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
          '        <p>Go <a href="#" class="back">back</a> or generate <a href="#" class="ks-generate-page" ng-click="createContentPage()">one more page</a>.</p>' +
          '      </div>' +
          '    </div>' +
          '  </div>'
     );
     return;
   }

}]);
