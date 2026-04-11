import { useState } from "react";
import { ShoppingCartOutlined } from "@mui/icons-material";
import {
  Badge,
  Box,
  Container,
  IconButton,
  InputBase,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { styled } from "@mui/material/styles";
import { ExpandMore } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const options = ["All Categories", "Car", "Clothes", "Electronics"];

const Search = styled("div")(({ theme }) => ({
  flexGrow: 0.6,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "2px solid #777",
  "&:hover": {
    border: "2px solid #222",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  minWidth: "300px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1.25),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.getContrastText(theme.palette.myColor.main),
  "& .MuiInputBase-input": {
    padding: theme.spacing(0.5, 1, 0.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 6,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Header2() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
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

  const theme = useTheme();

  return (
    <Container
      sx={{
        display: "flex",
        my: 3,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Stack alignItems="center">
        <ShoppingCartOutlined />
        <Typography variant="body2">E-commerce</Typography>
      </Stack>

      <Search
        sx={{
          display: "flex",
          borderRadius: "50px",
          justifyContent: "space-between",
          height: 42,
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />

        <Box component="span">
          <List
            component="nav"
            aria-label="Device settings"
            sx={{ bgcolor: theme.palette.myColor.main }}
          >
            <ListItemButton
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
            >
              <ListItemText
                className="border"
                sx={{
                  width: 90,
                  textAlign: "center",
                  "&:hover": { curser: "pointer" },
                }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore sx={{ fontSize: "14px" }} />
            </ListItemButton>
          </List>

          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                "aria-labelledby": "lock-button",
                role: "listbox",
              },
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{ fontSize: "11px" }}
                key={option}
                // disabled={index === 0}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Search>

      <IconButton aria-label="account">
        <PersonOutlineOutlinedIcon />
      </IconButton>
      <IconButton aria-label="shopping cart with badge">
        <StyledBadge badgeContent={4} color="error">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </Container>
  );
}