import Chart from 'react-apexcharts';

function BarGraph(props) {
	var data = {    
		series: [{
		  data: props.guessDist
		}],
		options: {
			chart: {
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
			colors: ['#013369'],
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
				enabled: true
			},
			xaxis: {
				categories: ['1', '2', '3', '4', '5', '6'],
				labels: {
					show: false
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