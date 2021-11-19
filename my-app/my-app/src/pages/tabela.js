import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styled from "styled-components";
import "./Styles/Style.css"


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function DenseTable() {

  return (
    <>
    <div className="exibirTabela">
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" >
        <TableHead>
          <TableRow>
            <TableCell ><span className="corBranca">Dessert (100g serving)</span></TableCell>
            <TableCell  align="right"><span className="corBranca">Calories</span></TableCell>
            <TableCell  align="right"><span className="corBranca">Fat&nbsp;(g)</span></TableCell>
            <TableCell  align="right"><span className="corBranca">Carbs&nbsp;(g)</span></TableCell>
            <TableCell  align="right"><span className="corBranca">Protein&nbsp;(g)</span></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }} 
             
            >
              <TableCell component="th" scope="row"><span className="corBranca">
                {row.name}</span>
              </TableCell>                         
              <TableCell align="right"><span className="corBranca">{row.calories}</span></TableCell>
              <TableCell align="right"><span className="corBranca">{row.fat}</span></TableCell>
              <TableCell align="right"><span className="corBranca">{row.carbs}</span></TableCell>
              <TableCell align="right"><span className="corBranca">{row.protein}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
      </>
  );
}

