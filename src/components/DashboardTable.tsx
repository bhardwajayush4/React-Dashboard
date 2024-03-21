import TableHOC from "./TableHOC"
import { Column } from "react-table"

interface dataType {
    id: string,
    amount: number,
    quantity: number,
    discount: number,
    status: string
}

const columns: Column<dataType>[] = [
    {
        Header: 'Id',
        accessor: 'id'
    },
    {
        Header: 'Quantity',
        accessor: 'quantity'
    },
    {
        Header: 'Discount',
        accessor: 'discount'
    },
    {
        Header: 'Amount',
        accessor: 'amount'
    },
    {
        Header: 'Status',
        accessor: 'status'
    },
]

const DashboardTable = ({ data = [] }: { data: dataType[] }) => {
    return (
        TableHOC<dataType>(columns, data, 'transaction-box', 'Top Transaction',true)()
    )
}

export default DashboardTable
