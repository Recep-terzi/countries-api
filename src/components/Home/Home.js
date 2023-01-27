import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import "./Home.Module.css";
const Home = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState();
  const [data2, setData2] = useState();
  const [selectRegion, setSelectRegion] = useState();
  const [mode, setMode] = useState(false);

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

  const modeClick = () => {
    setMode(!mode);
    if (!mode) {
      document.body.style.backgroundColor = "#202d36";
      document.body.style.transition = "500ms background-color";
    } else {
      document.body.style.backgroundColor = "#e2e2e264";
      document.body.style.transition = "500ms background-color";
    }
  };
  return (
    <>
      <navbar id={mode ? "darkMode-navbar-section" : "navbar-section"}>
        <div className="container">
          <div className="navbar-logo">Where in the world?</div>
          <div className="navbar-button" onClick={() => modeClick()}>
            <MdOutlineDarkMode />
            Dark Mode
          </div>
        </div>
      </navbar>
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
                <div className={mode ? "darkMode-card" : "card"}>
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
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Home;