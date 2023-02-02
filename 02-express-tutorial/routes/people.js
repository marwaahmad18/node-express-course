//The router instance that will take care of the routing instead of the app.

const express = require('express');
const { people } = require('../data');
const router = express.Router(); //Dnt forget to invoke it.
//Now I need to import all those files

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson
} = require('../controllers', people)// Destructuring them from controllers, using: require

/*Option 1
  router.get('/', getPeople)
  router.post('/', createPerson)
  router.post('/postman', createPersonPostman)
  router.put('/:id', updatePerson)
  router.delete('/:id', deletePerson)
*/

//Option 2
  router.route('/').get(getPeople).post(createPerson);
  router.route('/postman').post(createPersonPostman);
  router.route('/:id').put(updatePerson).delete(deletePerson)

    module.exports = router
