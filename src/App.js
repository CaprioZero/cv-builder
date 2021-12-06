import React from 'react'
import { useState } from "react"
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import AppBar from '@mui/material/AppBar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton';
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import TextFieldsIcon from '@mui/icons-material/TextFields';
// import TimelineIcon from '@mui/icons-material/Timeline';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './App.css'
import _ from "lodash";
import html2canvas from 'html2canvas'
import jsPdf from 'jspdf'
import ReactGridLayout from './components/ReactGridLayout'
import { useTranslation } from "react-i18next"
import guide from './assets/guide.gif'
// import Resize from './utils/resize'

// Resize();
const drawerWidth = 240;

const App = () => {
  const [items, setItems] = useState([]);
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const printPDF = () => {
    const domElement = document.querySelector('.page');
    let i;
    html2canvas(domElement, {
      onclone: document => {
        for (i = 0; i < document.querySelectorAll('.react-resizable-handle').length; i++) {
          document.querySelectorAll('.react-resizable-handle')[i].style.visibility = "hidden";
        }
        for (i = 0; i < document.querySelectorAll('.removeItem').length; i++) {
          document.querySelectorAll('.removeItem')[i].style.visibility = "hidden";
        }
        for (i = 0; i < document.querySelectorAll('.delete-button').length; i++) {
          document.querySelectorAll('.delete-button')[i].style.visibility = "hidden";
        }
      }
    }).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 210;
      const pageHeight = 297;
      let imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;
      const pdf = new jsPdf('p', 'mm', "a4");
      let position = 0;
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight + 10);
      heightLeft -= pageHeight;
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight + 10);
        heightLeft -= pageHeight;
      }
      pdf.save(`CV-${new Date().toLocaleString('vi', { timeZoneName: 'short' })}.pdf`);
    });
  };

  const addItem = () => {
    setItems([...items, {
      i: "n" + items.length,
      x: items.length * 2,
      y: items.length + 1,
      w: 4,
      h: 2,
      minW: 2,
      minH: 2,
      btn: 1
    }])
  };

  const addItem2 = () => {
    setItems([...items, {
      i: "n" + items.length,
      x: items.length * 2,
      y: items.length + 1,
      w: 2,
      h: 1,
      btn: 2
    }])
  };

  // const addItem3 = () => {
  //   setItems([...items, {
  //     i: "n" + items.length,
  //     x: items.length * 2,
  //     y: items.length + 1,
  //     w: 2,
  //     h: 1,
  //     btn: 3
  //   }])
  // };

  const removeItem = (i) => {
    setItems(_.reject(items, ['i', i]))
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>

        <AppBar
          position="fixed"
          sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >

        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar>
            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                onClick={() => changeLanguage("en")}
              >
                ENG
              </Button>
              <Button
                variant="outlined"
                onClick={() => changeLanguage("vi")}
              >
                VIE</Button>
            </Stack>
          </Toolbar>
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={printPDF}>
                <ListItemIcon>
                  <FileDownloadIcon />
                </ListItemIcon>
                <ListItemText primary={t("Download")} />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined button group"
          >
            <Button variant="contained" endIcon={<AccountCircleIcon />} onClick={addItem}>
              {t("section1")}
            </Button>
            <Button variant="contained" endIcon={<TextFieldsIcon />} onClick={addItem2}>
              {t("section2")}
            </Button>
            {/* <Button variant="contained" endIcon={<TimelineIcon />} onClick={addItem3}>
              {t("section3")}
            </Button> */}
          </ButtonGroup>
          <br />
          <Typography paragraph>
            {t("tips")}
          </Typography>
          <br />
          <LazyLoadImage
            src={guide}
            effect="blur"
            height='142px'
            width='294px' />
          <br />
          <Typography paragraph>
            {t("todo")}
          </Typography>
        </Drawer>

        <Box class="container-fluid"
          component="main"
          sx={{ flexGrow: 1, p: 3 }}
        >
          <div class="book">
            <div class="page">
              <div class="subpage" id='editor-container'>
                <ReactGridLayout items={items} removeItem={removeItem} />
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  )
}

export default App
