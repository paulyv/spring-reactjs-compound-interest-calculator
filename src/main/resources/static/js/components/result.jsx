import React from 'react';
import { Link } from 'react-router';

import Years from './years.jsx';

class Result extends React.Component {

      constructor(props) {
      super();
   }

   render() {
      var compoundArray = [];

   	function addThousandSeparators(x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
		}

		function replaceDotsWithCommas(x) {
			return x.toString().replace(".", ",");
		}

      function compound(balance, interest, addition, term, compoundArray) {
         for(var i = 0; i < term; i++) {
            balance += addition;
            balance += balance * interest;
            compoundArray.push(balance.toFixed(2));
         }
         return balance;
      };

   	this.amount = Number(this.props.amount)
   	this.interest = (Number(this.props.interest) / 100)
      this.addition = (Number(this.props.addition) * 12)
   	this.years = Number(this.props.years)
      
      this.total = compound(this.amount, this.interest, this.addition, this.years, compoundArray);
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