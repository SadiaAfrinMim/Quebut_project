import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Table from '../Component/Table';
import { Link, useOutletContext } from 'react-router-dom';
import { DownOutlined, CheckOutlined, CalendarOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Space, DatePicker } from 'antd';

const Graph = () => {
  const branchData = useOutletContext();
  const [selectedBranch, setSelectedBranch] = useState('Branch 1');
  const [selectedRange, setSelectedRange] = useState('Daily');
  const [selectedDates, setSelectedDates] = useState(null);

  const data = branchData[selectedBranch];
  const { RangePicker } = DatePicker;
  const chartColors = ['#3B82F6', '#8B5CF6', '#10B981', '#EF4444', '#F59E0B'];

  return (
    <div className=" bg-gradient-to-br p-4 shadow-2xl rounded-md from-gray-50 to-blue-50 min-h-screen">
      {/* Header Section */}
      <div className="  md:flex-row justify-between items-start md:items-center mb-8">
        <h2 className="text-3xl py-4 font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-0">
          Total Overview Dashboard - {selectedBranch}
        </h2>

        {/* Controls Container */}
        <div className="md:flex space-y-4 justify-center md:justify-between gap-4 items-center">
          {/* Branch Dropdown */}
          <Dropdown
            overlay={
              <Menu className="shadow-xl rounded-xl overflow-hidden border border-gray-200">
                {Object.keys(branchData || {}).map((branch) => (
                  <Menu.Item
                    key={branch}
                    onClick={() => setSelectedBranch(branch)}
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
              style={{ minWidth: '200px' }}
            >
              <Space className="flex items-center justify-between w-full">
                <span className="text-blue-600 font-medium">{selectedBranch}</span>
                <DownOutlined className="text-blue-400" />
              </Space>
            </Button>
          </Dropdown>

          {/* Date Range Dropdown */}
          
              <div>
              {['Daily', 'Weekly', 'Monthly'].map((item) => (
                  <button
                    key={item}
                    onClick={() => setSelectedRange(item)}
                    className={`px-6  py-3  transition-all ${
                      selectedRange === item
                        ? ' bg-blue-600 text-white font-semibold'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              
              </div>
         
        
           

          {/* Date Picker */}
          <RangePicker
            onChange={setSelectedDates}
            className="h-12 border-2 border-blue-200 rounded-xl hover:border-blue-300"
          />
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
               
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 mb-10">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <div className="w-1 h-6 bg-blue-500 mr-2 rounded-full" />
          Token Status Overview
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data.tokenData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" radius={[10, 10, 0, 0]}>
              {data.tokenData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={chartColors[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Service Distribution + Pivot */}
      <div className="grid lg:grid-cols-2 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <div className="w-1 h-6 bg-purple-500 mr-2 rounded-full" />
            Service-Wise Pivot Diagram
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data.serviceData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill={chartColors[1]} radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <div className="w-1 h-6 bg-green-500 mr-2 rounded-full" />
            Service Type Ratio
          </h3>
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
                {data.serviceData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Time-based Top Services */}
      <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 mb-10">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <div className="w-1 h-6 bg-teal-500 mr-2 rounded-full" />
          Top Services ({selectedRange})
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data.topServiceData[selectedRange]}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill={chartColors[2]} radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Table Component */}
      <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
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