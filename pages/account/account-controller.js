angular.module('App').controller('AccountCtrl', ['$scope', '$rootScope', 'bg', function (scope, rootScope, bg) {
    var self = this;
    this.scope = scope;
    rootScope.bg = bg;

    self.photos = [];
    for (var i = 0; i < 30; i++) {
        self.photos.push(i);
    }

    self.showDialog = function (photo) {
        var dialog = document.createElement('div');
        dialog.id = "dialog";
        var backdrop = document.createElement('div');
        backdrop.className = "backdrop";
        dialog.appendChild(backdrop);
        var image = document.createElement('img');
        image.src = "resources/img/explore/pictures/" + photo + "_big.png";
        image.className = "photo";
        var content = document.createElement('div');
        content.className = "content";
        content.setAttribute("align", "center");
        content.setAttribute("onclick", "closeDialog()");
        content.appendChild(image);
        dialog.appendChild(content);
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(dialog);
        console.log(dialog);
    }

}])