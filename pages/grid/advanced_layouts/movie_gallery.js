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
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 92vw;
    align-items: center;
    grid-gap: 8vw;
    padding: 4vw 0;
    overflow-x: scroll;
  }

  #gallery > article {
    display: grid;
    align-items: end;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    width: 92vw;
    height: 100%;
  }

  .details {
    height: 30vw;
    padding: 2vw 2vw;
    background: rgba(0, 0, 0, 0.4);
  }

  #gallery > article h2 {
    margin-bottom: 1vw;
    font-size: 10vw;
  }

  #gallery > article p {
    font-size: 4vw;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  @media (orientation: landscape) {
    body > header {
      padding-top: 3vh;
      padding-left: 2vw;
      padding-right: 2vw;
      height: 10vh;
    }

    h1 {
      font-size: 4vh;
      margin-bottom: 3vh;
    }

    body > main {
      margin-top: 10vh;
      padding: 0 2vw;
    }

    #gallery {
      padding: 4vh 0;
    }

    #gallery > article {
      background-size: 70vh 92vh;
      background-position: left top;
    }

    .details {
      margin-left: 75vh;
      height: 100%;
      padding: 2vh 2vh;
      padding-top: 0;
      background: transparent;
    }

    #gallery > article h2 {
      margin-bottom: 2vh;
      font-size: 7vh;
    }

    #gallery > article p {
      font-size: 4vh;
    }
  }

  @media (orientation: portrait) and (min-width: 768px) {
    body > header {
      padding-top: 3vw;
      padding-left: 4vw;
      padding-right: 4vw;
    }

    h1 {
      font-size: 4vw;
      margin-bottom: 3vw;
    }

    .details {
      padding: 2vw 2vw;
      height: 20vw;
    }

    #gallery > article h2 {
      font-size: 5vw;
    }

    #gallery > article p {
      font-size: 3vw;
    }
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
          <article id="one">
            <div class="details">
              <h2>Charlie's Elders</h2>
              <p>From angels to elders. But these women can still kick butt.</p>
            </div>
          </article>
          <article id="two">
            <div class="details">
              <h2>Equal Minds</h2>
              <p>
                A battle between 2 evenly gifted students leads down a horrific
                road.
              </p>
            </div>
          </article>
          <article id="three">
            <div class="details">
              <h2>The Larper</h2>
              <p>
                You thought you were safe, but this man takes larping way too
                far.
              </p>
            </div>
          </article>
          <article id="four">
            <div class="details">
              <h2>Uncle Pete</h2>
              <p>
                He's brutal. He's nasty. He's family. He's good old Uncle Pete.
              </p>
            </div>
          </article>
          <article id="five">
            <div class="details">
              <h2>Bus Driver</h2>
              <p>
                Always say thank you to the bus driver. Otherwise it could be
                game over.
              </p>
            </div>
          </article>
          <article id="six">
            <div class="details">
              <h2>Prepared</h2>
              <p>
                He came, he saw, he made a big mistake. She was ready for him.
              </p>
            </div>
          </article>
          <article id="seven">
            <div class="details">
              <h2>Traffic Jam</h2>
              <p>
                Watch how the world changes when New York has one of the worst
                traffic jams in history.
              </p>
            </div>
          </article>
          <article class="feature-movie" id="eight">
            <div class="details">
              <h2>Repetition</h2>
              <p>
                One year after a serial killer rampage, a copycat has returned
                to finish his work.
              </p>
            </div>
          </article>
          <article id="nine">
            <div class="details">
              <h2>Rudolph</h2>
              <p>A story of a puppy who saves Christmas.</p>
            </div>
          </article>
        </div>
      </main>
    </StyledBody>
  );
};

export default MovieGallery;
