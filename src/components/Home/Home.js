import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { setMode } from "../../redux/countriesSlice";
import Navbar from "../Navbar/Navbar";
import "./Home.Module.css";
const Home = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState();
  const [data2, setData2] = useState();
  const [selectRegion, setSelectRegion] = useState();
  const mode = useSelector((state) => state.countries.modeSetting);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData2(res.data));
  }, []);
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${search}`)
      .then((res) => setData(res.data));
  }, [search]);
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/region/${selectRegion}`)
      .then((res) => setData(res.data));
  }, [selectRegion]);

  return (
    <>
      <Navbar />
      <main id="main-section">
        <div className="main-top">
          <input
            type="text"
            placeholder="Search for a country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={mode ? "darkMode-input" : ""}
          />
          <select
            name=""
            id=""
            onChange={(e) => setSelectRegion(e.target.value)}
            className={mode ? "darkMode-select" : ""}
          >
            <option value="Turkey">Filtered By Region</option>
            {data2 && (
              <>
                {data2.map((list) => (
                  <>
                    <option value={list.region}>{list.region}</option>
                  </>
                ))}
              </>
            )}
          </select>
        </div>
        {data && (
          <>
            <div className="main-card">
              {data.map((list) => (
                <Link
                  to={`/detail/${list.cca2}`}
                  className={mode ? "darkMode-card" : "card"}
                >
                  <div className="card-image">
                    <img src={list.flags.svg} alt="" />
                  </div>
                  <div className="card-body">
                    <div className="card-title">{list.name.common}</div>
                    <div className="card-description">
                      <p>
                        <span>Population : </span>
                        {list.population}
                      </p>
                      <p>
                        <span>Region :</span> {list.region}{" "}
                      </p>
                      <p>
                        <span>Capital : </span>
                        {list.capital}{" "}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Home;
