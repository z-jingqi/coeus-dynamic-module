import { Component, Injector, Compiler } from '@angular/core';
import { ModuleManagerService } from 'module-manager';
import { ModuleLoaderService } from './services/module-loader.service';
import { ModuleRouterService } from './services/module-router.service';
import { Router } from '@angular/router';

@Component({
  selector: 'coeus-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coeus-dynamic-module';

  constructor(
    private moduleLoaderService: ModuleLoaderService,
    private moduleRouterService: ModuleRouterService,
    private router: Router
  ) { }

  async loadModule() {
    const coeusModule = await this.moduleLoaderService.loadModule('module-a');
    this.moduleRouterService.createRegisterModuleRoute(coeusModule);
  }

  nav() {
    this.router.navigate(['module-a']);
  }
}
