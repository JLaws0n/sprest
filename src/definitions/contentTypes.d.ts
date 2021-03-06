declare module $REST.Types {
    /**
     * Content Types
     */
    interface IContentTypes extends IBase {
        /**
         * Properties
         */

        /** The content type collection. */
        results: Array<IContentType>;

        /**
         * Methods
         */

        /**
         * Adds a content type to the collection.
         * @param parameters - The content type creation information.
         */
        add(parameters:ComplexTypes.ContentTypeCreationInformation): IContentType;

        /**
         * Adds an existing content type to this collection.
         * @param contentTypeId - The content type id to add.
         */
        addAvailableContentType(contentTypeId): IContentType;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IContentTypes;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IContentTypes;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IContentTypes;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IContentTypes;

        /**
         * Gets a content type by id.
         * @param id - The content type id.
         */
        getById(id): IContentType;

        /**
         * Method to get the next set of results.
         */
        next(): IContentTypes;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:ComplexTypes.ODataQuery): IContentTypes;
    }
}
