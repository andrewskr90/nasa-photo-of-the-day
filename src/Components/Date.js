import React, { useState, useEffect } from "react";
import styled from 'styled-components'

const StyledDate = styled.div`

`

function Date(props) {
    const { picDate } = props

    return (
    <div>
        <p>{picDate}</p>
    </div>)
}

export default Date