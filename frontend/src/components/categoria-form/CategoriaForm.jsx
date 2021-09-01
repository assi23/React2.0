import { Component } from "react";
import { Button,TextField } from '@material-ui/core';
import Categoria from '../../model/Categoria'

class CategoriaForm extends Component {
  id;
  descricao;
  handleId(event){
    this.id = event.target.value;
  }
  handleNome(event){
    this.nome = event.target.value;
  }
  handleSubit(event){
    event.stopPropagation();
    event.preventDefault();
    let cat = new Categoria();
    cat.nome = this.nome;
    this.props.create(cat);
  }
    render() { 
        return (
          <section>
            <h1>Cadastro Categoria</h1>
            <form  onSubmit={this.handleSubit.bind(this)}>
            <TextField
            id="outlined-basic"
            label="Id"
            type="number"
            color="secondary"
            fullWidth
            margin="normal"
            onChange={this.handleId.bind(this)}
          />
            <TextField
              id="standard-basic"
              label="Nome"
              color="secondary"
              fullWidth
              margin="normal"
              onChange = {this.handleNome.bind(this)}
            />
            <Button
              type =  "submit"
              variant="outlined"
              color="secondary"
              margin="normal"
              fullWidth
            >
              Salvar
            </Button>
          </form>
          </section>
        );}
}
 
export default CategoriaForm;