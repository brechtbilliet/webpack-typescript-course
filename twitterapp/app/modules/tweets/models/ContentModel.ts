import {Tweet} from "../entitites/Tweet";
import {ISharedModel} from "./SharedModel";
export interface IContentModel{
    tweets: Array<Tweet>;
}
export class ContentModel implements  IContentModel{
    public static $inject: Array<string> = ['ISharedModel']
    public tweets: Array<Tweet>;
    constructor(public sharedModel: ISharedModel){
        this.tweets = sharedModel.tweets;
    }
}