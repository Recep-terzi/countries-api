import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  return <div>Detail</div>;
};

export default Detail;
