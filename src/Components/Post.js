import React, { useState, useEffect } from "react";
import Date from './Date'
import Video from './Video'
import VideoTitle from './VideoTitle'
import Description from './Description'

function Post(props) {
    const { data } = props;

    return (
        <div className='post'>
        <Date videoDate={data.date} />
        <Video videoURL={data.url}/>
        <VideoTitle title={data.title}/>
        <Description description={data.explanation}/>
    </div>
    )
}
export default Post;