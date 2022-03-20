import { Component } from 'react';
import './App.css';
import Search from "./Search";
import ResultsTable from "./ResultsTable";
import { Stack } from 'react-bootstrap';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import AssessmentIcon from '@material-ui/icons/AssessmentOutlined';
import players from './Players';
import eventBus from "./EventBus";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			answer: ""
		};
	}
	
	componentDidMount() {
		this.chooseAnswer();

		eventBus.on("playerSelected", (data) =>
			this.state.answer.name === data.guess.name ? console.log("W") : console.log("L")
		);
	}

	chooseAnswer() {
		let seed = Date.parse(new Date().toDateString()) + process.env.REACT_APP_SECRET_SEED; // generate date-based seed with hidden value
		const generator = require('random-seed').create(seed);
		const result = generator(players.length)
		this.setState({answer: players[result]});
	}

	render() {
		return (
			<Stack className="App" gap={5}>
				<Stack className="header" direction="horizontal">
					<h1 style={{marginLeft: "10px", padding: "0px"}}>Huddle</h1>
					<button className="headerBtn ms-auto"><AssessmentIcon/></button>
					<button className="headerBtn"><InfoIcon/></button>
				</Stack>
				<Search></Search>
				<ResultsTable></ResultsTable>
			</Stack>
		);
	}
}

export default App;
