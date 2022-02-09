import { AppBar,Toolbar,makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyle=makeStyles({
    header:{
        backgroundColor:'#111',
        position:'static'
    },
    nav:{
        marginRight:'20px',
        textDecoration:'none',
        color:'white',
        padding:'2px 5px',
        fontSize:'20px',
        "&:hover":{
            color:'lightgreen',
            borderBottom:'2px solid green'
        }
    },
    container:{
        width:'100%',
        maxWidth:'1000px',
        margin:'auto'
    }
})

const NavBar = () => {
    const classes=useStyle();
    return (
      <AppBar className={classes.header}>
          <Toolbar className={classes.container}>
              <NavLink className={classes.nav} to='./'>Home</NavLink>
              <NavLink className={classes.nav} to='/allusers'>ALL Users</NavLink>
              <NavLink className={classes.nav} to='/adduser'>Add User</NavLink>
          </Toolbar>
      </AppBar>
  );
};

export default NavBar;

