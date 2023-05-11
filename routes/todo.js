const router = require('express').Router();
const ctrl = require('../controllers/todo');

router.route('/').get(ctrl.getAllTodos).post(ctrl.createTodo);

router
  .route('/:id')
  .get(ctrl.getTodoById)
  .put(ctrl.updateIsDone)
  .patch(ctrl.updateTodo)
  .delete(ctrl.deleteTodo);

module.exports = router;
