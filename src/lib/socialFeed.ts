module $REST {
    /*********************************************************************************************************************************/
    // Social Feed
    /*********************************************************************************************************************************/
    class _SocialFeed extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(targetInfo?:ComplexTypes.TargetInfoSettings) {
            // Call the base constructor
            super(targetInfo);

            // Default the properties
            this.defaultToWebFl = true;
            this.responses = [];
            this.targetInfo.endpoint = "social.feed";

            // Add the methods
            this.addMethods(this, { __metadata: { type: "socialfeed" } } );
        }

        /*********************************************************************************************************************************/
        // Methods
        /*********************************************************************************************************************************/

        // Method to post to another user's feed
        postToFeed(accountName:string, creationData: ComplexTypes.SocialPostCreationData) {
            let postInfo: ComplexTypes.SocialRestPostCreationData = { ID: null, creationData: creationData };

            // Set the post metadata
            postInfo["__metadata"] = { type: "SP.Social.SocialRestPostCreationData" };
            postInfo.creationData["__metadata"] = { type: "SP.Social.SocialPostCreationData" };

            return this.executeMethod("postToMyFeed", {
                argNames: ["restCreationData"],
                name: "actor(item=@v)/feed?@v='" + encodeURIComponent(accountName) + "'",
                requestType: Types.RequestType.PostWithArgsInBody
            }, [postInfo]);
        }

        // Method to post to the current user's feed
        postToMyFeed(creationData:ComplexTypes.SocialPostCreationData) {
            let postInfo: ComplexTypes.SocialRestPostCreationData = { ID: null, creationData: creationData };

            // Set the post metadata
            postInfo["__metadata"] = { type: "SP.Social.SocialRestPostCreationData" };
            postInfo.creationData["__metadata"] = { type: "SP.Social.SocialPostCreationData" };

            return this.executeMethod("postToMyFeed", {
                argNames: ["restCreationData"],
                name: "my/feed/post",
                requestType: Types.RequestType.PostWithArgsInBody
            }, [postInfo]);
        }
    }

    /*********************************************************************************************************************************/
    // Libraries
    /*********************************************************************************************************************************/

    Library.socialfeed = {
        actor: {
            argNames: ["accountName"],
            name: "actor(item=@v)?@v='[[accountName]]'",
            requestType: Types.RequestType.GetReplace
        },

        actorFeed: {
            argNames: ["accountName"],
            name: "actor(item=@v)/feed?@v='[[accountName]]'",
            requestType: Types.RequestType.GetReplace
        },

        clearMyUnreadMentionCount: {
            name: "my/mentionfeed/clearMyUnreadMentionCount",
            requestType: Types.RequestType.Post
        },

        my: {
            name: "my",
            requestType: Types.RequestType.Get
        },

        myFeed: {
            name: "my/feed",
            requestType: Types.RequestType.Get
        },

        myLikes: {
            name: "my/likes",
            requestType: Types.RequestType.Get
        },

        myMentionFeed: {
            name: "my/mentionfeed",
            requestType: Types.RequestType.Get
        },

        myNews: {
            name: "my/news",
            requestType: Types.RequestType.Get
        },

        myTimelineFeed: {
            name: "my/timelinefeed",
            requestType: Types.RequestType.Get
        },

        myUnreadMentionCount: {
            name: "my/unreadmentioncount",
            requestType: Types.RequestType.Get
        }
    }

    /*********************************************************************************************************************************/
    // Social Feed
    /*********************************************************************************************************************************/
    export let SocialFeed = new _SocialFeed();
}