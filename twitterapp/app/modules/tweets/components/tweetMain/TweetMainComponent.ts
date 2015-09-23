import {IRootModel} from "../../models/RootModel";
import {ISharedModel} from "../../models/SharedModel";
export interface ITweetMainIsolateScope{
    mainVm: TweetMainController;
}
export class TweetMainComponent implements ng.IDirective{
    public restrict: string = "E";
    public template: string = require("./index.html");
    public controller: Function = TweetMainController;
    public controllerAs: string = "mainVm";
}

export class TweetMainController{
    public static $inject: Array<string> = ['IRootModel'];
    public sharedModel: ISharedModel;
    constructor(rootModel: IRootModel) {
        this.sharedModel = rootModel.sharedModel;
    }
}
