import Image from 'next/image'
import avatarImage from '../images/people.png'

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
	ArcElement
  } from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2'
import { useFaker } from 'next-faker';


ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
	ArcElement
)


export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'Chart.js Line Chart',
		}
	}
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];



export const data = {
	labels,
	datasets: [
		{
			fill: true,
			label: 'Dataset 2',
			data: labels.map(() => useFaker().address.buildingNumber({ min: 0, max: 1000 })),
			borderColor: 'rgb(53, 162, 235)',
			backgroundColor: 'rgba(53, 162, 235, 0.5)',
		},
	]
}

function Dashboard() {
	return (
		<>
			<ul className="box-info">
				<li>
					<i className='bx bxs-thermometer'></i>
					<span className="text">
						<h3>1020</h3>
						<p>Normal Temperature</p>
					</span>
				</li>
				<li>
					<i className='bx bxs-thermometer'></i>
					<span className="text">
						<h3>2834</h3>
						<p>Above Normal Temp.</p>
					</span>
				</li>
				<li>
					<i className='bx bxs-group'></i>
					<span className="text">
						<h3>2543</h3>
						<p>Total People</p>
					</span>
				</li>
			</ul>
			<div className="table-data">
				<div className="order">
					<div className="head">
						<h3>Recent Activity</h3>
					</div>
					<table>
						<thead>
							<tr>
								<th>Name</th>
								<th>Date</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<Image alt="" src={avatarImage} width="64" height="64"/>
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span className="status normal">Normal</span></td>
							</tr>
							<tr>
								<td>
									<Image alt="" src={avatarImage} width="64" height="64"/>
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span className="status normal">Normal</span></td>
							</tr>
							<tr>
								<td>
									<Image alt="" src={avatarImage} width="64" height="64"/>
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span className="status abovenormal">Above Normal</span></td>
							</tr>
							<tr>
								<td>
									<Image alt="" src={avatarImage} width="64" height="64"/>
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span className="status normal">Normal</span></td>
							</tr>
							<tr>
								<td>
									<Image alt="" src={avatarImage} width="64" height="64"/>
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span className="status abovenormal">Above Normal</span></td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="todo">
					<div class="head">
						<h3>Chart</h3>
					</div>
					<div class="charts-card">
						<p class="chart-title">Health Monitoring</p>
						<Line options={options} data={data} />
					</div>
				</div>
			</div>
		</>
  	)
}

export default Dashboard