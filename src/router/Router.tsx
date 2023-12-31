import { memo, FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Login } from '../components/pages/Login';
import { homeRoutes } from './HomeRoutes';
import { Page404 } from '../components/pages/Page404';
import { HeaderLayout } from '../components/HeaderLayout';
import { LoginUserProvider } from '../providers/LoginUserProvider';

export const Router: FC = memo(() => {
  return (
    <Switch>
      <LoginUserProvider>
        <Route exact path='/react-practice-user-management'>
          <Login />
        </Route>
        <Route
          path='/react-practice-user-management/home'
          render={({ match: { url } }) => (
            <Switch>
              {homeRoutes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  <HeaderLayout>{route.children}</HeaderLayout>
                </Route>
              ))}
            </Switch>
          )}
        />
      </LoginUserProvider>
      <Route path='*'>
        <Page404 />
      </Route>
    </Switch>
  );
});
