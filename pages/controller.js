angular.module('App').controller('Ctrl', ['$scope', '$state', function (scope, state) {
    var self = this;
    this.scope = scope;

    self.menu = [
        {label: 'Home', sref: 'home'},
        {label: 'Doi', sref: 'doi.province'},
        {label: 'People', sref: 'people'},
        {label: 'Logo', src: '/resources/img/logo.png', href: '/'},
        {label: 'Explore', sref: 'explore'},
        {label: 'About', sref: 'about'},
        {label: 'Account', sref: 'account'}
    ]

}]);