import { Modal, Button, Stack, Row, Col } from 'react-bootstrap';
import BarGraph from './BarGraph';

function StatsModal(props) {
	return (
	  <Modal
		{...props}
	  >
		<Modal.Header closeButton>
		  <Modal.Title id="contained-modal-title-vcenter">
			<h4>Stats</h4>
		  </Modal.Title>
		</Modal.Header>
		<Modal.Body>
			<Stack gap={2}>
				<Row>
					<Col xs={6} lg={3} style={{marginBottom:"10px"}}>
						<div className="stats-box">
							<p style={{fontSize: "28px", fontWeight: "bold"}}>{props.stats.played}</p><br/>
							<p>PLAYED</p><br/>
						</div>
					</Col>
					<Col xs={6} lg={3}>
						<div className="stats-box">
							<p style={{fontSize: "28px", fontWeight: "bold"}}>{props.stats.played > 0 ? Math.round(props.stats.wins/props.stats.played*100) : 0}</p><br/>
							<p>WIN %</p><br/>
						</div>
					</Col>
					<Col xs={6} lg={3} style={{marginBottom:"10px"}}>
						<div className="stats-box">
							<p style={{fontSize: "28px", fontWeight: "bold"}}>{props.stats.currStreak}</p><br/>
							<p style={{fontSize: "10px"}}>ACTIVE STREAK</p><br/>
						</div>
					</Col>
					<Col xs={6} lg={3}>
						<div className="stats-box">
							<p style={{fontSize: "28px", fontWeight: "bold"}}>{props.stats.maxStreak}</p><br/>
							<p style={{fontSize: "12px"}}>MAX STREAK</p><br/>
						</div>
					</Col>
				</Row>
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