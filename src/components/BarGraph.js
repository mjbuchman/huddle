import Chart from 'react-apexcharts';

function BarGraph(props) {
	var data = {    
		series: [{
		  data: props.guessDist
		}],
		options: {
			chart: {
				background: '#013369',
				toolbar: {
					show: false
				},
				selection: {
					enabled: false,
				},
				animations: {
					enabled: true,
					easing: 'easeinout',
					speed: 800,
					animateGradually: {
						enabled: true,
						delay: 150
					},
					dynamicAnimation: {
						enabled: true,
						speed: 350
					}
				}
			},
			title: {
				text: "Guess Distribution",
				align: 'center',
				style: {
				  fontSize:  '14px',
				  fontFamily:  "Cairo",
				  color:  '#FFF'
				},
			},
			colors: ['#FF0000'],
			plotOptions: {
				bar: {
				borderRadius: 4,
				horizontal: true,
				}
			},
			grid: {
				show: false
			},
			dataLabels: {
				enabled: true,
				style: {
					colors: ["#FFF"]
				}
			},
			xaxis: {
				categories: ['1', '2', '3', '4', '5', '6', '7', '8'],
				tickAmount: 'dataPoints',
				labels: {
					show: false,
					style: {
						colors: ["#FFF"]
					}
				},
				axisTicks: {
					show: false
				}
			},
			yaxis: {
				labels: {
					show: true,
					style: {
						colors: ["#FFF"]
					}
				},
				axisTicks: {
					show: false
				}
			},
			tooltip: {
				enabled: false
			}
		}
	};

	return (
		<Chart className="guess-dist" options={data.options} series={data.series} type="bar" height={"100%"}  />
	);
}
export default BarGraph;