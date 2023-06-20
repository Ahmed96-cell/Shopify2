import NavigationExample from "./components/siedbar";
import { Col, Container, Row } from "react-bootstrap";
import Topbar from "./components/TopBar";

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
