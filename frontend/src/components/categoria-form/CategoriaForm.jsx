import { Component } from "react";
import { Button,TextField } from '@material-ui/core';

class CategoriaForm extends Component {
    render() { 
        return (
          <section>
            <h1>Cadastro Categoria</h1>
            <form>
            <TextField
              id="standard-basic"
              label="Id"
              color="secondary"
              fullWidth
              margin="normal"
              type="number"
            />
            <TextField
              id="standard-basic"
              label="Nome"
              color="secondary"
              fullWidth
              margin="normal"
            />
            <TextField
              id="standard-basic"
              label="Descrição"
              color="secondary"
              fullWidth
              margin="normal"
            />
            <Button
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