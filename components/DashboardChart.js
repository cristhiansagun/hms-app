import { React, useState, useEffect } from 'react'
import { Card } from 'antd';

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
import { Line } from 'react-chartjs-2'
import { useFaker } from 'next-faker';

function DashboardChart() {

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
    
    const options = {
        responsive: true,
    }
    
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    
    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'Dataset 2',
                // eslint-disable-next-line react-hooks/rules-of-hooks
                data: labels.map(() => useFaker().address.buildingNumber({ min: 0, max: 1000 })),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ]
    }

    return (
        <Card
            title="Health Monitoring"
            className="todo"
            bordered={false}
        >
            <div style={{ position: 'relative' }}>
                <Line options={options} data={data} />
            </div>
        </Card>
    )
}




export default DashboardChart