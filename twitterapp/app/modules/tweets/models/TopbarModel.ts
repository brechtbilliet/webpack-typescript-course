import {ISharedModel} from "./SharedModel";
import {Tweet} from "../entitites/Tweet";
export interface ITopbarModel{
    tweetContent: string;
    toggleCollapsed(): void;
    addTweet(): void;
}
export class TopbarModel implements ITopbarModel{
    public static $inject: Array<string> = ["ISharedModel"];
    public tweetContent: string;

    public toggleCollapsed(): void {
        this.sharedModel.toggleTopbar()
    }

    public addTweet(): void {
        this.sharedModel.tweets.push(new Tweet("@brecht", this.tweetContent, false));
        this.tweetContent = '';
    }

    constructor(private sharedModel: ISharedModel){

    }

}