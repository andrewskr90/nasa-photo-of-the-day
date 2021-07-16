import React, { useState, useEffect } from "react";
import styled from 'styled-components'

const StyledPic = styled.img`
    border-style: solid;
    border-color: ${props => props.theme.secondaryColor};
    border-width: 10px;
    width: auto;
    height: 40vw;
`


function Pic(props) {
    const { picURL } = props
    console.log(picURL)
    return (<div>
        <StyledPic src={picURL}>
        
        </StyledPic>
    </div>)
}

export default Pic