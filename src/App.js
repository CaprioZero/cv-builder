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
import TimelineIcon from '@mui/icons-material/Timeline';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './App.css'
import _ from "lodash";
import ReactGridLayout from './components/ReactGridLayout'
import { useTranslation } from "react-i18next"
import printPDF from './utils/DownloadPDF'
import guide_avatar from './assets/guide_avatar.gif'
import guide_text from './assets/guide_text.gif'
import guide_timeline from './assets/guide_timeline.gif'
// import Resize from './utils/resize'

// Resize();
const drawerWidth = 274;

const App = () => {
  const [items, setItems] = useState([]);
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
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

  const addItem3 = () => {
    setItems([...items, {
      i: "n" + items.length,
      x: items.length * 2,
      y: items.length + 1,
      w: 2,
      h: 3,
      btn: 3
    }])
  };

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
            <Button variant="contained" startIcon={<AccountCircleIcon />} onClick={addItem}>
              {t("section1")}
            </Button>
            <Button variant="contained" startIcon={<TextFieldsIcon />} onClick={addItem2}>
              {t("section2")}
            </Button>
            <Button variant="contained" startIcon={<TimelineIcon />} onClick={addItem3}>
              {t("section3")}
            </Button>
          </ButtonGroup>
          <br />
          <Typography paragraph>
            {t("tips")}
          </Typography>
          <br />
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{t("section1")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <LazyLoadImage
                src={guide_avatar}
                effect="blur"
                height='122px'
                width='240px' />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>{t("section2")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <LazyLoadImage
                src={guide_text}
                effect="blur"
                height='142px'
                width='240px' />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>{t("section3")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <LazyLoadImage
                src={guide_timeline}
                effect="blur"
                height='142px'
                width='240px' />
            </AccordionDetails>
          </Accordion>
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
