import { Modal, Button } from 'react-bootstrap';

function ResultsModal(props) {
	return (
	  <Modal
		{...props}
		size="lg"
		aria-labelledby="contained-modal-title-vcenter"
		centered
	  >
		<Modal.Header closeButton>
		  <Modal.Title id="contained-modal-title-vcenter">
			{props.didWin ? "Winner!" : "You Lose!"}
		  </Modal.Title>
		</Modal.Header>
		<Modal.Body>
		</Modal.Body>
		<Modal.Footer>
		  <Button onClick={props.onHide}>Close</Button>
		</Modal.Footer>
	  </Modal>
	);
}
export default ResultsModal;