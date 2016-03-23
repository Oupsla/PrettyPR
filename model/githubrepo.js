GithubRepos = new Mongo.Collection("githubrepos");


if (Meteor.isServer) {

  GithubRepos.allow({
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


  Meteor.publish('GithubRepos', function() {
    return GithubRepos.find({});
  });

}