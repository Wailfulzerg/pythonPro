import React from 'react'
import './App.css';
import router from './router'

import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import { ProjectDetailView } from './views'


const NotFound404 = ({ location }) => {
  return (
    <div>
      <h1>Страница по адресу '{location.pathname}' не найдена</h1>
    </div>
  )
}

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {router.paths.map(path => (
            <Route exact path={path.path} component={path.view} />
             ))}
          <Route path="/projects/:id">
            <ProjectDetailView  />
          </Route>
          <Redirect from='/' to={router.paths[0]['path']} />
          <Route component={NotFound404} />
        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
