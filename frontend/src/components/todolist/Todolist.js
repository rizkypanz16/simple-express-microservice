import "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

const Todolist = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <ul>
            {props.dataTodos.map((todo) => {
              return <li key={todo.id}>{todo.title}</li>;
            })}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Todolist;
