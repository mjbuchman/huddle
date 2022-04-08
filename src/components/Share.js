import ShareIcon from '@material-ui/icons/Share';
import { isMobile } from "react-device-detect";
import { useAlert } from 'react-alert'
import { useState, useEffect } from 'react'
import eventBus from './EventBus';

function Share(props) {
	const alert = useAlert()
	const [guessData, setGuessData] = useState([]);

	useEffect(() => {
		eventBus.on("guessSelected", (classes) => {
			setGuessData(guessData => ([...guessData, classes]))
		})
	}, [guessData])

	const generateResultsString = () => {
		return guessData
		// return "\u2B1B\u{1F7E9}\u{1F7E8}"
	}
	console.log(guessData)

	
	const handleOnClick = () => {
		let start = new Date(2022,2,30); // CHANGE THIS LATER
		let id = Math.round((new Date()-start)/(1000*60*60*24));
		let huddleUrl = 'https://www.google.com' // CHANGE THIS LATER
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