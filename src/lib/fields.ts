/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Fields
    // The SPFieldCollection object.
    /*********************************************************************************************************************************/
    //export class Fields extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
    //}

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.fields = {
        // Adds a field to the field collection.
        add: {
            argNames: ["parameters"],
            metadataType: "SP.FieldCreationInformation",
            requestType: RequestType.PostWithArgsInBody
        },

        // Adds a secondary lookup field that depends on a primary lookup field for its relationship to the list where it gets its information.
        addDependentLookup: {
            argNames: ["displayname", "primarylookupfieldid", "showfield"],
            requestType: RequestType.PostWithArgs
        },

        // Creates a field based on the specified schema, Boolean value, and field options.
        createFieldAsXml: {
            argNames: ["parameters"],
            metadataType: "SP.XmlSchemaFieldCreationInformation",
            requestType: RequestType.PostWithArgsInBody
        },

        // Gets the field with the specified ID.
        getById: {
            argNames: ["id"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        // Returns the first Field object with the specified internal name or title from the collection.
        getByInternalNameOrTitle: {
            argNames: ["internalNameOrTitle"],
            requestType: RequestType.PostWithArgsValueOnly
        },

        // Returns the first field object in the collection based on the title of the specified field.
        getByTitle: {
            argNames: ["title"],
            requestType: RequestType.PostWithArgsValueOnly
        }
    };
}
