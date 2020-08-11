import styled from "styled-components";

const StyledBody = styled.body`
  h1 {
    text-align: center;
    font-size: 4vmin;
    margin: 3vmin;
  }
  article,
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    font-size: 1.8vmin;
  }
  main {
    display: grid;
    grid-template-columns: repeat(30, 2.25vmin);
    grid-auto-rows: 10vmin;
    justify-content: center;
    grid-gap: 1vmin;
  }
  .main-article {
    grid-area: 1 / 1 / 4 / 12;
  }
  .supporting-article {
    grid-column: span 11;
  }
  .quick-links {
    grid-column-start: 23;
    grid-row-start: 1;
    grid-column-end: span 8;
    grid-row-end: span 2;
  }
  .feature-article {
    grid-column-start: 23;
    grid-column-end: span 8;
  }
  .feature-article:nth-of-type(8) {
    grid-row: 3;
  }
  .feature-article:nth-of-type(9) {
    grid-row: 4;
  }
  .feature-article:nth-of-type(10) {
    grid-row: 5;
  }
  .national-article {
    order: 1;
    grid-column: span 10;
  }
`;

const Newspaper = () => {
  return (
    <StyledBody>
      <header>
        <h1>Lyrad Newspaper</h1>
      </header>
      <main>
        <article class="supporting-article">
          <header>
            <h2>Supporting Article 1</h2>
          </header>
        </article>
        <article class="supporting-article">
          <header>
            <h2>Supporting Article 2</h2>
          </header>
        </article>
        <article class="supporting-article">
          <header>
            <h2>Supporting Article 3</h2>
          </header>
        </article>
        <article class="supporting-article">
          <header>
            <h2>Supporting Article 4</h2>
          </header>
        </article>
        <article class="national-article">
          <header>
            <h2>National Article 1</h2>
          </header>
        </article>
        <article class="supporting-article">
          <header>
            <h2>Supporting Article 5</h2>
          </header>
        </article>
        <article class="supporting-article">
          <header>
            <h2>Supporting Article 6</h2>
          </header>
        </article>
        <article class="feature-article">
          <header>
            <h2>Feature Article 1</h2>
          </header>
        </article>
        <article class="feature-article">
          <header>
            <h2>Feature Article 2</h2>
          </header>
        </article>
        <article class="feature-article">
          <header>
            <h2>Feature Article 3</h2>
          </header>
        </article>
        <section class="quick-links">
          <header>
            <h2>Quick links</h2>
          </header>
        </section>
        <article class="national-article">
          <header>
            <h2>National Article 2</h2>
          </header>
        </article>
        <article class="main-article">
          <header>
            <h2>Main Article</h2>
          </header>
        </article>
        <article class="national-article">
          <header>
            <h2>National Article 3</h2>
          </header>
        </article>
        <article class="national-article">
          <header>
            <h2>National Article 4</h2>
          </header>
        </article>
        <article class="supporting-article">
          <header>
            <h2>Supporting Article 7</h2>
          </header>
        </article>
        <article class="national-article">
          <header>
            <h2>National Article 5</h2>
          </header>
        </article>
        <article class="national-article">
          <header>
            <h2>National Article 6</h2>
          </header>
        </article>
      </main>
    </StyledBody>
  );
};

export default Newspaper;
