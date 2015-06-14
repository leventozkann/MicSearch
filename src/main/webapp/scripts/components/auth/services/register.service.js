'use strict';

angular.module('micsearchApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


