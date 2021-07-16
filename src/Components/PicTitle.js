import React, { useState, useEffect } from "react";

function VideoTitle(props) {
    const { videoTitle } = props

    return (<h2>{videoTitle}</h2>)
}

export default VideoTitle