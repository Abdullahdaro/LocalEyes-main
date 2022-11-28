import React from 'react';
import { Route, Switch} from 'react-router-dom';
import { ThemeProvider} from '@material-ui/core';
import theme from './CustomTheme';
import { GoogleOAuthProvider } from '@react-oauth/google';
import dotenv from "dotenv";
import Auth from './pages/Auth';

import HomePage from './pages/HomePage';
import Discover from './pages/Discover';
import Hosts from './pages/Hosts';
import Vendors from './pages/Vendors';
import AboutUs from './pages/AboutUs';
import MyList from './pages/MyList';
import Admin from './pages/Admin';
import Navbar from './components/Layout/Navbar.js';
import Footer from './components/Layout/Footer.js';
import PostDetails from './components/PostDetails/PostDetails.js';
dotenv.config()

const App = () => {

    console.log(process.env.REACT_APP_PORT);
    return (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_API_TOKEN}>
            <ThemeProvider theme={theme}>
                <Navbar />
                <Switch>
                    <Route path='/' exact>
                        <HomePage />
                    </Route>
                    <Route path='/discover' exact component={Discover}/>
                    <Route path='/discover/search' exact component={Discover}/>
                    <Route path='/discover/:customURL' component={PostDetails}/>
                    <Route path='/hosts' exact>
                        <Hosts />
                    </Route>
                    <Route path='/vendors' exact>
                        <Vendors />
                    </Route>
                    <Route path='/aboutus' exact>
                        <AboutUs />
                    </Route>
                    <Route path='/mylist' exact>
                        <MyList />
                    </Route>
                    <Route path='/admin' exact>
                        <Admin />
                    </Route>
                    <Route path='/auth' exact>
                        <Auth />
                    </Route>
                </Switch>
                <Footer />
            </ThemeProvider>    
        </GoogleOAuthProvider>
    );
}

export default App;