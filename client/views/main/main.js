Template.main.rendered = function () {
  Session.set('numberCredits', '0');
};

Template.insideMain.rendered = function () {
  console.log('moment?');
  moment.lang('pt-br');
};

Template['main'].helpers({
  user:function () {
    return Meteor.users.find({_id:Meteor.userId()});
  },
  events:function () {
    console.log('moment?');
    moment.lang('pt-br');
    return Events.find();
  },
  number: function() {
    return Session.get('numberCredits');
  }

});

Template['main'].events({
  'click asdf': function(event, template) {
    Session.set('numberCredits', '1');
  },
});

