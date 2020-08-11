import styled from "styled-components";

const StyledBody = styled.body`
  font-size: 10px;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  background: #2c2c2c;
  color: #f2f1f3;
  display: flex;
  header {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    height: 14vw;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #fff;
    padding-left: 4vw;
    padding-right: 4vw;
    h1 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 6vw;
      margin-bottom: 4vw;
    }
  }
  #gallery {
    padding: 4vw 0;
    article {
      display: grid;
      align-items: end;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      position: relative;
      width: 92vw;
      height: 100%;
      h2 {
        margin-bottom: 1vw;
        font-size: 10vw;
      }
      p {
        font-size: 4vw;
      }
    }
  }
  .details {
    height: 30vw;
    padding: 2vw 2vw;
    background: rgba(0, 0, 0, 0.4);
  }
  .main-movie {
    background-image: url("/the-arcade.jpg");
  }
  main {
    flex: 1 0 0;
    background: #111;
    display: flex;
    padding: 0 4vw;
    margin-top: 14vw;
  }
`;

const MovieGallery = () => {
  return (
    <StyledBody>
      <header>
        <h1>Movie Gallery</h1>
      </header>
      <main>
        <div id="gallery">
          <article className="main-movie">
            <div className="details">
              <h2>The Arcade</h2>
              <p>
                A man is locked in a game arcade overnight. Little does he know
                what's in store for him...
              </p>
            </div>
          </article>
        </div>
      </main>
    </StyledBody>
  );
};

export default MovieGallery;
