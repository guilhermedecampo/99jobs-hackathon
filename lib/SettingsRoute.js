var SettingsController = FastRender.RouteController.extend({
  template: 'settings'
});

Router.map(function () {
  this.route('settings', {
    path :  '/settings',
    controller :  SettingsController
  });
});

