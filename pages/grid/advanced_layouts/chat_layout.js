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
    .conversation {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: 40px 1fr max-content;
      color: #ddd;
      font-size: 1.3rem;
      border-bottom: 1px solid #002c88;
      padding: 20px 20px 20px 15px;
    }
    .conversation-message {
      font-size: 1rem;
      grid-column: span 2;
      padding-left: 5px;
      white-space: nowrap;
      overflow-x: hidden;
      text-overflow: ellipsis;
    }
    .conversation:active,
    .conversation:hover {
      cursor: pointer;
    }
    img {
      height: 40px;
      border-radius: 100%;
      grid-row: span 2;
    }
    .title-text {
      font-weight: bold;
      color: #eee;
      padding-left: 5px;
      white-space: nowrap;
      overflow-x: hidden;
      text-overflow: ellipsis;
    }
    .created-date {
      color: #ddd;
      white-space: nowrap;
      font-size: 1rem;
    }
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
    color: #0048aa;
    font-weight: bold;
    font-size: 2rem;
    border-radius: 0 10px 0 0;
    box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.75);
    padding: 0 20px;
    img {
      cursor: pointer;
      max-width: 100%;
    }
  }
  #chat-form {
    grid-area: chat-form;
    border-radius: 0 0 10px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.25);
    padding-left: 42px;
    padding-right: 22px;
    display: grid;
    grid: 51px / 32px 1fr;
    align-content: center;
    align-items: center;
    grid-gap: 15px;
    img {
      cursor: pointer;
    }
    input {
      outline: none;
      padding: 15px;
      border: 2px solid #ddd;
      border-radius: 6px;
      font-size: 1.4rem;
    }
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
        <div id="conversation-list">
          <div className="conversation">
            <img src="/ben.png" alt="Ben" />
            <div className="title-text">Ben Smith abcsdefghik</div>
            <div className="created-date">Apr 16</div>
            <div className="conversation-message">
              This is a message abslkjslej;flses;e
            </div>
          </div>
        </div>
        <div id="new-message-container">
          <a href="#">+</a>
        </div>
        <div id="chat-title">
          <span>Scottie Schneider</span>
          <img src="/trash-logo.svg" alt="Delete Conversation" />
        </div>
        <div id="chat-message-list">This is the chat message list</div>
        <div id="chat-form">
          <img src="/attachment-logo.svg" alt="Add Attachment" />
          <input type="text" placeholder="type a message" />
        </div>
      </div>
    </StyledBody>
  );
};

export default ChatInterface;
