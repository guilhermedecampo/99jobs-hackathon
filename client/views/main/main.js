Template['main'].helpers({
  user:function () {
    return Meteor.users.find();
  },
  events:function () {
    return Events.find();
  },

});

Template['main'].events({
});

