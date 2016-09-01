/// <reference path="../base.d.ts" />
module $REST {
    /*********************************************************************************************************************************/
    // Attachment Files
    // The SPAttachmentCollection object.
    /*********************************************************************************************************************************/
    //export class AttachmentFiles extends Base {
        /*********************************************************************************************************************************/
        // Constructor
        /*********************************************************************************************************************************/
    //}

    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.attahmentfiles = {
        // Adds the attachment that is represented by the specified file name and byte array to the list item.
        add: {
            argNames: ["name"],
            requestType: RequestType.PostWithArgs
        },
    };

    //        { name: "addFile", "function": function (file) { var thisObj = this; var promise = new Promise(); window["dev"].getFileInfo(file).done(function (name, buffer) { if (name && buffer) { thisObj.add(name, buffer).done(function (file) { promise.resolve(file); }); } else { promise.resolve(); } }); return promise; } },
}
