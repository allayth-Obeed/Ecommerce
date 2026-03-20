import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import { IconButton, Stack, Typography, useTheme, Box, List, ListItemButton, ListItemText, MenuItem, Menu } from "@mui/material";
import {
  DarkModeOutlined,
  Facebook,
  Instagram,
  LightModeOutlined,
  Twitter,
  ExpandMore, // Added an icon for better UX
} from "@mui/icons-material";

const options = ["AR", "EN"];

export default function Header1() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  // selected menu state
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ bgcolor: "#283445", py: "4px", px: 2 }}>
      <Stack direction={"row"} alignItems={"center"}>
        <Typography
          sx={{
            mr: 2,
            p: "3px 10px",
            bgcolor: "#d23f57",
            borderRadius: "12px",
            fontSize: "10px",
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          HOT
        </Typography>
        
        <Typography sx={{ fontSize: "12px", fontWeight: "300", color: "#fff" }}>
          Free Express Shipping
        </Typography>

        <Box flexGrow={1} />

        {/* Theme Toggle */}
        <IconButton
          onClick={() => {
            const newMode = theme.palette.mode === "dark" ? "light" : "dark";
            localStorage.setItem("mode", newMode);
            colorMode.toggleColorMode();
          }}
          color="inherit"
          sx={{ color: "#fff" }}
        >
          {theme.palette.mode === "light" ? (
            <LightModeOutlined fontSize="small" />
          ) : (
            <DarkModeOutlined fontSize="small" />
          )}
        </IconButton>

        {/* Language Selector */}
        <List component="nav" sx={{ p: 0, m: 0 }}>
          <ListItemButton
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickListItem}
            sx={{ px: 1 }}
          >
            {/* FIX: Added the primary text so you can actually see the selection */}
            <ListItemText
              sx={{ ".MuiTypography-root": { fontSize: "12px", color: "#fff" } }}
              secondary={null}
              primary={options[selectedIndex]}
            />
            <ExpandMore sx={{ fontSize: "16px", color: "#fff", ml: 1 }} />
          </ListItemButton>
        </List>

        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'lock-button',
            role: 'listbox',
          }}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
              sx={{ fontSize: '12px', p: '5px 10px', minHeight: 'unset' }}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>

        {/* Social Icons */}
        <Stack direction="row" spacing={0.5}>
          <IconButton sx={{ color: "#fff" }}>
            <Facebook sx={{ fontSize: "16px" }} />
          </IconButton>
          <IconButton sx={{ color: "#fff" }}>
            <Instagram sx={{ fontSize: "16px" }} />
          </IconButton>
          <IconButton sx={{ color: "#fff" }}>
            <Twitter sx={{ fontSize: "16px" }} />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}