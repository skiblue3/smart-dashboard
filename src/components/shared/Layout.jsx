import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout() {
	const [isSidebarVisible, setSidebarVisibility] = useState(true);

	const toggleSidebar = () => {
		setSidebarVisibility(!isSidebarVisible);
	};

	return (
		<div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
			<Sidebar isVisible={isSidebarVisible} />
			<div className="flex flex-col flex-1">
				<Header onSidebarToggle={toggleSidebar} />
				<div className="flex-1 p-4 min-h-0 overflow-auto">
					<Outlet />
				</div>
			</div>
		</div>
	);
}
