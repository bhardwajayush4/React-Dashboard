import React, { useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import { orderItemType, orderType } from '../../style'
import { Link } from 'react-router-dom';
import Product from '../Product';

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const orderItems: orderItemType[] = [
  {
    name: 'Puma Shoes',
    photo: img,
    price: 1200,
    quantity: 52,
    _id: 'qgywegwvgyhegv'
  }
]

const TransactionManagement = () => {
  const [order, setOrder] = useState<orderType>({
    name: 'Ayush Bhardwaj',
    address: '77,Black street',
    city: 'Ludhiana',
    state: 'Punjab',
    country: 'India',
    pincode: 141001,
    status: 'Processing',
    subTotal: 15488,
    discount: 60,
    shippingCharges: 40,
    tax: 100,
    total: 15488 - 60 + 40 + 100,
    orderItems,
    _id: 'bwdhjehjuehdlu'
  })

  const { name, address, city, state, country, pincode, status, subTotal, discount, shippingCharges, tax, total, _id } = order

  const statusHandler = () => {
    setOrder((prev) => ({
      ...prev, status: prev.status === 'Processing' ? 'Shipped' : 'Delivered'
    }))
  }

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="product-management">
        <section style={{padding:'2rem'}}>
          <h2>Order type</h2>

          {order.orderItems.map((i) => (
            <ProductCard name={i.name} photo={i.photo} price={i.price} _id={i._id} quantity={i.quantity} />
          ))}
        </section>

        <article className='shipping-product-card'>
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name: {name}</p>
          <p>Address: {`${address},${city},${state},${country},${pincode}`}</p>

          <h5>Amount Info</h5>
          <p>SubTotal: {subTotal}</p>
          <p>Shipping Charges: {shippingCharges}</p>
          <p>Discount: {discount}</p>
          <p>Tax: {tax}</p>
          <p>Total: {total}</p>

          <h5>Status Info</h5>
          <p>Status:
            <span className={status === 'Shipped' ? 'green' : status === 'Delivered' ? 'purple' : 'red'}> {status}</span>
          </p>
          <button onClick={statusHandler}>Process Status</button>
        </article>
      </main>
    </div>
  )
}

const ProductCard = ({ name, photo, price, quantity, _id }: orderItemType) => (
  <div className='transaction-product-card'>
    <img src={photo} alt={name} />
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>{price} X {quantity} = ${price * quantity}</span>
  </div>
)

export default TransactionManagement
