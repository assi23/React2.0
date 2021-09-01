import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
  repo;

  constructor(props){
    super(props);
    this.state = {
      list : []
    }
  }

  componentDidMount(){
    this.repo = this.props.repo;
    this.setState({
      list : this.repo.list()
    })
    this.repo.inscrever(this.getProd.bind(this))
  }
  componentWillUnmount(){
    this.repo.desinscrever(this.getProd.bind(this))
  }
  getProd(list){
    this.setState({
      list:list
    })
  }
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
              {this.state.list.map((e, k) => (
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
