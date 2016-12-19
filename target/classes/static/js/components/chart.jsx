import React from 'react';
import { Link } from 'react-router';

var LineChart = require("react-chartjs").Line;

class Chart extends React.Component {
	constructor() {
		super();
   	}

   render () {

   var horizontalBarChartData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: 'Dataset 1',
                backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
                borderColor: window.chartColors.red,
                borderWidth: 1,
                data: [
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7
                ]
            };
	

      return (
      <LineChart data={horizontalBarChartData} width="600" height="250"/>
      );
   }
}

export default Chart;