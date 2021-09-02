import React from "react";
import { Button,TextField } from '@material-ui/core';
import Categoria from '../../model/Categoria'

function CategoriaForm({create}){
  let id;
  let nome;
        return (
          <section>
            <h1>Cadastro Categoria</h1>
            <form  onSubmit={(e)=>{
              e.stopPropagation();
              e.preventDefault();
              create(new Categoria(id,nome));
            }}>
            <TextField
            id="outlined-basic"
            label="Id"
            type="number"
            color="secondary"
            fullWidth
            margin="normal"
            onChange={(e)=> id = e.target.value}
          />
            <TextField
              id="standard-basic"
              label="Nome"
              color="secondary"
              fullWidth
              margin="normal"
              onChange ={(e)=>nome = e.target.value}
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
 
export default CategoriaForm;