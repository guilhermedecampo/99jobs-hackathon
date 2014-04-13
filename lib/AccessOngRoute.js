var AccessOngController = FastRender.RouteController.extend({
  template: 'accessOng'
});

Router.map(function () {
  this.route('accessOng', {
    path :  '/app/accessong',
    controller :  AccessOngController
  });
});

