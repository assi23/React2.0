import { useState } from "react";
import Produto from '../../model/Produto'
import { Button, TextField } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function ProdutoForm({create,repo}){
  let id = 1;
  let nome;
  let categoria;
  let [list,setList] = useState([]);
  repo.inscrever(setList)
    return (
      <section>
        <h1>Cadastro Produto</h1>
        <form onSubmit={(e)=>{
          e.stopPropagation();
          e.preventDefault();
          create(new Produto(id,nome,categoria))
          document.getElementById("id").value = '';
          document.getElementById("nome").value = '';
          nome = "";
          id+=1;
        }}> 
          <TextField
            id="id"
            label="Id"
            type="number"
            variant="outlined"
            color="secondary"
            fullWidth
            margin="normal"
            onChange={(e)=> id = e.target.value}
            disabled
          />
          <TextField
            id="nome"
            label="Nome"
            variant="outlined"
            color="secondary"
            fullWidth
            margin="normal"
            onChange={(e)=> nome = e.target.value}
          />
          <FormControl fullWidth color="secondary">
        <InputLabel id="Categoria">Selecione a categoria</InputLabel>
        <Select
          labelId="Categoria"
          id="selecCategoria"
          onChange={(e)=> categoria = e.target.value}
        >
          {list.map((e,k) => (
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

export default ProdutoForm;
