import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleRemoteComponent } from './module-remote.component';

const routes: Routes = [
    {
        path: '',
        component: ModuleRemoteComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModuleRemoteRoutingModule { }
