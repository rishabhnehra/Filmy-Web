import React from 'react'

const Youtube = ({ videos }) => (
    <div className='youtube'>
        {videos.map(video => <iframe
            className="video"
            src={`https://www.youtube.com/embed/${video.key}`}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="allowfullscreen"></iframe>)}
    </div>
)

export default Youtube