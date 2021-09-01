import './assets/css/App.css';
import { Component, Fragment } from 'react';
import CategoriaForm from './components/categoria-form';
import {Container} from '@material-ui/core';
import CategoriaList from './components/categoria-list';
import ProdutoForm from './components/produto-form';
import ProdutoList from './components/produto-list';

class App extends Component {
  render(){
    return (
      <Fragment>
        <Container maxWidth="sm">
          <ProdutoForm/>
        </Container>
        <Container maxWidth="sm">
          <ProdutoList/>
        </Container>
        <Container maxWidth="sm">
          <CategoriaForm/>
        </Container>
        <Container maxWidth="sm">
          <CategoriaList/>
        </Container>
      </Fragment>
     )
  }
}

export default App;
