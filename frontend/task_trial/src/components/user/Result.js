import React from 'react'
import { useLocation } from 'react-router-dom';

const Result = () => {
    const location = useLocation();
    const { marks } = location.state || {};

    return(
       <h1 className='card-title'>{marks}</h1>
    )
}
export default Result;