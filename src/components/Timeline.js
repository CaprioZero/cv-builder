import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import '../styles.css'
import { Chrono } from "react-chrono";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogInput = () => {
  const [open, setOpen] = useState(false);
  const [inputList, setInputList] = useState([{ title: "", cardTitle: "", cardSubtitle: "" }]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { title: "", cardTitle: "", cardSubtitle: "" }]);
  };

  const handleClickOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const items = [inputList];
console.log(JSON.stringify(inputList))
  return (
    <div>
      {((inputList.length < 2)) ?
        <Button variant="outlined" onClick={handleClickOpenDialog}>
          Slide in alert dialog
        </Button> :
        <div style={{ height: "100vh", overflow: "auto" }}>
        <Chrono
          items={items}
          mode="VERTICAL_ALTERNATING"
        >
          <div></div>
          </Chrono>
      </div>
      }
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {inputList.map((x, i) => {
              return (
                <div className="dia-box">
                  <input
                    name="title"
                    placeholder="Enter year/date"
                    value={x.title}
                    onChange={e => handleInputChange(e, i)}
                  />
                  <input
                    className="dia-ml10"
                    name="cardTitle"
                    placeholder="Enter title"
                    value={x.cardTitle}
                    onChange={e => handleInputChange(e, i)}
                  />
                  <input
                    className="dia-ml10"
                    name="cardSubtitle"
                    placeholder="Enter description"
                    value={x.cardSubtitle}
                    onChange={e => handleInputChange(e, i)}
                  />
                  <div className="dia-btn-box">
                    {inputList.length !== 1 && <button
                      className="dia-mr10"
                      onClick={() => handleRemoveClick(i)}>Remove</button>}
                    {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                  </div>
                </div>
              );
            })}
            <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogInput