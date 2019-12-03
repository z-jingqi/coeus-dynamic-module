import { Injectable, Compiler, Injector } from '@angular/core';
import { ModuleManagerService } from 'module-manager';

@Injectable({
  providedIn: 'root'
})
export class ModuleLoaderService {

  constructor(
    private modulemanagerService: ModuleManagerService,
    private compiler: Compiler,
    private injector: Injector
  ) { }

  async loadModule(name: string) {
    const path = `assets/modules/${name}/${name}.umd.min.js`;
    const coeusModule = await this.modulemanagerService.loadModule(path);
    this.compiler.compileModuleAndAllComponentsSync(coeusModule.module);
    return coeusModule;
  }
}
