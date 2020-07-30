import styled from "styled-components";

const InputWrapper = styled.div`
  background: var(--grayLight);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  padding: 5px;
  width: 100%;
  label {
    color: ${(props) => (props.filled ? "var(--backEnd)" : "var(--black)")};
    font-size: 12px;
    font-weight: normal;
    line-height:14px;
    transition: 0.5s all;
  }
  input {
    background: transparent;
    border: 0;
    color: var(--black);
    display: ${(props) => (props.type === "textarea" ? "none" : "block")};
    font-size: 18px;
    outline: 0;
    padding: ${(props) => (props.type === "color" ? "0" : "5px 0")};
    transition: 0.2s all;
    width: 100%;
  }
  textarea {
    background: var(--grayLight);
    border: 0;
    color: var(--backEnd);
    display: ${(props) => (props.type === "textarea" ? "block" : "none")};
    font-size: 18px;
    outline: 0;
    padding: 5px 0;
    transition: all 0.2s;
    width: 100%;
  }
`;

export default InputWrapper;