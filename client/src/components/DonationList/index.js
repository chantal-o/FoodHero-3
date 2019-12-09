
/* eslint-disable no-script-url */
import React from 'react';
// import Link from '@material-ui/core/Link';
// import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Title from './Title';


// const useStyles = makeStyles(theme => ({
//   seeMore: {
//     marginTop: theme.spacing(3),
//   },
// }));

export default function DonationList(props) {
  // const classes = useStyles();
  const {donations}= props;
  console.log(donations);
  console.log("==============MEOW===================")
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Item Name</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Shelf Life</TableCell>
            <TableCell>Pickup Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {donations.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.itemname}</TableCell>
              <TableCell>{row.numberofunits}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.shelflife}</TableCell>
              <TableCell>{row.pickuptime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}