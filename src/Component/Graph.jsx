import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Table from './Table';
import { Navigate, useOutletContext } from 'react-router-dom';
import { DownOutlined, UserOutlined, CheckOutlined, CalendarOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Space } from 'antd';

const Graph = () => {
    const branchData = useOutletContext();
    const [selectedBranch, setSelectedBranch] = useState('Branch 1');
    const [selectedRange, setSelectedRange] = useState('Daily');

    const data = branchData[selectedBranch];

   

    return (
        <div className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-0">
                    Total Overview Dashboard - {selectedBranch}
                </h2>

                {/* Branch Selection */}
                <div className="flex items-center gap-4">
                    <Dropdown
                        overlay={
                            <Menu className="shadow-xl rounded-xl overflow-hidden border border-gray-200">
                                {Object.keys(branchData || {}).map((branch) => (
                                    <Menu.Item
                                        key={branch}
                                        className={`px-6 py-3 transition-all flex items-center ${
                                            selectedBranch === branch
                                                ? 'bg-blue-50 text-blue-600 font-semibold'
                                                : 'hover:bg-gray-50 text-gray-700'
                                        }`}
                                    >
                                        {branch}
                                        {selectedBranch === branch && (
                                            <CheckOutlined className="ml-2 text-blue-500 animate-fade-in" />
                                        )}
                                    </Menu.Item>
                                ))}
                            </Menu>
                        }
                    >
                        <Button
                            className="flex items-center border-2 border-blue-200 bg-white hover:border-blue-300 rounded-xl h-12 px-4 shadow-sm hover:shadow-md transition-all"
                            style={{ minWidth: '220px' }}
                        >
                            <Space className="flex items-center justify-between w-full">
                                <span className="text-blue-600 font-medium">{selectedBranch}</span>
                                <DownOutlined className="text-blue-400" />
                            </Space>
                        </Button>
                    </Dropdown>

                    <Dropdown
                        overlay={
                            <Menu className="shadow-xl rounded-xl overflow-hidden border border-gray-200">
                                {['Daily', 'Weekly', 'Monthly'].map((item) => (
                                    <Menu.Item
                                        key={item}
                                        className={`px-6 py-3 transition-all ${
                                            selectedRange === item
                                                ? 'bg-blue-50 text-blue-600 font-semibold'
                                                : 'hover:bg-gray-50 text-gray-700'
                                        }`}
                                    >
                                        {item}
                                    </Menu.Item>
                                ))}
                            </Menu>
                        }
                    >
                        <Button
                            icon={<CalendarOutlined className="text-blue-400" />}
                            className="flex items-center border-2 border-blue-200 bg-white hover:border-blue-300 rounded-xl h-12 px-4 shadow-sm hover:shadow-md transition-all"
                        >
                            <span className="text-blue-600 font-medium ml-2">{selectedRange}</span>
                        </Button>
                    </Dropdown>
                </div>
            </div>

            {/* Live Token Stats */}
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mb-10">
                {data.tokenData.map((item, index) => (
                    <div 
                        key={index}
                        className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500 group"
                    >
                        <div className="flex items-center justify-between">
                            <div className={`text-3xl p-3 rounded-full bg-opacity-20 ${item.color}`}>
                                {item.icon}
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-500 mb-1">{item.name}</p>
                                <p className="text-2xl font-bold text-gray-800">{item.value}</p>
                                <div className="h-1 bg-gradient-to-r from-blue-200 to-blue-100 mt-2 rounded-full">
                                    <div 
                                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-500"
                                        style={{ width: `${(item.value / 100) * 100}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
          
           

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
          {/* {['Daily', 'Weekly', 'Monthly'].map((label) => (
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
          ))} */}
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
    </div>

       
    );
};

export default Graph;