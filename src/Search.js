import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <Container fluid>
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
}
 
export default Search;