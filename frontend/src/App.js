import './assets/css/App.css';
import { Component, Fragment } from 'react';
import CategoriaForm from './components/categoria-form';
import {Container} from '@material-ui/core';
import CategoriaList from './components/categoria-list';

class App extends Component {
  render(){
    return (
      <Fragment>
        <Container maxWidth="sm">
          <CategoriaForm/>
          <CategoriaList/>
        </Container>
      </Fragment>
     )
  }
}

export default App;
