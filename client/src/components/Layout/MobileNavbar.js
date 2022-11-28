import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@material-ui/core'
import useStyles from '../../styles.js';
import MenuIcon from '@material-ui/icons/Menu';
import { Toolbar, MenuItem, Menu, ListItemIcon} from '@material-ui/core'
import {Button} from '@material-ui/core';
import  Avatar from '@mui/material/Avatar';
import { useLocation } from 'react-router-dom';
import happyMan from '../../images/happyMan.png';
import { useDispatch } from 'react-redux';
import { FiLogOut } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

function MobileNavbar() {
    const classes = useStyles();
    const [openNavbar, setOpenNavbar] = useState(false);
    const location = useLocation();
    const dispatch = useDispatch();

    const history = useHistory();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));   
    console.log(user);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
      };

    //set user to profile localStorage
    useEffect(() => {
        const token = user?.token;
        
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    const logout = () => {
        dispatch({ type: 'LOGOUT' })
        history.push('/')
        setUser(null);
    };

    return (
        <>
        
            <Drawer anchor="right" open={openNavbar} onClose={() => setOpenNavbar(false)}>
                <List>
                    <ListItem onClick={() => setOpenNavbar(false)}>
                        <ListItemText>
                            <Link to='/' className={classes.link}>Home</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenNavbar(false)}>
                        <ListItemText>
                            <Link to='/discover' className={classes.link}>Discover</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenNavbar(false)}>
                        <ListItemText>
                            <Link to='/hosts' className={classes.link}>Hosts</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenNavbar(false)}>
                        <ListItemText>
                            <Link to='/vendors' className={classes.link}>Vendors</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenNavbar(false)}>
                        <ListItemText>
                            <Link to='/aboutus' className={classes.link}>About Us</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenNavbar(open)}>
                    </ListItem>
                </List>
            </Drawer>
            
            <div className={classes.navbarButtons}>
                <IconButton className={classes.menuIcon} edge="start" onClick={() => setOpenNavbar(!openNavbar)}>
                    <MenuIcon className={classes.menuIcon}/>
                </IconButton>
                <Toolbar>
                        {user ? (
                            <>
                                <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                >
                                {<Avatar alt="user.result.name" src={happyMan} sx={{ width: '50px', height: '50px', position: 'absolute', top: '50%', transform: 'translate(0, -50%)', float: 'left', display: 'inline'}}></Avatar>}
                                </IconButton>
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                        },
                                        '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                        },
                                    },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                    getContentAnchorEl={null}
                                >
                                    <MenuItem onClick={logout}>
                                    <ListItemIcon>
                                        <FiLogOut fontSize="small" />
                                    </ListItemIcon>
                                        <p style={{fontSize: '15px'}}>Logout</p>
                                    </MenuItem>
                                </Menu>                               
                            </>
                            ) : ( 
                            <Link to='/auth'  className={classes.button}><Button className={classes.button}>Sign In</Button></Link>
                            
                            )}
                        </Toolbar>
            </div>
        </>          
    )
};

export default MobileNavbar;