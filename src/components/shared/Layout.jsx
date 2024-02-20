import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout({user}) {
	const [isSidebarVisible, setSidebarVisibility] = useState(true);

	const toggleSidebar = () => {
		setSidebarVisibility(!isSidebarVisible);
	};

	 // Use useEffect to set sidebar visibility based on window width
	 useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // Show sidebar for larger screens
        setSidebarVisibility(true);
      } else {
        // Hide sidebar for smaller screens
        setSidebarVisibility(false);
      }
    };

    // Set initial visibility
    handleResize();

    // Attach resize event listener
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

	return (
		<div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
			<Sidebar isVisible={isSidebarVisible} user={user}/>
			<div className="flex flex-col flex-1">
				<Header onSidebarToggle={toggleSidebar} isSidebarVisible={isSidebarVisible}/>
				<div className="flex-1 p-4 min-h-0 overflow-auto">
					<Outlet />
				</div>
			</div>
		</div>
	);
}
