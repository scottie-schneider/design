import styled from "styled-components";

const StyledBody = styled.div`
  font-family: "Helvetica Neue, Helvetica, sans-serif";
  background: #fff;
  font-size: 1.6rem;
  line-height: 2.4rem;
  min-height: 100%;
  color: #262;
  display: grid;
  grid: 74px 1fr max-content / 1fr;
  max-width: 100%;
  header,
  main,
  footer {
    padding: 0 16px;
  }
  header {
    background: #007340;
    box-shadow: 0 20px 50px -20px #007340;
    z-index: 1;
    display: grid;
    grid: 74px / 1fr 40px;
    align-content: center;
    align-items: center;
    img {
      border-radius: 100%;
      cursor: pointer;
    }
    a {
      display: flex;
      align-items: center;
      img {
        border-radius: 0;
        height: 3-px;
      }
    }
  }
  main {
    padding-top: 24px;
    background: #fff;
    display: grid;
    grid:
      "store-search" max-content
      "main-delivery" max-content
      "store-list" 1fr / 1fr;
    grid-row-gap: 24px;
    #store-search-container {
      grid-area: store-search;
      form {
        display: grid;
        grid: 1fr / 30px 1fr;
        align-content: center;
        align-items: center;
        border-bottom: 1px solid #8a8;
        img {
          width: 30px;
          height: 30px;
        }
      }
      input {
        border: none;
        outline: none;
        padding: 8px;
        font-size: 2rem;
        font-weight: bold;
        line-height: 2.4rem;
        background: transparent;
        color: #262;
        ::placeholder {
          color: #aca;
          font-weight: normal;
        }
      }
    }
    #main-delivery-container {
      grid-area: main-delivery;
      display: grid;
      grid: repeat(2, max-content) / auto-flow minmax(max-content, 1fr) minmax(
          max-content,
          3fr
        );
      grid-gap: 8px;
      padding-top: 16px;
      .main-delivery-label {
        color: #535331;
        font-weight: 400;
      }
      .main-delivery-choice {
        border: 1px solid #262;
        padding: 8px;
      }
    }
    #store-list-container {
      grid-area: store-list;
    }
  }
  footer {
    background: #fd0;
  }
`;

const UberEats = () => {
  return (
    <StyledBody>
      <header>
        <a href="#">
          <img src="/site-logo.svg" alt="Aussie Tucker" />
        </a>
        <img src="/profile-logo.svg" alt="Profile Settings" />
      </header>
      <main>
        <div id="store-search-container">
          <form>
            <img src="/store-search-icon.svg" />
            <input type="text" placeholder="Search for a place to eat" />
          </form>
        </div>{" "}
        <div id="main-delivery-container">
          <div className="main-delivery-label">When</div>
          <div className="main-delivery-choice">ASAP</div>
          <div className="main-delivery-label">To</div>
          <div className="main-delivery-choice">123 Main St</div>
        </div>
        <section id="store-list-container"> store list goes here</section>
      </main>
      <footer>Footer goes here</footer>
    </StyledBody>
  );
};

export default UberEats;
