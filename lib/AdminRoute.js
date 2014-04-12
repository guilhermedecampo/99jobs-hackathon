var AdminController = FastRender.RouteController.extend({
  template: 'admin'
});

Router.map(function () {
  this.route('admin', {
    path :  '/admin',
    controller :  AdminController
  });
});

