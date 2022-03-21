import React, { Component } from "react";
import {Container, Row, Col, Table} from 'react-bootstrap';
import eventBus from "./EventBus";

class ResultsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
			guesses: []
        };
    }

    componentDidMount() {
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

	renderTable() {
		
	}

    render() {
        return (
            <Container fluid>
				<Row>
					<Col sm={{span: 6, offset: 3}}>
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
											<td>{guess.name}</td>
											<td>{guess.conf}</td>
											<td>{guess.div}</td>
											<td>{guess.team}</td>
											<td>{guess.pos}</td>
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