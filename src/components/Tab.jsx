import React, { useState } from 'react';
import '../styles/Tabs.css'; // Import custom CSS for styling
import '../styles/registerForm.css'

import URLModal from './URLModal';
import AvailableURLS from './AvailableURLS';
import Dashboard from './Dashboard';
import { useNavigate } from 'react-router-dom';

function Tabs({userData}) {
  const [activeTab, setActiveTab] = useState('tab1');
  const navigate = useNavigate();
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleLogout = () =>{
    localStorage.removeItem('token-url');
    navigate("/login");
  }

  return (
    <div className="tabs-container p-1">
       <h1>Welcome to URL shortener</h1>
      <div className="header-info">
        <div className=" text-center">
     
      <h4 className='text-center ' >Hi &nbsp;
        <span className='username'>{userData?.name}</span> 
        </h4>
        </div>
      <div className='text-end'>
      <button type="button" class="btn btn-danger"
      onClick={handleLogout}
      >Logout</button>

      </div>
      </div>
      {/* Tab buttons */}
      <div className="tab-buttons">
        <button
          className={activeTab === 'tab1' ? 'active' : ''}
          onClick={() => handleTabClick('tab1')}
        >
          Dashboard
        </button>
        <button
          className={activeTab === 'tab2' ? 'active' : ''}
          onClick={() => handleTabClick('tab2')}
        >
          New url
        </button>
        <button
          className={activeTab === 'tab3' ? 'active' : ''}
          onClick={() => handleTabClick('tab3')}
        >
          Available URLS
        </button>
        
      </div>

      {/* Tab content */}
      <div className="tab-content">
        {activeTab === 'tab1' && (
         <Dashboard />
        )}
        {activeTab === 'tab2' && (
          
            <URLModal />
          
        )}
        {activeTab === 'tab3' && (
          <AvailableURLS />
        )}
        
        
      </div>
    </div>
  );
}

export default Tabs;