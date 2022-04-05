import { Modal, Button } from 'react-bootstrap';

function InfoModal(props) {
	return (
	  <Modal
		{...props}
	  >
		<Modal.Header closeButton>
			<Modal.Title id="contained-modal-title-vcenter">
				<h4>Guess The Player</h4>
			</Modal.Title>
		</Modal.Header>
		<Modal.Body>
		  <p>
			Put rules here
		  </p>
		</Modal.Body>
		<Modal.Footer>
		  <Button onClick={props.onHide}>Close</Button>
		</Modal.Footer>
	  </Modal>
	);
}
export default InfoModal;