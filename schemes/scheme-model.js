const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove
}

function find() {
  return db('schemes')
}

function findById(id) {
  return db('schemes').where({ id }).first();
}

function findSteps(scheme_id) {
  return db('steps as st')
    .join('schemes as sc', 'sc.id', 'st.scheme_id')
    .select('st.id', 'sc.scheme_name', 'st.instructions', 'st.step_number')
    .where({ scheme_id })
}

function add(scheme) {
  return db('schemes').insert(scheme)

    // extra step to show the data they just inserted
    .then(arr => {
      return findById(arr[0])
    })
}

function addStep(stepData, scheme_id) {
  return db('steps').insert({ ...stepData, scheme_id })

}

function update(changes, id) {
  return db('schemes').where({ id }).update(changes)

}

function remove(id) {
  return db('schemes').where({ id }).del();
}