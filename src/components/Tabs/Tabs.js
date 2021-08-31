import React from 'react';
import { useDispatch } from 'react-redux';
import { inbox, sent, compose } from './tabSlice';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        dispatch(inbox())
        break;
      case 1:
        dispatch(sent())
        break;
      case 2:
        dispatch(compose())
        break;
      default:
        dispatch(inbox())
    }
  };

  return (
    <Paper className={classes.root}>
      <div
        style={{display: 'grid', gridTemplateColumns: 'repeat(20, 1fr)'}}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          style={{gridColumn: '2 / span 19'}}
        >
          <Tab label="inbox" />
          <Tab label="sent" />
          <Tab label="compose" />
        </Tabs>
        <Button
          variant="outlined"
          color="primary"
          href="/"
          style={{marginRight: '14px', gridColumn: '21', justifySelf: 'end'}}
        >
          Logout
        </Button>
      </div>
    </Paper>
  );
}