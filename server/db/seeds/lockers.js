/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('lockers').del()
  await knex('lockers').insert([
    { id: 1, filled: false },
    { id: 2, filled: false },
    { id: 3, filled: false },
    { id: 4, filled: false },
    { id: 5, filled: false },
    { id: 6, filled: false },
    { id: 7, filled: false },
    { id: 8, filled: false },
    { id: 9, filled: false },
  ])
}
