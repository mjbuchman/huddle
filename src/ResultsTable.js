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
								</tr>
							</thead>
							<tbody>
								{this.state.guesses.map(function(guess,i) {
									return <tr key={i}>
											<td>{guess.Name}</td>
											<td>{Teams[guess.Team].Conf}</td>
											<td>{Teams[guess.Team].Div}</td>
											<td><span className="img-small-logo"><img className="logo" src={Teams[guess.Team].Logo} alt={guess.Name}></img></span></td>
											<td>{guess.Position}</td>
										</tr>
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