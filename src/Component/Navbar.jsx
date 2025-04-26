import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiSettings, FiX, FiArrowUpRight, FiActivity, FiServer, FiUsers, FiTool } from 'react-icons/fi';
import { RiAdminLine, RiDragMove2Line } from 'react-icons/ri';
import { DownOutlined, UserOutlined, CheckOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu,  Space, Tooltip } from 'antd';

const Navbar = () => {
  
  
  
  // নিরাপদভাবে ব্রাঞ্চ সিলেক্ট করুন
  
 
  const [isOpen, setIsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const drawerRef = useRef(null);
  const settingsRef = useRef(null);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const toggleSettings = () => setSettingsOpen(!settingsOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setSettingsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="fixed w-full top-0 z-50">
      {/* Main Navbar */}
      <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo with animated drawer toggle */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={toggleDrawer}>
            <RiDragMove2Line
              className={`text-xl transition-transform duration-300 ${
                isOpen ? 'rotate-90 text-purple-200' : 'hover:rotate-45'
              }`}
            />
            <span className="text-2xl font-bold flex items-center">
              <img
                src="https://img.icons8.com/?size=100&id=111043&format=png&color=000000"
               alt='Q'
                className={`h-8 w-8 mr-2 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
              BOT
            </span>
          </div>

          {/* Right side elements */}
          <div className="flex items-center space-x-4">
            {/* Search input with toggle */}
            <div className={`relative transition-all duration-300 ${searchOpen ? 'w-64' : 'w-12'}`}>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FiSearch className="text-xl cursor-pointer" onClick={() => setSearchOpen(!searchOpen)} />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className={`w-full bg-white/20 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-200 focus:outline-none ${
                  !searchOpen && 'opacity-0 cursor-pointer'
                } transition-opacity`}
                onClick={() => !searchOpen && setSearchOpen(true)}
              />
            </div>

            {/* Settings dropdown */}
            <div className="relative" ref={settingsRef}>
              <FiSettings
                className="text-xl cursor-pointer hover:rotate-90 transition-transform"
                onClick={toggleSettings}
              />
              {settingsOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl text-gray-800 overflow-hidden">
                  <Link
                    to="/settings/general"
                    className="flex items-center p-3 hover:bg-purple-50 transition-colors"
                  >
                    <FiTool className="mr-2" />
                    General
                  </Link>
                  <Link
                    to="/settings/graph"
                    className="flex items-center p-3 hover:bg-purple-50 transition-colors"
                  >
                    <FiActivity className="mr-2" />
                    Graphs
                  </Link>
                </div>
              )}
            </div>

            {/* Admin login button */}
            <button className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
              <RiAdminLine />
              <span>Super Admin</span>
              <FiArrowUpRight />
            </button>
          </div>
        </div>
      </nav>

      {/* Animated Gradient Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-br from-blue-600/95 to-purple-600/95 backdrop-blur-lg text-white shadow-2xl transform transition-all duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
      

        <div className="p-6 space-y-6">
          <div className="space-y-3">
            <h3 className="text-sm uppercase text-white/70 tracking-wider font-medium flex items-center">
              <FiActivity className="mr-2" />
              Analytics
            </h3>
            
            <div className="ml-2 space-y-4">
              
              <Link
                to="/graph2"
                className="flex items-center p-3 hover:bg-white/10 rounded-lg transition-all duration-200 hover:translate-x-2"
              >
                <FiServer className="mr-3" />
                Graph Configuration 2
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm uppercase text-white/70 tracking-wider font-medium flex items-center">
              <FiUsers className="mr-2" />
              Administration
            </h3>
            <Link
              to="/admin"
              className="flex items-center p-3 hover:bg-white/10 rounded-lg transition-all duration-200 hover:translate-x-2"
            >
              <FiTool className="mr-3" />
              System Settings
            </Link>
            <Link
              to="/users"
              className="flex items-center p-3 hover:bg-white/10 rounded-lg transition-all duration-200 hover:translate-x-2"
            >
              <FiUsers className="mr-3" />
              User Management
            </Link>
            <Link
              to="/add-branch"
              className="flex items-center p-3 hover:bg-white/10 rounded-lg transition-all duration-200 hover:translate-x-2"
            >
              <FiUsers className="mr-3" />
             Add Branch
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;