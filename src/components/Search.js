import React, { Component } from "react";
import { Container, Row, Col, Stack } from 'react-bootstrap';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { useScrollToBottom } from 'react-scroll-to-bottom';
import players from './Players';
import PlayerModal from './modals/PlayerModal'
import eventBus from "./EventBus";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
			resetSearch: false,
			totalGuesses: 1,
			showPlayerModal: false
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
		useScrollToBottom();
	};

	handleOnChange = () => {
		this.setState(prevState => ({
			resetSearch: !prevState.resetSearch
		 }));
	};

	setPlayerModalShow = () => {
		console.log(this.state)
		this.setState(prevState => ({
			showPlayerModal: !prevState.showPlayerModal
		  }));
	}

	formatResult = (item) => {
		let isLast = ++this.resultsCount === 50;
		if (isLast) {
			this.resultsCount = 0;
		}

		return (
			<Stack className="result-wrapper" direction="horizontal">
				<span className="img-small">
					<img className="player" src={item.PhotoUrl} alt={item.Name} loading="lazy"
						onError={({ currentTarget }) => {
							currentTarget.onerror = null; // prevents looping
							currentTarget.src="/player_placeholder.png";
						}}>
					</img>
				</span>
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
				<PlayerModal
					show={this.state.showPlayerModal}
					onHide={this.setPlayerModalShow}
				/>
				<Row style={{marginBottom: "15px"}}>
					<h2>NFL Player Guessing Game</h2>
				</Row>
				<p style={{fontSize:"12px", color:"#555"}}>Search by Name, Team, or Position — For Player Pool Info
					<a onClick={this.setPlayerModalShow} style={{ cursor:"pointer", color:"#013369", marginLeft:"2px"}} href={null}><u>Click Here</u></a>
				</p>				
				<Row style={{marginBottom: "5px"}}>
					<Col sm={{span: 6, offset: 3}}>
						<div style={this.props.disabled ? {pointerEvents: "none"} : {pointerEvents: "auto"}}>
							<ReactSearchAutocomplete
								key={this.state.resetSearch}
								items={players}
								fuseOptions={{ keys: ["Name", "Team", "FullTeam", "Position", "FullPosition"] }}
								inputDebounce={500}
								maxResults={50}
								onSelect={this.handleOnSelect}
								showIcon={false}
								placeholder={this.props.disabled ? "Game Over" : "Guess " + this.state.totalGuesses + " of 8"}
								formatResult={this.formatResult}
								styling={this.props.disabled
									? {backgroundColor: "#F0F2EF", border: "1px solid #999", boxShadow: "none", fontFamily:"Amiko"} 
									: {fontFamily: "Amiko", zIndex:"99"}
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