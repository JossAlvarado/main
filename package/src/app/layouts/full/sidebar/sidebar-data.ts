import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Menu',
  },
  {
    displayName: 'Vendedores',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    navCap: 'BabyBlue',
  },
  {
    displayName: 'Agregar Producto',
    iconName: 'rosette',
    route: '/ui-components/badge',
  },
  {
    displayName: 'Agregar Usuarios',
    iconName: 'list',
    route: '/ui-components/lists',
  },
  {
    displayName: 'Vender Producto',
    iconName: 'layout-navbar-expand',
    route: '/ui-components/menu',
  },
  {
    displayName: 'Usuarios registrados',
    iconName: 'tooltip',
    route: '/ui-components/tooltips',
  },
  {
    navCap: 'Información',
  },
  {
    displayName: 'Información de la tienda',
    iconName: 'mood-smile',
    route: '/extra/icons',
  },
  {
    displayName: 'Terminos y Condiciones',
    iconName: 'aperture',
    route: '/extra/sample-page',
  },
];
