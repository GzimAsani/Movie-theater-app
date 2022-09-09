
import React from 'react'
import "./Dashboard.css"
import { Route, Link, Routes } from "react-router-dom";
import  Homepages from "../Pages/DashboardPages/Homepages";

function Dashboard() {
  return (
    <div>
    <Homepages />
  </div>
  )
}

export default Dashboard