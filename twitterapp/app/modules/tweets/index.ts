import "angular";
import {config as routingConfig} from './configs/routing';

angular.module('app.tweets', ['ngRoute'])
    .config(routingConfig);