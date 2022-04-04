import React, { Component } from "react";
import { Container, Row, Col, Stack } from 'react-bootstrap';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import players from './Players';
import eventBus from "./EventBus";
import HelpIcon from '@material-ui/icons/HelpOutline';
import ReactTooltip from 'react-tooltip';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
			resetSearch: false,
			totalGuesses: 1,
			searchParam: "Name"
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

	handleOnChange = (param) => {
		this.setState(prevState => ({
			searchParam: param.target.value,
			resetSearch: !prevState.resetSearch
		 }));
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
								fuseOptions={{ keys: [this.state.searchParam] }}
								inputDebounce={500}
								maxResults={5}
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
				<Row>
					<Col className="center" sm={12}>
						<p>Search by: </p>
						<input className="searchRadio" type="radio" value="Name" name="searchParam" onChange={this.handleOnChange} checked={this.state.searchParam === "Name"}/> Name
						<input className="searchRadio" type="radio" value="Team" name="searchParam" onChange={this.handleOnChange} checked={this.state.searchParam === "Team"}/> Team
						<input className="searchRadio" type="radio" value="Position" name="searchParam" onChange={this.handleOnChange} checked={this.state.searchParam === "Position"}/> Position
						<ReactTooltip id="help-tooltip">Team uses 2 or 3 letter abbreviation (e.g. "LAC", "GB")<br></br>Position uses 2 letter abbreviation (e.g. "QB", "DB")</ReactTooltip>
						<HelpIcon data-tip="help" data-for="help-tooltip" data-place="bottom" data-effect="solid"/>				
					</Col>
				</Row>
            </Container>
        );
    }
}
 
export default Search;