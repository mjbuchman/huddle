import { Modal, Stack, Row, Col } from 'react-bootstrap';
import Share from '../Share'
import Countdown from 'react-countdown';
import BarGraph from '../BarGraph';

function ResultsModal(props) {
	return (
	  <Modal
		{...props}
		dialogClassName="modal-size-results"
	  >
		<Modal.Header closeButton>
			<Modal.Title id="contained-modal-title-vcenter">
				<h4>{props.didwin ? "Congrats," : "Sorry,"} the correct answer is</h4>
			</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			<Stack className="center">
				<Row>
					<Col>
						<div className="img-large">
							<img className="results-image" src={props.answer.PhotoUrl} alt={props.answer.Name}  
									onError={({ currentTarget }) => {
									currentTarget.onerror = null; // prevents looping
									currentTarget.src="/player_placeholder.png";
								}}>
							</img>
						</div>
					</Col>
				</Row>
				<Row>
					<Col>
						<div style={{marginTop: "10px"}}>
							<h2>{props.answer.Name}</h2>
						</div>
					</Col>
				</Row>
				<hr/>
				<Row>
					<Col xs={6}>
						<Row>
							<Col xs={6}>
								<div className="stats-box">
									<p style={{fontSize: "28px", fontWeight: "bold"}}>{props.stats.played}</p><br/>
									<p>PLAYED</p><br/>
								</div>
							</Col>
							<Col xs={6}>
								<div className="stats-box">
									<p style={{fontSize: "28px", fontWeight: "bold"}}>{props.stats.played > 0 ? Math.round(props.stats.wins/props.stats.played*100) : 0}</p><br/>
									<p>WIN %</p><br/>
								</div>
							</Col>
							<Col xs={6}>
								<div className="stats-box">
									<p style={{fontSize: "28px", fontWeight: "bold"}}>{props.stats.currStreak}</p><br/>
									<p>ACTIVE STREAK</p><br/>
								</div>
							</Col>
							<Col xs={6}>
								<div className="stats-box">
									<p style={{fontSize: "28px", fontWeight: "bold"}}>{props.stats.maxStreak}</p><br/>
									<p>MAX STREAK</p><br/>
								</div>
							</Col>
						</Row>
					</Col>
					<Col xs={6}>
						<BarGraph guessDist={props.stats.guessDist}/>
					</Col>
				</Row>
			</Stack>
		</Modal.Body>
		<Modal.Footer>
			<Stack>
				<h5 style={{margin: "0"}}>New Huddle In:</h5>
				<Countdown 
					date={Date.now() + (new Date().setHours(24,0,0,0) - Date.now())}
					daysInHours={true}
				/>
			</Stack>
			<Share totalGuesses={props.totalGuesses} activePuzzle={props.activePuzzle} finalGuessData={props.finalGuessData}/>
		</Modal.Footer>
	  </Modal>
	);
}
export default ResultsModal;