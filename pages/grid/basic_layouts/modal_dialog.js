import styled from "styled-components";

const StyledBody = styled.body`
  .overlay {
    display: grid;
    grid: 1fr/1fr;
    place-items: center center;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
  }
  .modal-container {
    background: #fff;
    width: 400px;
    height: 300px;
    padding: 20px;
    box-sizing: border-box;
  }
  .modal-content {
    text-align: center;
  }
  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 1.6rem;
  }
`;

const ModalDialog = () => {
  return (
    <StyledBody>
      <div className="overlay">
        <div className="modal-container">
          <section className="modal-content">
            <h1>Modal heading</h1>
            <p>Modal Content</p>
          </section>
        </div>
      </div>
    </StyledBody>
  );
};
export default ModalDialog;
