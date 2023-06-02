import { Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";

function Todoform(props) {
  const [getInputTodo, setInputTodo] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 1000) + 1,
      title: getInputTodo,
    };

    props.onTodoform(newTodo);

    setInputTodo("");
  };
  const handleInputTodo = (event) => {
    setInputTodo(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3 mt-3">
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="Enter todo .."
            value={getInputTodo}
            onChange={handleInputTodo}
            className="col-md-6"
          />
        </Col>
        <Col>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default Todoform;
