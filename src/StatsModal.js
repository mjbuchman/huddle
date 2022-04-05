import { Modal, Button, Stack, Row, Col } from 'react-bootstrap';
import BarGraph from './BarGraph';

function StatsModal(props) {
	return (
	  <Modal
		{...props}
		size="lg"
		aria-labelledby="contained-modal-title-vcenter"
		centered
	  >
		<Modal.Header closeButton>
		  <Modal.Title id="contained-modal-title-vcenter">
			Stats
		  </Modal.Title>
		</Modal.Header>
		<Modal.Body>
			<Stack>
				<h5>Statistics</h5>
				<Row>
					<Col sm={3}>
						<div className="stats-box">
							<p style={{fontSize: "28px", fontWeight: "bold"}}>{props.stats.played}</p><br/>
							<p style={{fontSize: "12px"}}>PLAYED</p><br/>
						</div>
					</Col>
					<Col sm={3}>
						<div className="stats-box">
							<p style={{fontSize: "28px", fontWeight: "bold"}}>{props.stats.played > 0 ? props.stats.wins/props.stats.played*100 : 0}</p><br/>
							<p style={{fontSize: "12px"}}>WIN %</p><br/>
						</div>
					</Col>
					<Col sm={3}>
						<div className="stats-box">
							<p style={{fontSize: "28px", fontWeight: "bold"}}>{props.stats.currStreak}</p><br/>
							<p style={{fontSize: "12px"}}>CURRENT STREAK</p><br/>
						</div>
					</Col>
					<Col sm={3}>
						<div className="stats-box">
							<p style={{fontSize: "28px", fontWeight: "bold"}}>{props.stats.maxStreak}</p><br/>
							<p style={{fontSize: "12px"}}>MAX STREAK</p><br/>
						</div>
					</Col>
				</Row>
				<h5>Guess Distribution</h5>
				<BarGraph guessDist={props.stats.guessDist}/>			
			</Stack>
		</Modal.Body>
		<Modal.Footer>
		  <Button onClick={props.onHide}>Close</Button>
		</Modal.Footer>
	  </Modal>
	);
}
export default StatsModal;