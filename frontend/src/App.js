import './assets/css/App.css';
import { Component, Fragment } from 'react';
import CategoriaForm from './components/categoria-form';
import {Container} from '@material-ui/core';
import CategoriaList from './components/categoria-list';
import ProdutoForm from './components/produto-form';
import ProdutoList from './components/produto-list';
import ProdutoRepository from './repository/ProdutoRepository'
import CategoriaRepository from './repository/CategoriaRepository'

class App extends Component {
  repo;
  repoC;
  constructor(){
    super();
    this.repo = new ProdutoRepository();
    this.repoC = new CategoriaRepository();
  }
  render(){
    return (
      <Fragment>
        <Container maxWidth="sm">
          <ProdutoForm create={this.repo.create.bind(this.repo)} repo={this.repoC}/>
        </Container>
        <Container maxWidth="sm">
          <ProdutoList repo={this.repo}/>
        </Container>
        <Container maxWidth="sm">
          <CategoriaForm create={this.repoC.create.bind(this.repoC)} repo={this.repoC}/>
        </Container>
        <Container maxWidth="sm">
          <CategoriaList repo={this.repoC}/>
        </Container>
      </Fragment>
     )
  }
}

export default App;
