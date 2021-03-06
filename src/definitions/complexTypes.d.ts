declare module $REST.ComplexTypes {
    /**
     * App License
     */
    interface AppLicense {
        RawXMLLicenseToken: string;
    }

    /**
     * App License Collection
     */
    interface AppLicenseCollection {
        Items: Results.AppLicense;
    }

    /**
     * App Properties
     */
    interface AppProperties {
        AppSettingsEnabled: boolean;
        Description: string;
        EulaUrl: string;
        IsAnonymous: boolean;
        IsDisabled: boolean;
        ManagedDeploymentEnabled: boolean;
        ManagePermissionsEnabled: boolean;
        ManageSeatsEnabled: boolean;
        MonitoringEnabled: boolean;
        Publisher: string;
        RemoveEnabled: boolean;
        SideLoadEnabled: boolean;
        SupportUrl: string;
        ViewInMarketPlaceEnabled: boolean;
    }

    /**
     * App Site Context
     */
    interface AppSiteContext {
        SiteUrl: string;
    }

    /**
     * App View Creation Information
     */
    interface AppViewCreationInfo {
        AppId: string;
        Title: string;
    }

    /**
     * Attachment Creation Information
     */
    interface AttachmentCreationInformation {
        FileName: string;
    }

    /**
     * Base Permissions
     */
    interface BasePermissions {
        High: number;
        Low: number;
    }

    /**
     * Caml Query
     */
    interface CamlQuery {
        /** A value that indicates whether the query returns dates in Coordinated Universal Time (UTC) format. */
        DatesInUtc: boolean;

        /** A value that specifies the server relative URL of a list folder from which results will be returned. */
        FolderServerRelativeUrl: string;

        /** A value that specifies the information required to get the next page of data for the list view. */
        ListItemCollectionPosition: ListItemCollectionPosition;

        /** A value that specifies the XML schema that defines the list view. */
        ViewXml: string;
    }

    /**
     * Change Log Item Query
     */
    interface ChangeLogItemQuery {
        ChangeToken: string;
        Contains: string;
        Query: string;
        QueryOptions: string;
        RowLimit: string;
        ViewFields: string;
        ViewName: string;
    }

    /**
     * Change Query
     */
    interface ChangeQuery {
        Activity: boolean;
        Add: boolean;
        Alert: boolean;
        ChangeTokenEnd: ChangeToken;
        ChangeTokenStart: ChangeToken;
        ContentType: boolean
        DeleteObject: boolean
        FetchLimit: number;
        Field: boolean;
        File: boolean;
        Folder: boolean;
        Group: boolean;
        GroupMembershipAdd: boolean;
        GroupMembershipDelete: boolean;
        Item: boolean;
        LatestFirst: boolean;
        List: boolean;
        Move: boolean;
        Navigation: boolean;
        RecursiveAll: boolean;
        Rename: boolean;
        RequireSecurityTrim: boolean;
        Restore: boolean;
        RoleAssignmentAdd: boolean;
        RoleAssignmentDelete: boolean;
        RoleDefinitionAdd: boolean;
        RoleDefinitionDelete: boolean;
        RoleDefinitionUpdate: boolean;
        SecurityPolicy: boolean;
        Site: boolean;
        SystemUpdate: boolean;
        Update: boolean;
        User: boolean;
        View: boolean;
        Web: boolean;
    }

    /**
     * Change Token
     */
    interface ChangeToken {
        StringValue: string;
    }

    /**
     * Content Type Creation Information
     */
    interface ContentTypeCreationInformation {
        /** The content type description. */
        Description?: string;

        /** The content type group. */
        Group?: string;

        /** The content type id. */
        Id?: string;

        /** The content type name. */
        Name: string;
    }

    /**
     * Content Type Id
     */
    interface ContentTypeId {
        StringValue: string;
    }

    /**
     * Context Web Information
     */
    interface ContextWebInformation {
        FormDigestTimeoutSeconds: number;
        FormDigestValue: string;
        LibraryVersion: string;
        SiteFullUrl: string;
        SupportedSchemaVersions: Results.String;
        WebFullUrl: string;
    }

    /**
     * Copy Job Progress
     */
    interface CopyJobProgress {
        JobState: number;
        Logs: Results.String;
    }

    /**
     * Copy Migration Information
     */
    interface CopyMigrationInfo {
        EncryptionKey: any;
        JobId: string;
        JobQueueUri: string;
    }

    /**
     * Copy Migration Options
     */
    interface CopyMigrationOptions {
        IgnoreVersionHistory: boolean;
    }

    /**
     * Creatable Item Information
     */
    interface CreatableItemInfo {
        DocumentTemplate: number;
        FileExtension: string;
        ItemType: string;
    }

    /**
     * Creatable Item Information Collection
     */
    interface CreatableItemInfoCollection {
        Items: Results.CreatableItemInfo;
    }

    /**
     * Custom Action Element
     */
    interface CustomActionElement {
        CommandUIExtension: string;
        EnabledScript: string;
        ImageUrl: string;
        Location: string;
        RegistrationId: string;
        RegistrationType: number;
        RequireSiteAdministrator: boolean;
        Rights: BasePermissions;
        Title: string;
        UrlAction: string;
    }

    /**
     * Custom Action Element Collection
     */
    interface CustomActionElementCollection {
        Items: Results.CustomActionElement;
    }

    /**
     * Custom Result
     */
    interface CustomResult {
        GroupTemplateId: string;
        ItemTemplateId: string;
        Properties: Results.KeyValue;
        ResultTitle: string;
        ResultTitleUrl: string;
        Table: SimpleDataTable;
        TableType: string;
    }

    /**
     * Document Library Information
     */
    interface DocumentLibraryInformation {
        AbsoluteUrl: string;
        Modified: string;
        ModifiedFriendlyDisplay: string;
        ServerRelativeUrl: string;
        Title: string;
    }

    /**
     * Encryption Option
     */
    interface EncryptionOption {
        AES256CBCKey: any;
    }

    /**
     * Event Receiver Definition Creation Information
     */
    interface EventReceiverDefinitionCreationInformation {
        /** The event receiver type. */
        EventType: Types.EventReceiverType;

        /** The strong name of the assembly that is used for receiving events. */        
        ReceiverAssembly?: string;

        /** A string that represents the class that is used for receiving events. */
        ReceiverClass?: string;

        /** The name of the event receiver. */
        ReceiverName: string;

        /** The URL of a web service that is used for receiving events. */
        ReceiverUrl?: string;

        /** An integer that represents the relative sequence of the event. */        
        SequenceNumber?: number;
        
        /** The execution synchronization of the event receiver. */
        Synchronization?: number;
    }

    /**
     * Field Calculation Error Value
     */
    interface FieldCalculationErrorValue {
        ErrorMessage: string;
    }

    /**
     * Field Creation Information 
     */
    interface FieldCreationInformation {
        /** The choices. */
        Choices?: Results.String;

        /** The field type. */
        FieldTypeKind: Types.FieldType;

        /** Indicates whether only the first eight characters are used for the field name. */
        IsCompactName?: boolean;

        /** The name of the source lookup field. */
        LookupFieldName?: string;
        
        /** The ID of the target list for the source lookup field. */
        LookupListId?: any;
        
        /** The ID of the site that contains the list that is the source for the lookup field value. */
        LookupWebId?: any;
        
        /** A value that specifies whether the field requires a value. */
        Required?: boolean;
        
        /** A value that specifies the display name of the field. */
        Title: string;
    }

    /**
     * Field Geolocation Value
     */
    interface FieldGeolocationValue {
        Altitude: number;
        Latitude: number;
        Longitude: number;
        Measure: number;
    }

    /**
     * Field Lookup Value
     */
    interface FieldLookupValue {
        LookupId: number;
        LookupValue: string;
    }

    /**
     * Field Rating Scale Question Answer
     */
    interface FieldRatingScaleQuestionAnswer {
        Answer: number;
        Question: string;
    }

    /**
     * Field Url Value
     */
    interface FieldUrlValue {
        Description: string;
        Url: string;
    }

    /**
     * Field User Value
     */
    interface FieldUserValue {
        Email: string;
    }

    /**
     * File Collection Add Parameters
     */
    interface FileCollectionAddParameters {
        Overwrite: boolean;
    }

    /**
     * File Creation Information
     */
    interface FileCreationInformation {
        Content: any;
        Overwrite: boolean;
        Url: string;
    }

    /**
     * Folder Collection Add Parameters
     */
    interface FolderCollectionAddParameters {
        Overwrite: boolean;
    }

    /**
     * Group Creation Information
     */
    interface GroupCreationInformation {
        /** The group description. */
        Description?: string;

        /** The group name. */
        Title: string;
    }

    /**
     * Hashtag
     */
    interface Hashtag {
        Actor: string;
        Application: string;
        Label: string;
        Timestamp: string;
    }

    /**
     * Ingestion Task Key
     */
    interface IngestionTaskKey {
        IngestionTableAccountKey: string;
        IngestionTableAccountName: string;
        JobId: string;
        TaskId: string;
        TenantName: string;
    }

    /**
     * Key Value
     */
    interface KeyValue {
        Key: string;
        Value: string;
        ValueType: string;
    }

    /**
     * Language
     */
    interface Language {
        DisplayName: string;
        LanguageTag: string;
        Lcid: number;
    }

    /**
     * List Creation Information
     */
    interface ListCreationInformation {
        /** The list schema xml. */
        CustomSchemaXml?: string;

        /** The list of data source properties. */
        DataSourceProperties?: Results.KeyValue;

        /** The list description. */
        Description?: string;

        /** The list document template type. */
        DocumentTemplateType?: number;

        /** Option to display the list on the quick launch. */
        QuickLaunchOption?: number;

        /** The list template feature id. */
        TemplateFeatureId?: string;

        /** The list template type. */
        TemplateType: Types.ListTemplateType;

        /** The list name. */
        Title: string;

        /** The list url. */
        Url?: string;
    }

    /**
     * List Data Source
     */
    interface ListDataSource {
        Properties: Results.KeyValue;
    }

    /**
     * List Data Validation Exception Value
     */
    interface ListDataValidationExceptionValue {
        FieldFailures: Results.ListDataValidationFailure;
        ItemFailures: ListDataValidationFailure;
    }

    /**
     * List Data Validation Failure
     */
    interface ListDataValidationFailure {
        DisplayName: string;
        Message: string;
        Name: string;
        Reason: number;
        ValidationType: number;
    }

    /**
     * List Item Collection Position
     */
    interface ListItemCollectionPosition {
        PagingInfo: string;
    }

    /**
     * List Item Creation Information
     */
    interface ListItemCreationInformation {
        FolderUrl: string;
        LeafName: string;
        UnderlyingObjectType: number;
    }

    /**
     * List Item Form Update Value
     */
    interface ListItemFormUpdateValue {
        ErrorMessage: string;
        FieldName: string;
        FieldValue: string;
        HasException: boolean;
    }

    /**
     * Menu Node
     */
    interface MenuNode {
        CustomProperties: Results.KeyValue;
        FriendlyUrlSegment: string;
        IsDeleted: boolean;
        IsHidden: boolean;
        Key; string;
        Nodes: Results.MenuNode;
        NodeType: number;
        SimpleUrl: string;
        Title: string;
    }

    /**
     * Menu State
     */
    interface MenuState {
        FriendlyUrlPrefix: string;
        Nodes: Results.MenuNode;
        SimpleUrl: string;
        SPSitePrefix: string;
        SPWebPrefix: string;
        StartingNodeKey: string;
        StartingNodeTitle: string;
        Version: string;
    }

    /**
     * Method Information
     */
    interface MethodInformation {
        IsBeta: boolean;
        Name: string;
        Parameters: Results.ParameterInformation;
        ReturnTypeFullName: string;
    }

    /**
     * Navigation Node Creation Information
     */
    interface NavigationNodeCreationInformation {
        AsLastNode: boolean;
        IsExternal: boolean;
        Title: string;
        Url: string;
    }

    /**
     * Parameter Information
     */
    interface ParameterInformation {
        Name: string;
        ParameterTypeFullName: string;
    }

    /**
     * Personal Result Suggestion
     */
    interface PersonalResultSuggestion {
        HighlightedTitle: string;
        IsBestBet?: boolean;
        Title: string;
        Url: string;
    }

    /**
     * Property Information
     */
    interface PropertyInformation {
        ExcludeFromDefaultRetrieval: boolean;
        IsBeta: boolean;
        Name: string;
        PropertyTypeFullName: string;
        ReadOnly: boolean;
    }

    /**
     * Provisioned Migration Containers Information
     */
    interface ProvisionedMigrationContainersInfo {
        DataContainerUri: string;
        EncryptionKey: any;
        MetadataContainerUri: string;
    }

    /**
     * Provisioned Migration Queue Info
     */
    interface ProvisionedMigrationQueueInfo {
        JobQueueUri: string;
    }

    /**
     * Query Property
     */
    interface QueryProperty {
        Name: string;
        Value: QueryPropertyValue;
    }

    /**
     * Query Property Value
     */
    interface QueryPropertyValue {
        BoolVal?: boolean;
        IntVal?: number;
        QueryPropertyValueTypeIndex?: number;
        StrArray?: Results.String;
        StrVal?: string;
    }

    /**
     * Query Result
     */
    interface QueryResult {
        CustomResults: Results.CustomResult;
        QueryId: string;
        QueryRuleId?: string;
        RefinementResults: RefinementResults;
        RelevantResults: RelevantResults;
        SpecialTermResults: SpecialTermResults;
    }

    /**
     * Query Suggestion Query
     */
    interface QuerySuggestionQuery {
        IsPersonal?: boolean;
        Query: string;
    }

    /**
     * Query Suggestion Range
     */
    interface QuerySuggestionRange {
        Length?: number;
        Start?: number;
    }

    /**
     * Query Suggestion Results
     */
    interface QuerySuggestionResults {
        PeopleNames: Results.String;
        PersonalResults: Results.PersonalResultSuggestion;
        Queries: Results.QuerySuggestionQuery;
    }

    /**
     * Recycle Bin Queue Information
     */
    interface RecycleBinQueueInformation {
        IsAscending: boolean;
        ItemState: number;
        OrderBy: number;
        PagingInfo: string;
        RowLimit: number;
        ShowOnlyMyItems: boolean;
    }

    /**
     * Refinement Results
     */
    interface RefinementResults {
        GroupTemplateId: string;
        ItemTemplateId: string;
        Property: Results.KeyValue;
        Refiners: Results.Refiner;
        ResultTitle: string;
        ResultTitleUrl: string;
    }

    /**
     * Refiner
     */
    interface Refiner {
        Entries: Results.RefinerEntry;
        Name: string;
    }

    /**
     * Refineer Entry
     */
    interface RefinerEntry {
        RefinementCount?: number;
        RefinementName: string;
        RefinementToken: string;
        RefinementValue: string;
    }

    /**
     * Relevant Results
     */
    interface RelevantResults {
        GroupTemplateId: string;
        ItemTemplateId: string;
        Properties: Results.KeyValue;
        ResultTitle: string;
        ResultTitleUrl: string;
        RowCount: number;
        Table: SimpleDataTable;
        TotalRows: number;
        TotalRowsIncludingDuplicates: number;
    }

    /**
     * Reordering Rule
     */
    interface ReorderingRule {
        Boost?: number;
        MatchType?: Types.ReordingRuleMatchType;
        MatchValue: string;
    }

    /**
     * Reordering Rules Creation Information
     */
    interface ReorderingRulesCreationInformation {
        Boost?: number;
        MatchType?: Types.ReordingRuleMatchType;
        MatchValue: string;
    }

    /**
     * Related Item
     */
    interface RelatedItem {
        IconUrl: string;
        ItemId: number;
        ListId: string;
        Title: string;
        Url: string;
        WebId: string;
    }

    /**
     * Render List Context Menu Data Parameters
     */
    interface RenderListContextMenuDataParameters {
        CascDelWarnMessage: string;
        CustomAction: string;
        Field: string;
        ID: string;
        InplaceFullListSearch: string;
        InplaceSearchQuery: string;
        IsCSR: string;
        IsXslView: string;
        ItemId: string;
        ListViewPageUrl: string;
        OverrideScope: string;
        RootFolder: string;
        View: string;
        ViewCount: string;
    }

    /**
     * Render List Data Override Parameters
     */
    interface RenderListDataOverrideParameters {
        CascDelWarnMessage: string;
        CustomAction: string;
        DrillDown: string;
        Field: string;
        FieldInternalName: string;
        Filter: string;
        FilterData: string;
        FilterData1: string;
        FilterData2: string;
        FilterData3: string;
        FilterData4: string;
        FilterData5: string;
        FilterData6: string;
        FilterData7: string;
        FilterData8: string;
        FilterData9: string;
        FilterData10: string;
        FilterField: string;
        FilterField1: string;
        FilterField2: string;
        FilterField3: string;
        FilterField4: string;
        FilterField5: string;
        FilterField6: string;
        FilterField7: string;
        FilterField8: string;
        FilterField9: string;
        FilterField10: string;
        FilterFields: string;
        FilterFields1: string;
        FilterFields2: string;
        FilterFields3: string;
        FilterFields4: string;
        FilterFields5: string;
        FilterFields6: string;
        FilterFields7: string;
        FilterFields8: string;
        FilterFields9: string;
        FilterFields10: string;
        FilterLookupId: string;
        FilterLookupId1: string;
        FilterLookupId2: string;
        FilterLookupId3: string;
        FilterLookupId4: string;
        FilterLookupId5: string;
        FilterLookupId6: string;
        FilterLookupId7: string;
        FilterLookupId8: string;
        FilterLookupId9: string;
        FilterLookupId10: string;
        FilterOp: string;
        FilterOp1: string;
        FilterOp2: string;
        FilterOp3: string;
        FilterOp4: string;
        FilterOp5: string;
        FilterOp6: string;
        FilterOp7: string;
        FilterOp8: string;
        FilterOp9: string;
        FilterOp10: string;
        FilterValue: string;
        FilterValue1: string;
        FilterValue2: string;
        FilterValue3: string;
        FilterValue4: string;
        FilterValue5: string;
        FilterValue6: string;
        FilterValue7: string;
        FilterValue8: string;
        FilterValue9: string;
        FilterValue10: string;
        FilterValues: string;
        FilterValues1: string;
        FilterValues2: string;
        FilterValues3: string;
        FilterValues4: string;
        FilterValues5: string;
        FilterValues6: string;
        FilterValues7: string;
        FilterValues8: string;
        FilterValues9: string;
        FilterValues10: string;
        GroupString: string;
        HasOverrideSelectCommand: string;
        ID: string;
        InplaceFullListSearch: string;
        InplaceSearchQuery: string;
        IsCSR: string;
        IsGroupRender: string;
        IsXslView: string;
        ListViewPageUrl: string;
        OverrideScope: string;
        OverrideSelectCommand: string;
        PageFirstRow: string;
        PageLastRow: string;
        RootFolder: string;
        SortDir: string;
        SortDir1: string;
        SortDir2: string;
        SortDir3: string;
        SortDir4: string;
        SortDir5: string;
        SortDir6: string;
        SortDir7: string;
        SortDir8: string;
        SortDir9: string;
        SortDir10: string;
        SortField: string;
        SortField1: string;
        SortField2: string;
        SortField3: string;
        SortField4: string;
        SortField5: string;
        SortField6: string;
        SortField7: string;
        SortField8: string;
        SortField9: string;
        SortField10: string;
        SortFields: string;
        SortFieldValues: string;
        View: string;
        ViewCount: string;
        ViewId: string;
        WebPartId: string;
    }

    /**
     * Render List Data Parameters
     */
    interface RenderListDataParameters {
        AllowMultipleValueFilterForTaxonomyFields: boolean;
        DatesInUtc: boolean;
        ExpandGroups: boolean;
        FirstGroupOnly: boolean;
        FolderServerRelativeUrl: string;
        OverrideViewXml: string;
        Paging: string;
        RenderingOptions: number;
        ViewXml: string;
    }

    /**
     * Render List Filter Data Parameters
     */
    interface RenderListFilterDataParameters {
        ExcludeFieldFilteringHtml: boolean;
        FieldInternalName: string;
        OverrideScope: string;
        ProcessQStringToCAML: string;
        ViewId: string;
    }

    /**
     * Resource Path
     */
    interface ResourcePath {
        DecodedUrl: string;
    }

    /**
     * Role Definition Creation Information
     */
    interface RoleDefinitionCreationInformation {
        BasePermissions: BasePermissions;
        Description: string;
        Name: string;
        Order: number;
    }

    /**
     * Search Request
     */
    interface SearchRequest {
        BlockDedupeMode?: number;

        /** A Boolean value that specifies whether to perform result type processing for the query. */
        BypassResultTypes?: boolean;

        /** The type of the client that issued the query. */
        ClientType?: string;
        
        /** The managed properties that are used to determine how to collapse individual search results. Results are collapsed into one or a specified number of results if they match any of the individual collapse specifications. Within a single collapse specification, results are collapsed if their properties match all individual properties in the collapse specification. */
        CollapseSpecification?: string;

        /** The locale ID (LCID) for the query (see Locale IDs Assigned by Microsoft). */
        Culture?: number;

        /** The preferred number of characters to display in the hit-highlighted summary generated for a search result. */
        DesiredSnippetLength?: number;

        /** A Boolean value that specifies whether the query uses the FAST Query Language (FQL). */
        EnableFql?: boolean;

        /** A Boolean value that specifies whether the result tables that are returned for the result block are mixed with the result tables that are returned for the original query. */
        EnableInterleaving?: boolean;

        /** A Boolean value that specifies whether the exact terms in the search query are used to find matches, or if nicknames are used also. */
        EnableNicknames?: boolean;

        /** A Boolean value that specifies whether the phonetic forms of the query terms are used to find matches. */
        EnablePhonetic?: boolean;
 
        /** A Boolean value that specifies whether the hit highlighted properties can be ordered. */
        EnableOrderingHitHighlightedProperty?: boolean;

        /** A Boolean value that specifies whether to enable query rules for the query. */
        EnableQueryRules?: boolean;

        /** A Boolean value that specifies whether to sort search results. */
        EnableSorting?: boolean;

        /** A Boolean value that specifies whether stemming is enabled. */
        EnableStemming?: boolean;
        
        /** A Boolean value that specifies whether to return block rank log information in the BlockRankLog property of the interleaved result table. A block rank log contains the textual information on the block score and the documents that were de-duplicated. */
        GenerateBlockRankLog?: boolean;

        /** The additional query terms to append to the query. */
        HiddenConstraints?: string;

        /** The number of properties to show hit highlighting for in the search results. */
        HitHighlightedMultivaluePropertyLimit?: number;

        /** The properties to highlight in the search result summary when the property value matches the search terms entered by the user. */
        HithighlightedProperties?: Results.String;

        /** The maximum number of characters to display in the hit-highlighted summary generated for a search result. */
        MaxSnippetLength?: number;

        QLSQuerySession?: string;

        /** The GUID for the user who submitted the search query. */
        PersonalizationData?: string;

        /** A Boolean value that specifies whether to return best bet results for the query. */
        ProcessBestBets?: boolean;

        /** A Boolean value that specifies whether to return personal favorites with the search results. */
        ProcessPersonalFavorites?: boolean;
        
        /** Additional properties for the query. */
        Properties?: Results.KeyValue;

        /** Custom tags that identify the query. You can specify multiple query tags, separated by semicolons. */
        QueryTag?: string;

        /** A string that contains the text that replaces the query text, as part of a query transform. */
        QueryTemplate?: string;

        /** The location of the queryparametertemplate.xml file. This file is used to enable anonymous users to make Search REST queries. */
        QueryTemplatePropertiesUrl?: string;

        /** A string that contains the text for the search query */
        Querytext: string;

        /** The ID of the ranking model to use for the query. */
        RankingModelId?: string;

        /** The set of refinement filters used when issuing a refinement query. For GET requests, the RefinementFilters parameter is specified as an FQL filter. For POST requests, the RefinementFilters parameter is specified as an array of FQL filters. */
        RefinementFilters?: Results.String;

        /** The set of refiners to return in a search result. */
        Refiners?: string;

        /** Special rules for reordering search results. These rules can specify that documents matching certain conditions are ranked higher or lower in the results. */
        ReorderingRules?: Array<ReorderingRulesCreationInformation>

        /** The URL for the search results page. */
        ResultsUrl?: string;

        /** The maximum number of rows overall that are returned in the search results. Compared to RowsPerPage, RowLimit is the maximum number of rows returned overall. */
        RowLimit?: number;

        /** The maximum number of rows to return per page. Compared to RowLimit, RowsPerPage refers to the maximum number of rows to return per page, and is used primarily when you want to implement paging for search results. */
        RowsPerPage?: number;

        /** The managed properties to return in the search results. To return a managed property, set the property's retrievable flag to true in the search schema. */
        SelectProperties?: Results.String;

        /** The list of properties by which the search results are ordered. */
        SortList?: Array<any>;

        /** The result source ID to use for executing the search query. */
        SourceId?: string;

        /** The first row that is included in the search results that are returned. You use this parameter when you want to implement paging for search results. */
        StartRow?: number;

        /** The number of characters to display in the result summary for a search result. */
        SummaryLength?: number;

        /** The amount of time in milliseconds before the query request times out. The default value is 30000. */
        Timeout?: number;

        TimeZoneId?: number;

        TotalRowsExactMinimum?: number;

        /** A Boolean value that specifies whether duplicate items are removed from the results. */
        TrimDuplicates?: boolean;

        TrimDuplicatesIncludeId?: boolean;

        /** The locale identifier (LCID) of the user interface (see Locale IDs Assigned by Microsoft). */
        UIlanguage?: number;

        UseOLSQuery?: number;
    }

    /**
     * Search Result
     */
    interface SearchResult {
        ElapsedTime?: number;
        PrimaryQueryResult: QueryResult;
        Properties: Results.KeyValue;
        SecondaryQueryResults: Results.QueryResult;
        SpellingSuggestion: string;
        TriggeredRules?: Results.String;
    }

    /**
     * Search Suggestion
     */
    interface SearchSuggestion {
        ClientType?: string;

        /** The locale ID (LCID) for the query (see Locale IDs Assigned by Microsoft). */
        Culture?: number;

        /** A Boolean value that specifies whether stemming is enabled. */
        EnableStemming?: boolean;

        /** A Boolean value that specifies whether to turn on query rules for this query. */
        EnableQueryRules?: boolean;

        /** A Boolean value that specifies whether to capitalize the first letter in each term in the returned query suggestions. */
        fCapitalizeFirstLetters?: boolean;

        /** A Boolean value that specifies whether to hit-highlight or format in bold the query suggestions. */
        fHitHighlighting?: boolean;

        /** A Boolean value that specifies whether to return query suggestions for prefix matches. */
        fPrefixMatchAllTerms?: boolean;

        /** A Boolean value that specifies whether to retrieve pre-query or post-query suggestions. */
        fPreQuerySuggestions?: boolean;

        /** The number of query suggestions to retrieve. Must be greater than zero (0). The default value is 5. */
        iNumberOfQuerySuggestions?: number;

        /** The number of personal results to retrieve. Must be greater than zero (0). The default value is 5. */
        iNumberOfResultSuggestions?: number;

        OLSQuerySession?: string;

        /** A string that contains the text for the search query */
        Querytext: string;

        /** A Boolean value that specifies whether to include people names in the returned query suggestions. */
        ShowPeopleNameSuggestions?: boolean;

        SourceId?: string;

        UseOLSQuery?: boolean;
    }

    /**
     * Shared User
     */
    interface SharedWithUser {
        Email: string;
        Name: string;
    }

    /**
     * Shared User Collection
     */
    interface SharedWithUserCollection {
        Items: Results.SharedWithUser;
    }

    /**
     * Sharing Link Information
     */
    interface SharingLinkInfo {
        Expiration: string;
        IsActive: boolean;
        LinkKind: number;
        Url: string;
    }

    /**
     * Simple Data Row
     */
    interface SimpleDataRow {
        Cells: Results.DataRow;
    }

    /**
     * Simple Data Table
     */
    interface SimpleDataTable {
        Rows: Results.KeyValue;
    }

    /**
     * Social Actor
     */
    interface SocialActor {
        AccountName: string;
        ActorType?: number;
        CanFollow?: boolean;
        ContentUri: string;
        EmailAddress: string;
        FollowedContentUri: string;
        Id: string;
        ImageUri: string;
        IsFollowed?: boolean;
        LibraryUri: string;
        Name: string;
        PersonSiteUri: string;
        Status?: number;
        StatusText: string;
        TagGuid?: string;
        Title: string;
        Uri: string;
    }

    /**
     * Social Attachment
     */
    interface SocialAttachment {
        AttachmentKind?: number;
        ClickAction: SocialAttachmentAction;
        ContentUri: string;
        Description: string;
        Height?: number;
        Length?: number;
        Name: string;
        PreviewHeight?: number;
        PreviewUri: string;
        PreviewWidth?: number;
        Uri: string;
        Width?: number;
    }

    /**
     * Social Attachment Action
     */
    interface SocialAttachmentAction {
        ActionKind?: number;
        ActionUri: string;
        Height?: number;
        Width?: number;
    }

    /**
     * Social Data Item
     */
    interface SocialDataItem {
        AccountName?: string;
        ItemType?: string;
        Text: string;
        Uri: string;
    }

    /**
     * Social Data Overlay
     */
    interface SocialDataOverlay {
        ActorIndexes?: Results.Number;
        Index?: number;
        Length?: number;
        LinkUri: string;
        OverlayType?: number;
    }

    /**
     * Social Exception Details
     */
    interface SocialExceptionDetails {
        InternalErrorCode?: number;
        InternalMessage: string;
        InternalStackTrace: string;
        InternalTypeName: string;
        Status?: number;
    }

    /**
     * Social Feed Options
     */
    interface SocialFeedOptions {
        MaxThreadCount?: number;
        NewerThan?: string;
        OlderThan?: string;
        SortOrder?: number;
    }

    /**
     * Social Feed
     */
    interface SocialFeed {
        Attributes?: number;
        NewestProcessed?: string;
        OldestProcessed?: string;
        Threads: Results.SocialThread;
        UnreadMentionCount?: number;
    }

    /**
     * Social Feed Manager
     */
    interface SocialFeedManager {
        Owner: SocialActor;
        PersonalSitePortalUri?: string;
    }

    /**
     * Social Following Manager
     */
    interface SocialFollowingManager {
        FollowedDocumentsUri?: string;
        FollowedSitesUri: string;
    }

    /**
     * Social Link
     */
    interface SocialLink {
        Text: string;
        Uri: string;
    }

    /**
     * Social Post
     */
    interface SocialPost {
        Attachment: SocialAttachment;
        Attributes?: number;
        AuthorIndex?: number;
        CreatedTime?: string;
        Id?: string;
        LikerInfo?: SocialPostActorInfo;
        ModifiedTime?: string;
        Overlays: Results.SocialDataOverlay;
        PostType?: number;
        PreferredImageUri: string;
        Source: SocialLink;
        Text: string;
    }

    /**
     * Social Post Actor Info
     */
    interface SocialPostActorInfo {
        IncludesCurrentUser?: boolean;
        Indexes?: Results.Number;
        TotalCount?: number;
    }

    /**
     * Social Post Creation Data
     */
    interface SocialPostCreationData {
        Attachment?: SocialAttachment;
        ContentItems?: Results.SocialDataItem;
        ContentText: string;
        DefinitionData?: SocialPostDefinitionData;
        SecurityUris?: Results.String;
        Source?: SocialLink;
        UpdateStatusText?: boolean;
    }

    /**
     * Social Post Definition Data
     */
    interface SocialPostDefinitionData {
        Items: Results.SocialPostDefinitionDataItem;
        Name: string;
    }

    /**
     * Social Post Definition Data Item
     */
    interface SocialPostDefinitionDataItem {
        AccountName: string;
        ItemType?: number;
        PlaceholderName: string;
        TagGuid?: string;
        Text: string;
        Uri: string;
    }

    /**
     * Social Post Reference
     */
    interface SocialPostReference {
        Digest: SocialThread;
        Post: SocialPost;
        ThreadId: string;
        ThreadOwnerIndex?: number;
    }

    /**
     * Social Rest Following Manager
     */
    interface SocialRestFollowingManager {
        FollowedDocumentsUri?: string;
        FollowedSitesUri: string;
        MyFollowedDocumentsUri: string;
        MyFollowedSitesUri: string;
        SocialActor: SocialActor;
    }

    /**
     * Social Rest Post Creation Data
     */
    interface SocialRestPostCreationData {
        ID: string;
        creationData: SocialPostCreationData;
    }

    /**
     * Social Thread
     */
    interface SocialThread {
        Actors: Results.SocialActor;
        Attributes?: number;
        Id: string;
        OwnerIndex?: number;
        PermaLink: string;
        PostReference: SocialPostReference;
        Replies: Results.SocialPost;
        RootPost: SocialPost;
        Status?: number;
        ThreadType?: number;
        TotalReplyCount?: number;
    }

    /**
     * Sort
     */
    interface Sort {
        Direction?: number;
        Property: string;
    }

    /**
     * SP Invitation Creation Result
     */
    interface SPInvitationCreationResult {
        Email: string;
        InvitationLink: string;
        Lcid: number;
    }

    /**
     * Special Term Result
     */
    interface SpecialTermResult {
        Description: string;
        IsVisualBestBet?: boolean;
        PiSearchResultId: string;
        RenderTemplateId: string;
        Title: string;
        Url: string;
    }

    /**
     * Special Term Results
     */
    interface SpecialTermResults {
        GroupTemplateId: string;
        ItemTemplateId: string;
        Properties: Results.KeyValue;
        ResultTitle: string;
        ResultTitleUrl: string;
    }

    /**
     * String Collection
     */
    interface StringCollection {
        Id4a81de82eeb94d6080ea5bf63e27023a?: string;
        Items: Results.String;
    }

    /**
     * Subweb Query
     */
    interface SubwebQuery {
        ConfigurationFilter: number;
        WebTemplateFilter: number;
    }

    /**
     * Tenant App Information
     */
    interface TenantAppInformation {
        AppPrincipalId: string;
        AppWebFullUrl: string;
        CreationTime: string;
        IconAbsoluteUrl: string;
        IconFallbackAbsoluteUrl: string;
        Id: string;
        LaunchUrl: string;
        PackageFingerprint: any;
        ProductId: string;
        RemoteAppUrl: string;
        Status: number;
        Title: string;
    }

    /**
     * Time Zone Information
     */
    interface TimeZoneInformation {
        Bias: number;
        DaylightBias: number;
        StandardBias: number;
    }

    /**
     * Upgrade Info
     */
    interface UpgradeInfo {
        ErrorFile: string;
        Errors: number;
        LastUpdated: string;
        LogFile: string;
        RequestDate: string;
        RetryCount: number;
        StartTime: string;
        Status: number;
        UpgradeType: number;
        Warnings: number;
    }

    /**
     * Usage Information
     */
    interface UsageInfo {
        Bandwidth: number;
        DiscussionStorage: number;
        Hits: number;
        Storage: number;
        StoragePercentageUsed: number;
        Visits: number;
    }

    /**
     * User Creation Information
     */
    interface UserCreationInformation {
        Email?: string;
        LoginName: string;
        Title?: string;
    }

    /**
     * User Custom Action Information
     */
    interface UserCustomActionCreationInformation {
        /** A value that specifies an implementation specific XML fragment that determines user interface properties of the custom action. */
        CommandUIExtension?: string;

        /** The description of the custom action. */
        Description?: string;

        /** A value that specifies an implementation-specific value that determines the position of the custom action in the page. */
        Group?: string;

        /** The URL of the image associated with the custom action. */
        ImageUrl?: string;

        /** The location of the custom action. */
        Location?: string;

        /** The name of the custom action. */
        Name: string;

        /** The value that specifies the identifier of the object associated with the custom action. */
        RegistrationId?: string;

        /** The value that specifies the type of object associated with the custom action. Represents an SP.UserCustomActionRegistrationType value. */
        RegistrationType?: Types.UserCustomActionRegistrationType;

        /** The value that specifies the permissions needed for the custom action. */
        Rights?: any;

        /** The value that specifies the ECMAScript to be executed when the custom action is performed. */
        ScriptBlock?: string;

        /** A value that specifies the URI of a file which contains the ECMAScript to execute on the page. */
        ScriptSrc?: string;

        /** The value that specifies an implementation-specific value that determines the order of the custom action that appears on the page. */
        Sequence?: number;

        /** The display title of the custom action. */
        Title?: string;

        /** The URL, URI, or ECMAScript (JScript, JavaScript) function associated with the action. */
        Url?: string;
    }

    /**
     * User Id Information
     */
    interface UserIdInfo {
        NameId: string;
        NameIdIssuer: string;
    }

    /**
     * View Creation Information
     */
    interface ViewCreationInformation {
        /** The new list view is a paged view. */
        Paged?: boolean;

        /** The new list view is a personal view. If the value is false, the new list view is a public view. */
        PersonalView?: boolean;

        /** The query for the new list view. */
        Query: string;

        /** The maximum number of list items that the new list view displays on a visual page of the list view. */
        RowLimit?: number;

        /** Option to set as default view. */
        SetAsDefaultView?: boolean;

        /** The name of the view. */
        Title: string;

        /** The view fields. */
        ViewFields: Results.String;

        /** The view type. */
        ViewTypeKind: Types.ViewType;
    }

    /**
     * Visualization
     */
    interface Visualization {
        DefaultScreen: VisualizationStyleSet;
        DetailView: VisualizationStyleSet;
        MediumScreen: VisualizationStyleSet;
        SmallScreen: VisualizationStyleSet;
        VisualizationAppInfo: VisualizationAppInfo;
        VisualizationType: number;
    }

    /**
     * Visualization App Information
     */
    interface VisualizationAppInfo {
        DesignUri: string;
        Id: string;
        RuntimeUri: string;
    }

    /**
     * Visualization Field
     */
    interface VisualizationField {
        InternalName: string;
        Style: string;
    }

    /**
     * Visualization Style Set
     */
    interface VisualizationStyleSet {
        AspectRatio: string;
        BackgroundColor: string;
        Fields: Results.VisualizationField;
        MinHeight: string;
    }

    /**
     * Web Creation Information
     */
    interface WebCreationInformation {
        /** The description of the new site. */
        Description?: string;

        /** The locale ID that specifies the language of the new site. */
        Language?: number;

        /** A value that specifies the title of the new site. */
        Title: string;

        /** The URL leaf name of the new site. The URL must not contain the following:
            The characters ~, ", #, %, &, *, :, <, >, ?, \, {, |, or }
            The string \x7f
            Consecutive . or / characters
            Starting ., /, or _ characters
            Ending . or / characters
        */
        Url: string;

        /** A value that specifies whether the new site will inherit permissions from its parent site. */
        UseSamePermissionsAsParentSite?: boolean;

        /** A value that specifies the name of the site template to be used for creating the new site. Use the GetAvailableWebTemplates method to get the names of available web templates on the site. */
        WebTemplate: string;
    }

    /**
     * Web Information Creation Information
     */
    interface WebInfoCreationInformation {
        Description?: string;
        Language?: number;
        Title: string;
        Url: string;
        UseUniquePermissions?: boolean;
        WebTemplate: string;
    }

    /**
     * Web Request Information
     */
    interface WebRequestInfo {
        Body: string;
        Headers: Results.KeyValue;
        StatusCode: number;
    }

    /**
     * Web Response Information
     */
    interface WebResponseInfo {
        Body: string;
        Headers: Results.KeyValue;
        StatusCode: number;
    }

    /**
     * Xml Schema Field Creation Information
     */
    interface XmlSchemaFieldCreationInformation {
        Options: number;
        SchemaXml: string;
    }
}