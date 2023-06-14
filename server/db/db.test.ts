// @vitest-environment node
import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'
import connection from './connection'
import { getMenuItems, getLockers, unfilledLockers, getOrders, getOpenOrders } from './db'

beforeAll(async () => {
  await connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

afterAll(async () => {
  await connection.destroy()
})

describe('testing working', () => {
  it('works as expected', () => {
    expect.assertions(2)
    expect(false).not.toBeTruthy()
    expect(NaN).toBeNaN()
  })
})

//menu testing
describe('getMenuItems', () => {
  it('returns the correct menu array', async () => {
    const items = await getMenuItems()

    expect(items).toHaveLength(6)
    expect(items[0]).toHaveProperty('description')
    expect(items[1].price).toBe(6)
  })
})

//locker testing
describe('getLockers', () => {
  it('returns the correct locker array', async () => {
    const lockers = await getLockers()

    expect(lockers).toHaveLength(9)
  })
  it.todo('returns the unfilled lockers only', async () => {
    const lockers = await getLockers()
    const unfilledIds = await unfilledLockers()
    //currently not returning the correct data from the db
    // console.log(lockers)
    // console.log(unfilledIds)
  })
})

//order testing
describe('orders', async () => {
  it('returns the orders with the menu item name joined', async () => {
    const orders = await getOrders()

    expect(orders[0]).toHaveProperty('item')
  })
  it('returns only open orders', async () => {
    const openOrders = await getOpenOrders()

    expect(openOrders[0].complete).toBe(0)
  })
})
