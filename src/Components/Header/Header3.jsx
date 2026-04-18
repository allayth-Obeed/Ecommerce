import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Close from "@mui/icons-material/Close";
import Links from "./Links.jsx";

import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import {
  Container,
  Box,
  Typography,
  IconButton,
  ListItemText,
  ListItemIcon,
  ListItem,
  Drawer,
  List,
  ListItemButton,
  Accordion,
  AccordionSummary,
  useMediaQuery,
} from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  SportsEsportsOutlined,
  ElectricBikeOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
} from "@mui/icons-material";
export default function Header3() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const open = Boolean(anchorEl);

  const categories = [
    { label: "bikes", icon: <SportsEsportsOutlined /> },
    { label: "electronics", icon: <ElectricBikeOutlined /> },
    { label: "books", icon: <MenuBookOutlined /> },
    { label: "laptops", icon: <LaptopChromebookOutlined /> },
  ];

  const Titles = [
    { s: "1", mainLink: "home", subLink: ["Link1", "Link2", "Link3"] },
    { s: "2", mainLink: "MegaMenu", subLink: ["Link1", "Link2", "Link3"] },
    {
      s: "3",
      mainLink: "Full Screen Menu",
      subLink: ["Link1", "Link2", "Link3"],
    },
    { s: "4", mainLink: "Pages", subLink: ["Link1", "Link2", "Link3"] },
    { s: "5", mainLink: "User Accout", subLink: ["Link1", "Link2", "Link3"] },
    {
      s: "6",
      mainLink: "Vendor Account",
      subLink: ["Link1", "Link2", "Link3"],
    },
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (nextOpen) => () => {
    setDrawerOpen(nextOpen);
  };

  const theme = useTheme();

  // const matches = useMediaQuery("(min-width:600px)");

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 2,
      }}
    >
      <Button
        variant="contained"
        sx={{
          bgcolor: theme.palette.myColor.main,
          color: theme.palette.getContrastText(theme.palette.myColor.main),
          borderRadius: 2,
          textTransform: "none",
          pr: "0",
          minWidth: 200,
          display: "flex",
          alignItems: "center",
          boxShadow: "none",
        }}
        onClick={handleClick}
        startIcon={<WindowIcon />}
      >
        <Typography sx={{ textTransform: "capitalize" }}>Categories</Typography>
        <Box flexGrow="2" />
        <KeyboardArrowRightOutlinedIcon
          style={{
            transition: "transform 0.3s",
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
          }}
        />
      </Button>
      {useMediaQuery("(min-width:1200px)") && <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
        {Titles.map((item) => {
          return <Links key={item.s} title={item.mainLink} />;
        })}
      </Box>}

      {useMediaQuery("(max-width:1200px)") && (
        <IconButton
          onClick={toggleDrawer(true)}
          sx={{
            color: theme.palette.getContrastText(theme.palette.myColor.main),
          }}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: "100%",
            maxWidth: 420,
            mx: "auto",
            mt: 6,
            py: 4,
            position: "relative",
          }}
          role="presentation"
          onClick={toggleDrawer(true)}
          onKeyDown={toggleDrawer(true)}
        >
          <IconButton
            sx={{
              ":hover": {
                bgcolor: "#333",
                color: "red",
                rotate: "180deg",
                transition: "0.5s",
              },
              position: "absolute",
              right: 0,
              top: 0,
            }}
            onClick={toggleDrawer(false)}
          >
            <Close />
          </IconButton>

          {Titles.map((item) => {
            return (
              <Accordion>
                <AccordionSummary
                  key={item}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panella-content"
                  id="panella-header"
                >
                  <Typography>{item.mainLink}</Typography>
                </AccordionSummary>
                <List sx={{ py: 0, my: 0 }}>
                  {item.subLink.map((link) => {
                    return (
                      <ListItem key={link} sx={{ py: 0, my: 0 }}>
                        <ListItemButton>
                          <ListItemText primary={link} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
        sx={{
          textTransform: "capitalize",
          // @ts-ignore
          ".MuiPaper-root": { width: 200, bgcolor: theme.palette.myColor.main },
        }}
      >
        {categories.map((item) => (
          <MenuItem key={item.label} onClick={handleClose}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </Container>
  );
}
