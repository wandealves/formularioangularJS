var app = angular.module('frmApp');
app.controller('frmCtr',[function(){
    var self = this;
    self.enviar = function(){
        console.log('Usuário ',self.user);
    };
}]);

