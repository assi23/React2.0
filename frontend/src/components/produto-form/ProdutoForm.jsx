import { Component } from "react";
import { Button, TextField } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const list = [{"nome":"Cama/Mesa"},{"nome":"Banho"}]

class ProdutoForm extends Component {
  render() {
    return (
      <section>
        <form>
          <h1>Cadastro Produto</h1>
          <TextField
            id="outlined-basic"
            label="Id"
            type="number"
            variant="outlined"
            color="secondary"
            fullWidth
            margin="normal"
          />
          <TextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            color="secondary"
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth color="secondary">
        <InputLabel id="categoria">Selecione a categoria</InputLabel>
        <Select
          labelId="categoria"
          id="selecCategoria"
        >
          {list.map((e,k) => (
            <MenuItem key={k} value={e.nome}>
              {e.nome}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
          <br /><br />
          <Button variant="outlined" color="secondary" fullWidth>
            Salvar
          </Button>
        </form>
      </section>
    );
  }
}

export default ProdutoForm;
