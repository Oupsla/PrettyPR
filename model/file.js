var FileUploadedFS = new FS.Store.FileSystem("fileUploaded", {path: Meteor.settings.public.meteor_env+"/prettyPrUpload"});

FileUploaded = new FS.Collection('FileUploaded', {
 stores: [FileUploadedFS ]
});

if (Meteor.isServer) {

  FileUploaded.allow({
    insert: function () {
      return true;
    },
    remove: function () {
      return true;
    },

    download: function () {
      return true;
    },
    update: function () {
      return true;
    }
  });

  Meteor.publish('FileUploaded', function() {
    return FileUploaded.find({});
  });



}
