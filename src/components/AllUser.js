import React from "react";
import {Table,TableRow,TableCell,TableBody,TableHead,makeStyles,Button} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles=makeStyles({
  table:{
    maxWidth:'100%',
    margin:'20px auto'
  },
  thead:{
    '&>*':{
      background:'#111',
      color:'white',
      fontSize:'20px'
    }
  },
  row:{
    '&>*':{fontSize:'16px'}
  }
})
const AllUser = ({items,isLoading,fetchError,handleDelete}) => {
  const classes=useStyles();
  return (
    <>
      <h2 className="lg-heading">Users Data</h2>
      {isLoading && <p className="error" style={{color:'green'}}>Data is Loading...</p>}
      {( fetchError) ? <p className="error">{fetchError}</p>
      :(<div className="wrapper">
          {
            items.length ? 
            (
              <Table className={classes.table}>
                <TableHead>
                  <TableRow className={classes.thead}>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone No</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items.map((item)=>(
                    <TableRow className={classes.row} key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.username}</TableCell>
                      <TableCell>{item.email}</TableCell>
                      <TableCell>{item.phone}</TableCell>
                      <TableCell>
                        <Button variant='contained' color='primary' style={{marginRight:'10px'}} component={Link} to={`/edit/${item.id}`}>Edit</Button>
                        <Button variant='contained' color='secondary' onClick={()=>handleDelete(item.id)}>Delete</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
           !isLoading && <p className="error">information is not available </p>
          )}
        </div>
      )}
    </>
  );
};

export default AllUser;
