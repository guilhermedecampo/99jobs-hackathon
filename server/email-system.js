//Email system

Meteor.startup(function () {
  process.env.MAIL_URL='smtp://mailgun:465/';
});
