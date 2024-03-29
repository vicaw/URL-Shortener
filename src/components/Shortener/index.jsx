import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form } from "antd";
import "../../assets/antd.css";
import ShortnedCard from "../ShortenedCard";

import {
  FormWrap,
  ShortnedCardList,
  StyledForm,
  StyledInput,
  StyledItem,
  SubmitButton,
} from "./style";

require("dotenv").config();

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

      const requestData = {
        link: request,
        generator: "owo",
        metadata: "OWOIFY",
      };

      let source = axios.CancelToken.source();

      axios
        .post(process.env.REACT_APP_API_URL, requestData, {
          cancelToken: source.token, // Atribui o cancelToken
          headers: {
            Accept: "application/json",
          },
        })
        .then((res) => {
          setLinkList((prevLinkList) => {
            const newLink = {
              shortened: res.data.id,
              original: res.data.destination,
            };
            return [...prevLinkList, newLink];
          });
        })
        .catch((e) => {
          if (axios.isCancel(e)) {
            console.log("Solicitação cancelada:", e.message);
          } else {
            console.error("Erro:", e);
          }
        })
        .finally(() => {
          setLoading(0);
          setRequest("");
          form.resetFields();
        });

      /*
      let cancel;
      axios({
        method: "POST",
        url: `https://owo.vc/api/v2/link`,
        params: { link: request, generator: "owo", metadata: "IGNORE" },
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
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          setLoading(0);
          setRequest("");
          form.resetFields();
        });
      */

      return () => source.cancel();
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
