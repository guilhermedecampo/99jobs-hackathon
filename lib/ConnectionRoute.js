var ConnectionController = FastRender.RouteController.extend({
  template: 'connection'
});

Router.map(function () {
  this.route('connection', {
    path :  '/connection/:conNumber',
    controller :  ConnectionController
  });
});

