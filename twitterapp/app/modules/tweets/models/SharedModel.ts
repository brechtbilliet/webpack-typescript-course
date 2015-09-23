import {Tweet} from "../entitites/Tweet";
import {ITweetService} from "../services/TweetService";
export interface ISharedModel{
    tweets: Array<Tweet>;
    topbarCollapsed: boolean;
    sidebarCollapsed: boolean;
    toggleTopbar(): void;
    toggleSidebar(): void;
}
export class SharedModel implements ISharedModel{
    public static $inject: Array<string> = ['ITweetService'];
    public tweets: Array<Tweet>;
    public topbarCollapsed: boolean;
    public sidebarCollapsed: boolean;

    public toggleTopbar(): void {
        this.topbarCollapsed = !this.topbarCollapsed;
    }

    public toggleSidebar(): void {
        this.sidebarCollapsed = !this.sidebarCollapsed;
    }

    constructor(tweetService: ITweetService){
        this.tweets = tweetService.getAll();
    }

}