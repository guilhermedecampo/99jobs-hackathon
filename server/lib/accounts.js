// Fiber = Npm.require('fibers');

// function fiberSendEmail(id) {
//   Fiber(function () {
//     Accounts.sendEnrollmentEmail(id);
//   }).run();
// }

Meteor.users.after.insert(function (userId, doc) {
  // if user email is guilherme.decampo@gmail.com role is admin .. else user
  // if (doc.profile.role === 'admin') {
  //   Roles.addUsersToRoles(this._id, ['admin']);
  // } else if (doc.profile.role === 'user')  {
  //   Roles.addUsersToRoles(this._id, ['user']);
  //   // fiberSendEmail(this._id);
  // } else {
  //   Roles.addUsersToRoles(this._id, ['waitinglist']);
  // }
});


