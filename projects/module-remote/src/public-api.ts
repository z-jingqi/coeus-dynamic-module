/*
 * Public API Surface of module-remote
 */
import { ModuleRemoteComponent } from './lib/module-remote.component';
import { ModuleRemoteModule } from './lib/module-remote.module';
import { createCoeusModule } from 'module-manager';

export default createCoeusModule({
    name: 'module-remote',
    module: ModuleRemoteModule,
    component: ModuleRemoteComponent
});
