module $REST {
    /*********************************************************************************************************************************/
    // Web
    /*********************************************************************************************************************************/
    export class Web extends Base {

        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
        constructor(url?:string, targetInfo?:ComplexTypes.TargetInfoSettings) {
            // Call the base constructor
            super(targetInfo);

            // Default the properties
            this.defaultToWebFl = true;
            this.responses = [];
            this.targetInfo.endpoint = "web";

            // See if the web url exists
            if(url) {
                // Set the settings
                this.targetInfo.url = url;
            }

            // Add the methods
            this.addMethods(this, { __metadata: { type: "web" } } );
        }

        // Method to determine if the current user has access, based on the permissions.
        public hasAccess(permissions) {
            // TO DO
            return true;
        };
    }

    /*********************************************************************************************************************************/
    // Library
    /*********************************************************************************************************************************/
    Library.web = {
        /*********************************************************************************************************************************/
        // Properties
        /*********************************************************************************************************************************/

        properties: [
            "AllProperties|propertyvalues", "AppTiles", "AssociatedMemberGroup|group", "AssociatedOwnerGroup|group",
            "AssociatedVisitorGroup|group", "Author|user", "AvailableContentTypes|contenttypes", "AvailableFields|fields",
            "ClientWebParts", "ContentTypes|contenttypes|('[Name]')|contenttype", "CurrentUser|user", "DataLeakagePreventionStatusInfo",
            "DescriptionResource", "EventReceivers|eventreceivers|('[Name]')|eventreceiver", "Features",
            "Fields|fields|/getByInternalNameOrTitle('[Name]')|field", "FirstUniqueAncestorSecurableObject",
            "Folders|folders|/getByUrl('[Name]')|folder", "Lists|lists|/getByTitle('[Name]')|list",
            "ListTemplates|listtemplates|('[Name]')|listtemplate", "Navigation", "ParentWeb",
            "PushNotificationSubscribers", "RecycleBin", "RegionalSettings", "RoleAssignments|roleassignments|([Name])|roleassignment",
            "RoleDefinitions|roledefinitions|/getByName('[Name]')|roledefinition", "RootFolder|folder|/getByUrl('[Name]')|file",
            "SiteGroups|sitegroups|/getByName('[Name]')|group", "SiteUserInfoList", "SiteUsers|users|/getById([Name])|user", "ThemeInfo", "TitleResource",
            "UserCustomActions|usercustomactions|('[Name]')|usercustomaction", "WebInfos", "Webs|webs", "WorkflowAssociations", "WorkflowTemplates"
        ],

        /*********************************************************************************************************************************/
        // Methods
        /*********************************************************************************************************************************/

        // Applies the theme specified by the contents of each of the files specified in the arguments to the site.
        applyTheme: {
            argNames: ["colorpaletteurl", "fontschemeurl", "backgroundimageurl", "sharegenerated"],
            requestType: Types.RequestType.PostWithArgs
        },

        // Applies the specified site definition or site template to the Web site that has no template applied to it.
        applyWebTemplate: {
            argName: ["name"],
            requestType: Types.RequestType.PostWithArgsInQS
        },

        // Creates unique role assignments for the securable object.
        breakRoleInheritance: {
            argNames: ["copyroleassignments", "clearsubscopes"],
            requestType: Types.RequestType.PostWithArgs
        },

        // Deletes the object
        delete: {
            requestType: Types.RequestType.Delete
        },

        // Checks whether the push notification subscriber exist for the current user with the given device application instance ID.
        doesPushNotificationSubscriberExist: {
            argNames: ["id"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },
        
        // Returns whether the current user has the given set of permissions.
        doesUserHavePermissions: {
            argNames: ["High", "Low"],
            requestType: Types.RequestType.GetWithArgsInQS
        },

        // Checks whether the specified login name belongs to a valid user in the site. If the user doesn't exist, adds the user to the site.
        ensureUser: {
            argNames: ["logonName"],
            requestType: Types.RequestType.PostWithArgsInBody
        },
        
        // Sends data to an OData service.
        executeRemoteLOB: {
            requestType: Types.RequestType.PostWithArgsInBody
        },
        
        // Gets the app BDC catalog.
        getAppBdcCatalog: {
            requestType: Types.RequestType.Post
        },
        
        // Gets the app BDC catalog for the specified app instance.
        getAppBdcCatalogForAppInstance: {
            argNames: ["id"],
            requestType: Types.RequestType.PostWithArgsValueOnly
        },
        
        // Retrieves an AppInstance installed on this Site.
        getAppInstanceById: {
            argNames: ["id"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },
        
        // Retrieves all AppInstances installed on this site that are instances of the specified App.
        getAppInstancesByProductId: {
            argNames: ["id"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },
        
        // Returns a collection of site templates available for the site.
        getAvailableWebTemplates: {
            argNames: ["lcid", "doincludecrosslanguage"],
            requestType: Types.RequestType.GetWithArgs
        },
        
        // Returns the list gallery on the site.
        getCatalog: {
            argNames: ["galleryType"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Returns the collection of all changes from the change log that have occurred within the scope of the site, based on the specified query.
        getChanges: {
            argNames: ["query"],
            metadataType: "SP.ChangeQuery",
            requestType: Types.RequestType.PostWithArgsInBody
        },
        
        // Gets the context information for the site. Static method.
        getContextWebInformation: {
            name: "contextInfo",
            replaceEndpointFl: true,
            requestType: Types.RequestType.Post
        },

        // Gets the custom list templates for the site.
        getCustomListTemplates: {
            requestType: Types.RequestType.Get
        },
        
        // Gets the document libraries on a site. Static method. (SharePoint Online only)
        getDocumentLibraries: {
            argNames: ["url"],
            name: "sp.web.getDocumentLibraries",
            requestType: Types.RequestType.GetWithArgsInQS
        },

        // Gets the specified external content type in a line-of-business (LOB) system application.
        getEntity: {
            argNames: ["namespace", "name"],
            requestType: Types.RequestType.PostWithArgs
        },

        // Returns the file object located at the specified server-relative URL.
        getFileByServerRelativeUrl: {
            argNames: ["url"],
            requestType: Types.RequestType.GetWithArgsValueOnly,
            returnType: "file"
        },

        // Returns the folder object located at the specified server-relative URL.
        getFolderByServerRelativeUrl: {
            argNames: ["url"],
            requestType: Types.RequestType.GetWithArgsValueOnly,
            returnType: "folder"
        },

        // Gets the list at the specified site-relative URL. (SharePoint Online only)
        getList: {
            argNames: ["url"],
            requestType: Types.RequestType.GetWithArgsValueOnly,
            returnType: "list"
        },

        // Gets the push notification subscriber over the site for the specified device application instance ID.
        getPushNotificationSubscriber: {
            argNames: ["id"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Queries for the push notification subscribers over the site for the specified value of custom arguments. Null or empty custom arguments will return subscribers without any filtering.
        getPushNotificationSubscribersByArgs: {
            argNames: ["args"],
            requestType: Types.RequestType.GetWithArgsValueOnly
        },

        // Queries for the push notification subscribers over the site for the specified user.
        getPushNotificationSubscribersByUser: {
            argNames: ["loginName"],
            requestType: Types.RequestType.GetWithArgsInQS
        },

        // Returns the collection of child sites of the current site based on the specified query. (SharePoint Online only)
        getSubwebsFilteredForCurrentUser: {
            argNames: ["nwebtemplatefilter", "nconfigurationfilter"],
            requestType: Types.RequestType.GetWithArgs
        },

        // Returns the user corresponding to the specified member identifier for the current site.
        getUserById: {
            argNames: ["id"],
            requestType: Types.RequestType.GetWithArgsValueOnly,
            returnType: "user"
        },

        // Gets the effective permissions that the specified user has within the current application scope.
        getUserEffectivePermissions: {
            argNames: ["loginName"],
            name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
            requestType: Types.RequestType.GetReplace
        },

        // Gets the site URL from a page URL. Static method.
        getWebUrlFromPageUrl: {
            name: "sp.web.getWebUrlFromPageUrl",
            requestType: Types.RequestType.GetWithArgsInQS
        },

        // Uploads and installs an app package to this site.
        loadAndInstallApp: {
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Uploads and installs an App package on the site in a specified locale.
        loadAndInstallAppInSpecifiedLocale: {
            argNames: ["appPackageStream", "installationLocaleLCID"],
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Uploads an App package and creates an instance from it.
        loadApp: {
            argNames: ["appPackageStream", "installationLocaleLCID"],
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Returns the name of the image file for the icon that is used to represent the specified file.
        mapToIcon: {
            argNames: ["filename", "progid", "size"],
            requestType: Types.RequestType.GetWithArgs
        },

        // Processes a notification from an external system.
        processExternalNotification: {
            requestType: Types.RequestType.PostWithArgsInBody
        },

        // Registers the subscriber for push notifications over the site. If the registration already exists, the service token is updated with the new value.
        registerPushNotificationSubscriber: {
            argNames: ["deviceappinstanceid", "servicetoken"],
            requestType: Types.RequestType.PostWithArgs
        },

        // Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
        resetRoleInheritance: {
            requestType: Types.RequestType.Post
        },

        // Unregisters the subscriber for push notifications from the site.
        unregisterPushNotificationSubscriber: {
            requestType: Types.RequestType.PostWithArgsValueOnly
        },

        // Updates it's properties.
        update: {
            metadataType: "SP.Web",
            name: "",
            requestMethod: "MERGE",
            requestType: Types.RequestType.PostWithArgsInBody
        }
    };
}
