import styled from "styled-components";

const StyledBody = styled.body`
  display: grid;
  grid-template-rows: 95px 1fr 95px;
  header,
  footer,
  main {
    padding: 20px;
  }
  main {
    background: #fff;
  }
  header,
  footer {
    background: blue;
  }
  header h1,
  footer h2 {
    color: #fff;
  }
`;

const StickyFooter = () => {
  return (
    <StyledBody>
      <header>
        <h1>Header</h1>
      </header>
      <main>
        <section>
          <h2>MAIN SECTION</h2>
        </section>
      </main>
      <footer>
        <h2>Footer</h2>
      </footer>
    </StyledBody>
  );
};

export default StickyFooter;
