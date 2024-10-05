import React from "react";
import { Pie, Line, Bar } from "react-chartjs-2";
import { FaTrashAlt } from "react-icons/fa";
import Image from "next/image";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Example data for the graphs
const lineData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Patient Acquisition",
      data: [30, 50, 45, 60, 80, 90, 100, 85, 70, 50, 30, 45],
      borderColor: "green",
      fill: false,
    },
    {
      label: "Income",
      data: [100, 120, 115, 130, 150, 160, 170, 155, 140, 120, 100, 115],
      borderColor: "blue",
      fill: false,
    },
  ],
};

const pieData = {
  labels: ["Doctor Visit", "Homecare", "On Demand Service", "Caretaker/Nurse"],
  datasets: [
    {
      data: [30, 20, 15, 35],
      backgroundColor: ["#7F3DFF", "#00A86B", "#FD3C4A", "#9B51E0"],
    },
  ],
};

const barData = {
  labels: ["Consultation Types"],
  datasets: [
    {
      label: "Total Consultations",
      data: [40000],
      backgroundColor: "#3B82F6",
    },
    {
      label: "Cancelled",
      data: [15000],
      backgroundColor: "#F87171",
    },
    {
      label: "Completed",
      data: [35000],
      backgroundColor: "#10B981",
    },
  ],
};

const doctorData = [
  {
    time: "09:30 AM",
    doctorName: "Bessie Cooper",
    doctorSpecialty: "General Physician, MBBS, MD",
    doctorID: "#51674738",
    email: "debra.holt@example.com",
    contactNumber: "0000000000",
    totalAmount: "$1500",
    imageUrl: "https://via.placeholder.com/30",
  },
  {
    time: "09:30 AM",
    doctorName: "Kristin Watson",
    doctorSpecialty: "General Physician, MBBS, MD",
    doctorID: "#51674738",
    email: "bill.sanders@example.com",
    contactNumber: "0000000000",
    totalAmount: "$1500",
    imageUrl: "https://via.placeholder.com/30",
  },
  {
    time: "09:30 AM",
    doctorName: "Cameron Will",
    doctorSpecialty: "General Physician, MBBS, MD",
    doctorID: "#51674738",
    email: "bill.sanders@example.com",
    contactNumber: "0000000000",
    totalAmount: "$1500",
    imageUrl: "https://via.placeholder.com/30",
  },
  {
    time: "09:30 AM",
    doctorName: "Bessie Cooper",
    doctorSpecialty: "General Physician, MBBS, MD",
    doctorID: "#51674738",
    email: "debra.holt@example.com",
    contactNumber: "0000000000",
    totalAmount: "$1500",
    imageUrl: "https://via.placeholder.com/30",
  },
  {
    time: "09:30 AM",
    doctorName: "Bessie Cooper",
    doctorSpecialty: "General Physician, MBBS, MD",
    doctorID: "#51674738",
    email: "debra.holt@example.com",
    contactNumber: "0000000000",
    totalAmount: "$1500",
    imageUrl: "https://via.placeholder.com/30",
  },
];

const TDMServicesInsightsCard = () => (
  <div className="bg-white p-4 lg:p-6 rounded-2xl shadow-lg w-full">
    <h3 className="text-md lg:text-lg font-semibold mb-4">
      TDM Services Insights
    </h3>
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      <div>
        <p className="text-xl lg:text-2xl font-bold">124</p>
        <p className="text-sm lg:text-base text-gray-500">Daily Consultation</p>
        <p className="text-red-600 text-xs">Low from last week</p>
      </div>
      <div>
        <p className="text-xl lg:text-2xl font-bold">21:00</p>
        <p className="text-sm lg:text-base text-gray-500">
          Consultation Duration
        </p>
        <p className="text-green-600 text-xs">High from last week</p>
      </div>
      <div>
        <p className="text-xl lg:text-2xl font-bold">₹100</p>
        <p className="text-sm lg:text-base text-gray-500">
          Avg Income per Patient
        </p>
        <p className="text-green-600 text-xs">High from last week</p>
      </div>
      <div>
        <p className="text-xl lg:text-2xl font-bold">₹45</p>
        <p className="text-sm lg:text-base text-gray-500">
          Mini-Consultation Income
        </p>
        <p className="text-red-600 text-xs">Low from last week</p>
      </div>
      <div>
        <p className="text-xl lg:text-2xl font-bold">₹650</p>
        <p className="text-sm lg:text-base text-gray-500">
          Max Consultation Fee
        </p>
        <p className="text-red-600 text-xs">Low from last week</p>
      </div>
    </div>
  </div>
);

const ConsultationBarChart = () => (
  <div className="bg-white p-4 lg:p-6 rounded-2xl shadow-lg w-full">
    <h3 className="text-md lg:text-lg font-semibold mb-4">Consultations</h3>
    <Bar data={barData} />
  </div>
);

const DashboardCard = ({ title, services }) => (
  <div className="bg-white p-4 lg:p-6 rounded-2xl shadow-lg h-full">
    <h3 className="text-md lg:text-lg font-semibold mb-4">{title}</h3>
    <div className="flex justify-between items-center space-x-4 lg:space-x-6">
      {services.map((service, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="bg-blue-100 p-3 lg:p-4 rounded-full">
            {service.icon}
          </div>
          <p className="text-xl lg:text-2xl font-bold text-gray-800 mt-2">
            {service.value}
          </p>
          <p className="text-xs lg:text-sm text-gray-500">{service.label}</p>
        </div>
      ))}
    </div>
  </div>
);

const DashboardContent = () => (
  <div className="p-4 space-y-6">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardCard
          title="TDM Services"
          services={[
            {
              icon: <span>👜</span>,
              value: "3540",
              label: "Total Consultations",
            },
            { icon: <span>🛡️</span>, value: "3540", label: "Health Checkup" },
            { icon: <span>📈</span>, value: "3540", label: "ECG" },
          ]}
        />
        <DashboardCard
          title="TDM Information"
          services={[
            { icon: <span>📠</span>, value: "40", label: "Total TDMs" },
            { icon: <span>📠</span>, value: "05", label: "Inactive TDMs" },
            { icon: <span>👤</span>, value: "3540", label: "Total Patients" },
          ]}
        />
        <DashboardCard
          title="Doctor"
          services={[
            { icon: <span>🩺</span>, value: "50", label: "Total Doctors" },
            { icon: <span>👩‍⚕️</span>, value: "45", label: "Active Doctors" },
            { icon: <span>💰</span>, value: "₹650", label: "Avg Fees" },
          ]}
        />
        <DashboardCard
          title="Home-Care Services"
          services={[
            { icon: <span>🏠</span>, value: "20", label: "Doctor Visit" },
            { icon: <span>--</span>, value: "NA", label: "Caretaker/Nurse" },
            { icon: <span>📅</span>, value: "07", label: "On Demand Services" },
          ]}
        />
      </div>

      {/* Pie Chart */}
      <div className="flex items-stretch">
        <div className="bg-white p-4 lg:p-6 rounded-2xl shadow-lg w-full">
          <h3 className="text-md lg:text-lg font-semibold mb-4">
            Revenue Distribution by Source
          </h3>
          <Pie data={pieData} />
        </div>
      </div>
    </div>

    {/* Line Charts */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      <div className="bg-white p-4 lg:p-6 rounded-2xl shadow-lg">
        <h3 className="text-md lg:text-lg font-semibold mb-4">
          Patient Acquisition
        </h3>
        <Line data={lineData} />
      </div>
      <div className="bg-white p-4 lg:p-6 rounded-2xl shadow-lg">
        <h3 className="text-md lg:text-lg font-semibold mb-4">
          Total Income Graph
        </h3>
        <Line data={lineData} />
      </div>
    </div>

    {/* Additional Cards */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      <TDMServicesInsightsCard />
      <ConsultationBarChart />
    </div>
  </div>
);

const DoctorListContent = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold">Doctor List</h1>
    <p>Doctor List content goes here.</p>
  </div>
);

const TDMManagementContent = () => (
  <div className="p-4 space-y-6">
    <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex items-center space-x-4">
        <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full">
          TDM 1
        </span>
        <p className="text-gray-500">
          Installation Date:{" "}
          <span className="font-semibold text-black">20/05/2022</span>
        </p>
        <p className="text-gray-500">08:30PM</p>
      </div>
      <div className="flex space-x-4 items-center">
        <div className="text-gray-500">
          Operator ID:{" "}
          <span className="font-semibold text-black">#51674738</span>
        </div>
        <div className="flex items-center">
          <Image
            src="https://via.placeholder.com/40"
            alt="Operator"
            className="w-10 h-10 rounded-full"
          />
          <p className="ml-2 font-semibold text-black">Bessie Cooper</p>
        </div>
      </div>
    </div>

    <div className="bg-white p-4 rounded-2xl shadow-lg">
      <div className="flex space-x-8 border-b">
        <a
          href="/"
          className="text-blue-600 font-semibold pb-2 border-b-2 border-blue-600"
        >
          TDM
        </a>
        <a href="/" className="text-gray-500 pb-2">
          TDM Beneficiaries
        </a>
        <a href="/" className="text-gray-500 pb-2">
          Homecare Services
        </a>
        <a href="/" className="text-gray-500 pb-2">
          TDM Transactions
        </a>
      </div>

      {/* Table Section */}
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full bg-white rounded-2xl shadow-lg">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left">Time</th>
              <th className="py-3 px-4 text-left">Assigned Doctor</th>
              <th className="py-3 px-4 text-left">Doctor ID</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Contact Number</th>
              <th className="py-3 px-4 text-left">Total Amount</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {doctorData.map((doctor, index) => (
              <tr key={index}>
                <td className="py-3 px-4">{doctor.time}</td>
                <td className="py-3 px-4 flex items-center space-x-2">
                  <Image
                    src={doctor.imageUrl}
                    alt="Doctor"
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{doctor.doctorName}</p>
                    <p className="text-xs text-gray-500">
                      {doctor.doctorSpecialty}
                    </p>
                  </div>
                </td>
                <td className="py-3 px-4">{doctor.doctorID}</td>
                <td className="py-3 px-4">{doctor.email}</td>
                <td className="py-3 px-4">{doctor.contactNumber}</td>
                <td className="py-3 px-4">{doctor.totalAmount}</td>
                <td className="py-3 px-4">
                  <a href="/" className="text-blue-600 hover:underline">
                    Edit
                  </a>
                  <a href="/" className="ml-4 text-red-600 hover:underline">
                    <FaTrashAlt className="inline-block text-red-600" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const HomecareServicesContent = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold">Homecare Services</h1>
    <p>Homecare Services content goes here.</p>
  </div>
);

const RevenueManagementContent = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold">Revenue Management</h1>
    <p>Revenue Management content goes here.</p>
  </div>
);

// Main Content Component - dynamically renders based on content type
const Content = ({ content }) => {
  switch (content) {
    case "Dashboard":
      return <DashboardContent />;
    case "Doctor List":
      return <DoctorListContent />;
    case "TDM Management":
      return <TDMManagementContent />;
    case "Homecare Services":
      return <HomecareServicesContent />;
    case "Revenue Management":
      return <RevenueManagementContent />;
    default:
      return <DashboardContent />;
  }
};

export default Content;
