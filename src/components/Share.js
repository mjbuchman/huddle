import ShareIcon from '@material-ui/icons/Share';
import { isMobile } from "react-device-detect";
import { useAlert } from 'react-alert'

function Share(props) {
	const alert = useAlert()

	const generateResultsString = () => {
		 return "\u2B1B\u{1F7E9}\u{1F7E8}"
	}

	const handleOnClick = () => {
		let id = props.activePuzzle
		let huddleUrl = 'https://www.huddlegame.com'
		if (navigator.share && isMobile) {
			navigator
				.share({
					title: `Huddle ${id} ${props.totalGuesses}/6`,
					text: `${generateResultsString()}\nTry it yourself:`,
					url: huddleUrl,
				})
			.catch(error => {
				alert('Something went wrong with sharing', error);
			});
		} else {
			let results = `Huddle #${id} ${props.totalGuesses}/6\n${generateResultsString()}\nTry it yourself:\n${huddleUrl}`
			navigator.clipboard.writeText(results)
			alert.show('Text Copied')
		}
	};

	return (
		<button className="shareBtn"
			onClick={handleOnClick}
		>Share<ShareIcon/></button>
	);
}
export default Share;