import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import players from './Players';
import eventBus from "./EventBus";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
			guesses: 1
		}
    }

    componentDidMount() {
    }
	
	handleOnSelect = (player) => {
		// increment guess counter
		this.setState(prevState => ({
			guesses: prevState.guesses + 1
		  }));
		eventBus.dispatch("playerSelected", { guess: player, totalGuesses: this.state.guesses });
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
							onSelect={this.handleOnSelect}
							showIcon={false}
							placeholder={"Guess " + this.state.guesses + " of 6"}
							styling={{ zIndex: 3 }} // To display it on top of the search box below
						/>
					</Col>
				</Row>
            </Container>
        );
    }
}
 
export default Search;