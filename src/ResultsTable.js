import React, { Component } from "react";
import {Container, Row, Col, Table} from 'react-bootstrap';

class ResultsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
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

							</tbody>
						</Table>
					</Col>
				</Row>
            </Container>
        );
    }
}
 
export default ResultsTable;