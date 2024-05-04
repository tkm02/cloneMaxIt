import React from 'react';
import "../Styles/news.css"
const News = ({title}) => {
    return (
        <div className='news-container'>
            <div className='news-image'>
              
            </div>
            <h3>{title}</h3>
        </div>
    );
}

export default News;
