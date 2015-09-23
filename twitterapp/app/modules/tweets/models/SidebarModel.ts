import {Tweet} from "../entitites/Tweet";
import {ISharedModel} from "./SharedModel";
export interface ISidebarModel{
    toggleCollapsed(): void;
    tweets: Array<Tweet>;
}
export class SidebarModel implements ISidebarModel{
    public static $inject: Array<string> = ["ISharedModel"];
    public tweets: Array<Tweet>;

    public toggleCollapsed(): void {
        this.sharedModel.toggleSidebar();
    }
    constructor(private sharedModel: ISharedModel){
        this.tweets = sharedModel.tweets;
    }

}