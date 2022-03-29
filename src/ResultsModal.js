import { Modal, Stack, Row, Col } from 'react-bootstrap';
import ShareIcon from '@material-ui/icons/Share';
import Countdown from 'react-countdown';
import BarGraph from './BarGraph';

function ResultsModal(props) {
	return (
	  <Modal
		{...props}
		size="lg"
		aria-labelledby="contained-modal-title-vcenter"
	  >
		<Modal.Header closeButton>
			<Modal.Title id="contained-modal-title-vcenter">
				<h4>Results</h4>
			</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			<Stack className="center">
				<Row>
					<Col sm={3}>
						<div className="img-large"><img className="results-image" src={props.answer.PhotoUrl} alt={props.answer.Name}></img></div>
					</Col>
					<Col sm={9}>
						<h4>{props.didwin ? "Congrats," : "Sorry,"} the correct answer is</h4>
						<h2>{props.answer.Name}</h2>
					</Col>
				</Row>
				<hr/>
				<Row>
					<Col sm={6}>
						<Row><h5>Statistics</h5></Row>
						<Row style={{marginBottom: "20px"}}>
							<Col sm={6}>
								<div className="stats-box">
									<p style={{fontSize: "28px", fontWeight: "bold"}}>{props.stats.played}</p><br/>
									<p style={{fontSize: "12px"}}>PLAYED</p><br/>
								</div>
							</Col>
							<Col sm={6}>
								<div className="stats-box">
									<p style={{fontSize: "28px", fontWeight: "bold"}}>{props.stats.wins/props.stats.played*100}</p><br/>
									<p style={{fontSize: "12px"}}>WIN %</p><br/>
								</div>
							</Col>
						</Row>
						<Row>
							<Col sm={6}>
								<div className="stats-box">
									<p style={{fontSize: "28px", fontWeight: "bold"}}>{props.stats.currStreak}</p><br/>
									<p style={{fontSize: "12px"}}>CURRENT STREAK</p><br/>
								</div>
							</Col>
							<Col sm={6}>
								<div className="stats-box">
									<p style={{fontSize: "28px", fontWeight: "bold"}}>{props.stats.maxStreak}</p><br/>
									<p style={{fontSize: "12px"}}>MAX STREAK</p><br/>
								</div>
							</Col>
						</Row>
					</Col>
					<Col sm={6}>
						<h5>Guess Distribution</h5>
						<BarGraph guessDist={props.stats.guessDist}/>
					</Col>
				</Row>
			</Stack>
		</Modal.Body>
		<Modal.Footer>
			<p>New Huddle In:</p>
			<Countdown 
				date={Date.now() + (new Date().setHours(24,0,0,0) - Date.now())}
				daysInHours={true}
			/>
			<button className="shareBtn">Share<ShareIcon/></button>
		</Modal.Footer>
	  </Modal>
	);
}
export default ResultsModal;