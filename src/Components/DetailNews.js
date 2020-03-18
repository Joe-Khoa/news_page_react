import React, { Component } from 'react';
import data from './data.json'
import RelatedNews from './RelatedNews'
import {to_slug}  from './helper'


class DetailNews extends Component {


    render() {

        // var current_new = ''
        // data.forEach((value,key) => {
        //     if (value.id == id){
        //         current_new= value;
        //         return
        //     }
        // });
                
        return (
        <div className="mb-5">
                <header className="masthead_1">
                    <div className="container ">
                    <div className="row">
                        {/* <div class="col-lg-7 my-auto">
                    <div class="header-content mx-auto">
                    <h1 class="mb-5">New Age is an app landing page that will help you beautifully showcase your new mobile app, or anything else!</h1>
                    <a href="#download" class="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
                    </div>
                </div> */}
                        <div className="col-12 justify-content-center d-flex mt-5">
                        <h1 className="mt-5 text-info font-weight-normal">DETAIL NEWS PAGE</h1>
                        </div>
                    </div>
                    </div>
                </header>
                <div className="container ">
                    <div id="news_id_master" className="news ">
                        {                            
                            data.map( (value,key) => {
                                        if (value.id === parseInt(this.props.match.params.id)  ){
                                            return (
                                                <div className="card-group m-5 col-10" key = {key}>        
                                                    <div className="card border-0">
                                                    <img className="card-img-top p-5" src={value.img} alt="" />
                                                    <div className="card-body">
                                                        <h3 className="card-title text-info">{value.title}</h3>
                                                        <p className="card-text">{value.content}</p>
                                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                    </div>
                                                    </div>
                                                </div>    
                                            )
                                        }
                                        return true
                                    }
                            )
                        }

                        <div className="card-group">
                                {
                                    data.map( (value,key) => {
                                        if( key < 4 ){
                                            return (
                                                <RelatedNews key = {key}
                                                img_ = {value.img}
                                                title_ = {value.title}
                                                description_ = {value.description}
                                                url_ = {"/detail-news/"+to_slug(value.title)+"."+value.id+".html"}
                                                />
                                            )
                                        }
                                        return true
                                    })   
                                }
                                    


                        </div>  
                    
                    </div>
                </div>
        </div>
        );
    }
}

export default DetailNews;