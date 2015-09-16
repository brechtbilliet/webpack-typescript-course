import "angular-route";
config.$inject = ["$routeProvider"];

export function config(routeProvider: ng.route.IRouteProvider){
    routeProvider.when("/tweets",
        {
            template: '<page-tweets></page-tweets>'
        })
}