import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import {
  Container,
  Box,
  Typography,
  IconButton,
  ListItemText,
  ListItemIcon,
  Drawer,
  List,
  ListItemButton,
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

      <IconButton
        onClick={toggleDrawer(true)}
        sx={{
          color: theme.palette.getContrastText(theme.palette.myColor.main),
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: "100%",
            maxWidth: 420,
            mx: "auto",
            py: 2,
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {categories.map((item) => (
              <ListItemButton key={item.label}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
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
