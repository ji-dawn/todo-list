const models = require("../models");

// (1) GET /api/todos => localhost:PORT/api/todos
exports.getTodos = async (req, res) => {
  const result = await models.Todo.findAll();
  console.log("Ctodo findAll >> ", result);
  res.render("todo", { data: result });
};

// (2) POST /api/todo
exports.postTodo = async (req, res) => {
  const result = await models.Todo.create({
    title: req.body.title,
  });
  console.log("Ctodo create >> ", result);
  res.send(result);
};

// (3) PATCH /api/todo/edit
exports.patchTodo = async (req, res) => {
  const result = await models.Todo.update(
    {
      title: req.body.title,
    },
    { where: { id: req.body.id } }
  );
  console.log("Ctodo update >> ", result);
  res.end();
};

// (4) DELETE /api/todo/delete
exports.deleteTodo = async (req, res) => {
  await models.Todo.destroy({
    where: { id: req.body.id },
  });
  res.end();
};
