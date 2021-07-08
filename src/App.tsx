import React from "react";
import styled from "styled-components";
import { AssetCacher } from "./AssetCacher";
import { IMAGE_MAIN } from "./assetURLs";
import { GlobalStyle } from "./GlobalStyles";

const IMAGE_WIDTH = 400;
const IMAGE_HEIGHT = 600;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />

      <Container>
        <Title>Trying to see if this image gets precached...</Title>

        <ImageContainer>
          <img
            src={IMAGE_MAIN}
            alt=""
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
          />
        </ImageContainer>

        {/* <AssetCacher /> */}

        {process.env.NODE_ENV !== "development" && (
          <p>version: {process.env.REACT_APP_GITHASH}</p>
        )}
      </Container>
    </>
  );
};

export default App;

const Container = styled.div`
  padding: 1em;
`;

const Title = styled.h1`
  margin-bottom: 1em;
`;

const ImageContainer = styled.div`
  background: pink;
  width: ${IMAGE_WIDTH}px;
  height: ${IMAGE_HEIGHT}px;
  margin-bottom: 1em;
`;
