import React from 'react';
import loadable from '@loadable/component'
import routers, {RouterParam} from '../router'
import {
  HashRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';

function ChildRouter(props: { cr: RouterParam }) {
  const { cr } = props
  let match = useRouteMatch();
  return <Switch>
    {cr?.children?.map((cr, index) => {
      if (cr.component) {
        const Component = loadable(cr.component)
        return <Route path={`${match.path}${cr.path}`} key={index}>
          <Component/>
        </Route>
      }
    })}
  </Switch>
}

function App() {
  return (
    <Router>
      <h1 style={{
        padding: '30px 20px 0'
      }}>给媳妇整点工具包</h1>
      {
        routers.map((it,  index) => {
          if (it.children) {
            return <ChildRouter cr={it}></ChildRouter>
          } else {
            if (it.component) {
              const Component = loadable(it.component)
              return <Route path={it.path} key={index}>
                <Component/>
              </Route>
            }
          }
        })
      }
    </Router>
  );
}

export default App;
