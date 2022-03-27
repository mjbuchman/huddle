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
			gameOver: false,
			didWin: false,
			answer: ""
		};

		this.chooseAnswer = this.chooseAnswer.bind(this);
		this.setStatsModalShow = this.setStatsModalShow.bind(this);
		this.setInfoModalShow = this.setInfoModalShow.bind(this);
		this.setResultsModalShow = this.setResultsModalShow.bind(this);
		this.hideResultsModal = this.hideResultsModal.bind(this);
	}
	
	componentDidMount() {
		if(this.state.gameOver) {
			this.setResultsModalShow(this.state.didWin);
		}

		this.chooseAnswer();
		
		eventBus.on("playerSelected", (data) => {
			if (this.state.answer.Name === data.guess.Name) {
				this.setResultsModalShow(true);
			} else if (data.totalGuesses >= 6) {
				this.setResultsModalShow(false);
			}
		});
	}

	chooseAnswer() {
		let seed = Date.parse(new Date().toDateString()) + process.env.REACT_APP_SECRET_SEED; // generate date-based seed with hidden value
		const generator = require('random-seed').create(seed);
		const result = generator(players.length) // randomly select player using our seeded random generator
		this.setState({answer: players[result]});
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

	render() {
		return (
			<Stack className="app" gap={5}>
				<Stack className="header" direction="horizontal">
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
					<p>Footer Info</p>
				</Stack>
			</Stack>  
		);
	}
}

export default App;
