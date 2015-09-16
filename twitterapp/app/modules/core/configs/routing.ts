import "angular-route";

config.$inject = ["$routeProvider"];
export function config(routeProvider: ng.route.IRouteProvider){
    routeProvider.when("/",
        {
            template: '<page-default></page-default>'
        })
}