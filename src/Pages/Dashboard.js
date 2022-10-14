import React from "react";
import "./Dashboard.css";
import Navbar from "../Components/navbar/NavBar";
import Header from "./ConcessionsPages/Header";

function Dashboard() {
  return (
    <div className="dashboardi">
      <Navbar>
        <Header />
      </Navbar>
    </div>
  );
}

export default Dashboard;
