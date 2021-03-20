var express = require('express');
var router = express.Router();
let Todo = require('../data/todos');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {todo: Todo.todos });
});

router.post('/addtodo', function(req, res) {
  let temp = {
    todo: req.body.incoming,
    done: false
  }
  Todo.todos.push(temp)
  res.redirect('/')
})

module.exports = router;
