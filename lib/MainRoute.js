var MainController = FastRender.RouteController.extend({
  template: 'main'
});

Router.map(function () {
  this.route('main', {
    path :  '/app',
    controller :  MainController
  });
});

