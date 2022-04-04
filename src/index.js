import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const alertOptions = {
  position: "top center",
  timeout: 2000,
  offset: '30px',
  transition: "scale",
  type: 'success',
  containerStyle: {
	  zIndex: 9999,
  }
}

ReactDOM.render(
	<React.StrictMode>
		<AlertProvider template={AlertTemplate} {...alertOptions}>
			<App />
		</AlertProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
