import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function App() {
  return (
    <Container fluid className="App">
      <Row className="header">
		  <h1 style={{marginLeft: "10px", padding: "0px"}}>HUDDLE</h1>
      </Row>
	  <Row>
		  <h2>NFL Player Guessing Game</h2>
	  </Row>
	  <Row>
		  <Col sm={{span: 4, offset: 4}}>
			<ReactSearchAutocomplete></ReactSearchAutocomplete>
		  </Col>
	  </Row>
    </Container>
  );
}

export default App;