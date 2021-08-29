import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "24px",
    '& .MuiTextField-root': {
      margin: theme.spacing(1, 0),
      width: "100%",
    },
  },
}));

export default function Compose() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField id="to" label="To" />
      </div>
      <div>
        <TextField id="subject" label="Subject" />
      </div>
      <div>
        <TextField
          id="filled-textarea"
          label="Body"
          placeholder="Body"
          multiline
          variant="filled"
          fullWidth
        />
      </div>
      <Button 
        variant="contained" 
        color="primary"
        style={{float: 'right'}}
      >
        Send
      </Button>
    </form>
  );
}