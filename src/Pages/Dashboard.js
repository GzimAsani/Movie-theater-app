import React from "react";
import "./Dashboard.css";
import Homepages from "../Pages/DashboardPages/Homepages";
import Navbar from "../Components/navbar/NavBar";
import Header from "./ConcessionsPages/Header";

function Dashboard() {
  return (
    <div className="dashboardi">
      <Navbar>
        <Header />
        <Homepages />
      </Navbar>
    </div>
  );
}

export default Dashboard;
