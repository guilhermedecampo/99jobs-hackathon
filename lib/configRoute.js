//Router configuration
Meteor.startup(function () {

Router.configure({
  layoutTemplate: 'layout',
  yieldTemplates: {
    'header': { to: 'header' },
    'footer': { to: 'footer' }
  }
});

});
