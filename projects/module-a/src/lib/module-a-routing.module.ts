import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleAComponent } from './module-a.component';

const routes: Routes = [
    {
        path: '',
        component: ModuleAComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModuleARoutingModule { }
