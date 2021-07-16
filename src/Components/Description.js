import React, { useState, useEffect } from "react";
import styled from 'styled-components'

const DescriptionStyled = styled.div`
    margin: 2% 20%;
    line-height: 1.5;
`

function Description(props) {
    const { description } = props

    return <DescriptionStyled>
        <p>{description}</p>
    </DescriptionStyled>
}

export default Description