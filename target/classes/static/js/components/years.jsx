import React from 'react';
import { Link } from 'react-router';

class Years extends React.Component {
	constructor() {
		super();
   	}

   render () {
	
	var yearly = this.props.yearsArray.map(function(yr, index){
		var formattedYearlyAmount = yr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
			formattedYearlyAmount = formattedYearlyAmount.toString().replace(".", ",");

		return <tr key={index}><td>Year {index + 1}:</td><td>{formattedYearlyAmount} €</td></tr>;
	});

      return (
         <div>
         	<table class="table table-hover">
         		<tbody>
					{yearly}
				</tbody>
			</table>
         </div>
      );
   }
}

export default Years;