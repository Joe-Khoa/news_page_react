import React, { Component } from 'react';

class RelatedNews extends Component {
    render() {
        // console.log(this.props);
        return (
            
            
            <div className="card col-4 mb-4 ">
                <a href= {this.props.url_} >
                    <img className="card-img-top p-3 card_realted_news_img" src={this.props.img_} alt="" />
                </a>
                <div className="card-body p-3">
                    <a href= {this.props.url_} className="card-title text-info card_news_title">
                        <h4>{this.props.title_}</h4>
                    </a>
                    <p className="card-text">{this.props.description_}</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        );
    }
}

export default RelatedNews;