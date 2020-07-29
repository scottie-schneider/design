import styled from "styled-components";

const StyledBody = styled.body`
  background: lightskyblue;
  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10px;
    background: linear-gradient(to right, #57c1eb 0%, #246fa8 100%);
    height: 100%;
  }

  body {
    height: 100%;
    box-sizing: border-box;
    padding: 20px 50px;
  }

  .container {
    background: #fff;
    margin-top: 30px;
    margin-right: 30px;
  }

  .item {
    font-size: 1.6rem;
    padding: 20px;
    background: #0048aa;
    color: #fff;
    border: 2px solid #eee;
  }
  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .default-container > .item:nth-of-type(3) {
    grid-column-start: span 3;
  }

  .item-one-to-last-spot-container > .item:first-of-type {
  }

  .last-item-to-first-spot-container > .item:last-of-type {
  }

  .all-even-items-first-container > .item:nth-of-type(even) {
  }

  .jumbled-container > .item:first-of-type {
  }

  .jumbled-container > .item:nth-of-type(2) {
  }

  .jumbled-container > .item:nth-of-type(3) {
  }

  .jumbled-container > .item:last-of-type {
  }
`;

const Intro = () => {
  return (
    <StyledBody>
      <div class="container default-container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
        <div class="item">7</div>
        <div class="item">8</div>
      </div>

      <div class="container item-one-to-last-spot-container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
        <div class="item">7</div>
        <div class="item">8</div>
      </div>

      <div class="container last-item-to-first-spot-container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
        <div class="item">7</div>
        <div class="item">8</div>
      </div>

      <div class="container all-even-items-first-container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
        <div class="item">7</div>
        <div class="item">8</div>
      </div>

      <div class="container jumbled-container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
      </div>
    </StyledBody>
  );
};

export default Intro;
