moment.lang('pt-br');

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

});

Template['main'].events({
});

