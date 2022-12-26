import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useTheme, useMediaQuery} from '@material-ui/core';
import { getPost, getPostsBySearch, savePost } from '../../actions/posts';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import useStyles from './detailsStyles';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DirectionsIcon from '@mui/icons-material/Directions';
import InstagramIcon from '@mui/icons-material/Instagram';
import Food1 from '../../images/Food1.png';
import Food2 from '../../images/Food2.png';
import Food4 from '../../images/Food4.png';
import Food5 from '../../images/Food5.png';
/* import { CardActions, Button } from '@mui/material'; */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const PostDetails = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const { post, posts } = useSelector((state) => state.posts);
  const theme = useTheme();
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();
  const showMedium = useMediaQuery(theme.breakpoints.up('md'));
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  const handleSave = async () => {
    dispatch(savePost(post._id));
  };

  const ReviewText = styled('p')(({ theme }) => ({
    fontFamily: 'Red Hat Display',
    textDecoration: "none",
    margin: '0px',
    marginLeft: '5px',
    padding: '0px',
    color: '#110B79',
    marginRight: '10px',
    [theme.breakpoints.down('md')]: {
        fontSize: "14px",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "18px",
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: "20px",
    },
  }));

  const ButtonLink = styled(Button)(({ theme }) => ({
    backgroundColor: "#F5F5F7",
    padding: '5px',
    borderRadius: '6px',
    margin: '5px 10px 0px 0px',
    fontFamily: 'Red Hat Display',
    fontSize: '18px',
    color: '#110B79',
    border: 'None', 
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px', 
    textTransform: 'none',
    [theme.breakpoints.up('md')]: {
      fontSize: '20px', 
    },
  }));

  const CardTitle = styled('h1')(({ theme }) => ({
    fontFamily: 'Red Hat Display',
    textDecoration: "none",
    fontWeight: 'Bold',
    padding: '0px',
    margin: '0px',
    fontSize: '20px'
  }));

  const SubText = styled('p')(({ theme }) => ({
    fontFamily: 'Red Hat Display',
    textDecoration: "none",
    margin: '0px',
    padding: '0px',
    color: '#95A5A6',
    [theme.breakpoints.down('md')]: {
        fontSize: "14px",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "16px",
    },
  }));

  useEffect(() => {
    if(post){
      dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',')}))
    }
  }, [post])

  if (!post) return null;
  
  
   const openPost = (_id) => {
     history.push(`/discover/${_id}`);
   };

   const recommendedPosts = posts.filter(({_id}) => _id !== post._id);

  return (
    <div className={classes.main}>

    <Grid container position='relative'>
      <Grid item xs={12} md={6} lg={4} className={classes.img1}>
        <img src={Food4} alt="Burger" width="100%" height="auto"></img>
      </Grid>
      <Grid item xs={0} md={6} lg={4} className={classes.img2}>
        <img src={Food1} alt="Salmon" width="100%" height="auto"></img>
      </Grid>
      <Grid item xs={0} md={0} lg={4} className={classes.img3}>
        <img src={Food2} alt="Burger Meal" width="100%" height="auto"></img>
      </Grid>
      <h1 className={classes.imgText}>{post.title}</h1>
      <button className={classes.backBtn} onClick={() => history.goBack()}>Back</button>
    </Grid>


    <div className={classes.businessInfo}>
      <div className={classes.businessHead}>
        <h1 className={classes.description}>{post.description}</h1>
        <div className={classes.rating}>
              <Rating name="rating" defaultValue={post.rating} precision={0.5} size='medium' readOnly/>
            <ReviewText>100 Reviews</ReviewText>
          </div>
        </div>
        <div className={classes.btnContainer}>
        {/* <Button size="small" color="primary"  > */}
        {showMedium &&<button disabled={!user?.result} onClick={handleSave} title="Add to MyList" className={classes.addBtn}>Add to My List</button>}
        <ButtonLink className={classes.btn} startIcon={<DirectionsIcon />}>Directions</ButtonLink>
        <ButtonLink className={classes.btn} startIcon={<PhoneIcon />}>Call Us</ButtonLink>
        <ButtonLink className={classes.btn} startIcon={<InstagramIcon />}>Instagram</ButtonLink>
        <ButtonLink className={classes.btn} startIcon={<LanguageOutlinedIcon />}>Website</ButtonLink>
        </div>
        
      <section className={classes.businessParagraph}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </section>
    </div>
    <div className={classes.localBusinesses}>
      <h1 className={classes.localHeading}>More Local Businesses</h1>

      
        {recommendedPosts.length && (
          <Grid container rowSpacing={1} columnSpacing={2} sx={{maxWidth:'67rem', justifycontent:'center', alignItems:'center', margin:'auto',}}>
            {recommendedPosts.map(({ title, description, _id}) => (
            <Grid item xs={6} md={4} lg={4}>
              <div onClick={() => openPost(_id)} >
            <Card  sx={{border: "none", boxShadow: "none", cursor:"pointer",}}  key={_id}>
              <CardMedia component="img" height="200" src={Food1} alt="food"/>
              <CardContent sx={{padding: "0",}}>
                <CardTitle>{title}</CardTitle>
                <SubText>{description}</SubText>
              </CardContent>
            </Card>
            </div>
          </Grid>         
         ))}
          </Grid>
        )}
    </div>

    </div>

  

  )
}

export default PostDetails
