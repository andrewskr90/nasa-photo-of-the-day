import React, { useState, useEffect } from "react";

function VideoTitle(props) {
    const { videoTitle } = props

    return (<p>{videoTitle}</p>)
}

export default VideoTitle