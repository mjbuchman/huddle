import React, { Component } from "react";
import {Container, Row, Col, Table} from 'react-bootstrap';
import eventBus from "./EventBus";
import Teams from "./Teams";
import "../css/animation.css";

class ResultsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
			guesses: [],
			guessData: []
		};
	}

    componentDidMount() {
		var savedData = JSON.parse(localStorage.getItem("daily"));
		this.setState({
			guesses: savedData.guesses
		});
		
		eventBus.on("playerSelected", (data) =>
			{let classes = this.classMaker(data.guess)
			this.setState({ guesses: [...this.state.guesses, data.guess], guessData: [...this.state.guessData, classes] })} //append new guess to guesses
		);
    }

	componentDidUpdate(prevProps) {
		if(prevProps.gameOver !== this.props.gameOver) {
			eventBus.dispatch("finalGuessData", {finalGuessData: this.state.guessData})
		}
	}

	componentWillUnmount() {
		eventBus.remove("playerSelected");
	}

	hasGuesses() {
		return this.state.guesses ? true : false;
	}

	classMaker(guess) {
		let guessClasses = {
			Name: "incorrectField",
			Conf: "incorrectField",
			Team: "incorrectField",
			Position: "incorrectField",
			CollegeDraftTeam: "incorrectField",
			CollegeDraftYear: "incorrectField",
			ProBowls: "incorrectField",
			Rings: "incorrectField"
		};
		let team = guess.Team;
		let correctPlayer = this.props.answer;
		let correctTeam = correctPlayer.Team;

		//CORRECT GUESS
		if(correctPlayer.Name === guess.Name){
			for(let field in guess) {
				guessClasses[field] = "correctField"
				guessClasses.Conf = "correctField"
			}
		} else {
			//TEAM-CONF-DIV
			if(correctPlayer.AllTeams.includes(team) && (Teams[team] !== Teams[correctTeam])){
				guessClasses.Team = "closeField"
			} else if(Teams[team] === Teams[correctTeam]){
				guessClasses.Team = "correctField"
				guessClasses.Conf = "correctField"
			} else if(!(Teams[team].Div === Teams[correctTeam].Div) && (Teams[team].Conf === Teams[correctTeam].Conf)){
				guessClasses.Conf = "closeField"
			} else if((Teams[team].Div === Teams[correctTeam].Div) && (Teams[team].Conf === Teams[correctTeam].Conf)){
				guessClasses.Conf = "correctField"
			}
			//POSITION
			if(guess.Position === correctPlayer.Position){
				guessClasses.Position = "correctField"
			} else if(guess.PositionCategory === correctPlayer.PositionCategory) {
				guessClasses.Position = "closeField"
			}
			//DRAFTING TEAM
			if(guess.CollegeDraftTeam === correctPlayer.CollegeDraftTeam){
				guessClasses.CollegeDraftTeam = "correctField"
			}
			//DRAFT YEAR
			if(guess.CollegeDraftYear === correctPlayer.CollegeDraftYear){
				guessClasses.CollegeDraftYear = "correctField"
			} else if(guess.CollegeDraftYear === (correctPlayer.CollegeDraftYear + 1) ||
				guess.CollegeDraftYear === (correctPlayer.CollegeDraftYear - 1)){
				guessClasses.CollegeDraftYear = "closeField"
			}
			//PRO BOWLS
			if(guess.ProBowls === correctPlayer.ProBowls){
				guessClasses.ProBowls = "correctField"
			} else if(guess.ProBowls === (correctPlayer.ProBowls + 1) || guess.ProBowls === (correctPlayer.ProBowls - 1)){
				guessClasses.ProBowls = "closeField"
			}
			//RINGS
			if(guess.Rings === correctPlayer.Rings){
				guessClasses.Rings = "correctField"
			} else if(guess.Rings === (correctPlayer.Rings + 1) || guess.Rings === (correctPlayer.Rings - 1)){
				guessClasses.Rings = "closeField"
			}
		}
	return guessClasses
	}
	
	upOrDownArrow(guess, field) {
		let correctPlayer = this.props.answer
		if(guess[field] === correctPlayer[field]){
			return ""
		} else if(guess[field] > correctPlayer[field]){
			return "↓"
		} else if(guess[field] < correctPlayer[field]){
			return "↑" 
		}
	}

	makeTableViews(guess,i) {
		let classes = this.classMaker(guess)
		//send via eventBus.dispatch to share
		if (window.innerWidth < 578) {
			return (
				<React.Fragment>
					<tr key={i + "name"}>
						<td className={classes.Name + " table-name one"} colSpan={7}>{guess.Name}</td>
					</tr>
					<tr key={i} style={{borderBottom: "1px black solid"}}>
						<td className={classes.Conf + " two"}><div className="tile">{Teams[guess.Team].Conf}<br></br>{Teams[guess.Team].Div}</div></td>
						<td className={classes.Team + " three"}><span className="img-small-logo"><img className="logo" src={Teams[guess.Team].Logo} alt={guess.Name}></img></span></td>
						<td className={classes.Position + " four"}>{guess.Position}</td>
						<td className={classes.CollegeDraftTeam + " five"}><span className="img-small-logo"><img className="logo" src={Teams[guess.CollegeDraftTeam].Logo} alt={guess.CollegeDraftTeam}></img></span></td>
						<td className={classes.CollegeDraftYear + " six"}>{guess.CollegeDraftYear} {this.upOrDownArrow(guess, 'CollegeDraftYear')}</td>
						<td className={classes.ProBowls + " seven"}>{guess.ProBowls} {this.upOrDownArrow(guess, 'ProBowls')}</td>
						<td className={classes.Rings + " eight"}>{guess.Rings} {this.upOrDownArrow(guess, 'Rings')}</td>
					</tr>
				</React.Fragment>
			)
		} else {
			return (
				<tr key={i}>
					<td className={classes.Name + " one"}>{guess.Name}</td>
					<td className={classes.Conf + " two"}>{Teams[guess.Team].Conf}<br></br>{Teams[guess.Team].Div}</td>
					<td className={classes.Team + " three"}><span className="img-small-logo"><img className="logo" src={Teams[guess.Team].Logo} alt={guess.Name}></img></span></td>
					<td className={classes.Position + " four"}>{guess.Position}</td>
					<td className={classes.CollegeDraftTeam + " five"}><span className="img-small-logo"><img className="logo" src={Teams[guess.CollegeDraftTeam].Logo} alt={guess.CollegeDraftTeam}></img></span></td>
					<td className={classes.CollegeDraftYear + " six"}>{guess.CollegeDraftYear} {this.upOrDownArrow(guess, 'CollegeDraftYear')}</td>
					<td className={classes.ProBowls + " seven"}>{guess.ProBowls} {this.upOrDownArrow(guess, 'ProBowls')}</td>
					<td className={classes.Rings + " eight"}>{guess.Rings} {this.upOrDownArrow(guess, 'Rings')}</td>
				</tr>
			)
		}
	}

    render() {
        return (
            <Container fluid>
				<Row>
					<Col sm={{span: 10, offset: 1}}>
						<div className="table-container">
							<Table style={{tableLayout: window.innerWidth < 578 ? "fixed" : "responsive"}}>
								<thead>
									<tr>
										{window.innerWidth < 578 ? "" : <th>Name</th>}
										<th>Div</th>
										<th>Team</th>
										<th>Pos</th>
										<th>Draft Team</th>
										<th>Draft Year</th>
										<th>Pro Bowls</th>
										<th>Rings</th>
									</tr>
								</thead>
								<tbody>
									{this.state.guesses.map((guess,i)=>{
										return (this.makeTableViews(guess,i))
									})}
								</tbody>
							</Table>
						</div>
					</Col>
				</Row>
            </Container>
        );
    }
}

export default ResultsTable;