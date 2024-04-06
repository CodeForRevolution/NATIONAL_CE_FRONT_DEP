import React from "react";
import style from "./Dashboard.css";
import { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const Pateints = [
    {
      name: "shakir",
      mobile: 8956369962,
      sirname: "ansari",
      Address: "Bande nawas nagar Nagpur 440017",
    },
    {
      name: "Bunna",
      mobile: 8956369962,
      sirname: "ansari",
      Address: "Bande nawas nagar Nagpur 440017",
    },
    {
      name: "Muskan",
      mobile: 8956369962,
      sirname: "ansari",
      Address: "Bande nawas nagar Nagpur 440017",
    },
    {
      name: "Muskan",
      mobile: 8956369962,
      sirname: "ansari",
      Address: "Bande nawas nagar Nagpur 440017",
    },
    {
      name: "Muskan",
      mobile: 8956369962,
      sirname: "ansari",
      Address: "Bande nawas nagar Nagpur 440017",
    },
    {
      name: "Muskan",
      mobile: 8956369962,
      sirname: "ansari",
      father:"mohd shabbir ansari",
      Address: "Bande nawas nagar Nagpur 440017",
    },
    {
      name: "Muskan",
      mobile: 8956369962,
      sirname: "ansari",
      Address: "Bande nawas nagar Nagpur 440017",
    },
    {
      name: "Muskan",
      mobile: 8956369962,
      sirname: "ansari",
      Address: "Bande nawas nagar Nagpur 440017",
    },
    {
      name: "Muskan",
      mobile: 8956369962,
      sirname: "ansari",
      Address: "Bande nawas nagar Nagpur 440017",
    },
    {
      name: "Muskan",
      mobile: 8956369962,
      sirname: "ansari",
      Address: "Bande nawas nagar Nagpur 440017",
    },
    {
      name: "Muskan",
      mobile: 8956369962,
      sirname: "ansari",
      Address: "Bande nawas nagar Nagpur 440017",
    },
    {
      name: "Muskan",
      mobile: 8956369962,
      sirname: "ansari",
      Address: "Bande nawas nagar Nagpur 440017",
    },
    {
      name: "Pappu",
      mobile: 8956369962,
      sirname: "ansari",
      Address: "Bande nawas nagar Nagpur 440017",
    },
    {
      name: "Akash",
      mobile: 8956369962,
      sirname: "ansari",
      Address: "Bande nawas nagar Nagpur 440017",
    },
  ];




  let time  = new Date().toLocaleTimeString()

  const [ctime,setTime] = useState(time)
  const UpdateTime=()=>{
    time =  new Date().toLocaleTimeString()
    setTime(time)
  }
  setInterval(UpdateTime)

  return (
    <div className="dashboard">
      <div className="row bg-success  text-center h-15" id="dashHeader">
        <div className="col-4 bg-primary ">20/12/23</div>
        <div className="col-4 bg-secondary ">DASHBOARD</div>
        <div className="col-4 ms-auto  bg-info"><h5>{time}</h5></div>
      </div>
      <div className="row text-center h-75 " id="main">
        <div className="col-sm-1 p-0" id="submenu">
          <div className="menu">
            <a href="" className="fa-solid fa-house"></a>Home
          </div>
          <div className="menu">
            <a href="" className="fa-solid fa-calendar-days"></a>entry
          </div>
          <div className="menu">
            <a href="" className="fa-solid fa-users"></a>Employee
          </div>
          <div className="menu">
            <a href="" className="fa-solid fa-file-invoice-dollar"></a>payment
          </div>
          <div className="menu">
            <a href="" className="fa-solid fa-file"></a>Doucment
          </div>
          <div className="menu">
            <a href="" className="fa-solid fa-chart-pie"></a>statistic
          </div>
          <div className="menu">
            <a href="" className="fa-solid fa-user-plus"></a>Create patient
          </div>
          <div className="menu">
            <a href="" className="fa-solid fa-download"></a>Download Csv
          </div>
        </div>
        <div className="col-12 col-sm-11 p-0 bg-primary">
          <div className="row bg-success ">
            <div className="col-12 bg-danger p-0" id="filter">
              <div className="subfilter">
                <select name="" className="form-select" id="">
                  <option value="">--Search by--</option>
                  <option value="">Name</option>
                  <option value="">phone</option>
                </select>
                <input type="text" placeholder="search..." />
              </div>
              <div className="subfilter" id="dating">
                <select name="" className="form-select" id="">
                  <option value="">--Record by--</option>
                  <option value="">Next visit</option>
                  <option value="">visited</option>
                </select>
                <span>from</span>
                <input type="date" />
                <span>to</span>
                <input type="date" />
              </div>
              <div className="subfilter" id="sorting">
                <select name="" className="form-select" id="">
                  <option value="">Asscending</option>
                  <option value="">Desscending</option>
                </select>
              </div>
              <button className="fa-solid fa-arrows-rotate"></button>
            </div>
          </div>
          <div className="listcontainer px-2">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              {Pateints.map((pat, index) => {
                return (
                  <div class="accordion-item mx-1 my-3">
                    <h5
                      class="accordion-header p-0 m-0"
                      id={`flush-headingOne${index}`}
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#flush-collapse${index}`}
                        aria-expanded="false"
                        aria-controls={`flush-collapseOne${index}`}
                      >
                       <div className="row w-100 ">
                        <div className="col-2">Name:{pat.name}</div>
                        <div className="col-2">sirname:{pat.sirname}</div>
                        <div className="col-2">Number:{pat.mobile}</div>
                        <div className="col-6">Address:{pat.Address}</div>
                       </div>
                      </button>
                    </h5>
                    <div
                      id={`flush-collapse${index}`}
                      class="accordion-collapse collapse"
                      aria-labelledby={`flush-heading${index}`}
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body p-1 text-start">
                        <div className="row">
                          <div className="col-3">Date of visit</div>
                          <div className="col-3"></div>
                          <div className="col-3">
                            <div className="row ">
                              <div className="col-4"><button className="btn btn-success">view</button></div>
                              <div className="col-4"><button className="btn btn-info">update</button></div>
                              <div className="col-4"><button className="btn btn-danger">delete</button></div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-2"><button className="btn btn-danger">Delete</button></div>
                          <div className="col-2"><button className="btn btn-info">update</button></div>
                          <div className="col-2"><button className="btn btn-success">New visit</button></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
