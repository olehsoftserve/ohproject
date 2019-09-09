import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//import { classes } from 'istanbul-lib-coverage';



const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor:'#000',
    },
    wrapper:{
        color: '#fff',
    },
    active:{
        backgroundColor: '#F5C518',
    }

  }));

export default props => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    function handleChange(event, newValue) {
    setValue(newValue);
  }

    return (
        <Paper className ={classes.root} >
             <Tabs classes={{ root: classes.wrapper, indicator: classes.active }} 
             value = {value}
             onChange={handleChange} 
             centered 
             >
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
             </Tabs>
      </Paper>)
}