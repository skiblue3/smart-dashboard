import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
	{
		name: 'Jan',
		Saved: 2400,
		Consumed: 4000
	},
	{
		name: 'Feb',
		Saved: 1398,
		Consumed: 3000
	},
	{
		name: 'Mar',
		Saved: 2000,
		Consumed: 8100
	},
	{
		name: 'Apr',
		Saved: 2780,
		Consumed: 3908
	},
	{
		name: 'May',
		Saved: 1890,
		Consumed: 4800
	},
	{
		name: 'Jun',
		Saved: 2390,
		Consumed: 3800
	},
	{
		name: 'July',
		Saved: 3490,
		Consumed: 4300
	},
	{
		name: 'Aug',
		Saved: 2000,
		Consumed: 9800
	},
	{
		name: 'Sep',
		Saved: 2780,
		Consumed: 3908
	},
	{
		name: 'Oct',
		Saved: 1890,
		Consumed: 4800
	},
	{
		name: 'Nov',
		Saved: 2390,
		Consumed: 3800
	},
	{
		name: 'Dec',
		Saved: 3490,
		Consumed: 5600
	}
]

export default function SavingsChart() {
	return (
		<div className="h-[22rem] md:h-[18rem] lg:h-[22rem] xl:h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1 overflow-x-auto">
			<strong className="text-gray-700 font-medium">Monthly Savings</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						data={data}
						margin={{
							top: 20,
							right: 30,
							left: -10,
							bottom: 0
						}}
					>
						<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="Saved" fill="#0ea5e9" />
						<Bar dataKey="Consumed" fill="#ea580c" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
