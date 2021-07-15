import React from "react";
import Date from './Date'
import Video from './Video'
import VideoTitle from './VideoTitle'
import Description from './Description'

function Post(props) {
    const { data } = props;
    console.log(data)

    return (
        console.log(data),
    <div className='post'>
        <Date videoDate={data.date} />
        <Video videoURL={data.url}/>
        <VideoTitle videoTitle={data.title}/>
        <Description description={data.explanation}/>
    </div>
    )
}
export default Post;