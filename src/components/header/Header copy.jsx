import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./header.scss";
import { logo } from "../../comman/images";
import CloseIcon from "@mui/icons-material/Close";
import { Menu, MenuItem } from "@mui/material";

const drawerWidth = 240;
const navItems = [
  "Resumes",
  "Cover Letters",
  "CV",
  "Job Overviews",
  "Resources",
];

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleDrawerToggleClose = () => {
    setMobileOpen(true);
  };

  // Mobile Drawer
  const drawer = (
    <Box
      className="moileDrawer"
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <Box className="drawerHeader">
        <Typography variant="h6" sx={{ my: 2 }}>
          <img className="logo" src={logo} alt="" />
        </Typography>

        <Button className="closeBtn" onClick={handleDrawerToggleClose}>
          <CloseIcon />
        </Button>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "left" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
    // sx={{ display: "flex", }}
    >
      <CssBaseline />
      {/* Desktop */}
      <AppBar className="desktopStyle" component="nav">
        <Toolbar className="jh-container flex-jh">
          <img className="logo" src={logo} alt="" />
          <IconButton
            className="btnMenuIcon"
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "inherit" } }}
          >
            <img className="logo" src={logo} alt="" />
          </Typography> */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <>
                <Button className="hyperlink" key={item} sx={{ color: "#fff" }}>
                  {item}
                </Button>
                <Menu
                  id="basic-menu"
                  // anchorEl={anchorEl}
                  // open={open}
                  // onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>My account</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </Menu>
              </>
            ))}
            <Button className="hyperlink builder-new-link ml-10 mr-10">
              Resume Builder
            </Button>
            <Button className="hyperlink new-login-button ml-10 mr-10">
              Login | Signup
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile  */}
      <Box component="nav">
        <Drawer
          className=""
          container={container}
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
