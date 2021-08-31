import React from 'react';
import { useDispatch } from 'react-redux';
import { isOpen } from '../Modal/modalSlice';
import Modal from '../Modal/Modal';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  inline: {
    display: 'inline',
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();
  const dispatch = useDispatch()

  return (
    <List className={classes.root}>
      <div style={{position:'relative'}}>
        <ListItem 
          button
          alignItems="flex-start"
          // Opens Modal below
          onClick={() => dispatch(isOpen())}
        >
          <ListItemAvatar>
            {/* broken-image is used to automatically create avatar img */}
            <Avatar alt={`First Sender`} src="/broken-image.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={`Title 1`}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {`First Sender`}
                </Typography>
                {` — ${"I'll be in your neighborhood doing errands this…"}`}
              </React.Fragment>
            }
            style={{marginRight:'100px'}}
          />
        </ListItem>
        {/* Modal is activated when ListItem clicked */}
        <Modal />
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          style={{position:'absolute',top:'0',right:'0',margin:'14px'}}
        >
          Delete
        </Button>
      </div>
      <Divider variant="inset" component="li" />
      <div style={{position:'relative'}}>
        <ListItem 
          button
          alignItems="flex-start"
          onClick={() => dispatch(isOpen())}
        >
          <ListItemAvatar>
            <Avatar alt={`Second Sender`} src="/broken-image.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={`Title 2`}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {`Second Sender`}
                </Typography>
                {` — ${"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper..."}`}
              </React.Fragment>
            }
            style={{marginRight:'100px'}}
            />
        </ListItem>
        <Modal />
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          style={{position:'absolute',top:'0',right:'0',margin:'14px'}}
        >
          Delete
        </Button>
      </div>
    </List>
  );
}