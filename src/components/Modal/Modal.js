import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isClosed } from './modalSlice'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './Modal.css'

function getModalStyle() {
  return {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: "80%",
    height: "80%",
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  // const [open, setOpen] = React.useState(false);
  const open = useSelector((state) => state.modalOpen.value);
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(isClosed())
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className="modal-close" onClick={handleClose}>
        &times;
      </div>
      <h1 id="simple-modal-title">Sender</h1>
      <h2 id="simple-modal-title">Title</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  );

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        Open Message
      </button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}