import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 350,
      },
    },
  }));

export class SignUpComponent extends React.Component {

    render(){
        return(
            <Grid container>
                <Grid item xs={12}>
                    <div>
                        <h2>Register</h2>
                        <form noValidate className={useStyles.root} autoComplete="off" method="post">
                         <TextField style={{paddingRight:10}}  id="filled-basic" label="First Name" variant="filled" />
                         <TextField id="filled-basic" label="Last Name" variant="filled" /> <br/>
                         <TextField style={{width:395, paddingTop:10}} id="filled-basic" label="Date of Birth" type="date" variant="filled" /> <br/>
                         <TextField style={{width:395, paddingTop:10}} id="filled-basic" label="Email" variant="filled" /> <br/>
                         <TextField style={{width:395, paddingTop:10, paddingBottom:15}} id="filled-basic" label="Password" variant="filled" type="password" /> <br/>
                         <Button variant="contained" color="primary">
                             <span style={{fontWeight:"bold"}}>Register</span>
                            </Button>
                        </form>
                    </div>
                </Grid>
            </Grid>
        )
    }
}

// export default SignUpComponent