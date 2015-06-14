'use strict';

angular.module('micsearchApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
