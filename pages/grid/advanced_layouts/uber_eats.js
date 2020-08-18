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
        <div id="main-delivery-container">Main delivery form goes here </div>
        <section id="store-list-container"> store list goes here</section>
      </main>
      <footer>Footer goes here</footer>
    </StyledBody>
  );
};

export default UberEats;
