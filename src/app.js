export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'dynamicform'], name: 'dynamicform',      moduleId: 'dynamicform',      nav: true, title: 'Dynamic Form' }

    ]);

    //config.options.pushState = true;

    this.router = router;
  }
}
