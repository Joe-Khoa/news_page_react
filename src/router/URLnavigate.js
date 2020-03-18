import React, { Component } from 'react';
import { BrowserRouter as Router, Route,} from "react-router-dom";

import Home from '../Components/Home';
import News from '../Components/News';
import DetailNews from '../Components/DetailNews';
import Contact from '../Components/Contact';



class URLnavigate extends Component {
    render() {
        return (
            
            <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />                    
                    <Route exact path="/news" component={News} />
                    <Route exact path="/detail-news/:slug.:id.html" component={DetailNews} />
                    <Route exact path="/contact" component={Contact} />
                    <Router></Router>
                    {/* Router_NO_USE_just_for_clear_alert */}

          </div>
        );
    }
}

export default URLnavigate;