import {IRootModel} from "../../models/RootModel";
import {ITopbarModel} from "../../models/TopbarModel";
import {ISharedModel} from "../../models/SharedModel";
export interface ITweetTopbarIsolateScope{
    topbarVm: TweetTopbarController;
}
export class TweetTopbarComponent {
    public restrict: string = "E";
    public template: string = require("./index.html");
    public controller: Function = TweetTopbarController;
    public controllerAs: string = 'topbarVm';
}
export class TweetTopbarController{
    public static $inject: Array<string> = ['IRootModel']
    public model: ITopbarModel;
    public sharedModel: ISharedModel;
    constructor(rootModel: IRootModel) {
        this.model = rootModel.topbarModel;
        this.sharedModel = rootModel.sharedModel;
    }
    public toggleCollapsed(): void{
        this.model.toggleCollapsed();
    }

    public post(): void{
        this.model.addTweet();
    }
}
