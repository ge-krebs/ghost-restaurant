import { useEffect, useState } from 'react'
import { OrderList } from '../../models/OrderList'
import * as api from '../api/orderApi'
import MenuStaff from './MenuStaff'

function Orders() {

  const [allOrders, setAllOrders] = useState([] as OrderList[])

  useEffect(() => {
    async function getOrders() {
      const data = await api.getOrderItems()
      setAllOrders(data)
    }
    getOrders()
  }, [])

  async function deleteOrder(id: number) {
    await api.deleteOrder(id)
    const orders = await api.getOrderItems()
    setAllOrders(orders)
  }

  return (
    <>
    <h2>Customer Orders</h2>
    <div id="order-table-container">
    <table>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Name</th>
          <th>Item</th>
          <th>Locker ID</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
          {allOrders.map((order) => {
            return (
              <>
              <tr>
              <td key={order.id}>{order.id}</td>
              <td key={order.name + order.id}>{order.name}</td>
              <td key={order.item_id + order.name}>{order.item}</td>
              <td key={order.locker_id + order.item_id}>{order.locker_id}</td>
              <td>{order.complete ? 'complete' : 'pending'}</td>
              <td className="staff-table-row">
              <button className="staff-table-btn" onClick={() => deleteOrder(order.id)}>delete</button>
              </td>
              </tr>
              </>
            )
          })}
      </tbody>
    </table>
    </div>
    <MenuStaff />
    </>
  )
}

export default Orders