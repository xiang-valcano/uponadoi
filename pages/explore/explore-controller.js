angular.module('App').controller('ExploreCtrl', ['$scope', '$rootScope', 'bg', '$mdDialog', function (scope, rootScope, bg, dialog) {
    var self = this;
    this.scope = scope;

    rootScope.bg = bg;

    self.imgList = [];
    self.list = [];
    for (var i = 0; i < 30; i++) {
        self.imgList.push(i);
    }
    for (var i = 0; i < 15; i++) {
        var rand = (Math.random() * (0 - self.imgList.length + 1) * -1) << 0;
        self.list.push(self.imgList[rand]);
        self.imgList.splice(rand, 1);
    }

    self.shuffle = function () {
        var newList = new Array();
        while (newList.length < 15) {
            var rand = (Math.random() * (0 - self.imgList.length + 1) * -1) << 0;
            newList.push(self.imgList[rand]);
            self.imgList.splice(rand, 1);
        }
        self.imgList = self.list;
        self.list = newList;
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
}]);

function showDialog() {

}

function closeDialog() {
    console.log('fack');
    var dialog = document.getElementById('dialog');
    var body = document.getElementsByTagName('body')[0];
    body.removeChild(dialog);
}