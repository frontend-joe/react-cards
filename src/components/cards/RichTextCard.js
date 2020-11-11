import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import image from "assets/images/girl.svg";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import boldIcon from "assets/images/format_bold-black-18dp.svg";
import italicIcon from "assets/images/format_italic-black-18dp.svg";
import underlineIcon from "assets/images/format_underlined-black-18dp.svg";

const Card = styled.div`
  position: relative;
  overflow: hidden;
  width: 300px;
  padding: 1rem;
  border-radius: 0.5rem;
  background: white;
  box-shadow: 0 4px 15px ${rgba("black", 0.05)};

  & .rdw-editor-wrapper {
    display: flex;
    flex-direction: column-reverse;
  }

  & .rdw-editor-toolbar {
    padding: 1rem 0 0;
    border: 0;
    border-top: 2px solid rgba(0, 0, 0, 0.05);
  }

  & .rdw-editor-main {
    color: #565360;
    line-height: 1.5;
  }

  & .rdw-option-wrapper {
    border: 0;
    min-width: auto;
    margin: 0;
  }

  & .rdw-option-wrapper img {
    width: 24px;
    height: 24px;
    opacity: 0.25;
  }

  & .rdw-option-wrapper:hover {
    box-shadow: none;
  }

  & .rdw-option-active {
    box-shadow: none;
  }

  & .rdw-option-active img {
    opacity: 0.85;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Image = styled.div`
  border-radius: 0.5rem;
  background: #e3d5ff;
  background-size: 80%;
  background-position: center bottom;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 1rem;
`;

const Text = styled.span`
  color: #acaab7;
`;

const RichTextCard = ({}) => (
  <Card>
    <Header>
      <Image style={{ backgroundImage: `url(${image})` }} />
      <Text>What's on your mind ...</Text>
    </Header>
    <Editor
      placeholder="Type your message"
      toolbar={{
        options: ["inline"],
        inline: {
          options: ["bold", "italic", "underline"],
          inDropdown: false,
          bold: { icon: boldIcon },
          italic: { icon: italicIcon },
          underline: { icon: underlineIcon },
        },
      }}
    />
  </Card>
);

export default RichTextCard;
