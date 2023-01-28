import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Detail.Module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState();
  const mode = useSelector((state) => state.countries.modeSetting);
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((res) => setDetail(res.data));
  }, [id]);
  console.log(detail);
  return (
    <>
      <Navbar />
      <div className="container">
        <div id={mode ? "detail-section" : "detail-section-night"}>
          <Link className="back-button" to="/">
            <AiOutlineArrowLeft /> Back
          </Link>
          {detail && (
            <>
              <div className="detail-card">
                <div className="left">
                  <img src={detail[0].flags.svg} alt="" />
                </div>
                <div className="right">
                  <h1>{detail[0].name.common}</h1>
                  <div className="right-description">
                    <div className="description-left">
                      <p>Native Name : {detail[0].name.common} </p>
                      <p>Population : {detail[0].population} </p>
                      <p>Region : {detail[0].region}</p>
                      <p>Sub Region : {detail[0].subregion}</p>
                      <p>Capital : {detail[0].capital[0]}</p>
                    </div>
                    <div className="description-right">
                      <p>Top Level Domain :{detail[0].tld[0]} </p>
                      <p>Currencies : {detail[0].currencies[0]} </p>
                      <p>Languages : </p>
                    </div>
                  </div>
                  <p className="border-contries">
                    Border Contries :
                    {detail[0].borders.map((border) => (
                      <>
                        <span>{border}</span>
                      </>
                    ))}{" "}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Detail;
