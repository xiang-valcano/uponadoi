angular.module("App").controller('DoiCtrl', ['$scope', '$rootScope', 'bg', '$stateParams', '$state', function (scope, rootScope, bg, stateParams, state) {
    var self = this;
    this.scope = scope;
    self.province = (stateParams.province=="" || stateParams.province==undefined)?'main':stateParams.province;
    rootScope.bg = (stateParams.province=="" || stateParams.province==undefined)?'1':stateParams.bg;

    self.showPart = function () {
        return (stateParams.province=="" || stateParams.province==undefined)
    }
}]);

angular.module('App').controller('DoiMenuCtrl', ['$scope', function (scope) {
    var self = this;
    this.scope = scope;
    self.hoverItem = -1;
    self.provinces = [
        { name: 'Chiangmai', data: 'chiangmai', bg: '8' },
        { name: 'Chiangrai', data: 'chiangrai', bg: '2' },
        { name: 'Lampang', data: 'lampang', bg: '3' },
        { name: 'Maehongson', data: 'maehongson', bg: '4' },
        { name: 'Nan', data: 'nan', bg: '6' },
        { name: 'Phayao', data: 'phayao', bg: '9' },
        { name: 'Phrae', data: 'phrae', bg: '11' },
        { name: 'Tak', data: 'tak', bg: '12' },
    ]
}]);