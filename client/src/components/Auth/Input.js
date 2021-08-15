import React from "react";
import { Grid, TextField, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Input = ({ half,name,handleChange,lable,autoFocus,type,handleShowPassword }) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={handleChange}
        verient="outlined"
        required
        fullWidth
        lable={lable}
        autoFocus={autoFocus}
        type={type}
        inputProps={name ==="password" &&{
            endAdonment:(
                <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} >
                        {type==="password"?<Visibility /> :<VisibilityOff/>}
                    </IconButton>
                </InputAdornment>
            )
        }}
      ></TextField>
    </Grid>
  );
};

export default Input;
