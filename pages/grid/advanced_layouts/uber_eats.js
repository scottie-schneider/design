import styled from "styled-components";

const StyledBody = styled.body`
  font-family: "Helvetica Neue, Helvetica, sans-serif";
  background: #fff;
  font-size: 1.6rem;
  line-height: 2.4rem;
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
  }
  main {
    background: #fff;
  }
  footer {
    background: #fd0;
  }
`;

const UberEats = () => {
  return (
    <StyledBody>
      <header>Header goes here</header>
      <main>Main content goes here</main>
      <footer>Footer goes here</footer>
    </StyledBody>
  );
};

export default UberEats;
