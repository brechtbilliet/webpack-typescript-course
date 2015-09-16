import "angular";
import {config as routingConfig} from './configs/routing';

angular.module('app.about', ['ngRoute'])
    .config(routingConfig);