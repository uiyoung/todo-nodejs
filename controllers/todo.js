const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.getAllTodos = async (req, res, next) => {
  try {
    const todos = await prisma.todo.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    res.json(todos);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.getTodoById = async (req, res, next) => {
  try {
    const todo = await prisma.todo.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (!todo) {
      return res.status(404).json({ error: 'Not found' });
    }
    res.json(todo);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.createTodo = async (req, res, next) => {
  const { title, content } = req.body;
  try {
    const todo = await prisma.todo.create({
      data: {
        title: title,
        content: content,
      },
    });
    res.json(todo);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.updateIsDone = async (req, res, next) => {
  try {
    const todo = await prisma.todo.update({
      where: { id: parseInt(req.params.id) },
      data: {
        isDone: req.body.isDone,
      },
    });
    res.json(todo);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.updateTodo = async (req, res, next) => {
  const { title, content } = req.body;
  try {
    const todo = await prisma.todo.update({
      where: { id: parseInt(req.params.id) },
      data: {
        title: title,
        content: content,
      },
    });
    res.json(todo);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    const todo = await prisma.todo.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.json(todo);
  } catch (err) {
    console.error(err);
    next(err);
  }
};
