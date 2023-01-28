import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Detail.Module.css";
const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState();

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((res) => setDetail(res.data));
  }, [id]);
  console.log(detail);
  return (
    <>
      <Navbar />
    </>
  );
};

export default Detail;
