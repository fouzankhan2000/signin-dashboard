import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import { FiPieChart } from 'react-icons/fi';
import { BsTags } from 'react-icons/bs';
import { MdKeyboardArrowRight, MdOutlineScheduleSend } from 'react-icons/md';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdOutlineSettings } from 'react-icons/md';
import { BiBell } from 'react-icons/bi';
import { IoIosSearch } from 'react-icons/io';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { AiOutlineLike } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import "../CssFiles/Dashboard.css";
import { useState, useEffect } from "react";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

const Dashboard = () => {

  const [search, setSearch] = useState('')
  const [information, setInformation] = useState([]);

  const data1 = {
    labels: ["Week 1", "Week2", "Week3", "Week 4"],
    datasets: [{
      label: 'Line 1',
      data: [101, 208, 304, 104],
      backgroundcolor: "transparent",
      borderColor: "Black",
      tension: 0.5
    },
    {
      label: 'Line 2',
      data: [105, 200, 340, 150],
      backgroundcolor: "transparent",
      borderColor: "Blue",
      tension: 0.5
    }]

  }

  // const handleApi = () => {
  //   axios.get(`https://api.coincap.io/v2/assets/${search}`)
  //     .then((res) => {
  //       setInformation(res.data.data);
  //     })
  // };

  // useEffect(() => {
  //   if(search !== '') {
  //     handleApi();
  //   }
  // }, [search])

  // console.log(information);


  return (
    <div className='Container'>
      <div className="left">
        <h1>Board.</h1>
        <p><FiPieChart />  <span>Dashboard</span></p>
        <p><BsTags />  <span>Transactions</span></p>
        <p><MdOutlineScheduleSend />  <span>Schedules</span></p>
        <p><FaRegUserCircle />  <span>Users</span></p>
        <p><MdOutlineSettings />  <span>Settings</span></p>

        <div className='left-footer'>
          <p>Help</p>
          <p>Contact Us</p>
        </div>

      </div>

      <div className='right'>
        <div className='right-head'>
          <h1>Dashboard</h1>
          <div className="right-head2">
            <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)}></input>
            <BiBell />
            <img src="../favicon.ico" />
          </div>
        </div>

        <div className='right-top'>
          <div class="box">
            {information.map((item, index) => (
              <div key={index}>{item.name}</div>
            ))}

            <div className="icon"><FaRegMoneyBillAlt /></div>
            <div className="text">
              <p>Total Revenues</p>
              <h1></h1>
            </div>
          </div>
          <div class="box">
            <div className="icon"><BsTags /></div>
            <div className="text">
              <p>Total Transactions</p>
              <h1></h1>
            </div>
          </div>
          <div class="box">
            <div className="icon"><AiOutlineLike /></div>
            <div className="text">
              <p>Total Likes</p>
              <h1></h1>
            </div>
          </div>
          <div class="box">
            <div className="icon"><FiUsers /></div>
            <div className="text">
              <p>Total Users</p>
              <h1></h1>
            </div>
          </div>
        </div>

        <div className="right-middle"></div>

        <div className="right-bottom">
          <div className="top-products details">
            <div className="top-products1">
              <h3>Top products</h3>
              <select>
                <option>May - June 2021</option>
                <option>June - July 2021</option>
                <option>July - August 2021</option>
              </select>
            </div>
          </div>

          <div className="today-schedule details">
            <div className="today-schedule1">
              <h3>Today's schedule</h3>
              <p>See All <MdKeyboardArrowRight /></p>
            </div>
          </div>
        </div>

        {/* <div className="graph">
          <Line data={data1}></Line>
        </div> */}

      </div>


    </div>
  )
}

export default Dashboard