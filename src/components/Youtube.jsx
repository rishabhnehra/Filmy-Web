import React from 'react'

const Youtube = ({ videoID }) => (
    <div className='youtube'>
        <iframe 
        src={`https://www.youtube.com/embed/${videoID}`}
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
    </div>
)

export default Youtube