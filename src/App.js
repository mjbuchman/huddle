import { Component } from 'react';
import './css/App.css';
import Search from "./components/Search";
import ResultsTable from "./components/ResultsTable";
import InfoModal from "./components/modals/InfoModal";
import StatsModal from "./components/modals/StatsModal";
import ResultsModal from "./components/modals/ResultsModal";
import { Stack } from 'react-bootstrap';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import AssessmentIcon from '@material-ui/icons/AssessmentOutlined';
import TwitterIcon from '@material-ui/icons/Twitter';
import eventBus from "./components/EventBus";

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
			answer: {Team:"None",FirstName:"",LastName:"",PositionCategory:"",Name:"",PhotoUrl:"",CollegeDraftTeam:"",CollegeDraftYear: 0,id: -1,Position:"",AllTeams:[],ProBowls:0,Rings:0},
			activePuzzle: 0,
			activeDate: "",
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
				guessDist: [0,0,0,0,0,0],
			}));
		}

		if (JSON.parse(localStorage.getItem("daily") === null)) {
			localStorage.setItem('daily', JSON.stringify({
				totalGuesses: 0, 
				guesses: [],
				gameOver: false,
				didWin: false,
				activeDate: "",
				activePuzzle: 0,
				answer: {Team:"None",FirstName:"",LastName:"",PositionCategory:"",Name:"",PhotoUrl:"",CollegeDraftTeam:"",CollegeDraftYear: 0,id: -1,Position:"",AllTeams:[],ProBowls:0,Rings:0},
			}));
		}

		this.resetDailyIfNecessary = this.resetDailyIfNecessary.bind(this);
		this.chooseAnswer = this.chooseAnswer.bind(this);
		this.savePuzzleInfo = this.savePuzzleInfo.bind(this);
		this.populateState = this.populateState.bind(this);
		this.addGuessToStorage = this.addGuessToStorage.bind(this);
		this.handleGameOver = this.handleGameOver.bind(this);
		this.setStatsModalShow = this.setStatsModalShow.bind(this);
		this.setInfoModalShow = this.setInfoModalShow.bind(this);
		this.setResultsModalShow = this.setResultsModalShow.bind(this);
		this.hideResultsModal = this.hideResultsModal.bind(this);
		this.donateLink = this.donateLink.bind(this);
		this.twitterLink = this.twitterLink.bind(this);
	}
	
	componentDidMount() {
		this.resetDailyIfNecessary();
		
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

	resetDailyIfNecessary() {
		let savedDaily = JSON.parse(localStorage.getItem("daily"));
		if(savedDaily.activeDate !== new Date().toDateString()) {
			localStorage.setItem('daily', JSON.stringify({ // reset daily if the player's last active puzzle is not the current puzzle
				totalGuesses: 0,
				guesses: [],
				gameOver: false,
				didWin: false,
				activeDate: new Date().toDateString()
			}));
			this.chooseAnswer();
		} else {
			this.populateState();
		}
	}

	chooseAnswer() {
		fetch(`${process.env.REACT_APP_ANSWER_MS_URL}/dailyAnswer`, {method: 'GET'})
		.then(response => response.json())
		.then(data => this.setState({
			answer: data.answer.answer,
			activePuzzle: data.answer.puzzleId
		}, this.savePuzzleInfo, this.populateState))
		.catch(error => {
				console.error(error);
			}
		);
	}
	
	savePuzzleInfo() {
		let savedDaily = JSON.parse(localStorage.getItem("daily"));
		savedDaily.activePuzzle = this.state.activePuzzle;
		savedDaily.answer = this.state.answer;
		localStorage.setItem("daily", JSON.stringify(savedDaily));		
	}

	populateState() {
		let savedStats = JSON.parse(localStorage.getItem("stats"));
		let savedDaily = JSON.parse(localStorage.getItem("daily"));
		this.setState({
			totalGuesses: savedDaily.totalGuesses,
			didWin: savedDaily.didWin,
			gameOver: savedDaily.gameOver,
			guesses: savedDaily.guesses,
			activeDate: savedDaily.activeDate,
			activePuzzle: savedDaily.activePuzzle,
			answer: savedDaily.answer,
			stats: {
				played: savedStats.played,
				wins: savedStats.wins,
				currStreak: savedStats.currStreak,
				maxStreak: savedStats.maxStreak,
				guessDist: savedStats.guessDist,
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
		// Wait until table animation completes to show results
		setTimeout(() => {
			this.setState({
				showResults: true,
				gameOver: true,
				didWin: didWin
			});
        }, 2500);
	}

	hideResultsModal() {
		this.setState({showResults: false});
	}

	donateLink() {
		window.open("https://ko-fi.com/huddle")
	}

	twitterLink() {
		window.open("https://twitter.com/HuddleGame")
	}

	render() {
		return (
			<Stack className="app" gap={4}>
				<Stack className="header" direction="horizontal">
					<img className="banner" src="/banner.png" alt="huddle-logo"></img>
					<button className="headerBtn ms-auto" onClick={this.setStatsModalShow}><AssessmentIcon/></button>
					<button className="headerBtn" onClick={this.setInfoModalShow}><InfoIcon/></button>
				</Stack>
				<Search disabled={this.state.gameOver}></Search>
				<ResultsTable 
					answer={this.state.answer}
					gameOver={this.state.gameOver}
				></ResultsTable>
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
				<Stack className="footer" direction="horizontal" gap={2}>
					<button className="donationBtn" onClick={this.donateLink}>Donate</button>
					<p>Help keep our servers running</p>
					<button className="headerBtn ms-auto" onClick={this.twitterLink}><TwitterIcon/></button>
				</Stack>
			</Stack>  
		);
	}
}

export default App;