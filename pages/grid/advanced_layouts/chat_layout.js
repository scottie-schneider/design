import styled from "styled-components";

const StyledBody = styled.body`
  display: grid;
  place-items: center center;
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
    grid-area: search-container;
    border-radius: 10px 0 0 0;
    box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.75);
    z-index: 1;
  }
  #new-message-container {
    grid-area: new-message-container;
    border-top: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 0 0 0 10px;
  }
  #conversation-list {
    grid-area: conversation-list;
  }
  #chat-title,
  #chat-form {
    background: #eee;
  }
  #chat-title {
    grid-area: chat-title;
    color: #0048aa;
    font-weight: bold;
    font-size: 2rem;
    border-radius: 0 10px 0 0;
    box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.25);
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
        <div id="search-container">This is the conversation search</div>
        <div id="conversation-list">This is the conversation list</div>
        <div id="new-message-container">
          This is the new conversation/message section
        </div>
        <div id="chat-title">This is the chat title</div>
        <div id="chat-message-list">This is the chat message list</div>
        <div id="chat-form">This is the form section</div>
      </div>
    </StyledBody>
  );
};

export default ChatInterface;
