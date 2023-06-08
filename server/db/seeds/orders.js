/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('orders').del()
  await knex('orders').insert([
    { id: 1, name: 'Gemma', item_id: 1, locker_id: 2, complete: false },
  ])
}
