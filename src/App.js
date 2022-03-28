import { Component } from 'react';
import './App.css';
import Search from "./Search";
import ResultsTable from "./ResultsTable";
import InfoModal from "./InfoModal";
import StatsModal from "./StatsModal";
import ResultsModal from "./ResultsModal";
import { Stack } from 'react-bootstrap';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import AssessmentIcon from '@material-ui/icons/AssessmentOutlined';
import players from './Players';
import eventBus from "./EventBus";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showStats: false,
			showInfo: false,
			showResults: false,
			totalGuesses: 0,
			guesses: [],
			gameOver: false,
			didWin: false,
			answer: ""
		};

		if (JSON.parse(localStorage.getItem("stats") === null)) {
			localStorage.setItem('stats', JSON.stringify([]));
		}

		if (JSON.parse(localStorage.getItem("daily") === null)) {
			localStorage.setItem('daily', JSON.stringify({
				totalGuesses: 0, 
				guesses: [],
				gameOver: false,
				didWin: false
			}));
		}

		this.chooseAnswer = this.chooseAnswer.bind(this);
		this.populateState = this.populateState.bind(this);
		this.addGuessToStorage = this.addGuessToStorage.bind(this);
		this.handleGameOver = this.handleGameOver.bind(this);
		this.setStatsModalShow = this.setStatsModalShow.bind(this);
		this.setInfoModalShow = this.setInfoModalShow.bind(this);
		this.setResultsModalShow = this.setResultsModalShow.bind(this);
		this.hideResultsModal = this.hideResultsModal.bind(this);
		this.resetCache = this.resetCache.bind(this);
	}
	
	componentDidMount() {
		this.chooseAnswer();
		this.populateState();
		
		eventBus.on("playerSelected", (data) => {
			this.setState(prevState => ({
				totalGuesses: prevState.totalGuesses + 1,
				guesses: [...this.state.guesses, data.guess]
			}), () => {
				this.addGuessToStorage();
				if (this.state.answer.Name === data.guess.Name) {
					this.handleGameOver(true);
				} else if (this.state.totalGuesses >= 6) {
					this.handleGameOver(false);
				}
			}); 
		});
	}
	
	componentWillUnmount() {
		eventBus.remove("playerSelected");
	}

	chooseAnswer() {
		let seed = Date.parse(new Date().setHours(0,0,0,0)) + process.env.REACT_APP_SECRET_SEED; // generate date-based seed with hidden value
		const generator = require('random-seed').create(seed);
		const result = generator(players.length) // randomly select player using our seeded random generator
		this.setState({answer: players[result]});
	}

	populateState() {
		var savedData = JSON.parse(localStorage.getItem("daily"));
		this.setState({
			totalGuesses: savedData.totalGuesses,
			didWin: savedData.didWin,
			gameOver: savedData.gameOver,
			guesses: savedData.guesses
		}, () => {
			// handle new state data
			if(this.state.gameOver) {
				this.setResultsModalShow(this.state.didWin);
			}
		});
	}

	addGuessToStorage() {
		var savedData = JSON.parse(localStorage.getItem("daily"));
		savedData.totalGuesses = this.state.totalGuesses;
		savedData.guesses = this.state.guesses;
		localStorage.setItem("daily", JSON.stringify(savedData));		
	}

	handleGameOver(didWin) {
		var savedData = JSON.parse(localStorage.getItem("daily"));
		savedData.gameOver = true;
		savedData.didWin = didWin;
		localStorage.setItem("daily", JSON.stringify(savedData));	
		this.setResultsModalShow(didWin);
	}

	setStatsModalShow() {
		if(this.state.gameOver) {
			this.setResultsModalShow(this.state.didWin)  // if game is complete show results modal instead of stats
		} else {
			this.setState(prevState => ({
				showStats: !prevState.showStats
			}));
		}
	}

	setInfoModalShow() {
		this.setState(prevState => ({
			showInfo: !prevState.showInfo
		  }));
	}

	setResultsModalShow(didWin) {
		this.setState({
			showResults: true,
			gameOver: true,
			didWin: didWin
		  });
	}

	hideResultsModal() {
		this.setState({showResults: false});
	}

	resetCache() {
		localStorage.clear();
		window.location.reload(false);
	}

	render() {
		return (
			<Stack className="app" gap={5}>
				<Stack className="header" direction="horizontal">
					<span className="img-small"><img className="logo" src="/logo192.png" alt="huddle-logo"></img></span>
					<h1 style={{marginLeft: "10px", padding: "0px"}}>Huddle</h1>
					<button className="headerBtn ms-auto" onClick={this.setStatsModalShow}><AssessmentIcon/></button>
					<button className="headerBtn" onClick={this.setInfoModalShow}><InfoIcon/></button>
				</Stack>
				<Search disabled={this.state.gameOver}></Search>
				<ResultsTable></ResultsTable>
				<StatsModal
					show={this.state.showStats}
					onHide={this.setStatsModalShow}
					/>
				<InfoModal
					show={this.state.showInfo}
					onHide={this.setInfoModalShow}
				/>
				<ResultsModal
					didWin={this.state.didWin}
					answer={this.state.answer}
					show={this.state.showResults}
					onHide={this.hideResultsModal}
				/>
				<Stack className="footer" direction="horizontal">
					<button className="headerBtn" onClick={this.resetCache}>Reset Cache</button>
				</Stack>
			</Stack>  
		);
	}
}

export default App;
