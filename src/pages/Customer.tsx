import { ReactElement, useState } from "react"
import AdminSidebar from "../components/AdminSidebar"
import { Column } from "react-table"
import { FaTrash } from "react-icons/fa";
import TableHOC from "../components/TableHOC";


interface dataType {
  avatar: ReactElement,
  name: string,
  gender: string,
  email: string,
  role: string,
  action: ReactElement
}
const columns: Column<dataType>[] = [
  {
    Header: 'Avatar',
    accessor: 'avatar'
  },
  {
    Header: 'Name',
    accessor: 'name'
  },
  {
    Header: 'Gender',
    accessor: 'gender'
  },
  {
    Header: 'Email',
    accessor: 'email'
  },
  {
    Header: 'Role',
    accessor: 'role'
  },
  {
    Header: 'Action',
    accessor: 'action'
  }
]

const img1 = "https://randomuser.me/api/portraits/women/54.jpg";
const img2 = "https://randomuser.me/api/portraits/women/50.jpg";

const arr: dataType[] = [
  {
    avatar: <img style={{ borderRadius: '50%' }} src={img1} alt="female" />,
    name: 'Emily Palmer',
    gender: 'Female',
    email: 'emily.palmer@example.com',
    role: 'user',
    action: <button style={{ color: 'red' }}><FaTrash /></button>
  },
  {
    avatar: <img style={{ borderRadius: '50%' }} src={img2} alt="female" />,
    name: 'May Scoot',
    gender: 'Female',
    email: 'may.scoot@example.com',
    role: 'user',
    action: <button style={{ color: 'red' }}><FaTrash /></button>
  },
]


const Customer = () => {
  const [data] = useState<dataType[]>(arr)

  const Table = TableHOC<dataType>(columns, data, 'dashboardProduct-box', 'Customers', false)
  return (
    <div className="adminContainer">
      <AdminSidebar />

      <main>{Table()}</main>
    </div>
  )
}

export default Customer