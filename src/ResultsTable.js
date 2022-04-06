import React, { Component } from "react";
import {Container, Row, Col, Table} from 'react-bootstrap';
import eventBus from "./EventBus";
import Teams from "./Teams"

class ResultsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
			guesses: []
        };
    }

    componentDidMount() {
		var savedData = JSON.parse(localStorage.getItem("daily"));
		this.setState({
			guesses: savedData.guesses
		});

		eventBus.on("playerSelected", (data) =>
			this.setState({ guesses: [...this.state.guesses, data.guess] }) //append new guess to guesses
		);
    }

	componentWillUnmount() {
		eventBus.remove("playerSelected");
	}

	hasGuesses() {
		return this.state.guesses ? true : false;
	}

	classMaker(guess){
		let guessClasses = {};
		let team = guess.Team
		let correctPlayer = this.props.answer
		let correctTeam = correctPlayer.Team

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

	upOrDownArrow(guess, field){
		let correctPlayer = this.props.answer
		if(guess[field] === correctPlayer[field]){
			return ""
		} else if(guess[field] > correctPlayer[field]){
			return "↓"
		} else if(guess[field] < correctPlayer[field]){
			return "↑" 
		}
	}

	makeTableViews(guess,i){
		console.log(this.upOrDownArrow(guess, 'ProBowls'))
		let classes = this.classMaker(guess)
		return (
			<tr key={i}>
				<td className={classes.Name}>{guess.Name}</td>
				<td className={classes.Conf}>{Teams[guess.Team].Conf} {Teams[guess.Team].Div}</td>
				<td className={classes.Team}><span className="img-small-logo"><img className="logo" src={Teams[guess.Team].Logo} alt={guess.Name}></img></span></td>
				<td className={classes.Position}>{guess.Position}</td>
				<td className={classes.CollegeDraftTeam}>{guess.CollegeDraftTeam}</td>
				<td className={classes.CollegeDraftYear}>{guess.CollegeDraftYear} {this.upOrDownArrow(guess, 'CollegeDraftYear')}</td>
				<td className={classes.ProBowls}>{guess.ProBowls} {this.upOrDownArrow(guess, 'ProBowls')}</td>
				<td className={classes.Rings}>{guess.Rings} {this.upOrDownArrow(guess, 'Rings')}</td>
			</tr>
		)
	}

    render() {
        return (
            <Container fluid>
				<Row>
					<Col sm={{span: 10, offset: 1}}>
						<Table responsive>
							<thead>
								<tr>
									<th>Player</th>
									<th>Conf/Div</th>
									<th>Team</th>
									<th>Position</th>
									<th>Drafted by</th>
									<th>Draft year</th>
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
					</Col>
				</Row>
            </Container>
        );
    }
}

export default ResultsTable;



// Fields within guess => Team, Position, PositionCategory, Name, {Age}, PhotoURL, CollegeDraftTeam, CollegeDraftYear, ProBowls, Rings