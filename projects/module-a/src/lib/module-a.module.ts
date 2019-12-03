import { NgModule } from '@angular/core';
import { ModuleAComponent } from './module-a.component';
import { ModuleARoutingModule } from './module-a-routing.module';


@NgModule({
  declarations: [ModuleAComponent],
  imports: [
    ModuleARoutingModule
  ],
  exports: [ModuleAComponent]
})
export class ModuleAModule { }
