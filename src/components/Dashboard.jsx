import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement } from "chart.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import axiosInstance from "../utils/axiosInstance";
import 'chart.js/auto'
// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement);

const Dashboard = () => {
  const [urlsPerDay, setUrlsPerDay] = useState([]);
  const [urlsPerMonth, setUrlsPerMonth] = useState([]);
  const [totalClicks, setTotalClicks] = useState(0);
  const [totalUrls, setTotalUrls] = useState(0);



  const fetchAnalytics = async () => {
    try {
      const token  = localStorage.getItem('token-url');
      const headerData = {
        headers:{
          authorization:`Bearer ${token}`
        }
      }
      const perDayResponse = await axiosInstance.get("/api/url/analytics/urls-per-day",headerData);
      const perMonthResponse = await axiosInstance.get("/api/url/analytics/urls-per-month",headerData);
      const clicksResponse = await axiosInstance.get("/api/url/analytics/total-clicks",headerData);
      const totalUrlsResponse = await axiosInstance.get("/api/url/analytics/totalUrls",headerData);

      setUrlsPerDay(await perDayResponse.data.data);
      setUrlsPerMonth(await perMonthResponse.data.data);
      setTotalClicks(await clicksResponse.data.totalClicks);
      setTotalUrls(await totalUrlsResponse.data.totalUrls);
    } catch (error) {
      console.error("Error fetching analytics data", error);
    }
  };
  useEffect(() => {
    fetchAnalytics();
   
  }, []);

  const barChartData = {
  
    labels: urlsPerDay.map((item) => item._id), // Dates
    datasets: [
      {
        label: "URLs Created Per Day",
        data: urlsPerDay.map((item) => item.count), // Counts
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };


  const lineChartData = {
    labels: urlsPerMonth.map((item) => item._id), // Months
    datasets: [
      {
        label: "URLs Created Per Month",
        data: urlsPerMonth.map((item) => item.count), // Counts
        borderColor: "rgba(255, 99, 132, 0.8)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Dashboard</h2>
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body">
              <h5 className="card-title">Total URLs Created</h5>
              <p className="card-text">{totalUrls}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Clicks</h5>
              <p className="card-text">{totalClicks}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h4>URLs Created Per Day</h4>
          <Bar data={barChartData} />
        </div>
        <div className="col-md-6">
          <h4>URLs Created Per Month</h4>
          <Line data={lineChartData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
