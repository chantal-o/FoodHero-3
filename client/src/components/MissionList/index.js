
/* eslint-disable no-script-url */
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';


const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function MissionList() {
  const classes = useStyles();
  const {missions}=this.props;
  return (
    <React.Fragment>
      <Title>Missions</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Item Name</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Donor Name</TableCell>
            <TableCell>Volunteer Name</TableCell>
            <TableCell>Recipient Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {missions.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.itemname}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.donorname}</TableCell>
              <TableCell>{row.volunteername}</TableCell>
              <TableCell>{row.recipientname}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}