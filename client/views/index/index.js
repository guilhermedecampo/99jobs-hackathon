Template['index'].helpers({
  eventsLanding: function() {
    return Events.find({},{limit:3});
  }
});

Template['index'].events({
});

