export interface IStarIsolateScope{
    starVm: StarController;
}

export class StarComponent implements ng.IDirective{
    public controller: any = StarController;
    public controllerAs: string = "starVm";
    public bindToController: boolean|Object = true;
    public scope: any = {
        starred: '='
    };
    public template: any = require('./index.html');
    public restrict: string = 'E';
}
export class StarController{
    public starred: boolean;
    public toggle(): void{
        this.starred = !this.starred;
    }
}