import React from "react";
import { AppBar, Toolbar, IconButton, Typography, useMediaQuery, Button, useScrollTrigger, Slide, Menu, MenuItem } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

// ------------------------------------------------------------------------ HELPER

// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "60px"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },

}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}

// ------------------------------------------------------------------------ COMPONENT

const NavBar = (props) => {
  const classes = useStyles();
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };
  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>

          <AppBar elevation={0}>

            <Toolbar bgcolor="secondary.main" style={{ marginLeft: "2rem"}}>
              <Typography
                variant="h5"
                component="p"
                color="white"
                className={classes.title}
              >
                juniorNest
              </Typography>

              {isMobile ? (
                <>
                  <IconButton
                    className={classes.menuButton}
                    edge="start"
                    aria-label="menu"
                    onClick={handleMenu}
                  >
                    <MenuIcon  style={{fill:"white"}} />
                  </IconButton>

                  <Menu
                    id="menu-appbar"
                    anchorEl={anchor}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    KeepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    open={open}
                  >

                    <MenuItem
                      onClick={() => setAnchor(null)}
                      style={{color:"#637DBB"}} 
                    >
                      <Typography variant="h6"> About Us </Typography>
                    </MenuItem>

                    <MenuItem
                      onClick={() => setAnchor(null)}
                      style={{color:"#637DBB"}} 
                    >
                      <Typography variant="h6"> Junior</Typography>
                    </MenuItem>

                    <MenuItem
                      onClick={() => setAnchor(null)}
                      style={{color:"#637DBB"}} 
                    >
                      <Typography variant="h6"> Employee </Typography>
                    </MenuItem>

                  </Menu>
                </>

              ) : (
                <div style={{ marginRight: "4rem" }}>

                  <Button
                    variant="text"
                    color="white"
                  >
                    About Us
                  </Button>
                  <Button
                    variant="text"
                    color="white"
                  >
                    Junior
                  </Button>
                  <Button
                    variant="text"
                    color="white"
                  >
                    Employee
                  </Button>
                </div>
              )}
            </Toolbar>
          </AppBar>


      </HideOnScroll>
    </div>
  );
};

export default NavBar;
