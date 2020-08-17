import styled from "styled-components";

const StyledBody = styled.body`
  display: grid;
  place-items: center center;
  * {
    box-sizing: border-box;
  }
  #chat-container {
    display: grid;
    grid:
      "search-container chat-title" 71px
      "conversation-list chat-message-list" 1fr
      "new-message-container chat-form" 78px
      / 275px 1fr;
    min-width: 800px;
    max-width: 1000px;
    max-height: 800px;
    width: 100%;
    height: 95%;
    background: lightblue;
    border-radius: 10px;
  }
  #search-container,
  #conversation-list,
  #new-message-container {
    background: #0048aa;
  }
  #search-container {
    display: grid;
    align-items: center;
    grid-area: search-container;
    padding: 0 20px;
    border-radius: 10px 0 0 0;
    box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.75);
    z-index: 1;
    input {
      color: #eee;
      outline: none;
      font-weight: bold;
      border-radius: 2px;
      height: 30px;
      border: 0;
      padding-left: 48px;
      padding-right: 20px;
      font-size: 1.4rem;
      overflow: hidden;
      background: url("/search.svg") no-repeat rgba(255, 255, 255, 0.3);
      background-position: 15px center;
      background-size: 20px 20px;
      ::placeholder {
        color: #ddd;
        font-weight: bold;
      }
    }
  }
  #new-message-container {
    grid-area: new-message-container;
    border-top: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 0 0 0 10px;
    padding: 0 15px;
    display: grid;
    grid: 40px / 40px;
    align-content: center;
    a {
      display: grid;
      place-content: center center;
      background: #eee;
      border-radius: 100%;
      color: #002c88;
      text-decoration: none;
      font-size: 2rem;
      line-height: 2rem;
    }
  }
  #conversation-list {
    grid-area: conversation-list;
  }
  #chat-title,
  #chat-form {
    background: #eee;
  }
  #chat-title {
    display: grid;
    grid: 36px / 1fr 36px;
    align-content: center;
    align-items: center;
    grid-area: chat-title;
    colro: #0048aa;
    font-weight: bold;
    font-size: 2rem;
    border-radius: 0 10px 0 0;
    box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.75);
    img {
      cursor: pointer;
      max-width: 100%;
    }
  }
  #chat-form {
    grid-area: chat-form;
    border-radius: 0 0 10px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.25);
  }
  #chat-message-list {
    grid-area: chat-message-list;
  }
`;

const ChatInterface = () => {
  return (
    <StyledBody>
      <div id="chat-container">
        <div id="search-container">
          <input type="text" placeholder="Search" />
        </div>
        <div id="conversation-list">This is the conversation list</div>
        <div id="new-message-container">
          <a href="#">+</a>
        </div>
        <div id="chat-title">
          <span>Scottie Schneider</span>
          <img src="/trash-logo.svg" alt="Delete Conversation" />
        </div>
        <div id="chat-message-list">This is the chat message list</div>
        <div id="chat-form">This is the form section</div>
      </div>
    </StyledBody>
  );
};

export default ChatInterface;
