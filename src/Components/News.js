import React, { Component } from 'react';
import NewsItem from './NewsItem'
import data from './data.json'
import {to_slug}  from './helper'



class News extends Component {

    render() {
        
        // console.log(data);
        // map fn :
        // var number = [1,2,3,4,5,6]
        // var no_2 = number.map( (value,key) => value*3+' key is: '+key)
        // console.log(no_2)

        return (
                <div>
                    <header className="masthead_1">
                    <div className="container ">
                        <div className="row">
                        <div className="col-12 justify-content-center d-flex mt-5">
                            <h1 className="mt-5 text-info font-weight-normal">NEWS PAGE</h1>
                        </div>
                        </div>
                    </div>
                    </header>
                    <div className="container ">
                        <div className="news row ">
                                    {
                                        data.map(
                                                    (value,key) =>{
                                                    return  (
                                                            <NewsItem key = {key}
                                                            img = {value.img}
                                                            title_ = {value.title}
                                                            description_ = {value.description}
                                                            url_ = {"/detail-news/"+to_slug(value.title)+"."+value.id+".html"}
                                                            />
                                                        )
                                                    }
                                                )

                                    }



                        </div>
                    </div>
                </div>
        );
    }
}

export default News;