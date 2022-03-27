import { Modal, Button } from 'react-bootstrap';
import ShareIcon from '@material-ui/icons/Share';
import Countdown from 'react-countdown';

function ResultsModal(props) {
	return (
	  <Modal
		{...props}
		size="lg"
		aria-labelledby="contained-modal-title-vcenter"
	  >
		<Modal.Header closeButton>
			<Modal.Title id="contained-modal-title-vcenter">
				{props.didWin ? "Winner!" : "You Lose!"}
			</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			<img src={props.answer.PhotoUrl} alt={props.answer.Name} className="img-large"></img>
			<h4>{props.didWin ? "Congrats," : "Sorry,"} the correct answer is</h4>
			<h2>{props.answer.Name}</h2>
			<p>Statistics</p>
			<p>Guess Distribution</p>
		</Modal.Body>
		<Modal.Footer>
			<p>New Huddle In:</p>
			<Countdown 
				date={Date.now() + (new Date().setHours(24,0,0,0) - Date.now())}
				daysInHours={true}
			/>
			<Button>Share<ShareIcon/></Button>
		</Modal.Footer>
	  </Modal>
	);
}
export default ResultsModal;