import { useEffect, useState } from 'react'
import { OrderList } from '../../models/OrderList'
import * as api from '../api/orderApi'
import MenuStaff from './MenuStaff'
import AddMenuItemForm from './AddMenuItemForm'

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
      <MenuStaff />
      <AddMenuItemForm />
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
            {allOrders.map((order, i) => {
              return (
                <>
                  <tr key={order.id + i}>
                    <td>{order.id}</td>
                    <td>{order.name}</td>
                    <td>{order.item}</td>
                    <td>{order.locker_id}</td>
                    <td>{order.complete ? 'complete' : 'pending'}</td>
                    <td className="staff-table-row">
                      <button
                        className="staff-table-btn"
                        onClick={() => deleteOrder(order.id)}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                </>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Orders
