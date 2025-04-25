import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { FiUsers, FiCheckCircle, FiXCircle, FiClock } from 'react-icons/fi';
import Table from './Table';
import { Link, useOutletContext } from 'react-router-dom';

// Sample Data for Branches
// const branchData = {
//   'Branch 1': {
//     tokenData: [
//       { name: 'In Queue', value: 25, icon: <FiUsers />, color: 'bg-blue-500' },
//       { name: 'Issued', value: 245, icon: <FiClock />, color: 'bg-purple-500' },
//       { name: 'Served', value: 198, icon: <FiCheckCircle />, color: 'bg-green-500' },
//       { name: 'Rejected', value: 12, icon: <FiXCircle />, color: 'bg-red-500' },
//     ],
//     serviceData: [
//       { name: 'Bill Payment', value: 45 },
//       { name: 'Cash Deposit', value: 32 },
//       { name: 'Account Opening', value: 18 },
//       { name: 'Loan Inquiry', value: 5 },
//     ],
//     topServiceData: {
//       Daily: [
//         { name: 'Cash Deposit', value: 10 },
//         { name: 'Bill Payment', value: 8 },
//         { name: 'Loan Inquiry', value: 4 },
//       ],
//       Weekly: [
//         { name: 'Bill Payment', value: 32 },
//         { name: 'Cash Deposit', value: 28 },
//         { name: 'Account Opening', value: 14 },
//       ],
//       Monthly: [
//         { name: 'Bill Payment', value: 100 },
//         { name: 'Cash Deposit', value: 86 },
//         { name: 'Account Opening', value: 55 },
//       ],
//     },
//   },
//   // You can define similar data for Branch 2, Branch 3, and Branch 4
//   'Branch 2': {
//     tokenData: [
//         { name: 'In Queue', value: 15, icon: <FiUsers />, color: 'bg-blue-500' },
//         { name: 'Issued', value: 245, icon: <FiClock />, color: 'bg-purple-500' },
//         { name: 'Served', value: 198, icon: <FiCheckCircle />, color: 'bg-green-500' },
//         { name: 'Rejected', value: 12, icon: <FiXCircle />, color: 'bg-red-500' },
//       ],
//       serviceData: [
//         { name: 'Bill Payment', value: 45 },
//         { name: 'Cash Deposit', value: 32 },
//         { name: 'Account Opening', value: 18 },
//         { name: 'Loan Inquiry', value: 5 },
//       ],
//       topServiceData: {
//         Daily: [
//           { name: 'Cash Deposit', value: 10 },
//           { name: 'Bill Payment', value: 8 },
//           { name: 'Loan Inquiry', value: 4 },
//         ],
//         Weekly: [
//           { name: 'Bill Payment', value: 32 },
//           { name: 'Cash Deposit', value: 28 },
//           { name: 'Account Opening', value: 14 },
//         ],
//         Monthly: [
//           { name: 'Bill Payment', value: 100 },
//           { name: 'Cash Deposit', value: 86 },
//           { name: 'Account Opening', value: 55 },
//         ],
//       },
//    },
//   'Branch 3': { /* similar structure with different values */ },
//   'Branch 4': { /* similar structure with different values */ },
// };

// Component for Graphs
const Graph = () => {
  
   
 const  branchData  = useOutletContext();
   
  const [selectedBranch, setSelectedBranch] = useState('Branch 1');
  const [selectedRange, setSelectedRange] = useState('Daily');


  const data = branchData[selectedBranch];
  console.log(branchData)

  return (
    <Link  className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Total Overview Dashboard - {selectedBranch}</h2>

      {/* Branch Selection */}
      <div className="flex gap-4 mb-6">
        {Object.keys(branchData).map((branch) => (
          <button
            key={branch}
            onClick={() => setSelectedBranch(branch)}
            className={`px-4 py-2 rounded-md transition ${
              selectedBranch === branch
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-blue-100'
            }`}
          >
            {branch}
          </button>
        ))}
      </div>

      {/* Live Token Stats */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mb-10">
        {data.tokenData.map((item, index) => (
          <div key={index} className={`${item.color} text-white p-6 rounded-2xl shadow-lg`}>
            <div className="flex items-center justify-between">
              <div className="text-3xl">{item.icon}</div>
              <div className="text-right">
                <p className="text-sm opacity-80">{item.name}</p>
                <p className="text-3xl font-bold">{item.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Token Status Overview Graph */}
      <div className="bg-white p-6 rounded-xl shadow mb-10">
        <h3 className="text-lg font-semibold mb-4">Token Status Overview</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data.tokenData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" radius={[10, 10, 0, 0]}>
              {data.tokenData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={['#3b82f6', '#a855f7', '#10b981', '#ef4444'][index]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Service Distribution + Pivot */}
      <div className="grid lg:grid-cols-2 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">Service-Wise Pivot Diagram</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data.serviceData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">Service Type Ratio</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={data.serviceData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {data.serviceData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={['#8884d8', '#82ca9d', '#ffc658', '#ff7f50'][index % 4]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Time-based Top Services */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-4">Top Services</h3>
        <div className="flex gap-4 mb-6">
          {['Daily', 'Weekly', 'Monthly'].map((label) => (
            <button
              key={label}
              onClick={() => setSelectedRange(label)}
              className={`px-4 py-2 rounded-md transition ${
                selectedRange === label
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 hover:bg-blue-100'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data.topServiceData[selectedRange]}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#82ca9d" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Include the Table Component */}
      <div className="mt-8">
        <Table
          tokenData={data.tokenData}
          serviceData={data.serviceData}
          topServiceData={data.topServiceData}
        />
      </div>
    </Link>
  );
};

export default Graph;
