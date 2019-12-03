/*
 * Public API Surface of module-a
 */
import { createCoeusModule } from 'module-manager';
import { ModuleAComponent } from './lib/module-a.component';
import { ModuleAModule } from './lib/module-a.module';

export default createCoeusModule({
    name: 'module-a',
    module: ModuleAModule,
    component: ModuleAComponent
});
