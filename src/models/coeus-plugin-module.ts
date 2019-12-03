import { NgModuleFactory, Type, Injector } from '@angular/core';

export class CoeusPluginModule {
    moduleFactory: NgModuleFactory<any>;
    componet: Type<any>;
    injector: Injector;
    name: string;
}
