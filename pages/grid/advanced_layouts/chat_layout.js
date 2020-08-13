import styled from "styled-components";

const StyledBody = styled.body`
  #chat-container {
    min-width: 800px;
    max-width: 1000px;
    max-height: 800px;
    width: 100%;
    height: 95%;
    background: lightblue;
    border-radius: 10px;
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
