import React from 'react';
import { Link } from 'react-router';

class Result extends React.Component {
   
   render() {

   		function addThousandSeparators(x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
		}

		function replaceDotsWithCommas(x) {
			return x.toString().replace(".", ",");
		}

   	   	this.amount = Number(this.props.amount)
   	   	this.interest = (Number(this.props.interest) / 100)
   	   	this.years = Number(this.props.years)

   	   	const months = 12;

   	   	this.total = this.amount * Math.pow((1 + this.interest / months), (months * this.years))

   	   	this.result = addThousandSeparators(this.total.toFixed(2));
   	   	this.result = replaceDotsWithCommas(this.result);

      return (
         <div>
            <h2>Total: {this.result} €</h2>
         </div>
      );
   }
}

export default Result;