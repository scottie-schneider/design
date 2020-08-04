import styled from "styled-components";

const StyledBody = styled.body`
  .container {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(4, 1fr);
  }
  .column {
    font-size: 1.6rem;
    padding: 20px;
    background: #0048aa;
    color: #fff;
    border: 2px solid #eee;
  }
`;

const FourColumnLayout = () => {
  return (
    <StyledBody>
      <div className="container">
        <div className="column">1</div>
        <div className="column">2</div>
        <div className="column">3</div>
        <div className="column">4</div>
      </div>
    </StyledBody>
  );
};

export default FourColumnLayout;
