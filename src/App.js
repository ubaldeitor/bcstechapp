import React from 'react';
import  Home  from './components/main_page/home';
import  Nosotros  from './components/main_page/nosotros';
import  Servicios  from './components/main_page/servicios';
import  Productos  from './components/main_page/productos';
import Galeria  from './components/main_page/galeria';
import Contacto  from './components/main_page/contacto';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import './App.css';
import { Container } from '@material-ui/core';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <Container>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/nosotros" component={Nosotros} />
          <Route path="/servicios" component={Servicios} />
          <Route path="/productos" component={Productos} />
          <Route path="/galeria" component={Galeria} />
          <Route path="/contacto" component={Contacto} />
        </Switch>
        </BrowserRouter> 
        <Footer />
      </Container>
  );
}

export default App;
