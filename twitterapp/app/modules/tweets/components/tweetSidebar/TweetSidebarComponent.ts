import {IRootModel} from "../../models/RootModel";
import {ISidebarModel} from "../../models/SidebarModel";
import {ISharedModel} from "../../models/SharedModel";
export interface ITweetSidebarIsolateScope{
    sidebarVm: TweetSidebarController;
}
export class TweetSidebarComponent {
    public restrict: string = "E";
    public template: string = require("./index.html");
    public controller: Function = TweetSidebarController;
    public controllerAs: string = 'sidebarVm';
}
export class TweetSidebarController{
    public static $inject: Array<string> = ['IRootModel']
    public model: ISidebarModel;
    public sharedModel: ISharedModel;
    constructor(rootModel: IRootModel) {
        this.model = rootModel.sidebarModel;
        this.sharedModel =rootModel.sharedModel;
    }

    public toggleCollapsed(): void{
        this.model.toggleCollapsed();
    }
}