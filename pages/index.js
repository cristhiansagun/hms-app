import { React } from 'react'

import RecentActivityList from '@/components/RecentActivityList'
import DashboardChart from '@/components/DashboardChart'
import DashboardSummary from '@/components/DashboardSummary'

function Dashboard() {

	return (
		<>
			<DashboardSummary />
			<div className="table-data">
				<RecentActivityList />
				<DashboardChart />
			</div>
		</>
  	)
}

export default Dashboard