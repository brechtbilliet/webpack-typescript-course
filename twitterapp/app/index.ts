import "angular";
import "./modules/about/index";
import "./modules/core/index";
import "./modules/tweets/index";

require('bootstrap/dist/css/bootstrap.css');
require('./screen.scss');
require('font-awesome/css/font-awesome.css');

angular.module('app', ['app.about', 'app.core', 'app.tweets']);
angular.element(document).ready(() => {
    angular.bootstrap(document, ['app'], {
        strictDi: true
    });
});
