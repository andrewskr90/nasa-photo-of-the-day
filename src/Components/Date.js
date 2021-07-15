import React, { useState, useEffect } from "react";

function Date(props) {
    const { videoDate } = props

    return <div>
        <p>{videoDate}</p>
    </div>
}

export default Date