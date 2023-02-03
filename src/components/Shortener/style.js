import styled, { css } from "styled-components";
import { Form, Input, Button } from "antd";
import formBackground from "../../assets/images/bg-shorten-desktop.svg";
import formBackgroundMobile from "../../assets/images/bg-shorten-mobile.svg";
import "../../assets/antd.css";

export const FormWrap = styled.div`
  padding: 0 var(--siteSpacing);
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 50%, #f0f1f6 50%);
`;

export const StyledForm = styled(Form)`
  display: grid;
  grid-template-columns: 5fr 1.2fr;
  gap: 1.6vw;
  background: hsl(257, 27%, 26%);
  padding: clamp(24px, 3.61vw, 52px) clamp(24px, 4.44vw, 64px)
    calc(clamp(24px, 3.61vw, 52px) - 29px) clamp(24px, 4.44vw, 64px);
  border-radius: 10px;

  background-image: url(${formBackground});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    background-image: url(${formBackgroundMobile});
  }
`;

export const StyledItem = styled(Form.Item)`
  * {
    all: unset;
    width: 100%;
    border-radius: 10px;
    height: clamp(48px, 4.45vw, 64px);
  }

  input {
    background: white;
    box-sizing: border-box;
    padding-left: clamp(17px, 2.29vw, 33px);
    font-size: clamp(16px, 1.39vw, 20px);
  }

  input::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: hsl(0, 0%, 75%);
  }

  .ant-form-item-explain.ant-form-item-explain-error {
    color: #e8676b;
    /* position: relative; */
    margin-top: 5px;
    display: block;
    max-height: 24px;
    font-style: italic;
  }

  &.ant-form-item-has-error input,
  &.ant-form-item-has-error input:focus {
    box-shadow: 0 0 0 3px rgb(212 100 107);
    background-color: none;
    border-color: none;
  }

  &.ant-form-item-has-error input::placeholder {
    color: #f6b6b7;
  }
`;

export const StyledInput = styled(Input)`
  ${(props) =>
    props.isloading
      ? css`
          pointer-events: none;
          color: gray;
        `
      : css``}
`;

export const SubmitButton = styled(Button)`
  color: white;
  text-align: center;
  min-width: 112px;
  font-weight: 700;
  font-size: clamp(16px, 1.39vw, 20px);
  text-shadow: 0 0 4px #00000059;
  cursor: pointer;
  transition: background 0.3s linear;

  &:hover {
    background: #9be3e2;
  }

  ${(props) =>
    props.isloading
      ? css`
          background: #9be3e2;
          pointer-events: none;
          &::after {
            display: inline-block;
            animation: ellipsis 1.25s infinite;
            content: ".";
            width: 1em;
            color: white;
            text-align: left;
          }

          &:hover {
            background: auto;
          }

          @keyframes ellipsis {
            0% {
              content: ".";
            }
            33% {
              content: "..";
            }
            66% {
              content: "...";
            }
          }
        `
      : css`
          background: hsl(180, 66%, 49%);
        `}
`;

export const ShortnedCardList = styled.div`
  padding: 0 var(--siteSpacing);
  background: #f0f1f6;
  padding-top: clamp(0px, 1.66vw, 24px);
  gap: clamp(0px, 1.11vw, 16px);
  display: flex;
  flex-direction: column;
`;
