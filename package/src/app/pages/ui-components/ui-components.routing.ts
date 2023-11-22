import { Routes } from '@angular/router';

// ui
import { AppBadgeComponent } from './badge/badge.component';
import { AppChipsComponent } from './chips/chips.component';
import { AppListsComponent } from './lists/lists.component';
import { AppMenuComponent } from './menu/menu.component';
import { AppTooltipsComponent } from './tooltips/tooltips.component';

export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        title:'Agregar producto',
        path: 'badge',
        component: AppBadgeComponent,
      },
      {
        title:'Vendedor',
        path: 'chips',
        component: AppChipsComponent,
      },
      {
        title:'Agregar ususario',
        path: 'lists',
        component: AppListsComponent,
      },
      {
        title:'Vender producto',
        path: 'menu',
        component: AppMenuComponent,
      },
      {
        title:'Usuarios',
        path: 'tooltips',
        component: AppTooltipsComponent,
      },
    ],
  },
];
