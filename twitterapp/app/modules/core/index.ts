import "angular";
import {PageComponent} from "./components/core/Page";
import {config as routingConfig} from './configs/routing';

angular.module('app.core', ['ngRoute'])
    .directive("page", () => new PageComponent())
    .config(routingConfig);