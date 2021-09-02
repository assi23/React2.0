import './assets/css/App.css';
import { useState, Fragment } from 'react';
import CategoriaForm from './components/categoria-form';
import {Container} from '@material-ui/core';
import CategoriaList from './components/categoria-list';
import ProdutoForm from './components/produto-form';
import ProdutoList from './components/produto-list';
import ProdutoRepository from './repository/ProdutoRepository'
import CategoriaRepository from './repository/CategoriaRepository'

function App(){
  let [repo] = useState(new ProdutoRepository());
  let [repoC] = useState(new CategoriaRepository());
    return (
      <Fragment>
        <Container maxWidth="sm">
          <ProdutoForm create={repo.create.bind(repo)} repo={repoC}/>
        </Container>
        <Container maxWidth="sm">
          <ProdutoList repo={repo}/>
        </Container>
        <Container maxWidth="sm">
          <CategoriaForm create={repoC.create.bind(repoC)} repo={repoC}/>
        </Container>
        <Container maxWidth="sm">
          <CategoriaList repo={repoC}/>
        </Container>
      </Fragment>
     )
  }

export default App;
