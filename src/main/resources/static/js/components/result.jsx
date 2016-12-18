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
            compoundArray.push(balance.toFixed(2));
            return compound(balance, interest, term-1, currentYear+1, compoundArray);
         }
      }

   	this.amount = Number(this.props.amount)
   	this.interest = (Number(this.props.interest) / 100)
   	this.years = Number(this.props.years)
      var compoundArray = [];

      compound(this.amount, this.interest, this.years, 0, compoundArray);
      
      this.total = Math.pow((1 + this.interest), this.years) * this.amount;
      this.result = addThousandSeparators(this.total.toFixed(2));
      this.result = replaceDotsWithCommas(this.result);

      return (
         <div>
            <h2>Total: {this.result} €</h2>
            <h4><Years yearsArray={compoundArray} /></h4>
         </div>
      );
   }
}

export default Result;