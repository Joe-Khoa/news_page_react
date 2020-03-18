import React, { Component } from 'react';
// import { BrowserRouter as NavLink } from "react-router-dom";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" style={{backgroundColor: 'rgba(203, 41, 66, 0.8)'}}>  
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href="/">Test React Router</a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i className="fas fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">

                            {/* <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="/news">News</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="/detail-news">Detail News</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="/contact">Contact</a>
                                </li>
                            </ul> */}
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <NavLink className="nav-link js-scroll-trigger" to="/home">Home</NavLink>                                        
                                    </li>                                    
                                    <li className="nav-item">
                                        <NavLink className="nav-link js-scroll-trigger" to="/news">News</NavLink>
                                    </li>
                                    {/* <li className="nav-item">
                                        <NavLink className="nav-link js-scroll-trigger" to="/detail-news">Detail News</NavLink>
                                    </li> */}
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                    </li>
                                    <Router></Router>   
                                    {/* Router_NO_USE_just_for_clear alert */}

                                </ul>
                            
                        </div>
                    </div>
                </nav>
        );
    }
}

export default Nav;