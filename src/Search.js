import React, { Component } from "react";
import { Container, Row, Col, Stack } from 'react-bootstrap';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import players from './Players';
import eventBus from "./EventBus";
import placeholder from "./player_placeholder.png"

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
			resetSearch: false,
			guesses: 1
		}
    }

    componentDidMount() {
    }
	
	handleOnSelect = (player) => {
		this.setState(prevState => ({
			guesses: prevState.guesses + 1,		// increment guess counter
			resetSearch: !prevState.resetSearch 	// changing this variable triggers the ReactSearchAutocomplete to reset itself
		 }));
		eventBus.dispatch("playerSelected", { guess: player, totalGuesses: this.state.guesses });
	};

	formatResult = (item) => {
		return (
			<Stack className="result-wrapper" direction="horizontal">
				<span className="img-small"><img className="player" src={item.PhotoUrl} alt="player-photo"></img></span>
				<span>
					<Row>
						<span className="result-name">{item.Name}</span>
					</Row>
					<Row>
						<span className="result-team">{item.Team}</span>
					</Row>
				</span>
				<span className="result-pos ms-auto">{item.Position}</span>
			</Stack>
		);
	};

    render() {
        return (
            <Container fluid>
				<Row>
					<h2>NFL Player Guessing Game</h2>
				</Row>
				<Row>
					<Col sm={{span: 4, offset: 4}}>
						<div style={this.props.disabled ? {pointerEvents: "none"} : {}}>
							<ReactSearchAutocomplete
								key={this.state.resetSearch}
								items={players}
								fuseOptions={{ keys: ["Name"] }} // Search on both fields
								maxResults={3}
								onSelect={this.handleOnSelect}
								showIcon={false}
								placeholder={this.props.disabled ? "Game Over" : "Guess " + this.state.guesses + " of 6"}
								formatResult={this.formatResult}
								styling={this.props.disabled
									? {backgroundColor: "#F0F2EF", border: "1px solid #D50A0A", boxShadow: "none"} 
									: {}
								}
							/>
						</div>
					</Col>
				</Row>
            </Container>
        );
    }
}
 
export default Search;