import {IRootModel} from "../../models/RootModel";
import {IContentModel} from "../../models/ContentModel";
export interface ITweetContentIsolateScope{
    contentVm: TweetContentController;
}
export class TweetContentComponent implements ng.IDirective{
    public restrict: string = "E";
    public template: string = require("./index.html");
    public controller: Function = TweetContentController;
    public controllerAs: string = 'contentVm'
}
export class TweetContentController{
    public static $inject: Array<string> = ['IRootModel'];
    public model: IContentModel;
    constructor(rootModel: IRootModel) {
        this.model = rootModel.contentModel;
    }
}
