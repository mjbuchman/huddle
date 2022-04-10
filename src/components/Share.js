import ShareIcon from '@material-ui/icons/Share';
import { ConsoleView, isMobile } from "react-device-detect";
import { useAlert } from 'react-alert'

function Share(props) {
	let [finalGuessTableString, setFinalGuessTableString] = useState("")

	const alert = useAlert()
	const generateResultsString = () => {
		let black = "\u2B1B"
		let green = "\u{1F7E9}"
		let yellow = "\u{1F7E8}"

		let guessData = props.finalGuessData
		let finalString = ""
		let guessFields = ["Name", "Conf", "Team", "Position", "CollegeDraftTeam", "CollegeDraftYear", "ProBowls", "Rings"]

		for(let i = 0; i < guessData.length; i++) {
			for(let j = 0; j < guessFields.length; j ++) {
				if(guessData[i][guessFields[j]] === "correctField"){
					finalString += green
				} else if(guessData[i][guessFields[j]] === "closeField"){
					finalString += yellow
				} else {
					finalString += black
				}
			}
			if(i < guessData.length - 1) {
				finalString += "\n"
			}
		}
		setFinalGuessTableString(...finalGuessTableString, finalString)
		return finalString
	}

	const handleOnClick = () => {
		let id = props.activePuzzle
		let huddleUrl = 'https://www.huddlegame.com'
		if (navigator.share && isMobile) {
			navigator
				.share({
					title: `Huddle ${id} ${props.totalGuesses}/6`,
					text: `${generateResultsString()}Try it yourself:`,
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