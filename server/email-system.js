//Email system

Meteor.startup(function () {
  process.env.MAIL_URL = 'smtp://postmaster%40genteboa.mailgun.org:rRwh4ZKh7Qoas0RctRijxMY3eYTU@smtp.mailgun.org:587';
});
