declare module $REST.Types {
    /**
     * Role Definitions
     */
    interface IRoleDefinitions extends IBase {
        /**
         * Properties
         */

        /** The role definition collection */
        results: Array<IRoleDefinition>;

        /**
         * Methods
         */

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): IRoleDefinitions;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): IRoleDefinitions;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): IRoleDefinitions;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): IRoleDefinitions;

        /**
         * Gets the role definition with the specified ID from the collection.
         * @param roleDefId - The ID of the role definition that defines the permissions to assign.
         */
        getById(roleDefId): IRoleDefinition;

        /**
         * Gets the role definition with the specified name.
         * @param name -
         */
        getByName(name): IRoleDefinition;

        /**
         * Gets the role definition with the specified role type.
         * @param roleType - The RoleTypeKind of the role definition.
         */
        getByType(roleType:$REST.Types.RoleType): IRoleDefinition;

        /**
         * Method to get the next set of results.
         */
        next(): IRoleDefinitions;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:ComplexTypes.ODataQuery): IRoleDefinitions;
    }
}
