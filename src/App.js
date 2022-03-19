import './App.css';
import Search from "./Search";
import ResultsTable from "./ResultsTable";
import { Container, Stack } from 'react-bootstrap';

function App() {
	return (
		<Stack className="App" gap={5}>
			<div className="header">
				<h1 style={{marginLeft: "10px", padding: "0px"}}>HUDDLE</h1>
			</div>
			<Search></Search>
			<ResultsTable></ResultsTable>
		</Stack>
		);
	}

export default App;