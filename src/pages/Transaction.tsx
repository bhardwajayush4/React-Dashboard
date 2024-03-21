import { ReactElement, useCallback, useState } from "react"
import AdminSidebar from "../components/AdminSidebar"
import TableHOC from "../components/TableHOC"
import { Column } from "react-table"
import { Link } from "react-router-dom"


interface dataType {
  user: string,
  amount: number,
  discount: number,
  quantity: number,
  status: ReactElement,
  action: ReactElement
}

const columns: Column<dataType>[] = [
  {
    Header: 'User',
    accessor: 'user'
  },
  {
    Header: 'Amount',
    accessor: 'amount'
  },
  {
    Header: 'Discount',
    accessor: 'discount'
  },
  {
    Header: 'Quantity',
    accessor: 'quantity'
  },
  {
    Header: 'Status',
    accessor: 'status'
  },
  {
    Header: 'Action',
    accessor: 'action'
  }
]

const arr: dataType[] = [
  {
    user: 'charas',
    amount: 4500,
    discount: 400,
    quantity: 4,
    status: <span className="red">Processing</span>,
    action: <Link to='/admin/transaction/sajknaskd'>Manage</Link>
  },
  {
    user: 'Xaviour',
    amount: 8500,
    discount: 1200,
    quantity: 8,
    status: <span className="green">Shipped</span>,
    action: <Link to='/admin/transaction/sajknaskd'>Manage</Link>
  },
  {
    user: 'Shane',
    amount: 2500,
    discount: 700,
    quantity: 2,
    status: <span className="purple">Delivered</span>,
    action: <Link to='/admin/transaction/sajknaskd'>Manage</Link>
  },
]



const Transaction = () => {
  const [data] = useState<dataType[]>(arr)

  const Table = useCallback(
    TableHOC<dataType>(
      columns,
      data,
      'dashboardProduct-box',
      'Transaction',
      true
    ),
    []
  )
  return (
    <div className="adminContainer">
      {/* sidebar */}
      <AdminSidebar />
      {/* Main */}
      <main>{Table()}</main>
    </div>
  )
}

export default Transaction