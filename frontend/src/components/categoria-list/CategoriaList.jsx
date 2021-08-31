import React, { Component } from "react";
import { withStyles} from '@material-ui/core/styles';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";



function createData(id, nome, descricao) {
  return {id,nome,descricao};
}

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.error.dark,
      color: theme.palette.common.white,
    },
  }))(TableCell);
  
const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.primary.main,
    },
  },
}))(TableRow);

const rows = [
  createData(1,"cama/mesa","produtos de cama e mesa")
];
class CategoriaList extends Component {
    render() {
        return (
        <section >
            <br/>
        <TableContainer component={Paper} >
          <Table
             size="medium" aria-label="a dense table"  
          >
            <TableHead>
              <TableRow>
              <StyledTableCell align="right">Id   </StyledTableCell>
              <StyledTableCell align="right">Nome   </StyledTableCell>
              <StyledTableCell align="right">Descrição   </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((e,k) => (
                <TableRow key={k}>
                  <TableCell align="right">{e.id}</TableCell>
                  <TableCell align="right">{e.nome}</TableCell>
                  <TableCell align="right">{e.descricao}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    );
  }
}

export default CategoriaList;
