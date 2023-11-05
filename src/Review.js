import React, { useState } from 'react';
import {FaChevronLeft,FaChevronRight,FaQuoteRight} from 'react-icons/fa';
import people from './data';

const Review = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];
    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img' />
                <span className='quote-icon'><FaQuoteRight/></span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div>
                <button className='prev-btn'><FaChevronLeft/></button>
                <button className='next-btn'><FaChevronRight/></button>
            </div>
            <button>surprise me</button>

        </article>
    )
}
export default Review;