import React, { useState, useEffect } from "react";
import axios from "axios";
import Mode from "./Mode";
function Main() {
  const [data, setdata] = useState([]);

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

  return (
    <>
      <header>
        <nav>
          <div className="nav">
            <h1>
              {" "}
              Wecome To Covid Information Center - State By State For 3 Days{" "}
            </h1>
          </div>
        </nav>
      </header>
      <Mode />
      <main>
        <div className="container">
          <h1>Date-26/4/21 </h1>
          {data?.map((item) => (
            <div className="date26">
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
          {data?.map((item) => (
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
          {data?.map((item) => (
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
    </>
  );
}

export default Main;
