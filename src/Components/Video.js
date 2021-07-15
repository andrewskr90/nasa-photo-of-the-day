import React, { useState, useEffect } from "react";

function Video(props) {
    const { videoURL } = props

    return (<div>
        <iframe
        src={videoURL}
        />
    </div>)
}

export default Video