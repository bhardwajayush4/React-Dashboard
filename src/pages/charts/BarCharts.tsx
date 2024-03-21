import React from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import { BarChart } from '../../components/Chart'


const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];

const BarCharts = () => {
    return (
        <div className="adminContainer">
            <AdminSidebar />
            <main className='chart-container'>
                <h1>Bar Charts</h1>
                <section>
                    <BarChart
                        data_2={[400, 544, 133, 875, 437, 255, 980]}
                        data_1={[300, 144, 433, 655, 237, 755, 190]}
                        title_1="Products"
                        title_2="users"
                        bgColor_1={"hsl(260,50%,30%)"}
                        bgColor_2={"hsl(300,90%,90%)"}
                    />
                    <h2>Top Selling Products and Top Customers</h2>
                </section>

                <section>
                    <BarChart
                        horizontal={true}
                        data_1={[400, 544, 133, 875, 437, 255, 980, 555, 1125, 478, 254, 489]}
                        data_2={[]}
                        title_1="Products"
                        title_2=""
                        bgColor_1={"hsl(180,40%,50%)"}
                        bgColor_2={""}
                        labels={months}
                    />
                    <h2>Orders throughout the year</h2>
                </section>
            </main>
        </div>
    )
}

export default BarCharts