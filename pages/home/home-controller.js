angular.module('App').controller('HomeCtrl', ['$scope', '$rootScope', 'bg', function (scope, rootScope, bg) {
    var self = this;
    this.scope = scope;
    rootScope.bg = bg;

    self.photos = [];
    for (var i = 0; i < 30; i++) {
        self.photos.push(i);
    }

}])