import React from "react";
import Date from "./Date";
import Pic from "./Pic";
import PicTitle from "./PicTitle";
import Description from "./Description";
import styled from "styled-components";

const StyledPostContainer = styled.div`
  width: 95%;
  margin: 2% 2%;
  padding: 0;
  border-style: solid;
  border-color: ${(props) => props.theme.primaryColor};
  border-width: 15px;
  color: ${(props) => props.theme.tertiaryColor};
  font-size: 1.5vw;
`;
const StyledPostHeader = styled.h1`
color: ${(props) => props.theme.secondaryColor};
font-size: ;
`

function Post(props) {
  const { data } = props;
  console.log(data);

  return (
    <StyledPostContainer>
      <StyledPostHeader>
        NASA
        <br />
        Photo of the Day
      </StyledPostHeader>
      <Date picDate={data.date} />
      <Pic picURL={data.url} />
      <PicTitle picTitle={data.title} />
      <Description description={data.explanation} />
    </StyledPostContainer>
  );
}
export default Post;
