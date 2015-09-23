import {Tweet} from "../entitites/Tweet";
export interface ITweetService{
    getAll(): Array<Tweet>;
}

export class TweetService implements ITweetService{
    public getAll(): Array<Tweet> {
        var returnObj: Array<Tweet> = new Array<Tweet>();
        for(var i: number = 0; i < 5; i++){
            returnObj.push(new Tweet("@user", "Content" + i, false))
        }
        return returnObj;
    }

}