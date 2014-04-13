Meteor.publish('events', function () {
  return Events.find();
});

//Publish null to show certain fields to the customer

Meteor.publish(null, function() {
  if (this.userId) {
   return Meteor.users.find(
     {_id: this.userId},
     {fields: {profile: 1, username: 1, emails: 1}});
  } else {
   this.ready();
  }
});