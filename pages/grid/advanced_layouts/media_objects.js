import styled from "styled-components";

const StyledBody = styled.body`
  height: 100%;
  padding: 20px 50px;
  font-size: 1.6rem;
  .container {
    background: #fff;
    margin: 0;
    height: 100%;
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .media,
  .comment {
    display: grid;
  }
  .media {
    grid-template-columns: 48px 1fr;
    grid-column-gap: 15px;
    background: #0048aa;
    color: #fff;
    padding: 15px;
    width: 100%;
    max-width: 600px;
    margin-bottom: 40px;
    box-sizing: border-box;
    img {
      border-radius: 100%;
      width: 48px;
      height: 48px;
    }
    h2 {
      font-size: 1.6rem;
      margin-top: 0;
      margin-bottom: 1.3rem;
      color: #fff;
    }
    section {
      font-size: 1.3rem;
      p {
        margin-bottom: 0.6rem;
      }
    }
    .comment {
      grid-template-columns: 32px 1fr;
      grid-column-gap: 8px;
      background: #ccddff;
      padding: 7px;
      color: #131;
      margin-top: 15px;
      margin-bottom: 5px;
      img {
        width: 32px;
        height: 32px;
      }
      h3 {
        font-size: 1.3rem;
        margin-top: 0;
        margin-bottom: 1.1rem;
        color: #131;
      }
      section {
        font-size: 1.1rem;
      }
    }
  }
`;

const MediaObjects = () => {
  return (
    <StyledBody>
      <div className="container">
        <div className="media">
          <img src="https://randomuser.me/api/portraits/women/15.jpg" />
          <section>
            <h2>Media Item</h2>
            <p>This is a media item. I think it's really cool.</p>
            <div className="comment">
              <img src="https://randomuser.me/api/portraits/women/16.jpg" />
              <section>
                <h3>Comment 1</h3>
                <p>This is a really cool comment</p>
              </section>
            </div>
            <div className="comment">
              <img src="https://randomuser.me/api/portraits/women/18.jpg" />
              <section>
                <h3>Comment 1</h3>
                <p>This is a really cool comment</p>
              </section>
            </div>
          </section>
        </div>
      </div>
    </StyledBody>
  );
};

export default MediaObjects;
