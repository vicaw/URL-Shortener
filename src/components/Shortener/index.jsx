import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import { ReactComponent as LogoSVG } from "../../assets/images/logo.svg";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import formBackground from "../../assets/images/bg-shorten-desktop.svg";
import "../../assets/antd.css";
import ShortnedCard from "../ShortenedCard";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background: gray;
  padding: 0 var(--siteSpacing);
  position: relative;
  gap: 3.126vw;

  @media screen and (max-width: 2px) {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-column-gap: 5px;
    justify-items: center;
  }
`;

const Logo = styled.a`
  //background: red;
  display: grid;
  padding-top: 7px;
  //place-items: bottom;
`;

const FormWrap = styled.div`
  padding: 0 var(--siteSpacing);
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 50%, #f0f1f6 50%);
`;

const StyledForm = styled(Form)`
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
`;

const StyledItem = styled(Form.Item)`
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

const StyledInput = styled(Input)`
  ${(props) =>
    props.isloading
      ? css`
          pointer-events: none;
          color: gray;
        `
      : css``}
`;

const SubmitButton = styled(Button)`
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

const ShortnedCardList = styled.div`
  padding: 0 var(--siteSpacing);
  background: #f0f1f6;
  padding-top: clamp(0px, 1.66vw, 24px);
  gap: clamp(0px, 1.11vw, 16px);
  display: flex;
  flex-direction: column;
`;

const Shortener = () => {
  const [linkList, setLinkList] = useState([]);
  const [request, setRequest] = useState("");
  const [loading, setLoading] = useState(0);
  const [form] = Form.useForm();

  const storedList = JSON.parse(
    localStorage.getItem("@shortly-vicaw/linkList", linkList)
  );

  useEffect(() => {
    if (storedList)
      setLinkList(
        JSON.parse(localStorage.getItem("@shortly-vicaw/linkList", linkList))
      );
  }, []);

  useEffect(() => {
    if (storedList !== linkList && linkList.length)
      localStorage.setItem("@shortly-vicaw/linkList", JSON.stringify(linkList));
  }, [linkList]);

  useEffect(() => {
    if (request !== "" && !loading) {
      setLoading(1);
      let cancel;
      axios({
        method: "GET",
        url: `https://api.shrtco.de/v2/shorten`,
        params: { url: request },
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
        headers: { Accept: "application/json" },
      })
        .then((res) => {
          setLinkList((prevLinkList) => {
            const newLink = {
              shortened: res.data.result.full_short_link2,
              original: res.data.result.original_link,
            };
            return [...prevLinkList, newLink];
          });
          setLoading(0);
          setRequest("");
          form.resetFields();
        })
        .catch((e) => {
          setLoading(0);
          setRequest("");
          form.resetFields();
        });

      return () => cancel();
    }
  }, [request]);

  const onFinish = (values) => {
    setRequest(values.url);
  };

  return (
    <>
      <FormWrap>
        <StyledForm name="basic" onFinish={onFinish} form={form}>
          <StyledItem
            name="url"
            rules={[
              {
                type: "url",
                message: "Invalid URL",
              },
              {
                required: true,
                message: "Please add a link",
              },
            ]}
          >
            <StyledInput
              isloading={loading}
              placeholder="Shorten a link here..."
            />
          </StyledItem>

          <StyledItem>
            <SubmitButton type="primary" htmlType="submit" isloading={loading}>
              {!loading ? <>Shorten it!</> : <>Shortening</>}
            </SubmitButton>
          </StyledItem>
        </StyledForm>
      </FormWrap>

      <ShortnedCardList>
        {linkList.map((link, index) => (
          <ShortnedCard key={index} link={link} />
        ))}
      </ShortnedCardList>
    </>
  );
};

export default Shortener;
