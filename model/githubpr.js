GithubPr = new Mongo.Collection("githubPr");


if (Meteor.isServer) {

  GithubPr.allow({
    insert: function () {
      return true;
    },
    remove: function () {
      return true;
    },
    update: function () {
      return true;
    }
  });


  Meteor.publish('githubPr', function() {
    return GithubPr.find({});
  });

}
