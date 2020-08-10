import styled from "styled-components";

const StyledBody = styled.body`
  #photo-gallery {
    display: inline-grid;
    grid-template-columns: repeat(4, 22vmin);
    grid-auto-rows: 22vmin;
    grid-gap: 2vmin;
    padding: 1vmin;
    background: #fff;
  }
  img {
    width: 100%;
    height: 100%;
  }
  img:nth-of-type(6) {
    grid-area: 2 / 2 / 4 / 4;
  }
`;

const ImageGallery = () => {
  return (
    <StyledBody>
      <div id="photo-gallery">
        <img src="/adventure-calm-clouds.jpg" alt="Adventure Calm Clouds" />
        <img src="/clouds-country-daylight.jpg" alt="Clouds Country Daylight" />
        <img src="/bright-clouds-country.jpg" alt="Bright Clouds Country" />
        <img src="/blue-sky-clear-sky-cold.jpg" alt="Blue Sky Clear Sky Cold" />
        <img src="/cascade-clouds.jpg" alt="Cascade Clouds" />
        <img src="/clouds-conifer-daylight.jpg" alt="Clouds Conifer Daylight" />
        <img
          src="/daylight-environment-forest.jpg"
          alt="Daylight Environment Forest"
        />
        <img
          src="/adventure-beautiful-boardwalk.jpg"
          alt="Adventure Beautiful Boardwalk"
        />
        <img
          src="/aerial-alpine-ceresole-reale.jpg"
          alt="Aerial Alpine Ceresole Reale"
        />
        <img
          src="/landscape-mountains-scenic.jpg"
          alt="Landscape Mountains Scenic"
        />
        <img src="/forest.jpg" alt="Forest" />
        <img src="/boat-daylight.jpg" alt="Boat Daylight" />
        <img src="/long-exposure.jpg" alt="Long Exposure" />
      </div>
    </StyledBody>
  );
};

export default ImageGallery;
