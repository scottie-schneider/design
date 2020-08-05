import styled from "styled-components";

const StyledBody = styled.body`
  main {
    height: 100%;
    display: grid;
    grid-template-columns: 180px 1fr;
  }
  aside {
    background: blue;
    color: #fff;
    font-size: 1.6rem;
  }
  section {
    background: #fff;
  }
  aside,
  section {
    padding: 20px;
  }
  h1 {
    font-size: 2rem;
  }
`;

const Sidebar = () => {
  return (
    <StyledBody>
      <main>
        <aside>Side bar content</aside>
        <section>
          <h1>Page heading</h1>
          <p>This is just some page content</p>
        </section>
      </main>
    </StyledBody>
  );
};

export default Sidebar;
