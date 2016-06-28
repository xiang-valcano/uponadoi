angular.module('App').controller('PeopleCtrl', ['$scope', '$rootScope', 'bg', '$state', function (scope, rootScope, bg, state) {
    var self = this;
    this.scope = scope;

    rootScope.bg = bg;

    self.tribes = [
        { name: 'akha', bg: 8 },
        { name: 'daraang', bg: 9 },
        { name: 'hmong', bg: 4 },
        { name: 'kachin', bg: 7 },
        { name: 'karen', bg: 3 },
        { name: 'lahu', bg: 2 },
        { name: 'lishu', bg: 5 },
        { name: 'lua', bg: 12 },
        { name: 'mien', bg: 11 },
        { name: 'tailue', bg: 1 },
        { name: 'taiyai', bg: 10 },
        { name: 'yunnan', bg: 6 },
    ]

    self.hover = function (hover, tribe) {
        var elem = document.getElementById(tribe);
        if (hover) elem.src = "/resources/img/people/" + tribe + "_rollover.png";
        else elem.src = "/resources/img/people/" + tribe + ".png";
    }

    self.hideMenu = function () {
        return (state.current.name != 'people')
    }
}]);

angular.module('App').controller('TribeCtrl', ['$scope', '$stateParams', 'bg', '$rootScope', function (scope, stateParams, bg, rootScope) {
    var self = this;
    this.scope = scope;

    rootScope.bg = stateParams.bg;

    self.src = stateParams.tribe;
}])