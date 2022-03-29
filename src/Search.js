import React, { Component } from "react";
import { Container, Row, Col, Stack } from 'react-bootstrap';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import players from './Players';
import eventBus from "./EventBus";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
			resetSearch: false,
			totalGuesses: 1
		}
    }

	componentDidMount() {
		var savedData = JSON.parse(localStorage.getItem("daily"));
		this.setState({
			totalGuesses: savedData.totalGuesses + 1
		});
	}
	
	handleOnSelect = (player) => {
		this.setState(prevState => ({
			totalGuesses: prevState.totalGuesses + 1,		// increment guess counter
			resetSearch: !prevState.resetSearch 	// changing this variable triggers the ReactSearchAutocomplete to reset itself
		 }));
		eventBus.dispatch("playerSelected", { guess: player });
	};

	formatResult = (item) => {
		return (
			<Stack className="result-wrapper" direction="horizontal">
				<span className="img-small"><img className="player" src={item.PhotoUrl} alt={item.Name}></img></span>
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
					<Col sm={{span: 6, offset: 3}}>
						<div style={this.props.disabled ? {pointerEvents: "none"} : {pointerEvents: "auto"}}>
							<ReactSearchAutocomplete
								key={this.state.resetSearch}
								items={players}
								fuseOptions={{ keys: ["Name"] }} // Search on both fields
								maxResults={3}
								onSelect={this.handleOnSelect}
								showIcon={false}
								placeholder={this.props.disabled ? "Game Over" : "Guess " + this.state.totalGuesses + " of 6"}
								formatResult={this.formatResult}
								styling={this.props.disabled
									? {backgroundColor: "#F0F2EF", border: "1px solid #999", boxShadow: "none"} 
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