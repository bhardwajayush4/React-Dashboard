import React from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import { LineChart } from '../../components/Chart'


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

const LineCharts = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className='chart-container'>
        <h1>Line Charts</h1>
        <section>
          <LineChart
            data={[400, 544, 833, 575, 637, 255, 980, 512, 357, 707, 531, 1308]}
            label="users"
            backgroundColor={"rgb(53,162,255,0.5)"}
            borderColor={"rgb(53,162,255)"}
            labels={months}
          />
          <h2>Active Users</h2>
        </section>

        <section>
          <LineChart
            data={[1400, 2544, 833, 575, 1637, 2255, 980, 1182, 2357, 707, 1531, 1308]}
            label="Revenue"
            backgroundColor={"hsla(269,80%,40%,0.4)"}
            borderColor={"hsl(269,80%,40%)"}
            labels={months}
          />
          <h2>Total Products (SKU)</h2>
        </section>

        <section>
          <LineChart
            data={[14000, 45844, 11833, 57005, 41637, 92255, 55980, 10182, 23657, 88707, 15031, 19028]}
            label="Revenue"
            backgroundColor={"hsla(129,80%,40%,0.4)"}
            borderColor={"hsl(129,80%,40%)"}
            labels={months}
          />
          <h2>Total Revenue</h2>
        </section>

        <section>
          <LineChart
            data={[9000, 12000, 12000, 9000, 1000, 5000, 5000, 8000, 3000, 8000, 5050, 9050]}
            label="Revenue"
            backgroundColor={"hsla(29,80%,40%,0.4)"}
            borderColor={"hsl(29,80%,40%)"}
            labels={months}
          />
          <h2>Discount Alloted</h2>
        </section>
      </main>
    </div>
  )
}

export default LineCharts