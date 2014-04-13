

//Divide x / y

UI.registerHelper('picFacebook', function(facebookId) {
  var user = Meteor.user();
  if (user&& user.profile && user.profile.id) {
    return 'http://graph.facebook.com/'+facebookId + '/picture/?width=200&height=200';
  } else {
    return 'images/profile-photo.jpg';
  }
});

Meteor.subscribe('events');


UI.registerHelper('clean', function(val) {
  return val.replace(/ /g, "");

});

UI.registerHelper('sub', function(val) {
  return val.substring(0,200);

});

UI.registerHelper('fromNow', function(val) {
  moment.lang('pt-br');
  return moment(val).fromNow();

});