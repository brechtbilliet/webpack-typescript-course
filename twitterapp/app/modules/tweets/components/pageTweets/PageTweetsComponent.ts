import {IRootModel} from "../../models/RootModel";
import {ISharedModel} from "../../models/SharedModel";
export interface IPageTweetsIsolateScope{
    pageVm: PageTweetsController
}
export class PageTweetsComponent implements ng.IDirective{
    public restrict: string = "E";
    public template: string = require("./index.html");
    public controller: Function = PageTweetsController;
    public controllerAs: string = "pageVm"
}

export class PageTweetsController{
    public static $inject: Array<string> = ['IRootModel']
    public sharedModel: ISharedModel;
    constructor(rootModel: IRootModel){
        this.sharedModel = rootModel.sharedModel;
    }
}