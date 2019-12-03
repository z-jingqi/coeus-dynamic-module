import { Injectable } from '@angular/core';
import { Router, Route } from '@angular/router';
import { CoeusModule } from 'module-manager';

@Injectable({
  providedIn: 'root'
})
export class ModuleRouterService {

  constructor(
    private router: Router
  ) { }

  get routes(): Route[] {
    const routesToReturn = this.router.config;
    return routesToReturn.filter(x => x.path !== '');
  }

  createRegisterModuleRoute(moduleRef: CoeusModule) {
    const route: Route = {
      path: moduleRef.name,
      loadChildren: () => moduleRef.module
    };
    this.registerRoute(route);
  }

  routeIsRegistered(path: string) {
    return this.router.config.filter(r => r.path === path).length > 0;
  }

  registerRoute(route: Route) {
    if (this.routeIsRegistered(route.path)) {
      return;
    }

    this.router.config.push(route);
    this.updateRouteConfig(this.router.config);
  }

  unRegisterRoute(path: string) {
    this.updateRouteConfig(this.router.config.filter(route => route.path !== path));
  }

  private updateRouteConfig(config) {
    this.router.resetConfig(config);
  }
}
