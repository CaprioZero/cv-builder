import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import '../styles.css'
import { Chrono } from "react-chrono";
import { useTranslation } from "react-i18next"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogInput = () => {
  const [open, setOpen] = useState(false);
  const [inputList, setInputList] = useState([{ title: "", cardTitle: "", cardSubtitle: "" }]);
  const { t } = useTranslation();

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

  return (
    <div>
      {((inputList.length <= 1)) ?
        <Typography align='center'>
          <Button variant="outlined" onClick={handleClickOpenDialog}>
            {t("s3_button")}
          </Button>
        </Typography> :
        <div style={{ height: "100vh", overflow: "auto" }}>
          <Chrono
            items={inputList}
            mode="VERTICAL"
            allowDynamicUpdate={true}
            useReadMore={false}
            hideControls={true}
            cardHeight={100}
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
        <DialogTitle>{t("s3_popup")}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {inputList.map((x, i) => {
              return (
                <div className="dia-box">
                  <TextField
                    id="filled-basic"
                    label={t("s3_year")}
                    variant="filled"
                    name="title"
                    multiline
                    rowsMax={Infinity}
                    value={x.title}
                    onChange={e => handleInputChange(e, i)} />
                  <TextField
                    id="filled-basic"
                    label={t("s3_position")}
                    variant="filled"
                    className="dia-ml10"
                    name="cardTitle"
                    multiline
                    rowsMax={Infinity}
                    value={x.cardTitle}
                    onChange={e => handleInputChange(e, i)} />
                  <TextField
                    id="filled-basic"
                    label={t("s3_description")}
                    variant="filled"
                    className="dia-ml10"
                    name="cardSubtitle"
                    multiline
                    rowsMax={Infinity}
                    value={x.cardSubtitle}
                    onChange={e => handleInputChange(e, i)} />
                  <div className="dia-btn-box">
                    <Stack direction="row" spacing={2}>
                      {inputList.length !== 1 && <Button startIcon={<DeleteIcon />} className="dia-mr10" onClick={() => handleRemoveClick(i)} variant="contained" color="error">
                        {t("s3_delete")}
                      </Button>}
                      {inputList.length - 1 === i && <Button startIcon={<AddIcon />} onClick={handleAddClick} variant="contained" color="success">
                        {t("s3_add")}
                      </Button>
                      }
                    </Stack>
                  </div>
                </div>
              );
            })}
            <div style={{ marginTop: 20 }}>
              <Typography paragraph>
                {t("s3_note")}
              </Typography>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>{t("s3_close")}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogInput