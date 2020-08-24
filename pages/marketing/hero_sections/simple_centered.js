import styled from "styled-components";

const StyledDiv = styled.div`
  height: 100%;
  background: #f7fafc;
  display: grid;
  grid:
    "header" 40px
    "main" 1fr / 1fr;
  header {
    .login {
      background: white;
      width: 80px;
      height: 42px;
      padding: 0.5rem 1rem;
      color: #434190;
      line-height: 1.5rem;
      font-size: 1rem;
      font-weight: 500;
      display: inline-flex;
      border-radius: 0.375rem;
      border: transparent;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06);
    }
    display: flex;
    justify-content: space-between;
    grid-area: header;
    img {
      height: 40px;
      width: 40px;
    }
    nav {
      display: flex;
      ul {
        display: flex;
        align-items: center;
        li {
          &:not(:first-child) {
            margin-left: 40px;
          }
          list-style: none;
          a {
            text-decoration: none;
            font-weight: 500;
            color: #4a5568;
            &:hover {
              color: #1a202c;
            }
          }
        }
      }
    }
  }
  main {
    grid-area: main;
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
