Template.main.rendered = function () {
  moment.lang('pt-br');
};

Template.insideMain.rendered = function () {
  moment.lang('pt-br');
};

Template['main'].helpers({
  user:function () {
    return Meteor.users.find();
  },
  events:function () {
    moment.lang('pt-br');
    return Events.find();
  },

});

Template['main'].events({
});

