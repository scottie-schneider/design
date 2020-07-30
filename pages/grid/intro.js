import styled from "styled-components";

const StyledBody = styled.body`
  background: lightskyblue;
  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10px;
    background: linear-gradient(to right, #57c1eb 0%, #246fa8 100%);
    height: 100%;
  }

  body {
    display: grid;
    height: 100%;
    grid-template-columns: 1fr 250px;
    grid-template-rows: max-content 480px max-content 1fr max-content;
    grid-template-areas:
      "header header"
      "video-player related-videos"
      "video-title related-videos"
      "comments related-videos"
      "footer footer";
  }

  body > header {
    border: 1px solid gray;
    grid-area: header;
  }

  body > footer {
    border: 1px solid gray;
    grid-area: footer;
  }

  #video-player-section {
    border: 1px solid gray;
    grid-area: video-player;
  }

  #video-title-section {
    border: 1px solid gray;
    grid-area: video-title;
  }

  #video-comments-section {
    border: 1px solid gray;
    grid-area: comments;
  }

  #related-videos-section {
    border: 1px solid gray;
    grid-area: related-videos;
  }
`;

const Intro = () => {
  return (
    <StyledBody>
      <header>Header Section</header>
      <div id="video-player-section">Video Player Section</div>
      <div id="video-title-section">Video Title Section</div>
      <div id="video-comments-section">Video Comments Section</div>
      <div id="related-videos-section">Related Videos Section</div>
      <footer>Footer Section</footer>
    </StyledBody>
  );
};

export default Intro;
