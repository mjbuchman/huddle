import { Modal, Button } from 'react-bootstrap';
import Rules from './GameRules';

function InfoModal(props) {
	return (
	  <Modal
		{...props}
		dialogClassName="modal-size-info"
	  >
		<Modal.Header closeButton>
			<Modal.Title id="contained-modal-title-vcenter">
				Guess The NFL Player
			</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			<Rules></Rules>
		</Modal.Body>
		<Modal.Footer>
		  <Button onClick={props.onHide}>Close</Button>
		</Modal.Footer>
	  </Modal>
	);
}
export default InfoModal;