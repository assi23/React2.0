import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function createData(id, nome, categoria) {
  return { id, nome, categoria };
}

const rows = [
  createData(1, "cama box casal", "Cama/Mesa"),
  createData(2, "toalha rosto", "Banho"),
];

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.error.dark,
    color: theme.palette.common.white,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

class ProdutoList extends Component {
  render() {
    return (
      <section>
        <br />
        <TableContainer component={Paper}>
          <Table size="medium" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="right">Id</StyledTableCell>
                <StyledTableCell align="right">Nome</StyledTableCell>
                <StyledTableCell align="right">Categoria</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((e, k) => (
                <StyledTableRow key={k}>
                  <StyledTableCell component="th" scope="row">
                    {e.id}
                  </StyledTableCell>
                  <StyledTableCell align="right">{e.nome}</StyledTableCell>
                  <StyledTableCell align="right">{e.categoria}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    );
  }
}

export default ProdutoList;