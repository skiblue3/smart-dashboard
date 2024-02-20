import React from 'react';
import DashboardStatsGrid from '../components/DashboardStatsGrid';
import SavingsChart from '../components/SavingsChart';
import SolarPanelChart from '../components/SolarPanelChart';
import WeatherCard from '../components/WeatherCard';
import UsageEstimateChart from '../components/UsageEstimateChart';
import { useNavigate } from 'react-router-dom';

export default function Dashboard({ user }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 p-4 md:p-8 lg:p-12 xl:p-16 w-full">
      {user ? (
        <div className="mb-4">
          <p className="text-lg font-semibold">Hello, {user.username}!</p>
          {user.role === 'admin' && (
            <div>
              <p className="text-sm">You have admin privileges.</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2" onClick={() => navigate('/admin')}>
                Go to Admin Page
              </button>
            </div>
          )}
          <button
            type="button"
            onClick={() => navigate('/logout')}
            className="bg-red-500 text-white px-4 py-2 rounded-md mt-2"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
          >
            Login
          </button>
        </div>
      )}
      <DashboardStatsGrid />
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div className="w-full md:w-8/12 xl:w-2/3">
          <SavingsChart />
        </div>
        <div className="w-full md:w-4/12 xl:w-1/3">
          <SolarPanelChart />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div className="w-full md:w-8/12 xl:w-2/3">
          <UsageEstimateChart />
        </div>
        <div className="w-full md:w-4/12 xl:w-1/3">
          <WeatherCard />
        </div>
      </div>
    </div>
  );
}
