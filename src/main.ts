import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MyAppModule } from './my-app/my-app.module';

platformBrowserDynamic()
  .bootstrapModule(MyAppModule)
  .catch((err) => console.error(err));
