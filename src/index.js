import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import Dog404 from './assets/img/saddog.gif'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/Categoria'



function Pagina404() {
  return (
    <div>
      Nothing to do here
      <img src={Dog404} alt="Sad dog"/>
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" component={Home} exact/>
    <Route path="/cadastro/video" component={CadastroVideo} />
    <Route path="/cadastro/Categoria" component={CadastroCategoria} />
    <Route component={Pagina404} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


