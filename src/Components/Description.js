import React, { useState, useEffect } from "react";

function Description(props) {
    const { description } = props

    return <div>
        <p>{description}</p>
    </div>
}

export default Description