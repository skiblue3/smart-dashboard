import React from 'react';
import DashboardStatsGrid from '../components/DashboardStatsGrid';
import TransactionChart from '../components/TransactionChart';
import SolarPanelChart from '../components/SolarPanelChart';
import WeatherCard from '../components/WeatherCard';
import UsageEstimateChart from '../components/UsageEstimateChart';

export default function Dashboard() {
    return (
        <div className="flex flex-col gap-4 p-4 md:p-8 lg:p-12 xl:p-16 w-full">
						<DashboardStatsGrid />
            <div className="flex flex-col md:flex-row gap-4 w-full">
                <div className="w-full md:w-8/12 xl:w-2/3">
                    <TransactionChart />
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
