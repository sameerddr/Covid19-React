import React, { useState, useEffect } from "react";
import axios from "axios";
// import { isContentEditable } from "@testing-library/user-event/dist/utils";
function Main() {
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState("");

  const GetApi = async () => {
    const response = await axios.get(
      "https://india-covid19vaccine.github.io/api/state_timeline.json"
    );
    console.log(response.data);
    setdata(response.data);
  };

  useEffect(() => {
    GetApi();
  }, []);

  function myFunction() {
    console.log("Working");
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  return (
    <>
      <header>
        <nav>
          <div className="nav">
            <h1>
              {" "}
              Welcome To Covid Information Center - State By State For 3 Days{" "}
            </h1>
            {/* <button onclick={myFunction}>Toggle dark mode</button> */}
            <button onClick={myFunction}>Toggle Dark Mode</button>
            <input
              type="text"
              placeholder="Enter State"
              className="inputtext"
              onChange={(e) => setsearch(e.target.value)}
            />
          </div>
        </nav>
      </header>
      <main>
        <div className="container ">
          <h1>Date-26/4/21 </h1>
          {data
            ?.filter((val) => {
              if (search == "") {
                return val;
              } else if (
                val.state.toLowerCase().startsWith(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item) => (
              <div className="  date26">
                <div className="box">
                  <h3> State - {item.state}</h3>
                  <h3> Date- {item.data[100].date}</h3>
                  <h3> TotalDoses- {item.data[100].total_doses}</h3>
                  <h3> TotalVaccinated- {item.data[100].total_vaccinated}</h3>
                  <h3>
                    Fully-Vaccinated(2)- {item.data[100].total_fully_vaccinated}
                  </h3>
                  <h3>----------------------------</h3>
                </div>
              </div>
            ))}
          <h3>Thank You! Visit Again</h3>
        </div>
        <div className="container">
          <h1>Date-27/4/21</h1>
          {data
            ?.filter((val) => {
              if (search == "") {
                return val;
              } else if (
                val.state.toLowerCase().startsWith(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item) => (
              <div className="date27">
                <div className="box">
                  <h3> State - {item.state}</h3>
                  <h3> Date- {item.data[101].date}</h3>
                  <h3> TotalDoses- {item.data[101].total_doses}</h3>
                  <h3> TotalVaccinated- {item.data[101].total_vaccinated}</h3>
                  <h3>
                    Fully-Vaccinated(2)- {item.data[101].total_fully_vaccinated}
                  </h3>
                  <h3>----------------------------</h3>
                </div>
              </div>
            ))}
          <h3>Thank You! Visit Again</h3>
        </div>
        <div className="container">
          <h1>Date-28/4/21</h1>
          {data
            ?.filter((val) => {
              if (search == "") {
                return val;
              } else if (
                val.state.toLowerCase().startsWith(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item) => (
              <div className="date27">
                <div className="box">
                  <h3> State - {item.state}</h3>
                  <h3> Date- {item.data[102].date}</h3>
                  <h3> TotalDoses- {item.data[102].total_doses}</h3>
                  <h3> TotalVaccinated- {item.data[102].total_vaccinated}</h3>
                  <h3>
                    Fully-Vaccinated(2)- {item.data[102].total_fully_vaccinated}
                  </h3>
                  <h3>----------------------------</h3>
                </div>
              </div>
            ))}
          <h3>Thank You! Visit Again</h3>
        </div>
      </main>
      <footer>
        <h3>The Site is Fully Responsible</h3>
      </footer>
    </>
  );
}

export default Main;
