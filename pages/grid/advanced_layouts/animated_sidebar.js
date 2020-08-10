import { useState } from "react";
import styled from "styled-components";

const StyledBody = styled.body`
  aside {
    display: flex;
    flex-direction: column;
    background: blue;
    color: #fff;
    padding: 20px;
    font-size: 3.5rem;
    position: relative;
    width: 103px;
    transition: width 350ms ease;
  }
  main {
    display: grid;
    height: 100%;
    grid-template-columns: auto 1fr;
  }
  main.opened-nav aside {
    width: 400px;
  }
  #hamburger-menu,
  #close-menu {
    position: absolute;
    font-size: 2rem;
    line-height: 2rem;
    color: #fff;
    text-decoration: none;
    z-index: 1000;
    cursor: pointer;
    transition: opacity 350ms;
  }
  #hamburger-menu {
    left: 20px;
  }
  #close-menu {
    right: 20px;
  }
`;

const AnimatedSidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <StyledBody>
      <main className={open ? "opened-nav" : ""}>
        <aside>
          {!open ? (
            <a onClick={() => setOpen(!open)} id="hamburger-menu" href="#">
              &#9776;
            </a>
          ) : (
            <a onClick={() => setOpen(!open)} id="close-menu" href="#">
              X
            </a>
          )}
        </aside>
        <section>
          <h1>Chapter 1</h1>
          <p>This is the content of chapter 1.</p>
          <p>This is just some extra page content</p>
        </section>
      </main>
    </StyledBody>
  );
};

export default AnimatedSidebar;
