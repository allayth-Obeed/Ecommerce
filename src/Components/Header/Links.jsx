import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { ExpandMore, KeyboardArrowRight } from "@mui/icons-material";

export default function Links({title}) {
  return (
    <Box
      sx={{
        ":hover .show-links": { display: "block" },
        ":hover": { cursor:"pointer" },        
        display: "flex",
        alignItems: "center",
        position: "relative",
        borderRadius: "5px",
      }}
    >
      <Typography sx={{ textTransform: "capitalize" }} variant="body1">
        {title}
      </Typography>
      <ExpandMore sx={{ ml: 1 }} />
      <Box
        className="show-links"
        sx={{
          position: "absolute",
          top: "100%",
          minWidth: "170px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "none",
        }}
      >
        <Paper sx={{ mt: 2 }}>
          <nav>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary="Dashboard"
                    sx={{ ".MuiTypography-root": { fontSize: "16px" } }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
                sx={{ ":hover .subLink": { display: "block" } }}
              >
                <ListItemButton>
                  <ListItemText
                    primary="Products"
                    sx={{
                      ":hover .subLink": { display: "block" },
                      ".MuiTypography-root": { fontSize: "16px" },
                      display: "relative",
                    }}
                  />
                  <KeyboardArrowRight />
                </ListItemButton>
                <Box
                  className="subLink"
                  sx={{
                    position: "absolute",
                    left: "100%",
                    display: "none",
                    minWidth: "160px",
                  }}
                >
                  <Paper sx={{ ml: 1 }}>
                    <nav>
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton
                            sx={{
                              paddingY: 0.5,
                              display: "flex",
                              p: 0,
                              px: 1.5,
                            }}
                          >
                            <ListItemText
                              primary="Add Product"
                              sx={{
                                ".MuiTypography-root": { fontSize: "16px" },
                                fontWeight: 300,
                              }}
                            />
                            <Box flexGrow={1} />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton
                            sx={{
                              paddingY: 0.5,
                              display: "flex",
                              p: 0,
                              px: 1.5,
                            }}
                          >
                            <ListItemText
                              primary="Edit Product"
                              sx={{
                                ".MuiTypography-root": { fontSize: "16px" },
                                fontWeight: 300,
                              }}
                            />
                            <Box flexGrow={1} />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Paper>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary="Order"
                    sx={{ ".MuiTypography-root": { fontSize: "16px" } }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary="Profile"
                    sx={{ ".MuiTypography-root": { fontSize: "16px" } }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
}
