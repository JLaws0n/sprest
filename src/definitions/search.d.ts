declare module $REST.Types {
    /**
     * Search
     */
    interface ISearch extends IBase {
        /**
         * Constructor
         * @param url - The optional url to execute the search against.
         * @param settings - The search settings.
         */
        new(url?:string, settings?:ComplexTypes.TargetInfoSettings): ISearch;

        /**
         * Methods
         */

        /** Method to execute a search query.
         * @param settings - The search request settings.
        */
        postquery(settings:ComplexTypes.SearchRequest) : SearchPostQueryResult;

        /** Method to execute a search query.
         * @param settings - The search request settings.
        */
        query(settings:ComplexTypes.SearchRequest) : SearchQueryResult;

        /** Method to execute a search suggestion.
         * @param settings - The search suggest settings.
        */
        suggest(settings:ComplexTypes.SearchSuggestion) : SearchSuggestionResult;
    }

    /**
     * Search Query Result
     */
    interface SearchQueryResult extends Types.IBase {
        query: ComplexTypes.SearchResult;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): SearchQueryResult;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): SearchQueryResult;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): SearchQueryResult;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): SearchQueryResult;
    }

    /**
     * Search Post Query Result
     */
    interface SearchPostQueryResult extends Types.IBase {
        postquery: ComplexTypes.SearchResult;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): SearchPostQueryResult;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): SearchPostQueryResult;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): SearchPostQueryResult;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): SearchPostQueryResult;
    }

    /**
     * Search Suggestion Result
     */
    interface SearchSuggestionResult extends Types.IBase {
        suggest: ComplexTypes.QuerySuggestionResults;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): SearchSuggestionResult;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): SearchSuggestionResult;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): SearchSuggestionResult;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): SearchSuggestionResult;
    }
}