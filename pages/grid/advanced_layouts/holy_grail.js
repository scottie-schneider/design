import styled from "styled-components";

const StyledBody = styled.body`
  h1 {
    font-size: 1.6rem;
    font-weight: normal;
  }
  #holygrail-container {
    display: grid;
    grid:
      "header header header" 72px
      "nav main aside" 1fr
      "footer footer footer" 72px
      / 162px 1fr 162px;
    background: #fff;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
  }
  header,
  footer {
  }
  header {
    grid-area: header;
  }
  footer {
    grid-area: footer;
  }
  nav {
    grid-area: nav;
  }
  section {
    grid-area: main;
  }
  aside {
    grid-area: aside;
  }
  header,
  footer,
  nav,
  aside,
  section {
    padding: 20px;
    border: 1px solid #000;
    text-align: center;
  }
`;

const HolyGrail = () => {
  return (
    <StyledBody>
      <div id="holygrail-container">
        <header>Header</header>
        <nav>Navigation</nav>
        <section>
          <h1>Main section</h1>
        </section>
        <aside>Aside</aside>
        <footer>Footer</footer>
      </div>
    </StyledBody>
  );
};

export default HolyGrail;
