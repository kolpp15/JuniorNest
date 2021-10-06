import React    from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Typography, useMediaQuery, Button, Menu, MenuItem, Box } from "@material-ui/core";


// ------------------------------------------------------------------------ HELPER

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "33px",
  },
  menuButton: {
  },
  title: {
    flexGrow: 1,
  },
}));

// ------------------------------------------------------------------------ COMPONENT

const NavBar = (props) => {
  const classes             = useStyles();
  const [anchor, setAnchor] = React.useState(null);
  const open                = Boolean(anchor);
  const theme               = useTheme();
  const isMobile            = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };
  return (
    <Box >

          <AppBar elevation={0} style={{background: "linear-gradient(87deg, #28C7E9 ,#1171ef)"}}>
            
            <Toolbar style={{ display: "contents", textAlign: "right", marginLeft: "9rem", marginRight: "9rem"}}>
     
              

              {isMobile ? (
                <>
                  <IconButton
                    className={classes.menuButton}
                    edge="start"
                    aria-label="menu"
                    onClick={handleMenu}
                    style={{justifyContent: "right"}}
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
                      <Typography variant="h6">
                        <Link to="/about" style={{ textDecoration: 'none', color: '#637DBB' }}>About us</Link>
                      </Typography>
                    </MenuItem>

                    <MenuItem
                      onClick={() => setAnchor(null)}
                      style={{color:"#637DBB"}} 
                    >
                      <Typography variant="h6">
                        <Link to="/customSearch" style={{ textDecoration: 'none', color: '#637DBB'  }}>Search Jobs </Link>
                      </Typography>
                    </MenuItem>

                    <MenuItem
                      onClick={() => setAnchor(null)}
                      style={{color:"#637DBB"}} 
                    >
                      <Typography variant="h6"> 
                      <Link to="/employer" style={{ textDecoration: 'none', color: '#637DBB'  }}>Employer </Link>
                      </Typography>
                    </MenuItem>

                  </Menu>
                </>

              ) : (
                <div className={classes.links}>

                  <Button
                    variant="text"
                    color="white"
                  >
                    <Link to="/about" style={{ textDecoration: 'none', color: 'white'  }}>About us </Link>
                  </Button>

                  <Button
                    variant="text"
                    color="white"
                  >
                    <Link to="/customSearch" style={{ textDecoration: 'none', color: 'white'  }}>Search Jobs </Link>
                  </Button>

                  <Button
                    variant="text"
                    color="white"                    
                  >
                    <Link to="/employer" style={{ textDecoration: 'none', color: 'white'  }}>Employer </Link>
                  </Button>
                </div>
              )}
            </Toolbar>
            
          </AppBar>

    </Box>
  );
};

export default NavBar;
