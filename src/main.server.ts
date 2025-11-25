import { platformServer } from '@angular/platform-server';
import { AppServerModule } from './app/app.module.server';

const bootstrap = () => platformServer().bootstrapModule(AppServerModule);

export default bootstrap;
