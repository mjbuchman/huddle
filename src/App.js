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
			answer: "",
			stats: {
				played: 0,
				wins: 0,
				currStreak: 0,
				maxStreak: 0,
				guessDist: [0,0,0,0,0,0]
			}
		};

		if (JSON.parse(localStorage.getItem("stats") === null)) {
			localStorage.setItem('stats', JSON.stringify({
				played: 0,
				wins: 0,
				currStreak: 0,
				maxStreak: 0,
				guessDist: [0,0,0,0,0,0]
			}));
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
		this.advanceDay = this.advanceDay.bind(this);
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
		let seed = new Date().toDateString() + process.env.REACT_APP_SECRET_SEED; // generate date-based seed with hidden value
		const generator = require('random-seed').create(seed);
		const result = generator(players.length) // randomly select player using our seeded random generator
		this.setState({answer: players[result]});
	}

	populateState() {
		let savedDaily = JSON.parse(localStorage.getItem("daily"));
		let savedStats = JSON.parse(localStorage.getItem("stats"));
		this.setState({
			totalGuesses: savedDaily.totalGuesses,
			didWin: savedDaily.didWin,
			gameOver: savedDaily.gameOver,
			guesses: savedDaily.guesses,
			stats: {
				played: savedStats.played,
				wins: savedStats.wins,
				currStreak: savedStats.currStreak,
				maxStreak: savedStats.maxStreak,
				guessDist: savedStats.guessDist
			}
		}, () => {
			// handle new state data
			if(this.state.gameOver) {
				this.setResultsModalShow(this.state.didWin);
			} else if (this.state.stats.played === 0) {
				this.setInfoModalShow();
			}
		});
	}

	addGuessToStorage() {
		let savedData = JSON.parse(localStorage.getItem("daily"));
		savedData.totalGuesses = this.state.totalGuesses;
		savedData.guesses = this.state.guesses;
		localStorage.setItem("daily", JSON.stringify(savedData));		
	}

	handleGameOver(didWin) {
		// handle daily data not touched in addGuessToStorage
		let savedDaily = JSON.parse(localStorage.getItem("daily"));
		savedDaily.gameOver = true;
		savedDaily.didWin = didWin;
		localStorage.setItem("daily", JSON.stringify(savedDaily));	

		// save all stats data
		let savedStats = JSON.parse(localStorage.getItem("stats"));
		savedStats.played = savedStats.played + 1;
		savedStats.wins = didWin ? savedStats.wins + 1 : savedStats.wins;
		savedStats.currStreak = didWin ? savedStats.currStreak + 1 : 0;
		savedStats.maxStreak = savedStats.currStreak >= savedStats.maxStreak ? savedStats.currStreak : savedStats.maxStreak;

		// guess distribution only tracks wins
		if (didWin) {
			savedStats.guessDist[this.state.totalGuesses-1] += 1;
		}
		localStorage.setItem("stats", JSON.stringify(savedStats));	
		this.setState({stats: savedStats});

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
	
	advanceDay() {
		localStorage.removeItem('daily');
		window.location.reload(false);
	}

	render() {
		return (
			<Stack className="app" gap={0}>
				<Stack className="header" direction="horizontal">
					<span className="img-small"><img className="logo" src="/logo192.png" alt="huddle-logo"></img></span>
					<h1 style={{marginLeft: "10px", padding: "0px"}}>Huddle</h1>
					<button className="headerBtn ms-auto" onClick={this.setStatsModalShow}><AssessmentIcon/></button>
					<button className="headerBtn" onClick={this.setInfoModalShow}><InfoIcon/></button>
				</Stack>
				<p>Answer: {this.state.answer.Name}</p>
				<Search disabled={this.state.gameOver}></Search>
				<ResultsTable></ResultsTable>
				<StatsModal
					show={this.state.showStats}
					stats={this.state.stats}
					onHide={this.setStatsModalShow}
					/>
				<InfoModal
					show={this.state.showInfo}
					onHide={this.setInfoModalShow}
				/>
				<ResultsModal
					didwin={this.state.didWin}
					answer={this.state.answer}
					stats={this.state.stats}
					totalGuesses={this.state.totalGuesses}
					show={this.state.showResults}
					onHide={this.hideResultsModal}
				/>
				<Stack className="footer" direction="horizontal">
					<button className="headerBtn" onClick={this.resetCache}>Reset Cache</button>
					<button className="headerBtn" onClick={this.advanceDay}>Advance Day</button>
				</Stack>
			</Stack>  
		);
	}
}

export default App;
