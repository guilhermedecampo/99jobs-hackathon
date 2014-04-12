var ProfileController = FastRender.RouteController.extend({
  template: 'profile'
});

Router.map(function () {
  this.route('profile', {
    path :  'profile/:username',
    controller :  ProfileController
  });
});

