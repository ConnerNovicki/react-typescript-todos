import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { BaseComponent } from '../Utils/base-component';
import { Route as ReactRoute } from 'react-router';
import { ROUTES, Route } from './routes';
import { MenuBar } from '../Shared';

export class AppRouter extends BaseComponent {
  private routes = ROUTES;

  renderRoutes() {
    return this.routes.map((route: Route, ind: number) => (
      <ReactRoute
        key={ind}
        path={route.path}
        component={route.component}
        exact={route.exact}
      />
    ));
  }

  render() {
    return (
      <BrowserRouter basename={'/'}>
        <div>
          <MenuBar/>
          {this.renderRoutes()}
        </div>
      </BrowserRouter>
    );
  }
}