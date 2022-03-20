import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import players from './Players';
import eventBus from "./EventBus";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
		
		}
    }

    componentDidMount() {
    }

	handleOnSearch = (string, results) => {

	};
	
	handleOnHover = (result) => {

	};
	
	handleOnSelect = (player) => {
		eventBus.dispatch("playerSelected", { guess: player });
	};

    render() {
        return (
            <Container fluid>
				<Row>
					<h2>NFL Player Guessing Game</h2>
				</Row>
				<Row>
					<Col sm={{span: 4, offset: 4}}>
						<ReactSearchAutocomplete
							items={players}
							maxResults={3}
							onSearch={this.handleOnSearch}
							onHover={this.handleOnHover}
							onSelect={this.handleOnSelect}
							showIcon={false}
							placeholder={"Guess 1 of 6"}
							styling={{ zIndex: 3 }} // To display it on top of the search box below
						/>
					</Col>
				</Row>
            </Container>
        );
    }
}
 
export default Search;