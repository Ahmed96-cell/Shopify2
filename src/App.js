import NavigationExample from "./components/siedbar";
import { Col, Container, Row } from "react-bootstrap";
import Topbar from "./components/TopBar";
import "./App.css";
import NavBar from "./components/NavBar";
function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Topbar />
        </Col>
        <Col>
          <NavigationExample />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
