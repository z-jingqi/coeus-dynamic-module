import { Component, OnInit } from '@angular/core';
import { ModuleRouterService } from 'src/app/services/module-router.service';
import { ModuleLoaderService } from 'src/app/services/module-loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'coeus-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    public moduleRouterService: ModuleRouterService,
    private moduleLoaderService: ModuleLoaderService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  async loadModule() {
    const coeusModule = await this.moduleLoaderService.loadModule('module-a');
    this.moduleRouterService.createRegisterModuleRoute(coeusModule);
  }

  nav(path: string) {
    this.router.navigate([path]);
  }

}
