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

class CategoriaList extends Component {

  constructor(props){
    super(props);
    this.state = {
      list : []
    }
  }

  repo;

  componentDidMount(){
    this.repo = this.props.repo;
    this.setState({
      list  : this.repo.list()
    })
      this.repo.inscrever(this.getCat.bind(this))
  }
  componentWillUnmount(){
    this.repo.desinscrever(this.getCat.bind(this))
  }
  getCat(list){
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
                <StyledTableCell align="left">Nome</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.list.map((e, k) => (
                <StyledTableRow key={k}>
                  <StyledTableCell align="left">{e.nome}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    );
  }
}

export default CategoriaList;
