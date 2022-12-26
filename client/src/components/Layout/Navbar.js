import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, useMediaQuery, useTheme, Menu, MenuItem, ListItemIcon, IconButton } from '@material-ui/core'
import { FiLogOut } from 'react-icons/fi';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import useStyles from '../../styles.js';
import LocalEyesLogo from '../../images/localeyeslogodark.png'
import MobileNavbar from './MobileNavbar.js';
import  Avatar from '@mui/material/Avatar';
import { useDispatch } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Button} from '@material-ui/core';
import happyMan from '../../images/happyMan.png'
import {  LOGOUT } from "../../constants/actionTypes";

function Navbar() {
    const theme = useTheme();
    const classes = useStyles();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    //use State for user info
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));   
    /* console.log(user); */

    //dropdown
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

    //Google success login
    const googleSuccess =  async (res) => {
        const result = jwt_decode(res?.credential); 
        const token = res?.credential;
        
        try {
            dispatch({ type: 'AUTH', data: { result, token } });
            setUser(JSON.parse(localStorage.getItem('profile')));
            history.push('/')
        } catch (error) {
            console.log(error)
        }
    };

    //Google Failure login
    const googleFailure = () => {
        console.log("Google Sign In Failed")
    };

    //logging out google client
    const logout = () => {
        dispatch({ type: LOGOUT })
        /* history.push('/auth') */
        setUser(null);
    };

    return (
        <AppBar position="static" color="secondary">
            <Toolbar className={classes.customizeToolbar}>
                {isMobile ? 
                ( 
                <>
                <img src={LocalEyesLogo} alt="Logo" className={classes.logoMobile}></img>
                <MobileNavbar />  
                </>
                )
                : 
                (
                <>
                <img src={LocalEyesLogo} alt="Logo" className={classes.logo}></img>

                <div className={classes.navbarButtons}>
                        <Link to='/' className={classes.link}>Home</Link>
                        <Link to='/discover' className={classes.link}>Discover</Link>
                        <Link to='/hosts' className={classes.link}>Hosts</Link>
                        <Link to='/vendors' className={classes.link}>Vendors</Link>
                        <Link to='/aboutus' className={classes.link}>About Us</Link>  
                </div>
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
                                    <MenuItem >
                                        <ListItemIcon>
                                            <Link to='/mylist' className={classes.linkAvatar}>
                                                <BookmarkIcon fontSize="small" />
                                            </Link>
                                        </ListItemIcon>
                                        <Link to='/mylist' className={classes.linkAvatar}>
                                            <p  style={{fontSize: '15px'}}>Mylist</p>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={logout}>
                                    <ListItemIcon>
                                        <Link className={classes.linkAvatar} >
                                            <FiLogOut fontSize="miduim" />
                                        </Link>
                                    </ListItemIcon>
                                        <Link className={classes.linkAvatar} >
                                        <p style={{fontSize: '15px'}}>Logout</p>
                                        </Link>
                                    </MenuItem>
                                </Menu>                               
                            </>
                        ) : ( 
                            <Link to='/auth'  className={classes.button}><Button className={classes.button}>Sign In</Button></Link>
                            
                        )}
                    </Toolbar>                   
                </>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar