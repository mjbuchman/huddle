import { Component } from 'react';
import './App.css';
import Search from "./Search";
import ResultsTable from "./ResultsTable";
import InfoModal from "./InfoModal";
import StatsModal from "./StatsModal";
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
			answer: ""
		};

		this.chooseAnswer = this.chooseAnswer.bind(this);
		this.setStatsModalShow = this.setStatsModalShow.bind(this);
		this.setInfoModalShow = this.setInfoModalShow.bind(this);
	}
	
	componentDidMount() {
		this.chooseAnswer();
		
		eventBus.on("playerSelected", (data) =>
			// TODO: Add Winner Modal
			this.state.answer.name === data.guess.name ? console.log("W") : console.log("L")
		);
	}

	chooseAnswer() {
		let seed = Date.parse(new Date().toDateString()) + process.env.REACT_APP_SECRET_SEED; // generate date-based seed with hidden value
		const generator = require('random-seed').create(seed);
		const result = generator(players.length) // randomly select player using our seeded random generator
		this.setState({answer: players[result]});
	}

	setStatsModalShow() {
		this.setState(prevState => ({
			showStats: !prevState.showStats
		  }));
	}

	setInfoModalShow() {
		this.setState(prevState => ({
			showInfo: !prevState.showInfo
		  }));
	}

	render() {
		return (
			<Stack className="App" gap={5}>
				<Stack className="header" direction="horizontal">
					<h1 style={{marginLeft: "10px", padding: "0px"}}>Huddle</h1>
					<button className="headerBtn ms-auto" onClick={this.setStatsModalShow}><AssessmentIcon/></button>
					<button className="headerBtn" onClick={this.setInfoModalShow}><InfoIcon/></button>
				</Stack>
				<Search></Search>
				<ResultsTable></ResultsTable>
				<StatsModal
					show={this.state.showStats}
					onHide={this.setStatsModalShow}
			  	/>
				<InfoModal
					show={this.state.showInfo}
					onHide={this.setInfoModalShow}
			  	/>
			</Stack>
			  
		);
	}
}

export default App;
