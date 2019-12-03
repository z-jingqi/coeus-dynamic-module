import { NgModule } from '@angular/core';
import { ModuleRemoteComponent } from './module-remote.component';
import { ModuleRemoteRoutingModule } from './module-remote-routing.module';


@NgModule({
  declarations: [ModuleRemoteComponent],
  imports: [
    ModuleRemoteRoutingModule
  ],
  exports: [ModuleRemoteComponent]
})
export class ModuleRemoteModule { }
