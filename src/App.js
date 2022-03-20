import './App.css';
import Search from "./Search";
import ResultsTable from "./ResultsTable";
import { Stack } from 'react-bootstrap';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import AssessmentIcon from '@material-ui/icons/AssessmentOutlined';

function App() {
	return (
		<Stack className="App" gap={5}>
			<Stack className="header" direction="horizontal">
				<h1 style={{marginLeft: "10px", padding: "0px"}}>HUDDLE</h1>
				<button className="headerBtn ms-auto"><AssessmentIcon/></button>
				<button className="headerBtn"><InfoIcon/></button>
			</Stack>
			<Search></Search>
			<ResultsTable></ResultsTable>
		</Stack>
		);
	}

export default App;