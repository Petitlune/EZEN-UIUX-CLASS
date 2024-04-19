import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ContactForm from "./component/ContactForm";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <h1 className="title">연락처</h1>
      <Container>
        <Row>
          <Col></Col>
        </Row>
      </Container>
      <ContactForm />
    </div>
  );
}

export default App;
