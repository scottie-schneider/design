import styled from "styled-components";

const StyledDiv = styled.div`
  height: 100%;
  background: #f7fafc;
  display: grid;
  grid:
    "header" 40px
    "main" 1fr / 1fr;
  header {
    display: flex;
    justify-content: space-between;
    grid-area: header;
    border: 1px solid red;
    img {
      height: 40px;
      width: 40px;
    }
    nav {
      ul {
        display: flex;
        li {
          list-style: none;
          a {
            text-decoration: none;
          }
        }
      }
    }
  }
  main {
    grid-area: main;
    border: 1px solid green;
  }
`;
const SimpleCentered = () => {
  return (
    <StyledDiv>
      <header>
        {/* Logo */}
        <img src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" />
        {/* Nav menu  */}
        <nav>
          <ul>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Marketplace</a>
            </li>
            <li>
              <a href="#">Company</a>
            </li>
          </ul>
        </nav>
        {/* Log in button */}
        <button className="login">Log in</button>
      </header>
      <main>
        <h1>
          Data to enrich your{" "}
          <span className="highlighted">online business</span>
        </h1>
        <h3 className="subtext">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </h3>
        <button className="start">Get started</button>
        <button className="demo">Live demo</button>
      </main>
    </StyledDiv>
  );
};
export default SimpleCentered;
