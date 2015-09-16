import "angular-route";
config.$inject = ["$routeProvider"];
export function config(routeProvider: ng.route.IRouteProvider){
    routeProvider.when("/about",
        {
            template: '<page-about></page-about>'
        })
}