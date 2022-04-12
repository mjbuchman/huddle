import { Modal, Button } from 'react-bootstrap';

function PlayerModal(props) {
	return (
	  <Modal
		{...props}
	  >
		<Modal.Header closeButton>
			<Modal.Title id="contained-modal-title-vcenter">
				Included Players
			</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			<ul className="rules">
                <li className="padded">The player pool currently holds over 600 players</li>
                <li className="padded">Included Players are all starters/first string</li>
                <li className="padded">Exceptions:</li>
				<ul className="rules">
                	<li className="padded">RB - includes the first 2 players on the depth chart</li>
                	<li className="padded">WR - includes the first 3 players on the depth chart</li>
				</ul>
				<li><b>Note:</b> If you have entered a players full name into the search bar and they do not appear, they likely are not in the player pool</li>
            </ul>
		</Modal.Body>
		<Modal.Footer>
		  <Button onClick={props.onHide}>Close</Button>
		</Modal.Footer>
	  </Modal>
	);
}
export default PlayerModal;