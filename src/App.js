import { Component } from 'react';
import './css/App.css';
import Search from "./components/Search";
import Players from "./components/Players"
import ResultsTable from "./components/ResultsTable";
import InfoModal from "./components/modals/InfoModal";
import NewsModal from "./components/modals/NewsModal";
import StatsModal from "./components/modals/StatsModal";
import ResultsModal from "./components/modals/ResultsModal";
import { Stack } from 'react-bootstrap';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import NewsIcon from '@material-ui/icons/NotificationImportantOutlined';
import AssessmentIcon from '@material-ui/icons/AssessmentOutlined';
import TwitterIcon from '@material-ui/icons/Twitter';
import eventBus from "./components/EventBus";

const rosterStartDate = '6/2/2023';  // UPDATE WHEN NEW ROSTER DROPS
const currNewsIndex = 1;  // INCREMENT WHEN NEWS UPDATE CHANGES
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showStats: false,
			showInfo: false,
			showNews: false,
			showResults: false,
			totalGuesses: 0,
			guesses: [],
			gameOver: false,
			didWin: false,
			answerIndex: 0,
			answer: {Team:"None",FirstName:"",LastName:"",PositionCategory:"",Name:"",PhotoUrl:"",CollegeDraftTeam:"",CollegeDraftYear: 0,id: -1,Position:"",AllTeams:[],ProBowls:-10,Rings:-10},
			finalGuessData: [],
			stats: {
				played: 0,
				wins: 0,
				currStreak: 0,
				maxStreak: 0,
				guessDist: [0,0,0,0,0,0,0,0]
			}
		};

		if (localStorage.getItem("news") === null) {
			localStorage.setItem('news', 0);
		}
		
		if (JSON.parse(localStorage.getItem("stats") === null)) {
			localStorage.setItem('stats', JSON.stringify({
				played: 0,
				wins: 0,
				currStreak: 0,
				maxStreak: 0,
				guessDist: [0,0,0,0,0,0,0,0]
			}));
		}

		if (JSON.parse(localStorage.getItem("daily") === null)) {
			localStorage.setItem('daily', JSON.stringify({
				totalGuesses: 0, 
				guesses: [],
				gameOver: false,
				didWin: false,
				answerIndex: 0,
				finalGuessData: [],
			}));
		}

		this.checkDaily = this.checkDaily.bind(this);
		this.resetDaily = this.resetDaily.bind(this);
		this.populateState = this.populateState.bind(this);
		this.addGuessToStorage = this.addGuessToStorage.bind(this);
		this.handleGameOver = this.handleGameOver.bind(this);
		this.setStatsModalShow = this.setStatsModalShow.bind(this);
		this.setInfoModalShow = this.setInfoModalShow.bind(this);
		this.setNewsModalShow = this.setNewsModalShow.bind(this);
		this.setResultsModalShow = this.setResultsModalShow.bind(this);
		this.hideResultsModal = this.hideResultsModal.bind(this);
		this.twitterLink = this.twitterLink.bind(this);
		this.issueLink = this.issueLink.bind(this);

		this.checkDaily();
	}

	componentDidMount() {
		this.populateState();
		
		eventBus.on("playerSelected", (data) => {
			this.setState(prevState => ({
				totalGuesses: prevState.totalGuesses + 1,
				guesses: [...this.state.guesses, data.guess]
			}), () => {
				this.addGuessToStorage();
				if (this.state.answer.Name === data.guess.Name) {
					this.handleGameOver(true);
				} else if (this.state.totalGuesses >= 8) {
					this.handleGameOver(false);
				}
			}); 
		});

		eventBus.on("finalGuessData", (data) => {
			this.setState({finalGuessData: data.finalGuessData});
			let savedDaily = JSON.parse(localStorage.getItem("daily"));
			savedDaily.finalGuessData = data.finalGuessData;
			localStorage.setItem("daily", JSON.stringify(savedDaily));	
		})
	}
	
	componentWillUnmount() {
		eventBus.remove("playerSelected");
	}

	checkDaily() {
		let start = new Date(rosterStartDate);
		let currIndex = Math.round((new Date() - start)/(1000*60*60*24)) - 1;
		let savedDaily = JSON.parse(localStorage.getItem("daily"));
		if(savedDaily.answerIndex !== currIndex) {
			this.resetDaily(currIndex);
		}
	}

	resetDaily(currIndex) {
		localStorage.removeItem('daily');
		localStorage.setItem('daily', JSON.stringify({
			totalGuesses: 0, 
			guesses: [],
			gameOver: false,
			didWin: false,
			answerIndex: currIndex,
			finalGuessData: []
		}));
	}
	
	populateState() {
		let savedStats = JSON.parse(localStorage.getItem("stats"));
		let savedDaily = JSON.parse(localStorage.getItem("daily"));
		this.setState({
			totalGuesses: savedDaily.totalGuesses,
			didWin: savedDaily.didWin,
			gameOver: savedDaily.gameOver,
			guesses: savedDaily.guesses,
			answer: Players[savedDaily.answerIndex],
			finalGuessData: savedDaily.finalGuessData,
			stats: {
				played: savedStats.played,
				wins: savedStats.wins,
				currStreak: savedStats.currStreak,
				maxStreak: savedStats.maxStreak,
				guessDist: savedStats.guessDist,
			}
		}, () => {
			let savedStats = JSON.parse(localStorage.getItem("stats"));
			let lastNewsUpdate = JSON.parse(localStorage.getItem("news"));
			// handle new state data
			if(this.state.gameOver) {
				this.setResultsModalShow(this.state.didWin, 1600);
			} else if (savedStats.played === 0) {
				this.setInfoModalShow();
			} else if (lastNewsUpdate < currNewsIndex) {
				this.setNewsModalShow();
				localStorage.setItem("news", currNewsIndex);	
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

		this.setResultsModalShow(didWin, 1600);
	}

	setStatsModalShow() {
		if(this.state.gameOver) {
			this.setResultsModalShow(this.state.didWin, 0)  // if game is complete show results modal instead of stats
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

	setNewsModalShow() {
		this.setState(prevState => ({
			showNews: !prevState.showNews
		  }));
	}

	setResultsModalShow(didWin, delay) {
		// Wait until table animation completes to show results
		this.setState({
			gameOver: true,
			didWin: didWin
		});
		setTimeout(() => {
			this.setState({showResults: true});
        }, delay);
	}

	hideResultsModal() {
		this.setState({showResults: false});
	}

	twitterLink() {
		window.open("https://twitter.com/HuddleGame")
	}

	issueLink() {
		window.open("https://github.com/huddlegame/huddle-issues")
	}

	render() {
		return (
			<Stack className="app" gap={4}>
				<Stack className="header" direction="horizontal">
					<img className="banner" src="/banner.png" alt="huddle-logo"></img>
					<button className="headerBtn ms-auto" onClick={this.setStatsModalShow}><AssessmentIcon/></button>
					<button className="headerBtn" onClick={this.setNewsModalShow}><NewsIcon/></button>
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
				<NewsModal
					show={this.state.showNews}
					onHide={this.setNewsModalShow}
				/>
				<ResultsModal
					didwin={this.state.didWin}
					answer={this.state.answer}
					stats={this.state.stats}
					activePuzzle={this.state.activePuzzle}
					totalGuesses={this.state.totalGuesses}
					finalGuessData={this.state.finalGuessData}
					show={this.state.showResults}
					onHide={this.hideResultsModal}
				/>
				<Stack className="footer" direction="horizontal" gap={2}>
					<button className="headerBtn ms-auto" onClick={this.issueLink}>Report Issue</button>
					<button className="headerBtn " onClick={this.twitterLink}><TwitterIcon/></button>
				</Stack>
			</Stack>  
		);
	}
}

export default App;