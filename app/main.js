import { bootstrap } from '@angular/platform-browser-dynamic';
import { routeProvider } from './components/table.routes';

import { TableStoreService } from './services/table-store.service';
import { AppComponent } from './components/app/app.component';

bootstrap(AppComponent, [
  TableStoreService,
  routeProvider,
  { provide: 'AUTHOR', useValue: 'Soós Gábor' }
]);
