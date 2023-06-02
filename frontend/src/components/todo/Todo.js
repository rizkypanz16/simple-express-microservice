import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Todolist from "../todolist/Todolist";
import Todoform from "../todo-form/Todoform";

function Todo() {
  const [getTodos, setTodos] = useState([
    { id: null, title: "Breakfast" },
    { id: 2, title: "Joging" },
    { id: 3, title: "Work" },
  ]);

  const eventCreateTodo = (todo) => {
    setTodos(getTodos.concat(todo));
  };
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="h2">Todo List</h1>
          <div className="text-center mt-2">
            <Todoform onTodoform={eventCreateTodo} />
            <Todolist dataTodos={getTodos} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Todo;
