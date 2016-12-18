import React from 'react';
import { Link } from 'react-router';

import Years from './years.jsx';

class Result extends React.Component {
   
   render() {

   	function addThousandSeparators(x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
		}

		function replaceDotsWithCommas(x) {
			return x.toString().replace(".", ",");
		}

      function compound(balance, interest, term, currentYear, compoundArray) {
         if(term === 0) {
            return 0;
         } else {
            balance += balance * interest;
            compoundArray.push(balance);
            return compound(balance, interest, term-1, currentYear+1, compoundArray);
         }
      }

   	this.amount = Number(this.props.amount)
   	this.interest = (Number(this.props.interest) / 100)
   	this.years = Number(this.props.years)

      function createResult(arr) {
         for(var i = 0; i < arr.length; i++) {
            console.log('Year ' + i + ': ' + arr[i]);
         }
      }
      const months = 12;
   	this.total = this.amount * Math.pow((1 + this.interest / months), (months * this.years))

   	this.result = addThousandSeparators(this.total.toFixed(2));
   	this.result = replaceDotsWithCommas(this.result);

      var compoundArray = [];
      compound(this.amount, this.interest, this.years, 0, compoundArray);
      console.log(compoundArray);
      createResult(compoundArray);

      return (
         <div>
            <h2>Total: {this.result} €</h2>
            <h5><Years yearsArray={this.compoundArray} /></h5>
         </div>
      );
   }
}

export default Result;