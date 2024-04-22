import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactList from "./Component/ContactList";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./Component/ContactForm";

function App() {
  return (
    <div className="App">
      <div className="title">연락처</div>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
