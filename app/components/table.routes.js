import { provideRouter } from '@angular/router';

import { TableComponent } from './table-component/table.component';

export let routes = [
  { path: '', component: TableComponent, terminal: true },
  { path: ':status', component: TableComponent }
];

export let routeProvider = provideRouter(routes);
