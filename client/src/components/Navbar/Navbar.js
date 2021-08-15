import React from "react";
import {Link} from 'react-router-dom'
import { AppBar, Typography ,Toolbar, Button, Avatar} from "@material-ui/core";
import moments from "../../images/moments.svg";
import useStyles from "./style";



const Navbar = () => {
    const classes = useStyles()
    
    const user = null


  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
      <Typography component={Link} className={classes.heading} variant="h2" align="center">
        Moments
      </Typography>
      <img className={classes.image} src={moments} alt="memories" height="60" />
        </div>
         <Toolbar className={classes.toolbar}>
            {user?(
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} veriant='h6' >{user.result.name}</Typography>
                    <Button variant="contained" className={classes.logout} color="secondary" >Logout</Button>
                </div>
            ):(
                <Button component={Link} to="/auth" variant="contained" color="primary"></Button>
            )

            }
         </Toolbar>
    </AppBar>
  );
};

export default Navbar;
