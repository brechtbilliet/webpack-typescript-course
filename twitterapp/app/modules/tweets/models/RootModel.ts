import {ISharedModel} from "./SharedModel";
import {ISidebarModel} from "./SidebarModel";
import {ITopbarModel} from "./TopbarModel";
import {IContentModel} from "./ContentModel";
export interface IRootModel {
    sharedModel: ISharedModel;
    sidebarModel: ISidebarModel;
    topbarModel: ITopbarModel;
    contentModel: IContentModel;
}

export class RootModel implements IRootModel {
    public static $inject: Array<string> = ["ISharedModel", "ISidebarModel", "ITopbarModel", "IContentModel"];
    constructor(public sharedModel: ISharedModel,
                public sidebarModel: ISidebarModel,
                public topbarModel: ITopbarModel,
                public contentModel: IContentModel) {

    }
}