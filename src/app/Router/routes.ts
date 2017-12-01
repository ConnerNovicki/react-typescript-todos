import ListView from '../ListView/component';
import { Menu2 } from '../Menu2';

export interface Route {
  path: string;
  component: any;
  exact?: boolean;
}

export const ROUTES: Route[] = [
  {
    path: '/',
    component: ListView,
    exact: true,
  },
  {
    path: '/menu2',
    component: Menu2,
  },
];