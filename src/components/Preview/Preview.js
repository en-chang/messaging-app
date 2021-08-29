import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
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
        />
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        alignItems="center"
      >
        Delete
      </Button>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
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
        />
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        alignItems="center"
      >
        Delete
      </Button>
      </ListItem>
    </List>
  );
}