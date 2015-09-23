import "angular";
import {config as routingConfig} from './configs/routing';
import {PageTweetsComponent} from "./components/pageTweets/PageTweetsComponent";
import {TweetContentComponent} from "./components/tweetContent/TweetContentComponent";
import {TweetMainComponent} from "./components/tweetMain/TweetMainComponent";
import {TweetSidebarComponent} from "./components/tweetSidebar/TweetSidebarComponent";
import {TweetTopbarComponent} from "./components/tweetTopbar/TweetTopbarComponent";
import {RootModel} from "./models/RootModel";
import {SharedModel} from "./models/SharedModel";
import {SidebarModel} from "./models/SidebarModel";
import {TopbarModel} from "./models/TopbarModel";
import {ContentModel} from "./models/ContentModel";
import {TweetService} from "./services/TweetService";
import {StarComponent} from "./components/star/StarComponent";

angular.module('app.tweets', ['ngRoute'])
    .config(routingConfig)
    .directive('pageTweets', () => new PageTweetsComponent())
    .directive('tweetContent', () => new TweetContentComponent())
    .directive('tweetMain', () => new TweetMainComponent())
    .directive('tweetSidebar', () => new TweetSidebarComponent())
    .directive('tweetTopbar', () => new TweetTopbarComponent())
    .directive('star', () => new StarComponent())
    .service("ITweetService", TweetService)
    .service('IRootModel', RootModel)
    .service('ISharedModel', SharedModel)
    .service('ISidebarModel', SidebarModel)
    .service('ITopbarModel', TopbarModel)
    .service('IContentModel', ContentModel);