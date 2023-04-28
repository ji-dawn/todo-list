const express = require("express");
const controller = require("../controller/Ctodo");
const router = express.Router();

// 기본 주소 : localhost:PORT

// GET /todos => localhost:PORT/todos
router.get("/todos", controller.getTodos); // todo 전체 조회

// POST /todo => localhost:PORT/todo
router.post("/todo", controller.postTodo); // todo 추가

// PATCH /todo/:todoId => localhost:PORT/todo/:todoId
router.patch("/todo/edit", controller.patchTodo); // todo 수정

// DELETE /todo/:todoId => localhost:PROT/todo/:todoId
router.delete("/todo/delete", controller.deleteTodo); // todo 삭제

module.exports = router;
