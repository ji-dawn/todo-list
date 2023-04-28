const express = require("express");
const controller = require("../controller/Ctodo");
const router = express.Router();

// 기본 주소 : localhost:PORT

// GET /api/todos => localhost:PORT/todos
router.get("/todos", controller.getTodos); // todo 전체 조회

// POST /api/todo => localhost:PORT/todo
router.post("/todo", controller.createTodo); // todo 추가

// PATCH /api/todo/:todoId => localhost:PORT/todo/:todoId
router.patch("/todo/:todoId", controller.updateTodo); // todo 수정

// DELETE /api/todo/:todoId => localhost:PROT/todo/:todoId
router.delete("/todo/:todoId", controller.deleteTodo); // todo 삭제

module.exports = router;
