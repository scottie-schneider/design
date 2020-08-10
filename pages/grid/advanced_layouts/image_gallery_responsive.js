import styled from "styled-components";
import ImageGallery from "./image_gallery";

const StyledBody = styled.body`
  #photo-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 200px;
    grid-gap: 10px;
    background: #fff;
    justify-content: center;
    align-items: center;
    min-height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

const ImageGalleryResponsive = () => {
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

export default ImageGalleryResponsive;
