import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Customer = lazy(() => import("./pages/Customer"));
const Product = lazy(() => import("./pages/Product"));
const Transaction = lazy(() => import("./pages/Transaction"));
const NewProduct = lazy(() => import("./pages/management/NewProduct"))
const ProductManagement = lazy(() => import("./pages/management/ProductManagement"))
const TransactionManagement = lazy(() => import("./pages/management/TransactionManagement"))
const BarChart = lazy(() => import('./pages/charts/BarCharts'))
const LineChart = lazy(() => import('./pages/charts/LineCharts'))
const PieChart = lazy(() => import('./pages/charts/PieCharts'))
const StopWatch = lazy(() => import('./pages/apps/StopWatch'))
const Coupon = lazy(() => import('./pages/apps/Coupon'))
const Toss = lazy(() => import('./pages/apps/Toss'))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/customer" element={<Customer />} />
          <Route path="/admin/product" element={<Product />} />
          <Route path="/admin/transaction" element={<Transaction />} />


          {/* Chart */}
          <Route path="/admin/chart/bar" element={<BarChart />} />
          <Route path="/admin/chart/line" element={<LineChart />} />
          <Route path="/admin/chart/pie" element={<PieChart />} />


          {/* Apps */}
          <Route path="/admin/app/stopwatch" element={<StopWatch />} />
          <Route path="/admin/app/coupon" element={<Coupon />} />
          <Route path="/admin/app/toss" element={<Toss />} />


          {/* Management */}
          <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route path="/admin/transaction/:id" element={<TransactionManagement />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
