import React, { useState, useMemo } from 'react';
import Carousel from '../components/Layout/Carousel.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FourIconGrid from '../components/Layout/FourIconGrid.js';
import { styled } from '@mui/material/styles';
import BusinessCardList from '../components/Business/BusinessCardList'
import { useDispatch } from 'react-redux';
import { getPostsBySearch } from '../actions/posts';
import Paginate from '../components/Business/Paginate.js';
import { useHistory, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { VscListFilter } from 'react-icons/vsc';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import { TextField, ToggleButton } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box, createStyles, withStyles } from "@material-ui/core";
import {ToggleButtonGroup} from '@mui/material';
import Paper from '@material-ui/core';


function CustomTextField(props) {
    return (
        <TextField
        variant="standard"
        InputProps={{disableUnderline: true,}}
            sx={{        
                ml: 1,
                mt: 1,
                p: '10px',
                flex: 1,
                backgroundColor:'#f5f5f7',
                borderRadius: '5px',
                border: 'none',
                width: '250px',
                fontSize: '25px',}}
            placeholder="Address, City, or Zip Code"
            onChange={props.onChange}
            value={props.value}
            onKeyDown={props.handleKeyPress}
        />
    )
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Discover = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [currentId, setCurrentId] = useState(null);
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();
    const query = useQuery();
    const history = useHistory();
    const page = query.get('page') || 1;
    const [search, setSearch] = useState('');
    var searchArray = [];

    const updateTextField = useMemo(() => (e) => setSearch(e.target.value), []
    )

    const searchPost = () => {
        if(search.trim() || searchArray) {
            //get searched for posts
            dispatch(getPostsBySearch({search, tags: searchArray.toString()}));
            history.push(`/discover/search?searchQuery=${search}`)
        }
        else {
            history.push('/discover');
        }
    }

    const handleKeyPress = (e) => {
        if(e.keyCode === 13) {
            searchPost();
        }
    }

    //toggle button functionality
    function toggleButton(value) {
        if (searchArray.includes(value)) {
            const filterIndex = searchArray.indexOf(value)
            if (searchArray.length === 1) {
                searchArray = [];
            }
            else {
                searchArray.splice(filterIndex, 1);
            }
            console.log(searchArray)
        }
        else {
            searchArray.push(value);
            console.log(searchArray);
        }
    }

    //opening filter menu
    const openFilterMenu = () => {
        setOpen(true);
    }
    //close filter menu
    const closeFilterMenu = () => {
        setOpen(false);
    }
    const ResponsiveDiv = styled('div')(({ theme }) => ({
        margin: 'auto',
        paddingTop: '1rem',
        paddingBottom: '2rem',
        [theme.breakpoints.down('md')]: {
            width: '90%'
        },
        [theme.breakpoints.up('md')]: {
            width: '90%'
        },
        [theme.breakpoints.up('lg')]: {
            width: '80%'
        },
    }));
    const ResponsiveFilter = styled('div')(( {theme }) => ({
        margin: 'auto',
        paddingTop: '1rem',
        paddingBottom: '2rem',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: '5px',
        [theme.breakpoints.down('md')]: {
            width: '70%',
            marginTop: '30px',
            padding: '30px',
        },
        [theme.breakpoints.up('md')]: {
            width: '70%',
            marginTop: '30px',
            padding: '40px',
        },
        [theme.breakpoints.up('lg')]: {
            width: '40%',
            marginTop: '30px',
            padding: '50px',
        },
    }));
    const BuToggleButton = styled(ToggleButton)(({theme}) => ({
        borderRadius: '5px',
        width: '32%',
        margin: 'auto',
        marginTop: '5px',
        padding: '12px 24px',
        fontFamily: 'Red Hat Display',
        textDecoration: "none",
        backgroundColor: 'rgba(1, 160, 198, 0.05)',
        border: 'none',
        fontWeight: 'bold',
        cursor: 'pointer',
        '&:hover': {
            transform: 'translateY(-3px)',
            backgroundColor: 'rgba(1, 160, 198, 0.1)',
            boxShadow: '0 5px 0px rgba(1, 160, 198, 1)',
        },
        '&:active': {
            transform: 'translateY(-1px)',
            backgroundColor: 'rgba(1, 160, 198, 0.1)',
            boxShadow: '0 2px 0px rgba(1, 160, 198, 1)',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '10px',
            padding: '10px'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '18px',
            padding: '10px'
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '24px',
            padding: '10px'
        },
        }));

    const CardTitle = styled('h1')(({ theme }) => ({
        fontFamily: 'Red Hat Display',
        textDecoration: "none",
        fontWeight: 'Bold',
        padding: '0px',
        margin: '0px',
        [theme.breakpoints.down('md')]: {
            fontSize: "16px",
            marginTop: '5px',
            marginBottom: '3px'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "32px",
            marginTop: '15px',
            marginBottom: '7px'
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "36px",
            marginTop: '20px',
            marginBottom: '10px'
        },
    }));

    const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
        '& .MuiToggleButtonGroup-grouped': {
            marginLeft: theme.spacing(-0.5),
         border: 0,
          '&.Mui-disabled': {
            border: 0,
          },
          '&:not(:first-of-type)': {
            borderRadius: theme.shape.borderRadius,
          },
          '&:first-of-type': {
            borderRadius: theme.shape.borderRadius,
          },
        },
      }));

    const [quick, setQuick] = React.useState();
    const handleQuick = (event, newQuick) => {
        setQuick(newQuick);
    };

    const [shopping, setShopping] = React.useState();
    const handlePrice = (event, newPrice) => {
        setShopping(newPrice);
    };

    const [food, setFood] = useState();
    const handleFood = (e, newFood) => {
        setFood(newFood)
    };

    const [cuisine, setCuisine] = useState();
    const handleCuisine = (e, newCuisine) => {
        setCuisine(newCuisine)
    };

    const [other, setOther] = useState();
    const handleOther = (e, newOther) => {
        setOther(newOther)
    };

    
    return (
        <>
            {isMobile ? (
                <>
                <div style={{width: '375px',height: '60px', margin: '50px auto 0px auto', backgroundColor: '#f5f5f7', boxSizing: 'border-box', textAlign: 'left', borderRadius: '5px'}}>
                    <AiOutlineSearch onClick={searchPost} style={{fontSize: '55px', marginTop: '5px', width: '30px', marginLeft: '10px'}}></AiOutlineSearch>
                    <CustomTextField handleKeyPress={handleKeyPress} value={search} onChange={updateTextField}/> 
                </div>
                <div style={{border: '1px solid rgba(0, 162, 202, 1)', width: '60%', margin: '15px auto 15px auto'}}></div>


                <div style={{width: '375px',height: '60px', margin: '0px auto 20px auto', backgroundColor: '#f5f5f7', boxSizing: 'border-box', textAlign: 'left', borderRadius: '5px',padding: '0px'}}  onClick={openFilterMenu}>
                    <VscListFilter style={{fontSize: '55px', marginTop: '5px', width: '30px', display: 'inline-block', marginLeft: '10px'}}></VscListFilter>
                    <h1 style={{fontFamily: 'Red Hat Display', fontSize: '25px', width: '300px', display: 'inline-block', margin: '14px 0px 0px 0px',position: 'absolute', textAlign: 'center'}}>Filter</h1>
                </div>
                </>
            ):(
                <>
                <ResponsiveDiv>
                    <Carousel />
                </ResponsiveDiv>
                <div style={{width: '1200px', height: '70px', margin: 'auto', backgroundColor: '#f5f5f7', boxSizing: 'border-box', textAlign: 'left', borderRadius: '5px'}}>
                    <AiOutlineSearch onClick={searchPost} style={{fontSize: '55px', width: '50px', marginTop: '5px', marginLeft: '10px'}}></AiOutlineSearch>
                    <div style={{width: '1000px',display: 'inline-block', margin: '0px', padding: '0px', position: 'absolute'}}>
                    <CustomTextField handleKeyPress={handleKeyPress} value={search} onChange={updateTextField}/> 
                    </div>

                </div>

                <div style={{border: '1px solid rgba(0, 162, 202, 1)', width: '1200px', margin: '15px auto 15px auto', marginBottom: '15px'}}></div>

                <div onClick={openFilterMenu} style={{cursor: 'pointer',width: '1200px', height: '70px', margin: 'auto', marginBottom: '15px', backgroundColor: '#f5f5f7', boxSizing: 'border-box', textAlign: 'left', borderRadius: '5px', padding: '0px'}}>
                    <VscListFilter style={{fontSize: '55px', width: '50px', marginTop:'5px', marginLeft:'10px'}}></VscListFilter>
                    <Typography 
                        align='center'
                        sx={{        
                            ml: 1,
                            mt: 1.8,
                            flex: 1,
                            backgroundColor:'#f5f5f7',
                            borderRadius: '5px',
                            border: 'none',
                            position: 'absolute',
                            width: '1100px',
                            fontSize: '25px',}}
                            style={{display: 'inline-block'}}>
                    Filter
                    </Typography>
                </div>
                </>
            )}
            

            <Modal
                open={open}
                onClose={closeFilterMenu}
                sx={{overflow: 'scroll'/* ,display: 'flex',
                  border: (theme) => `1px solid ${theme.palette.divider}`,
                     flexWrap: 'wrap' */}}
                >
                <ResponsiveFilter >
                    <Grid container spacing={2} >
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <CardTitle>Quick Search</CardTitle>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                                <StyledToggleButtonGroup
                                    value={quick}
                                    onChange={handleQuick}
                                    aria-label="text alignment"
                                    color="primary"
                                    sx={{display:'flex', justifyContent:'flex-center', flexWrap:'wrap', alignContent:'space-around', alignItems:'flex-end',overflow:' auto'}}
                                    >
                                        <BuToggleButton value="food" aria-label="left aligned">Food</BuToggleButton>
                                        <BuToggleButton value="shopping" aria-label="center aligned">Shopping</BuToggleButton>
                                        <BuToggleButton value="Adventure" aria-label="right aligned" onClick={() => toggleButton('Adventure')}>Adventure</BuToggleButton>
                                </StyledToggleButtonGroup>
                                </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <CardTitle>Price</CardTitle>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                                <StyledToggleButtonGroup
                                    value={shopping}
                                    onChange={handlePrice}
                                    aria-label="text alignment"
                                    color="primary"
                                    sx={{display:'flex', justifyContent:'flex-start', flexWrap:'wrap', alignContent:'space-around', alignItems:'flex-end',overflow:' auto'}}
                                    >
                                        <BuToggleButton value="$" aria-label="left aligned" onClick={() => toggleButton('$')}>$</BuToggleButton>
                                        <BuToggleButton value='$$' aria-label="center aligned" onClick={() => toggleButton('$$')}>$$</BuToggleButton>
                                        <BuToggleButton value='$$$' aria-label="right aligned" onClick={() => toggleButton('$$$')}>$$$</BuToggleButton>
                                </StyledToggleButtonGroup>
                                </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <CardTitle>Food</CardTitle>
                        </Grid>
                                <StyledToggleButtonGroup
                                        value={food}
                                        onChange={handleFood}
                                        aria-label="text alignment"
                                        color="primary"
                                        sx={{display:'flex', justifyContent:'flex-start', flexWrap:'wrap', alignContent:'space-around', alignItems:'flex-end',overflow:' auto', }}
                                        >
                                            <BuToggleButton value='Delivery' onClick={() => toggleButton('Delivery')}>Delivery</BuToggleButton>
                                            <BuToggleButton value='takeout' onClick={() => toggleButton('Takeout')}>Takeout</BuToggleButton>
                                            <BuToggleButton value='dine in' onClick={() => toggleButton('Dine In')}>Dine In</BuToggleButton>
                                            <BuToggleButton value='breakfast' onClick={() => toggleButton('Breakfast')}>Breakfast</BuToggleButton>
                                            <BuToggleButton value='lunch' onClick={() => toggleButton('Lunch')}>Lunch</BuToggleButton>
                                            <BuToggleButton value='dinner' onClick={() => toggleButton('Dinner')}>Dinner</BuToggleButton>
                                            <BuToggleButton value='deseert' onClick={() => toggleButton('Dessert')}>Dessert</BuToggleButton>
                                            <BuToggleButton value='coffee tee' onClick={() => toggleButton('Coffee/Tea')}>Coffee/Tea</BuToggleButton>
                                            <BuToggleButton value='bar' onClick={() => toggleButton('Bar/Lounge')}>Bar/Lounge</BuToggleButton>
                                            <BuToggleButton value='glu' onClick={() => toggleButton('Gluten Free')}>Gluten Free</BuToggleButton>
                                            <BuToggleButton value='vegan' onClick={() => toggleButton('Vegan')}>Vegan</BuToggleButton>
                                            <BuToggleButton value='vegetarian' onClick={() => toggleButton('Vegetarian')}>Vegetarian</BuToggleButton>
                                </StyledToggleButtonGroup>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <CardTitle>Cuisine</CardTitle>
                        </Grid>
                                <StyledToggleButtonGroup
                                        value={cuisine}
                                        onChange={handleCuisine}
                                        aria-label="text alignment"
                                        color="primary"
                                        sx={{display:'flex', justifyContent:'flex-start', flexWrap:'wrap', alignContent:'space-around', alignItems:'flex-end',overflow:' auto'}}
                                        >
                                            <BuToggleButton value='1' onClick={() => toggleButton('American')}>American</BuToggleButton>
                                            <BuToggleButton value='2' onClick={() => toggleButton('Mexican')}>Mexican</BuToggleButton>
                                            <BuToggleButton value='3' onClick={() => toggleButton('Asian')}>Asian</BuToggleButton>
                                            <BuToggleButton value='4' onClick={() => toggleButton('Italian')}>Italian</BuToggleButton>
                                            <BuToggleButton value='5' onClick={() => toggleButton('Japanese')}>Japanese</BuToggleButton>
                                            <BuToggleButton value='6' onClick={() => toggleButton('Thai')}>Thai</BuToggleButton>
                                            <BuToggleButton value='7' onClick={() => toggleButton('Chinese')}>Chinese</BuToggleButton>
                                            <BuToggleButton value='8' onClick={() => toggleButton('Mediterranean')}>Mediterranean</BuToggleButton>
                                            <BuToggleButton value='9' onClick={() => toggleButton('French')}>French</BuToggleButton>
                                            <BuToggleButton value='11' onClick={() => toggleButton('African')}>African</BuToggleButton>
                                            <BuToggleButton value='12' onClick={() => toggleButton('Korean')}>Korean</BuToggleButton>
                                            <BuToggleButton value='13' onClick={() => toggleButton('Brazilian')}>Brazilian</BuToggleButton>
                                </StyledToggleButtonGroup>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <CardTitle>Other</CardTitle>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                                <StyledToggleButtonGroup
                                        value={other}
                                        onChange={handleOther}
                                        aria-label="text alignment"
                                        color="primary"
                                        sx={{display:'flex', justifyContent:'flex-start', flexWrap:'wrap', alignContent:'space-around', alignItems:'flex-end',overflow:' auto'}}
                                        >
                                            <BuToggleButton value='1'  onClick={() => toggleButton('Family Friendly')}>Family Friendly</BuToggleButton>
                                            <BuToggleButton value='2' onClick={() => toggleButton('Clothing')}>Clothing</BuToggleButton>
                                            <BuToggleButton value='13' onClick={() => toggleButton('Souvenir')}>Souvenir</BuToggleButton>
                                            <BuToggleButton value='14'  onClick={() => toggleButton('Open Late')}>Open Late</BuToggleButton>
                                            <BuToggleButton value='15'  onClick={() => toggleButton('Outdoors')}>Outdoors</BuToggleButton>
                                            <BuToggleButton value='16' onClick={() => toggleButton('Spa/Relaxation')}>Spa/Relaxation</BuToggleButton>
                            </StyledToggleButtonGroup>
                        </Grid> 
                        <BuToggleButton value='16' sx={{marginright: '-2px'}} onClick={closeFilterMenu}>Apply</BuToggleButton>
                    </Grid>
                </ResponsiveFilter>
            </Modal>
            <BusinessCardList setCurrentId={setCurrentId} />
            <div style={{width: '60vw', margin: 'auto'}}>
            <Paginate page={page}/>  
            </div>
            
            <FourIconGrid />
        </>
    );
}
    
export default Discover;