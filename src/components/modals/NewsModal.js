import { Modal, Button } from 'react-bootstrap';

function NewsModal(props) {
	return (
	  <Modal
		{...props}
		dialogClassName="modal-size-info"
	  >
		<Modal.Header closeButton>
			<Modal.Title id="contained-modal-title-vcenter">
				June 2023 Update
			</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			Thank you for your support! We've been blown away by how many people have played our game over the past year. 
			We wanted to acknowledge a few changes to the Huddle, first of which is a fresh roster update for the 2023-2024 season!
			That means new rookies in the pool and familiar faces on their new teams. We hope this keeps things exciting as it also means the answer pool
			is reset, so players that were used as answers under the previous roster may now show up again.
			<br></br>
			<br></br>
			Lastly, in the coming days you may notice some new (hopefully unobtrusive) banner ads on the site. Huddle is meant to be a fun hobby project
			for anyone to enjoy, but unfortunately it costs a few bucks a month for us to run. We kindly ask that you disable any ad blockers you may have while
			playing the game to help us cover the cost of our servers. It's important to us to say that we do not and will never track or sell any of your
			personal data. We hope you can help us keep the game up and running for all to enjoy.
			<br></br>
			<br></br>
			Thank you for your continued support and happy guessing!
		</Modal.Body>
		<Modal.Footer>
		  <Button onClick={props.onHide}>Close</Button>
		</Modal.Footer>
	  </Modal>
	);
}
export default NewsModal;