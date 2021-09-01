import { Component } from "react";
import Produto from '../../model/Produto'
import { Button, TextField } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class ProdutoForm extends Component {
  state = {list:[]}
  id;
  nome;
  categoria;
  atualizaSelect(list){
    this.setState({
      list : list
    })
  }
  componentDidMount(){
    this.props.repo.inscrever(this.atualizaSelect.bind(this))
}
  atualizaSelect(list){
    this.setState({
      list:list
    })
  }
  handleId(event){
    this.id = event.target.value;
  }
  handleNome(event){
    this.nome = event.target.value;
  }
  handleCategoria(event){
    this.categoria = event.target.value;
  }
  handleSubmit(event){
    event.stopPropagation();
    event.preventDefault();
    let prod = new Produto();
    prod.id = this.id;
    prod.nome = this.nome;
    prod.categoria = this.categoria;
    this.props.create(prod);
  }
  render() {
    return (
      <section>
        <h1>Cadastro Produto</h1>
        <form onSubmit={this.handleSubmit.bind(this)}> 
          <TextField
            id="outlined-basic"
            label="Id"
            type="number"
            variant="outlined"
            color="secondary"
            fullWidth
            margin="normal"
            onChange={this.handleId.bind(this)}
          />
          <TextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            color="secondary"
            fullWidth
            margin="normal"
            onChange={this.handleNome.bind(this)}
          />
          <FormControl fullWidth color="secondary">
        <InputLabel id="categoria">Selecione a categoria</InputLabel>
        <Select
          labelId="categoria"
          id="selecCategoria"
          onChange={this.handleCategoria.bind(this)}
        >
          {this.state.list.map((e,k) => (
            <MenuItem key={k} value={e.nome}>
              {e.nome}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
          <br /><br />
          <Button variant="outlined" color="secondary" fullWidth type="submit">
            Salvar
          </Button>
        </form>
      </section>
    );
  }
}

export default ProdutoForm;
