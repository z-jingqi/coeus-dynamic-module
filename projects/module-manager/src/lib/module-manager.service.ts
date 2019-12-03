import { Injectable, Type } from '@angular/core';
import { ModuleManagerModule } from './module-manager.module';
import { COMMON_DEPS } from '../common-deps';

const SystemJs = (window as any).System;

export function createCoeusModule(config: {
  name: string,
  module: Type<any>,
  component: Type<any>
}) {
  return new CoeusModule(config.name, config.module, config.component);
}

export class CoeusModule {
  constructor(
    public name: string,
    public module: Type<any>,
    public component: Type<any>
  ) { }
}

@Injectable({
  providedIn: ModuleManagerModule
})
export class ModuleManagerService {

  depsDefined = false;

  constructor() { }

  defineDeps() {
    if (this.depsDefined) {
      return;
    }
    Object.keys(COMMON_DEPS).forEach(dep =>
      (window as any).define(dep, [], () => COMMON_DEPS[dep])
    );
    this.depsDefined = true;
  }

  loadModule(path: string): Promise<CoeusModule> {
    this.defineDeps();
    return SystemJs.import(path)
      .then((cModule: CoeusModule) => {
        if (cModule instanceof CoeusModule) {
          return Promise.resolve(cModule);
        } else {
          throw new TypeError('This module is not a valid coeus-module');
        }
      });
  }
}
