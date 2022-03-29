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
		for(let field in guess){
			if(guess[field] === this.props.answer[field]){
				guessClasses[field] = "correctField"
			} else if(guess[field] === (this.props.answer[field] + 1) || guess[field] === (this.props.answer[field] - 1)){
				guessClasses[field] = "closeField"
			} else {
				guessClasses[field] = null
			}
		} 
		return guessClasses
	}
	
	makeTableViews(guess,i){
		let classes = this.classMaker(guess)
		return (
			<tr key={i}>
				<td>{guess.Name}</td>
				<td>{Teams[guess.Team].Conf}</td>
				<td>{Teams[guess.Team].Div}</td>
				<td><span className="img-small-logo"><img className="logo" src={Teams[guess.Team].Logo} alt={guess.Name}></img></span></td>
				<td>{guess.Position}</td>
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
									<th>Name</th>
									<th>Conference</th>
									<th>Division</th>
									<th>Team</th>
									<th>Position</th>
									<th>Age</th>
									<th>Offense/Defense</th>
									<th>#</th>
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