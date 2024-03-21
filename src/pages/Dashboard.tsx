import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa6";
import user from '../assets/userpic.png'
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import data from '../assets/data.json'
import { BarChart, DoughnoutChart } from "../components/Chart";
import { BiMaleFemale } from "react-icons/bi";
import DashboardTable from "../components/DashboardTable";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <div className="dashboard">
        <main className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users and docs" />
          <FaRegBell />
          <img src={user} alt="user" />
        </main>
        <section className="widgetContainer">
          <WidgetItem heading="Revenue" value="34000" amount={true} percent={40} color="rgba(0,115,225)" />
          <WidgetItem heading="Users" value="400" amount={false} percent={-14} color="rgba(0,198,202)" />
          <WidgetItem heading="Transactions" value="23000" amount={false} percent={80} color="rgba(255,196,0)" />
          <WidgetItem heading="Products" value="1000" amount={false} percent={30} color="rgba(76,0,255)" />
        </section>

        <section className="graph-container">
          <div className="revenue-chart">
            <h2>Revenue and Transaction</h2>
            {/* Graph */}
            <BarChart
              data_2={[400, 544, 133, 875, 437, 255, 980]}
              data_1={[300, 144, 433, 655, 237, 755, 190]}
              title_1="Revenue"
              title_2="Transaction"
              bgColor_1="rgb(0,155,255)"
              bgColor_2="rgba(53,162,235,0.8)"
            />
          </div>
          <div className="dashboard-categories">
            <h2>Inventory</h2>
            {data.categories.map(i => (
              <CategoryItem
                key={i.heading}
                heading={i.heading}
                value={i.value}
                color={`hsl(${i.value * 4},${i.value}%,50%)`}
              />
            ))}
          </div>
        </section>

        <section className="transcation-container">
          <div className="gender-chart">
            <h2>Gender ratio</h2>
            {/* Chart */}
            <DoughnoutChart labels={['Female', 'Male']} data={[12, 19]} backgroundColor={['hsl(340,82%,56%)', 'rgba(53,162,235,0.8)']} cutout={90} />
            <p><BiMaleFemale /></p>
          </div>
          {/* Table */}
          <DashboardTable data={data.transaction} />
        </section>
      </div>
    </div>
  );
};

interface WidgetItemProps {
  heading: string,
  value: string,
  percent: number,
  amount: boolean,
  color: string,
}

const WidgetItem = ({ heading, value, percent, amount, color }: WidgetItemProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? <span className="green">
        <HiTrendingUp /> + {percent}%{" "}
      </span> : <span className="red">
        <HiTrendingDown /> {percent}%{" "}
      </span>}
    </div>
    <div className="widgetCircle" style={{ background: `conic-gradient(${color} ${(Math.abs(percent) / 100) * 360}deg, rgb(255,255,255)0)` }}>
      <span style={{ color: color }}>{percent}%</span>
    </div>
  </article>
)

interface CategoryItemprops {
  heading: string;
  value: number;
  color: string
}

const CategoryItem = ({ heading, value, color }: CategoryItemprops) => (
  <div className="category-item">
    <h4>{heading}</h4>
    <div>
      <div style={{ backgroundColor: color, width: `${value}%` }}></div>
    </div>
    <span>{value}</span>
  </div>
)

export default Dashboard;
