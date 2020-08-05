import styled from "styled-components";

const StyledBody = styled.body`
  .container {
    background: #fff;
    border-radius: 5px;
    margin: 0;
    height: 100%;
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  form {
    width: 600px;
    padding: 20px;
    border-radius: 5px;
    border: 1px solid gray;
  }
  h3 {
    color: blue;
    text-align: center;
    margin-bottom: 0.8rem;
  }
  fieldset {
    background: #eee;
    padding: 8px 10px;
    border: none;
  }
  .formfields {
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-row-gap: 1rem;
    align-items: center;
  }
  button {
    padding: 6px;
  }
  label {
    cursor: pointer;
  }
  input,
  textarea {
    padding: 5px 10px;
    font-size: 1.5rem;
    border-radius: 3px;
    border: 1px solid rgba(25, 25, 25, 0.4);
  }
  .topLabel {
    align-self: start;
  }
`;

const BasicForm = () => {
  return (
    <StyledBody>
      <div className="container">
        <form>
          <h3>Register Form</h3>
          <fieldset>
            <div className="formfields">
              <label for="email">Email</label>
              <input id="email" type="text" placeholder="Email" />
              <label for="firstName">First Name</label>
              <input id="firstName" type="text" placeholder="First Name" />
              <label for="lastName">Last Name</label>
              <input id="lastName" type="text" placeholder="Last Name" />
              <label for="deposit">Deposit ($ USD)</label>
              <input id="deposit" type="text" placeholder="Deposit" />
              <label className="topLabel" for="comment">
                Comment
              </label>
              <textarea id="comment" placeholder="Add Comment Here" rows="7" />
            </div>
          </fieldset>
          <button>Submit</button>
        </form>
      </div>
    </StyledBody>
  );
};

export default BasicForm;
